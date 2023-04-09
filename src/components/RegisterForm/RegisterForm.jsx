import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { StyledWrapper, ModalWrapper, Button, InputField, Title, ImageReg, BottomBgImage  } from './RegisterForm.styled';
import { Link } from 'components/RegisterPageWrapper/RegisterPageWrapper.styled';

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
					<Field type="text" as={InputField} name="name" placeholder="name" />
					<ErrorMessage name="name" component="div" />
						
					<Field name="email" as={InputField} type="text" placeholder="email"/>
					<ErrorMessage name="email" component="div" />
						
					<Field type="password" as={InputField} name="password" placeholder="password"/>
					<ErrorMessage name="password" component="div"/>

          <Button type="submit">Sign up</Button>
			  </Form>
		  </Formik>
			</ModalWrapper>
						<Link to="/signin">Sign in</Link>
		</StyledWrapper>
  );
};