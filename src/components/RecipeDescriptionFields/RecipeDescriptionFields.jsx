import React, { useState } from 'react';
import { Formik, Form, FieldArray, Field } from 'formik';

import photoIcon from '../../images/addRecipePhoto.svg';
import {
  DescriptionContainer,
  FieldContainer,
  PhotoContainer,
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
} from './RecipeDescriptionFields.styled';

const FileInput = ({ field, form: { setFieldValue }, ...props }) => {
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
    }
  };

  return (
    <FileInputContainer>
      <RreviewImageContainer>
        {previewUrl && <Image src={previewUrl} alt="Preview repice photo" />}
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
  // 	const [previewUrl, setPreviewUrl] = useState('');

  //   const onSubmit = (values, { setSubmitting }) => {
  //     const formData = new FormData();
  //     formData.append('name', values.name);
  //     formData.append('email', values.email);
  //     formData.append('image', values.image);

  // axios.post('/api/save-form-data', formData).then(() => {
  //   setSubmitting(false);
  // });
  //   };

  return (
    <DescriptionContainer>
      <Field
        id="photo"
        name="photo"
        type="file"
        component={FileInput}
        //   onChange={event => {
        // handleFileChange();
        //   console.log('onChange Field', event.currentTarget.files[0]);
        //   formik.setFieldValue('photo', event.currentTarget.files[0]);
        //   }}
        className="form-control"
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
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
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
            <div>{formik.errors.description}</div>
          ) : null}
        </FieldContainer>

        <FieldSelectContainer>
          <LabelCategory htmlFor="category">Category</LabelCategory>
          <InputCategory
            id="category"
            onfocus={({ size }) => console.log(size)}
            {...formik.getFieldProps('category')}
          >
            {/* <option value="">Select a category</option> */}
            {categories.map((category, index) => (
              <OptionCategory key={index} value={category}>
                {category}
              </OptionCategory>
            ))}
          </InputCategory>
          {formik.touched.category && formik.errors.category ? (
            <div>{formik.errors.category}</div>
          ) : null}
        </FieldSelectContainer>

        <FieldSelectContainer>
          <LabelCategory htmlFor="cookingTime">Cooking Time</LabelCategory>
          <InputCategory id="cookingTime" {...formik.getFieldProps('time')}>
            {/* <option value="">Select a time</option> */}
            {times.map((time, index) => (
              <OptionCategory key={index} value={time}>
                {time} min
              </OptionCategory>
            ))}
          </InputCategory>
          {formik.touched.preparationTime && formik.errors.preparationTime ? (
            <div>{formik.errors.preparationTime}</div>
          ) : null}
        </FieldSelectContainer>
      </InputFieldsContainer>
    </DescriptionContainer>
  );
};
