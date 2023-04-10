import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Redux/auth/operations';
import { object, string } from 'yup';
import { StyledWrapper, ImageReg, BottomBgImage, ModalWrapper, Title, Button, Link, InputField, InputWrapper } from './SignInForm.styled';
import { ReactComponent as MailIcon } from '../../images/mail.svg';
import { ReactComponent as LoockIcon } from '../../images/lock.svg';
import "../../styles/styles.css";

 
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
			<Form>
      <InputWrapper>
						<Field name="email" as={InputField} type="text" placeholder="email" />
							<MailIcon className='icon icon-user' />
						</InputWrapper>
			<ErrorMessage name="email" component="div"/>

      <InputWrapper>
						<Field type="password" as={InputField} name="password" placeholder="password" />
							<LoockIcon className='icon icon-user' />
						</InputWrapper>
			<ErrorMessage name="password" component="div"/>
      <Button type="submit">Sign in</Button>
    </Form>
				</Formik>
				<Link to="/register">Registration</Link>
				</ModalWrapper>
			</StyledWrapper>
  );
};