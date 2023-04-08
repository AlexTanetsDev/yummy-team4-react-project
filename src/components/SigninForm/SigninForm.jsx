import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { signin } from '../../Redux/auth/operations';
import { object, string } from 'yup';
 
const initialValues = {
		email: '',
		password: '',
};
	
const signinSchema = object({
	email: string().email().required(),
	password: string().min(6).required(),
});
 
export const SigninForm = () => {
	const dispatch = useDispatch();
	const handleSubmit = (values, { resetForm }) => {
		dispatch(signin(values));
		resetForm();
	}
     
  return (
		<Formik initialValues={initialValues} validationSchema={signinSchema} onSubmit={handleSubmit}>
			<Form>
				<label htmlFor="text">
					Email Address
				</label>
      <Field name="email" type="text"/>
			<ErrorMessage name="email" component="div"/>
				<label htmlFor="password">
					Password
				</label>
      <Field name="password" type="password"/>
			<ErrorMessage name="password" component="div"/>
      <button type="submit">Sign in</button>
    </Form>
		</Formik>
  );
};