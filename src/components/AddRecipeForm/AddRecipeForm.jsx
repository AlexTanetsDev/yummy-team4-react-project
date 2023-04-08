import React from 'react';
import { Formik, Form, FieldArray, Field } from 'formik';
import { useState } from 'react';
// import * as Yup from "yup";

import { RecipeDescriptionFields } from '../../components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngridientsFields } from '../../components/RecipeIngridientsFields/RecipeIngridientsFields';
import { RecipePreparationFields } from '../../components/RecipePreparationFields/RecipePreparationFields';
import { FormContainer } from './AddRecipeForm.styled';

const initialValues = {
  title: '',
  description: '',
  preparationDescription: '',
  category: '',
  preparationTime: '',
  photo: '',
  ingredients: [{ name: '', quantity: '', unit: '' }],
};

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

// const validationSchema = Yup.object({
//   name: Yup.string().required("Required"),
//   description: Yup.string().required("Required"),
//   preparationDescription: Yup.string().required("Required"),
//   category: Yup.string().required("Required"),
//   preparationTime: Yup.string().required("Required"),
//   photo: Yup.string().required("Required"),
//   ingredients: Yup.array().of(
//     Yup.object().shape({
//       name: Yup.string().required("Required"),
//       quantity: Yup.string().required("Required"),
//       unit: Yup.string().required("Required"),
//     })
//   ),
// });

const categories = ['Appetizer', 'Main Course', 'Dessert', 'Drink'];

const times = Array.from(Array(17), (_, i) => (i + 2) * 10);

const units = ['kg', 'g', 'pcs', 'l'];

export const AddRecipeForm = () => {
  const [preparation, setPreparation] = useState([]);

  const handlePreparationChange = e => {
    const inputText = e.target.value.trim();

    if (e.key === 'Enter' && inputText !== '') {
      setPreparation(prevState => [...prevState, inputText]);
      e.target.value = '';
      console.log(preparation);
    }
  };

  return (
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={values => console.log(values)}
      >
        {formik => (
          <Form>
            <RecipeDescriptionFields formik={formik} />
            <RecipeIngridientsFields formik={formik} />
            <RecipePreparationFields formik={formik} />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </Form>
        )}
      </Formik>
  );
};
