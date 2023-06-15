import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  PreparationContainer,
  InputContainer,
  Title,
  InputRecipe,
  Error,
  ErrorText,
} from './RecipePreparationFields.styled';

export const RecipePreparationFields = ({ formik }) => {
  const { t } = useTranslation();

  return (
    <PreparationContainer>
      <Title>{t('Recipe Preparation')}</Title>
      <InputContainer>
        <label htmlFor="preparationDescription"></label>
        <InputRecipe
          id="preparationDescription"
          placeholder={t('Enter recipe')}
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
