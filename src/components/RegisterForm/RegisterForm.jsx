import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { StyledWrapper, ModalWrapper, Label  } from './RegisterForm.styled';

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
			<ModalWrapper>
				<Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
     <Form autoComplete='off'>
				<Label htmlFor="name">
					Name
					<Field type="text" name="name" />
					<ErrorMessage name="name" component="div"/>
				</Label>	
				<Label htmlFor="email">
					Email
					<Field name="email" type="text" />
					<ErrorMessage name="email" component="div" />
				</Label>	
				<Label htmlFor="password">
					Password
					<Field type="password" name="password" />
					<ErrorMessage name="password" component="div"/>
				</Label>
      <button type="submit">Sign up</button>
			</Form>
		</Formik>
			</ModalWrapper>
		</StyledWrapper>
  );
};