import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { StyledWrapper, ModalWrapper, Button, InputField, Title, ImageReg, BottomBgImage, Link, InputWrapper } from './RegisterForm.styled';
import { ReactComponent as UserIcon } from '../../images/user.svg';
import { ReactComponent as MailIcon } from '../../images/mail.svg';
import { ReactComponent as LoockIcon } from '../../images/lock.svg';
import "../../styles/styles.css";



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
					<Form autoComplete='off'>
						<InputWrapper>
							<Field type="text" as={InputField} name="name" placeholder="name" />
							<UserIcon className='icon icon-user' />
						</InputWrapper>
					<ErrorMessage name="name" component="div" />
						<InputWrapper>
						<Field name="email" as={InputField} type="text" placeholder="email" />
							<MailIcon className='icon icon-user' />
						</InputWrapper>
					<ErrorMessage name="email" component="div" />
						<InputWrapper>
						<Field type="password" as={InputField} name="password" placeholder="password" />
							<LoockIcon className='icon icon-user' />
						</InputWrapper>
					<ErrorMessage name="password" component="div"/>

          <Button type="submit">Sign up</Button>
			  </Form>
				</Formik>
				<Link to="/signin">Sign in</Link>
			</ModalWrapper>
			</StyledWrapper>
  );
};