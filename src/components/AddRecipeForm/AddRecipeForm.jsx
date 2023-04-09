import React from 'react';
import { Formik, Form, FieldArray, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import { RecipeDescriptionFields } from '../../components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngridientsFields } from '../../components/RecipeIngridientsFields/RecipeIngridientsFields';
import { RecipePreparationFields } from '../../components/RecipePreparationFields/RecipePreparationFields';
import { FormContainer } from './AddRecipeForm.styled';
import { AddButton } from '../Button/Button';

const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  preparationDescription: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  preparationTime: Yup.string().required('Required'),
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

const times = Array.from(Array(17), (_, i) => (i + 2) * 10);

const units = ['kg', 'g', 'pcs', 'l'];

const initialValues = {
  title: '',
  description: '',
  preparationDescription: '',
  category: '',
  preparationTime: '',
  photo: '',
  ingredients: [{ name: '', quantity: '', unit: '' }],
};

export const AddRecipeForm = () => {
  const [preparation, setPreparation] = useState('');

  const handlePreparationChange = e => {
    const inputText = e.target.value.trim();
    let firstLine = true;

    if (firstLine) {
      setPreparation(inputText);
    }

    if (e.key === 'Enter' && inputText !== '') {
      firstLine = false;
      const inputValueArr = inputText.split(/\r?\n/);
      const lastInputItem = inputValueArr[inputValueArr.length - 1];

      setPreparation(inputValueArr);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
    >
      {formik => (
        <FormContainer>
          <Form>
            <RecipeDescriptionFields formik={formik} categories={categories} />
            <RecipeIngridientsFields
              formik={formik}
              ingredients={ingredients}
            />
            <RecipePreparationFields
              formik={formik}
              handleChange={handlePreparationChange}
            />
            <AddButton onClick={() => console.log('I am black search button')}>
              Add
            </AddButton>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};
