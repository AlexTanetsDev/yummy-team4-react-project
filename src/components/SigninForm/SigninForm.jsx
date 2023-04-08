import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Redux/auth/operations';
import { object, string } from 'yup';
 
const initialValues = {
		email: '',
		password: '',
};
	
const signInSchema = object({
	email: string().email().required(),
	password: string().min(6).required(),
});
 
export const SignInForm = () => {
	const dispatch = useDispatch();
	const handleSubmit = (values, { resetForm }) => {
		dispatch(signIn(values));
		resetForm();
	}
     
  return (
		<Formik initialValues={initialValues} validationSchema={signInSchema} onSubmit={handleSubmit}>
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