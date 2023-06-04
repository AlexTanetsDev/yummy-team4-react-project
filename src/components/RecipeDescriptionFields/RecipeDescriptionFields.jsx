import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Field } from 'formik';

import { selectCategoryList } from 'redux/auth/selectors';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import photoIcon from '../../images/addRecipePhoto.svg';
import {
  DescriptionContainer,
  FieldContainer,
  InputFieldsContainer,
  InputTitle,
  LabelTitle,
  FieldSelectContainer,
  LabelCategory,
  FileInputContainer,
  RreviewImageContainer,
  Image,
  InputIconContainer,
  FileLabel,
  InputFile,
  Error,
  ErrorPhoto,
  ErrorText,
} from './RecipeDescriptionFields.styled';

const times = Array.from(Array(24), (_, i) => (i + 1) * 5).map(time => ({
  value: `${time}`,
  label: `${time} min`,
}));

const categoryInputStyles = {
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
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 1,
    letterSpacing: '-0.02em',
    color: '#000000',
    borderRadius: '6px',
    paddingLeft: 14,
    minWidth: '120px',

    '@media screen and (min-width: 768px)': {
      fontSize: 14,
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    width: '123px',
    overflow: 'auto',
    borderRadius: '6px',
    backgroundColor: '#ffffff',
    paddingLeft: 18,
    paddingTop: 8,
    paddingBottom: 8,
    boxShadow: '0 6.5px 7.8px rgba(0, 0, 0, 0.0314074)',

    '@media screen and (min-width: 768px)': {
      width: '132px',
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#8BAA36',
    paddingLeft: 8,
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

const FileInput = ({
  field,
  form: { setFieldValue, isSubmitting, touched, errors },
  ...props
}) => {
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    if (field.value === '') {
      setPreviewUrl('');
    }
  }, [field.value]);

  const handleFileChange = e => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      setFieldValue(field.name, file);
    }
  };

  return (
    <FileInputContainer>
      <RreviewImageContainer>
        {previewUrl && <Image src={previewUrl} alt="Preview repice photo" />}
        {touched.photo && errors.photo ? (
          <ErrorPhoto>
            <ErrorText>{errors.photo}</ErrorText>
          </ErrorPhoto>
        ) : null}
      </RreviewImageContainer>
      <InputIconContainer>
        <Image src={photoIcon} alt="Preview" />
        <FileLabel htmlFor="photo"></FileLabel>
        <InputFile
          id="photo"
          name="photo"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          onSubmit={() => {
            setPreviewUrl('');
          }}
          {...props}
        />
      </InputIconContainer>
    </FileInputContainer>
  );
};

export const RecipeDescriptionFields = ({ formik }) => {
  const [categories, setCategories] = useState([]);

  const categoriesList = useSelector(selectCategoryList);

  useEffect(() => {
    const categoriesObj = categoriesList.map(category => ({
      value: category,
      label: category,
    }));
    setCategories(categoriesObj);
  }, [categoriesList]);

  return (
    <DescriptionContainer>
      <Field
        id="photo"
        name="photo"
        type="file"
        component={FileInput}
        onSubmit={() => {
          formik.setFieldValue('photo', null);
        }}
      />

      <InputFieldsContainer>
        <FieldContainer>
          <LabelTitle htmlFor="title">Enter item title</LabelTitle>
          <InputTitle
            type="text"
            id="title"
            {...formik.getFieldProps('title')}
          />
          {formik.touched.title && formik.errors.title ? (
            <Error>{formik.errors.title}</Error>
          ) : null}
        </FieldContainer>

        <FieldContainer>
          <LabelTitle htmlFor="description">Enter about recipe</LabelTitle>
          <InputTitle
            id="description"
            type="text"
            {...formik.getFieldProps('description')}
          />
          {formik.touched.description && formik.errors.description ? (
            <Error>{formik.errors.description}</Error>
          ) : null}
        </FieldContainer>

        <FieldSelectContainer>
          <LabelCategory htmlFor="category">Category</LabelCategory>
          <Field
            as={CustomSelect}
            options={categories}
            customStyles={categoryInputStyles}
            label={''}
            isSearchable={false}
            name={'category'}
            id={`category`}
            onChange={option => {
              formik.setFieldValue(`category`, option.value);
            }}
          ></Field>
          {formik.touched.category && formik.errors.category ? (
            <Error>{formik.errors.category}</Error>
          ) : null}
        </FieldSelectContainer>

        <FieldSelectContainer>
          <LabelCategory htmlFor="time">Cooking Time</LabelCategory>
          <Field
            as={CustomSelect}
            options={times}
            customStyles={categoryInputStyles}
            label={''}
            isSearchable={false}
            name={'time'}
            id={`time`}
            onChange={option => {
              formik.setFieldValue(`time`, option.value);
            }}
          ></Field>
          {formik.touched.time && formik.errors.time ? (
            <Error>{formik.errors.time}</Error>
          ) : null}
        </FieldSelectContainer>
      </InputFieldsContainer>
    </DescriptionContainer>
  );
};
