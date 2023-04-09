import React from 'react';
import { FieldArray, Field } from 'formik';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';

import {
  IngridientsContainer,
  Title,
  TopContainer,
  MultButtonContainer,
  MultButton,
  MultButtonIcon,
  IngridientContainer,
  IngridientFields,
  IngridientNameContainer,
  InputIngridientName,
  QuantityContainer,
  InputQuantity,
  InputMeasure,
  Option,
  ContainerNumberQuantity,
  DeleteBtnContainer,
  DeleteButton,
  ContainerMeasure,
  Label,
  Error,
} from './RecipeIngridientsFields.styled';

export const RecipeIngridientsFields = ({ formik, ingredients }) => {
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
                    <MultButtonIcon>
                      <FiMinus size={14} color="rgba(51, 51, 51, 0.3)" />
                    </MultButtonIcon>
                  </MultButton>
                </div>
                <div>{formik.values.ingredients.length}</div>
                <div>
                  <MultButton
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({ name: '', quantity: '', unit: 'kg' })
                    }
                  >
                    <MultButtonIcon>
                      <FiPlus size={14} color="rgba(139, 170, 54, 1)" />
                    </MultButtonIcon>
                  </MultButton>
                </div>
              </MultButtonContainer>
            </TopContainer>
            {formik.values.ingredients.map((ingredient, index) => (
              <div key={index}>
                <IngridientContainer>
                  <IngridientFields>
                    <IngridientNameContainer>
                      <label htmlFor={`ingredients.${index}.name`}></label>
                      <Field
                        as={InputIngridientName}
                        name={`ingredients.${index}.name`}
                        id={`ingredients.${index}.name`}
                      >
                        <Option value=""></Option>
                        {ingredients.map((ingredient, index) => (
                          <Option key={index} value={ingredient}>
                            {ingredient}
                          </Option>
                        ))}
                      </Field>
                      {/* {formik.touched.ingredients &&
                      formik.errors.ingredients ? (
                        <Error />
                      ) : null} */}
                    </IngridientNameContainer>
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
                          type="number"
                          maxlength="3"
                          min="0"
                          readonly
                        />
                      </ContainerNumberQuantity>
                      <ContainerMeasure>
                        <Label htmlFor={`ingredients.${index}.unit`}></Label>
                        <Field
                          as={InputMeasure}
                          id={`ingredients.${index}.unit`}
                          name={`ingredients.${index}.unit`}
                        >
                          <Option value="tbs">tbs</Option>
                          <Option value="tsp">tsp</Option>
                          <Option value="kg">kg</Option>
                          <Option value="g">g</Option>
                          {/* <OptionMeasure value="l">l</OptionMeasure>
                          <OptionMeasure value="ml">ml</OptionMeasure> */}
                        </Field>
                      </ContainerMeasure>
                    </QuantityContainer>
                  </IngridientFields>
                  <DeleteBtnContainer>
                    <DeleteButton
                      type="button"
                      onClick={() => {
                        if (formik.values.ingredients.length > 1) {
                          arrayHelpers.remove(index);
                        }
                      }}
                    >
                      <FiX size={18} color="rgba(51, 51, 51, 1)" />
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
