import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { MiniLoader } from 'components/Loader/Loader';
import { OwnRecipeApi } from '../../apiService';
import { RecipeDescriptionFields } from '../../components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngridientsFields } from '../../components/RecipeIngridientsFields/RecipeIngridientsFields';
import { RecipePreparationFields } from '../../components/RecipePreparationFields/RecipePreparationFields';
import { AddButton } from '../Button/Button';
import { AlertMessage } from '../../components/AlertMessage/AlertMessage';
import { FormContainer } from './AddRecipeForm.styled';

const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  preparation: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  time: Yup.string().required('Required'),
  photo: Yup.string().required('Required'),
  ingredients: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Required'),
      quantity: Yup.string().required('Required'),
      unit: Yup.string().required('Required'),
    })
  ),
});

const initialValues = {
  photo: '',
  title: '',
  description: '',
  category: '',
  time: '',
  ingredients: [{ name: '', quantity: '', unit: 'tbs' }],
  preparation: '',
};

export const AddRecipeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting, resetForm }, event) => {
    try {
      setIsLoading(true);
      setSubmitting(true);

      const formData = new FormData();
      const preparationArr = values.preparation.split(/\r?\n/);

      let index = 0;
      preparationArr.forEach((item, i) => {
        if (item !== '') {
          formData.append(`instructions[${index}]`, item.trim());
          index += 1;
        }
      });

      values.ingredients.forEach((ingredient, i) => {
        const measure = `${ingredient.quantity} ${ingredient.unit}`;

        formData.append(`ingredients[${i}][id]`, ingredient.name);
        formData.append(`ingredients[${i}][measure]`, measure);
      });

      formData.append('recipeImage', values.photo);
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('category', values.category);
      formData.append('time', values.time);

      await OwnRecipeApi.AddRecipe(formData);

      resetForm();
      navigate('/my');
      setSubmitting(false);
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && (
        <AlertMessage>
          Oops, something went wrong. Please try again later...
        </AlertMessage>
      )}
      {isLoading ? (
        <MiniLoader />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <FormContainer>
              <Form>
                <RecipeDescriptionFields formik={formik} />
                <RecipeIngridientsFields formik={formik} />
                <RecipePreparationFields formik={formik} />
                <AddButton
                  type="submit"
                  onClick={formik.handleSubmit}
                  disabled={isLoading}
                >
                  Add
                </AddButton>
              </Form>
            </FormContainer>
          )}
        </Formik>
      )}
    </>
  );
};
