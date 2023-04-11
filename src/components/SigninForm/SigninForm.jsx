import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Redux/auth/operations';
import { object, string } from 'yup';
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { StyledWrapper, ImageReg, BottomBgImage, ModalWrapper, Title, Button, Link, IconWrap, InputWrapper } from './SignInForm.styled';
import "../../styles/styles.css";
import { FormError } from 'components/FormError/FormError';

 
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
		<StyledWrapper>
			<ImageReg />
			<BottomBgImage />
			<ModalWrapper>
			<Title>
				Sign In
			</Title>
			<Formik initialValues={initialValues} validationSchema={signInSchema} onSubmit={handleSubmit}>
					{
						({ values, errors, touched, isSubmitting, handleChange }) => (
							<Form>
								<InputWrapper>
									<Field className={`sign-up__inp ${errors.email && touched.email ? "sign-up__inp_error" : ""}`} name="email" type="text" placeholder="email" values={values.email} />
									<IconWrap>
										<FiMail color={`${errors.email && touched.email ? "red" : "white"}`} size={24} />
									</IconWrap>
									<FormError name="email" component="div" />
								</InputWrapper>
								<InputWrapper>
									<Field className={`sign-up__inp ${errors.password && touched.password ? "sign-up__inp_error" : ""}`} type="password" name="password" placeholder="password" />
									<IconWrap>
										<FiLock color={`${errors.password && touched.password ? "red" : "white"}`} size={24} />
									</IconWrap>
									<FormError name="password" component="div" />
								</InputWrapper>
								<Button type="submit">Sign in</Button>
							</Form>
						)}
				</Formik>
				<Link to="/register">Registration</Link>
				</ModalWrapper>
			</StyledWrapper>
  );
};