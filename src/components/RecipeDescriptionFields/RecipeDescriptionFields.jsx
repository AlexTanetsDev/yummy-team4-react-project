import React, { useState } from 'react';
import { Field } from 'formik';

import photoIcon from '../../images/addRecipePhoto.svg';
import {
  DescriptionContainer,
  FieldContainer,
  InputFieldsContainer,
  InputTitle,
  LabelTitle,
//   InputDescription,
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

const FileInput = ({
  field,
  form: { setFieldValue, isSubmitting, touched, errors, submitForm },
  ...props
}) => {
  const [previewUrl, setPreviewUrl] = useState('');

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
          {...props}
        />
      </InputIconContainer>
    </FileInputContainer>
  );
};

export const RecipeDescriptionFields = ({ formik, categories }) => {
  const times = Array.from(Array(24), (_, i) => (i + 1) * 5);

  //   const handleFileChange = e => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       formik.setPreviewUrl(reader.result);
  //     };
  //     formik.setFieldValue(formik.field.name, file);
  //   }
  // };

  return (
    <DescriptionContainer>
      <Field
        id="photo"
        name="photo"
        type="file"
        component={FileInput}
        //   onChange={handleFileChange}
        // formik={formik}
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
          {formik.touched.title && formik.errors.title ? (
            // <div>{formik.errors.name}</div>
            <Error />
          ) : null}
        </FieldContainer>

        <FieldContainer>
          <LabelTitle htmlFor="description">Enter about recipe</LabelTitle>
          <InputTitle
            id="description"
            type="text"
            minLength="5"
            maxLength="80"
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
            {categories.map((category, index) => (
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
