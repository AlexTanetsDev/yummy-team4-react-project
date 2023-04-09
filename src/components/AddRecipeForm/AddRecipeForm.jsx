import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { OwnRecipeApi } from '../../apiService';
import { RecipeDescriptionFields } from '../../components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngridientsFields } from '../../components/RecipeIngridientsFields/RecipeIngridientsFields';
import { RecipePreparationFields } from '../../components/RecipePreparationFields/RecipePreparationFields';
import { FormContainer } from './AddRecipeForm.styled';
import { AddButton } from '../Button/Button';

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

const categories = [
  'Appetizer',
  'Main Course',
  'Dessert',
  'Drink',
  'Appetizer',
  'Main Course',
  'Dessert',
  'Drink',
];

const ingredients = [
  'salt',
  'pepper',
  'sugar',
  'flour',
  'butter',
  'oil',
  'garlic',
  'onion',
  'tomato',
  'cheese',
  'chicken',
  'beef',
  'pork',
  'fish',
];

const initialValues = {
  photo: '',
  title: '',
  description: '',
  category: '',
  time: '',
  ingredients: [{ name: '', quantity: '', unit: '' }],
  preparation: '',
};

export const AddRecipeForm = () => {
  //   const [preparation, setPreparation] = useState('');
  // const [submitting, setSubmitting] = useState(false);

  //   const handlePreparationChange = e => {
  //     const inputText = e.target.value.trim();
  //     let firstLine = true;

  //     if (firstLine) {
  //       setPreparation(inputText);
  //     }

  //     if (e.key === 'Enter' && inputText !== '') {
  //       firstLine = false;
  //       const inputValueArr = inputText.split(/\r?\n/);

  //       setPreparation(inputValueArr);
  //     }
  //   };

  const onSubmit = async (values, { setSubmitting, resetForm }, event) => {
    setSubmitting(true);
    const preparationArr = values.preparation.split(/\r?\n/);
    const formData = new FormData();

    formData.append('photo', values.photo);
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('category', values.category);
    formData.append('time', values.time);
    formData.append('ingredients', values.ingredients);
    preparationArr.map(item => {
      if (item !== '') {
        formData.append('instructions', item);
      }
    });

    await OwnRecipeApi.FetchAddRecipe(formData);
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <FormContainer>
          <Form >
            <RecipeDescriptionFields formik={formik} categories={categories} />
            <RecipeIngridientsFields
              formik={formik}
              ingredients={ingredients}
            />
            <RecipePreparationFields
              formik={formik}
              //   handleChange={handlePreparationChange}
            />
            <AddButton
              type="submit"
              onClick={formik.handleSubmit}
              disabled={formik.isSubmitting}
            >
              Add
            </AddButton>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};
