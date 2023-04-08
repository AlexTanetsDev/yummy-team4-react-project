import React from 'react';
import { Formik, Form, FieldArray, Field } from 'formik';
import { useState } from 'react';

import {
  IngridientsContainer,
  Title,
  TopContainer,
  MultButtonContainer,
  MultButton,
  MultButtonIcon,
  IngridientContainer,
  IngridientFields,
  InputIngridientName,
  QuantityContainer,
  InputQuantity,
  InputMeasure,
  OptionMeasure,
  ContainerNumberQuantity,
  DeleteBtnContainer,
  DeleteButton,
} from './RecipeIngridientsFields.styled';

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

export const RecipeIngridientsFields = ({ formik }) => {
  return (
    <IngridientsContainer>
      <FieldArray
        name="ingredients"
        render={arrayHelpers => (
          <div>
            <TopContainer>
              <Title>Ingredients</Title>
              <MultButtonContainer>
                <div className="col">
                  <MultButton
                    type="button"
                    onClick={() => {
                      if (formik.values.ingredients.length > 1) {
                        arrayHelpers.remove(
                          formik.values.ingredients.length - 1
                        );
                      }
                    }}
                  >
                    <MultButtonIcon>-</MultButtonIcon>
                  </MultButton>
                </div>
                <div>{formik.values.ingredients.length}</div>
                <div className="d-flex justify-content-end">
                  <MultButton
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({ name: '', quantity: '', unit: 'kg' })
                    }
                  >
                    <MultButtonIcon>+</MultButtonIcon>
                  </MultButton>
                </div>
              </MultButtonContainer>
            </TopContainer>
            {formik.values.ingredients.map((ingredient, index) => (
              <div key={index}>
                <IngridientContainer>
                  <IngridientFields>
                    <label htmlFor={`ingredients.${index}.name`}></label>
                    <Field
                      as={InputIngridientName}
                      id={`ingredients.${index}.name`}
                      name={`ingredients.${index}.name`}
                      placeholder="Iingredient"
                      list="ingredients"
                    ></Field>
                    <datalist id="ingredients">
                      {/* <option value="">Select a ingredients</option> */}
                      {ingredients.map((ingredient, index) => (
                        <option key={index} value={ingredient}>
                          {ingredient}
                        </option>
                      ))}
                    </datalist>
                    {/* <select
                      id={`ingredients.${index}.name`}
                      {...formik.getFieldProps('ingredients')}
                    > </select> */}
                    <QuantityContainer>
                      <ContainerNumberQuantity>
                        <label
                          htmlFor={`ingredients.${index}.quantity`}
                        ></label>
                        <Field
                          as={InputQuantity}
                          id={`ingredients.${index}.quantity`}
                          name={`ingredients.${index}.quantity`}
                          // placeholder="Enter quantity"
                          // type="number"
                          maxLength="3"
                          min="0"
                        />
                      </ContainerNumberQuantity>
                      <div>
                        <label htmlFor={`ingredients.${index}.unit`}></label>
                        <Field
                          as={InputMeasure}
                          id={`ingredients.${index}.unit`}
                          name={`ingredients.${index}.unit`}
                        >
                          <OptionMeasure value="kg">kg</OptionMeasure>
                          <OptionMeasure value="g">g</OptionMeasure>
                          <OptionMeasure value="pieces">pieces</OptionMeasure>
                          <OptionMeasure value="l">l</OptionMeasure>
                          <OptionMeasure value="ml">ml</OptionMeasure>
                          <OptionMeasure value="tsp">tsp</OptionMeasure>
                          <OptionMeasure value="tbsp">tbsp</OptionMeasure>
                        </Field>
                      </div>
                    </QuantityContainer>
                  </IngridientFields>
                  <DeleteBtnContainer>
                    <DeleteButton
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      Х
                    </DeleteButton>
                  </DeleteBtnContainer>
                </IngridientContainer>
              </div>
            ))}
          </div>
        )}
      />
    </IngridientsContainer>
  );
};
