import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { OwnRecipeApi } from '../../apiService';
import { updateMotivation } from '../../redux/auth/authSlise';

import { MiniLoader } from 'components/Loader/Loader';
import { RecipeDescriptionFields } from '../../components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngridientsFields } from '../../components/RecipeIngridientsFields/RecipeIngridientsFields';
import { RecipePreparationFields } from '../../components/RecipePreparationFields/RecipePreparationFields';
import { AddButton } from '../Button/Button';
import { AlertMessage } from '../../components/AlertMessage/AlertMessage';
import { FormContainer } from './AddRecipeForm.styled';

const validationSchema = Yup.object({
  title: Yup.string().min(3).max(40).required('Required'),
  description: Yup.string().min(3).max(100).required('Required'),
  preparation: Yup.string().min(5).max(500).required('Required'),
  category: Yup.string().required('Required'),
  time: Yup.string().required('Required'),
  photo: Yup.string().required('Required'),
  ingredients: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Required'),
      quantity: Yup.number().positive('Must be positive').required('Required'),
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
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
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

      const { firstAddedRecipe, tenthAddedRecipe } =
        await OwnRecipeApi.AddRecipe(formData);

      if (firstAddedRecipe) dispatch(updateMotivation({ firstAddedRecipe }));
      if (tenthAddedRecipe) dispatch(updateMotivation({ tenthAddedRecipe }));

      resetForm();
      navigate('/my');
      setSubmitting(false);
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return <AlertMessage>{t('Oops, something went wrong')}</AlertMessage>;
  }

  return (
    <>
      {isLoading ? (
        <MiniLoader />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount={true}
        >
          {formik => (
            <FormContainer>
              <Form noValidate>
                <RecipeDescriptionFields formik={formik} />
                <RecipeIngridientsFields formik={formik} />
                <RecipePreparationFields formik={formik} />
                <AddButton
                  type="submit"
                  onClick={() => {
                    if (!formik.isValid) {
                      toast.error(t('Please fill in all fields correctly'));
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('Add')}
                </AddButton>
              </Form>
            </FormContainer>
          )}
        </Formik>
      )}
    </>
  );
};
