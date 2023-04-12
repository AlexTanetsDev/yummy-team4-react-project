import React, { useState, useEffect } from 'react';
import { Field } from 'formik';

import { CategoryApi } from '../../apiService';
import { AlertMessage } from '../../components/AlertMessage/AlertMessage';
import photoIcon from '../../images/addRecipePhoto.svg';
import {
  DescriptionContainer,
  FieldContainer,
  InputFieldsContainer,
  InputTitle,
  LabelTitle,
  InputDescription,
  InputCategory,
  FieldSelectContainer,
  OptionCategory,
  LabelCategory,
  FileInputContainer,
  RreviewImageContainer,
  Image,
  InputIconContainer,
  FileLabel,
  InputFile,
  Error,
  ErrorPhoto,
} from './RecipeDescriptionFields.styled';

const times = Array.from(Array(24), (_, i) => (i + 1) * 5);

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
    } else {
      setPreviewUrl('');
    }
  };

  return (
    <FileInputContainer>
      <RreviewImageContainer>
        {previewUrl && <Image src={previewUrl} alt="Preview repice photo" />}
        {touched.photo && errors.photo ? <ErrorPhoto /> : null}
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
            console.log('onSubmit InputFile');
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await CategoryApi.fetchCategoryList();
        setCategories(data);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <DescriptionContainer>
      <Field
        id="photo"
        name="photo"
        type="file"
        component={FileInput}
        onSubmit={() => {
          console.log('onSubmit RecipeDescriptionFields');
          formik.setFieldValue('photo', null);
        }}
      />

      <InputFieldsContainer>
        <FieldContainer>
          <LabelTitle htmlFor="title">Enter item title</LabelTitle>
          <InputTitle
            type="text"
            id="title"
            minLength="3"
            maxLength="40"
            required
            {...formik.getFieldProps('title')}
          />
          {formik.touched.title && formik.errors.title ? <Error /> : null}
        </FieldContainer>

        <FieldContainer>
          <LabelTitle htmlFor="description">Enter about recipe</LabelTitle>
          <InputTitle
            id="description"
            type="text"
            minLength="3"
            maxLength="100"
            required
            {...formik.getFieldProps('description')}
          />
          {formik.touched.description && formik.errors.description ? (
            <Error />
          ) : null}
        </FieldContainer>

        <FieldSelectContainer>
          <LabelCategory htmlFor="category">Category</LabelCategory>
          <InputCategory
            id="category"
            onfocus={({ size }) => console.log(size)}
            {...formik.getFieldProps('category')}
          >
            <option value=""></option>
            {!error && categories.map((category, index) => (
              <OptionCategory key={index} value={category}>
                {category}
              </OptionCategory>
            ))}
          </InputCategory>
          {formik.touched.category && formik.errors.category ? <Error /> : null}
        </FieldSelectContainer>

        <FieldSelectContainer>
          <LabelCategory htmlFor="time">Cooking Time</LabelCategory>
          <InputCategory id="time" {...formik.getFieldProps('time')}>
            <option value=""></option>
            {times.map((time, index) => (
              <OptionCategory key={index} value={time}>
                {time} min
              </OptionCategory>
            ))}
          </InputCategory>
          {formik.touched.time && formik.errors.time ? <Error /> : null}
        </FieldSelectContainer>
      </InputFieldsContainer>
    </DescriptionContainer>
  );
};
