import React, { useState } from 'react';
import { Formik, Form, FieldArray, Field } from 'formik';

import {
  PreparationContainer,
  Title,
  InputRecipe,
} from './RecipePreparationFields.styled';

export const RecipePreparationFields = ({ formik }) => {
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
    <PreparationContainer>
      <Title>Recipe Preparation</Title>
      <label htmlFor="preparationDescription"></label>
      <InputRecipe
        id="preparationDescription"
        placeholder="Enter recipe"
        maxLength="300"
        {...formik.getFieldProps('preparationDescription')}
        onKeyDown={handlePreparationChange}
      />
      {formik.touched.preparationDescription &&
      formik.errors.preparationDescription ? (
        <div>{formik.errors.preparationDescription}</div>
      ) : null}
    </PreparationContainer>
  );
};
