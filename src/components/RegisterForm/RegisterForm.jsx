import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { AiOutlineUser } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { StyledWrapper, ModalWrapper, Button, Title, ImageReg, BottomBgImage, Link, InputWrapper, IconWrap, StateInputIcon } from './RegisterForm.styled';
import "../../styles/styles.css";
import { FormError } from 'components/FormError/FormError';
import { errorIcon } from 'images';
// import { succesIcon } from 'images';
// import { warningIcon } from 'images';



const initialValues = {
	name: '',
	email: '',
	password: '',
};

const registerSchema = object({
	name: string().required(),
	email: string().email().required(),
	password: string().min(6).required(),
});


export const RegisterForm = () => {
	const dispatch = useDispatch();
	const handleSubmit = (values, { resetForm }) => {
		dispatch(register(values));
		resetForm();
	};

	return (
		<StyledWrapper>
			<ImageReg/>
			<BottomBgImage/>
			<ModalWrapper>
				<Title>
				Registration
				</Title>	
			<Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
					{
						({ values, errors, touched, isSubmitting, handleChange }) => (
							<Form autoComplete='off'>
								<InputWrapper>
									<Field className={`sign-up__inp ${errors.name && touched.name ? "sign-up__inp_error" : ""}`} type="text" name="name" placeholder="name" values={values.name} />
									<IconWrap>
										<AiOutlineUser color={`${errors.name && touched.name ? "red":"white"}`} size={24} />
									</IconWrap>
									{(errors.name && touched.name) && <StateInputIcon src={errorIcon }/>}
									<FormError name="name" component="div" />
								</InputWrapper>
								<InputWrapper>
									<Field className={`sign-up__inp ${errors.email && touched.email ? "sign-up__inp_error" : ""}`} name="email" type="text" placeholder="email" values={values.email}/>
									<IconWrap>
										<FiMail color={`${errors.email && touched.email ? "red":"white"}`} size={24} />
									</IconWrap>
									{(errors.email && touched.email) && <StateInputIcon src={errorIcon }/>}
									<FormError name="email" component="div" />
								</InputWrapper>
								<InputWrapper>
									<Field className={`sign-up__inp ${errors.password && touched.password ? "sign-up__inp_error" : ""}`} type="password"  name="password" placeholder="password" />
									<IconWrap>
										<FiLock color={`${errors.password && touched.password ? "red":"white"}`} size={24} />
									</IconWrap>
									{(errors.password && touched.password) && <StateInputIcon src={errorIcon }/>}
									<FormError name="password" component="div" />
								</InputWrapper>
								

								<Button type="submit">Sign up</Button>
							</Form>
						)}
				</Formik>
				<Link to="/signin">Sign in</Link>
			</ModalWrapper>
			</StyledWrapper>
  );
};


