import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Redux/auth/operations';
import { object, string } from 'yup';
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { StyledWrapper, ImageReg, InputField,  BottomBgImage, StateInputIcon, ModalWrapper, Title, Button, Link, IconWrap, InputWrapper } from './SignInForm.styled';
import "../../styles/styles.css";
import { FormError } from 'components/FormError/FormError';
import { errorIcon, warningIcon, succesIcon } from 'images';

 
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
									<Field as={InputField} className={`sign-up__inp ${errors.email && touched.email ? "sign-up__inp_error" : ""}`} name="email" type="text" placeholder="email" values={values.email} />
									<IconWrap>
										{window.innerWidth < 768 && <FiMail color={`${errors.password && touched.password ? "red" : "white"}`} size={20} />}
										{window.innerWidth >= 768 && <FiMail color={`${errors.password && touched.password ? "red":"white"}`} size={24} />}										
									</IconWrap>
									{(errors.email && touched.email) && <StateInputIcon src={errorIcon }/>}
									<FormError name="email" component="div" />
								</InputWrapper>
								<InputWrapper>
									<Field as={InputField} className={`sign-up__inp ${errors.password && touched.password ? "sign-up__inp_error" : ""}`} type="password" name="password" placeholder="password" />
									<IconWrap>
										{window.innerWidth < 768 && <FiLock className='input-icon__mobile' color={`${errors.password && touched.password ? "red" : "white"}`} size={20} />}
										{window.innerWidth >= 768 && <FiLock className='input-con' color={`${errors.password && touched.password ? "red":"white"}`} size={24} />}										
									</IconWrap>
									{(0 < values.password.length && values.password.length < 8) && !touched.password && (<StateInputIcon src={warningIcon} />)}
									{(0 < values.password.length && values.password.length < 8) && !touched.password && <p className='sing-up__inp_war-mess'>Your password is little secure</p>}
									{(8 <= values.password.length ) && !touched.password && (<StateInputIcon src={succesIcon} />)}
									{(8 <= values.password.length) && !touched.password && <p className='sing-up__inp_suc-mess'>Password is secure</p>}
									{(errors.password && touched.password) && <StateInputIcon src={errorIcon }/>}
									{(errors.password && touched.password) && <StateInputIcon src={errorIcon }/>}
									{(errors.name && touched.name) && <p className="sing-up__inp_error-mess">{errors.password}</p>}
									{/* <FormError name="password" component="div" /> */}
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