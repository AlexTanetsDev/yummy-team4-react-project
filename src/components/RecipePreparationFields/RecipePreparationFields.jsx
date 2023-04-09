import React, { useState } from 'react';
import { Formik, Form, FieldArray, Field } from 'formik';

import {
  PreparationContainer,
  Title,
  InputRecipe,
} from './RecipePreparationFields.styled';

export const RecipePreparationFields = ({ formik, handleChange }) => {
  const [allPreparation, setAllPreparation] = useState([]);
  const [preparation, setPreparation] = useState('');

  const handlePreparationKeyDown = e => {
    //     const inputText = e.target.value.trim();
    //     if (e.key === 'Enter' && inputText !== '') {
    //       setPreparation(prevState => [...prevState, inputText]);
    //       e.target.value = '';
    //     }
  };

  const handlePreparationChange = e => {
    const inputText = e.target.value.trim();

    if (e.key === 'Enter' && inputText !== '') {
      //   setAllPreparation(prevState => [...prevState, preparation]);
      // e.target.value = '';
      // setPreparation('');
    }

    // setPreparation(inputText);
  };

  // console.log('allPreparation', allPreparation);
  // console.log('preparation', preparation);

  return (
    <PreparationContainer>
      <Title>Recipe Preparation</Title>
      <label htmlFor="preparationDescription"></label>
      <InputRecipe
        id="preparationDescription"
        placeholder="Enter recipe"
        maxLength="300"
        {...formik.getFieldProps('preparationDescription')}
        onKeyDown={handleChange}
      />
      {formik.touched.preparationDescription &&
      formik.errors.preparationDescription ? (
        <div>{formik.errors.preparationDescription}</div>
      ) : null}
    </PreparationContainer>
  );
};
