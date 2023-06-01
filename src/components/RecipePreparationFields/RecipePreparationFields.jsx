import React from 'react';

import {
  PreparationContainer,
  InputContainer,
  Title,
  InputRecipe,
  Error,
  ErrorText,
} from './RecipePreparationFields.styled';

export const RecipePreparationFields = ({ formik }) => {
  return (
    <PreparationContainer>
      <Title>Recipe Preparation</Title>
      <InputContainer>
        <label htmlFor="preparationDescription"></label>
        <InputRecipe
          id="preparationDescription"
          placeholder="Enter recipe"
          maxLength="300"
          {...formik.getFieldProps('preparation')}
        />
        {formik.touched.preparation && formik.errors.preparation ? (
          <Error>
            <ErrorText>{formik.errors.preparation}</ErrorText>
          </Error>
        ) : null}
      </InputContainer>
    </PreparationContainer>
  );
};
