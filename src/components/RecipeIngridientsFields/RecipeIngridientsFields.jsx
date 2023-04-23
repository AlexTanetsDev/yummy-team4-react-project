import React, { useEffect, useState } from 'react';
import { FieldArray, Field } from 'formik';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';

import { CustomSelect } from '../CustomSelect/CustomSelect';
import { IngredientsApi } from '../../apiService';
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
  QuantityContainer,
  InputQuantity,
  ContainerNumberQuantity,
  DeleteBtnContainer,
  DeleteButton,
  ContainerMeasure,
  Label,
  Error,
} from './RecipeIngridientsFields.styled';

const Units = [
  {
    label: 'tbs',
    value: 'tbs',
  },
  {
    label: 'tsp',
    value: 'tsp',
  },
  {
    label: 'kg',
    value: 'kg',
  },
  {
    label: 'g',
    value: 'g',
  },
];

const IngredientInputStyles = {
  option: (provided, state) => ({
    ...provided,
    fontFamily: 'Poppins',
    paddingBottom: 6,
    fontSize: 12,
    lineHeight: 1.5,
    letterSpacing: '-0.02em',
    opacity: 0.5,
    color: state.isSelected ? '#8baa36' : '#000000',
    backgroundColor: state.isSelected ? 'transparent' : 'white',

    '@media screen and (min-width: 768px)': {
      fontSize: 14,
    },
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 1.235,
    letterSpacing: '-0.02em',
    color: '#000000',
    borderRadius: '6px',
    backgroundColor: '#D9D9D9',
    padding: 16,
    paddingRight: 12,

    '@media screen and (min-width: 768px)': {
      fontSize: 18,
      lineHeight: 1.5,
      paddingLeft: 18,
      paddingRight: 18,
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    width: '100%',
    overflow: 'auto',
    borderRadius: '6px',
    backgroundColor: '#ffffff',
    paddingLeft: 18,
    paddingTop: 8,
    paddingBottom: 8,
    boxShadow: '0 6.5px 7.8px rgba(0, 0, 0, 0.0314074)',
  }),
  placeholder: provided => ({
    ...provided,
    opacity: 0.5,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#8BAA36',
  }),
  menuList: provided => ({
    ...provided,

    maxHeight: '138px',
    overflowY: 'auto',

    '@media screen and (min-width: 768px)': {
      maxHeight: '154px',
    },

    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      // background: '#E7E5E5',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#E7E5E5',
      borderRadius: 12,
    },
  }),
};

const UnitInputStyles = {
  option: (provided, state) => ({
    ...provided,
    paddingBottom: 6,

    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 1.5,
    letterSpacing: '-0.02em',
    color: state.isSelected ? '#8baa36' : '#000000',
    backgroundColor: state.isSelected ? 'transparent' : 'white',
    opacity: 0.5,

    '@media screen and (min-width: 768px)': {
      fontSize: 14,
      lineHeight: 1.5,
    },
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',

    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 10,
    paddingLeft: 46,

    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 1.235,
    letterSpacing: '-0.02em',
    color: '#000000',
    borderRadius: '6px',
    backgroundColor: '#D9D9D9',

    '@media screen and (min-width: 768px)': {
      fontSize: 18,
      lineHeight: 1.5,
      paddingLeft: 62,
      paddingRight: 14,
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    width: '100%',

    paddingLeft: 48,
    paddingTop: 8,
    paddingBottom: 8,

    overflow: 'auto',
    borderRadius: '6px',
    backgroundColor: '#ffffff',
    boxShadow: '0 6.5px 7.8px rgba(0, 0, 0, 0.0314074)',

    '@media screen and (min-width: 768px)': {
      paddingLeft: 58,
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#8BAA36',
  }),
  menuList: provided => ({
    ...provided,
    maxHeight: '138px',
    overflowY: 'auto',

    '@media screen and (min-width: 768px)': {
      maxHeight: '154px',
    },

    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      // background: '#E7E5E5',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#E7E5E5',
      borderRadius: 12,
    },
  }),
};

export const RecipeIngridientsFields = ({ formik }) => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await IngredientsApi.fetchIngredientsList();
        const ingredientsObj = data.map(ingredient => ({
          value: ingredient._id,
          label: ingredient.ttl,
        }));
        setIngredients(ingredientsObj);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

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
                      arrayHelpers.push({ name: '', quantity: '', unit: 'tbs' })
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
                      <Label htmlFor={`ingredients.${index}.name`}></Label>
                      <Field
                        as={CustomSelect}
                        options={ingredients}
                        customStyles={IngredientInputStyles}
                        label={'Ingredient...'}
                        name={`ingredients.${index}.name`}
                        id={`ingredients.${index}.name`}
                        onChange={option => {
                          formik.setFieldValue(
                            `ingredients.${index}.name`,
                            option.value
                          );
                        }}
                        required
                      ></Field>
                      {formik.touched.ingredients &&
                      formik.touched.ingredients[index] &&
                      formik.touched.ingredients[index].name &&
                      formik.errors.ingredients &&
                      formik.errors.ingredients[index] &&
                      formik.errors.ingredients[index].name ? (
                        <Error />
                      ) : null}
                    </IngridientNameContainer>

                    <QuantityContainer>
                      <ContainerMeasure>
                        <Label htmlFor={`ingredients.${index}.unit`}></Label>
                        <Field
                          as={CustomSelect}
                          options={Units}
                          defaultValue={Units[0].value}
                          label={Units[0].label}
                          customStyles={UnitInputStyles}
                          isSearchable={false}
                          name={`ingredients.${index}.unit`}
                          id={`ingredients.${index}.unit`}
                          onChange={option => {
                            formik.setFieldValue(
                              `ingredients.${index}.unit`,
                              option.value
                            );
                          }}
                          required
                        ></Field>
                      </ContainerMeasure>
                      <ContainerNumberQuantity>
                        <label
                          htmlFor={`ingredients.${index}.quantity`}
                        ></label>
                        <Field
                          as={InputQuantity}
                          id={`ingredients.${index}.quantity`}
                          name={`ingredients.${index}.quantity`}
                          type="number"
                          placeholder="0"
                          maxlength="3"
                          min="0"
                          readonly
                        />
                      </ContainerNumberQuantity>
                      {formik.touched.ingredients &&
                      formik.touched.ingredients[index] &&
                      formik.touched.ingredients[index].quantity &&
                      formik.errors.ingredients &&
                      formik.errors.ingredients[index] &&
                      formik.errors.ingredients[index].quantity ? (
                        <Error />
                      ) : null}
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
