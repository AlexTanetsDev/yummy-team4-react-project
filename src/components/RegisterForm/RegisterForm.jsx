import { useDispatch } from 'react-redux';
import { register, categoryList } from 'Redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { AiOutlineUser } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { SingInButtonGreen } from 'components/Button/Button';
import {
  StyledWrapper,
  ModalWrapper,
  InputField,
  Title,
  ImageReg,
  BottomBgImage,
  Link,
  InputWrapper,
  IconWrap,
  StateInputIcon,
} from './RegisterForm.styled';
import '../../styles/styles.css';
import { FormError } from 'components/FormError/FormError';
import { errorIcon, warningIcon, succesIcon } from 'images';
import { MainLoader } from 'components/Loader/Loader';
import { useState } from 'react';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const registerSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(5).required(),
});

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      await dispatch(register(values));
      dispatch(categoryList());
      resetForm();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {error ? (
        <AlertMessage>
          Oops, something went wrong. Please try again later...
        </AlertMessage>
      ) : (
        <>
          {isLoading ? (
            <MainLoader />
          ) : (
            <StyledWrapper>
              <ImageReg />
              <BottomBgImage />
              <ModalWrapper>
                <Title>Registration</Title>
                <Formik
                  initialValues={initialValues}
                  validationSchema={registerSchema}
                  onSubmit={handleSubmit}
                >
                  {({ values, errors, touched }) => (
                    <Form autoComplete="off">
                      <InputWrapper>
                        <Field
                          as={InputField}
                          className={`sign-up__inp ${
                            errors.name && touched.name
                              ? 'sign-up__inp_error'
                              : ''
                          }`}
                          type="text"
                          name="name"
                          placeholder="name"
                          values={values.name}
                        />
                        <IconWrap>
                          {window.innerWidth < 768 && (
                            <AiOutlineUser
                              color={`${
                                errors.name && touched.name ? 'red' : 'white'
                              }`}
                              size={20}
                            />
                          )}
                          {window.innerWidth >= 768 && (
                            <AiOutlineUser
                              color={`${
                                errors.name && touched.name ? 'red' : 'white'
                              }`}
                              size={24}
                            />
                          )}
                        </IconWrap>
                        {errors.name && touched.name && (
                          <StateInputIcon src={errorIcon} />
                        )}
                        <FormError name="name" component="div" />
                      </InputWrapper>
                      <InputWrapper>
                        <Field
                          as={InputField}
                          className={`sign-up__inp ${
                            errors.email && touched.email
                              ? 'sign-up__inp_error'
                              : ''
                          }`}
                          name="email"
                          type="email"
                          inputmode="email"
                          placeholder="email"
                          values={values.email}
                        />
                        <IconWrap>
                          {window.innerWidth < 768 && (
                            <FiMail
                              color={`${
                                errors.email && touched.email ? 'red' : 'white'
                              }`}
                              size={20}
                            />
                          )}
                          {window.innerWidth >= 768 && (
                            <FiMail
                              color={`${
                                errors.email && touched.email ? 'red' : 'white'
                              }`}
                              size={24}
                            />
                          )}
                        </IconWrap>
                        {errors.email && touched.email && (
                          <StateInputIcon src={errorIcon} />
                        )}
                        <FormError name="email" component="div" />
                      </InputWrapper>
                      <InputWrapper>
                        <Field
                          as={InputField}
                          className={`sign-up__inp ${
                            errors.password && touched.password
                              ? 'sign-up__inp_error'
                              : ''
                          } ${
                            0 < values.password.length &&
                            values.password.length < 8 &&
                            !touched.password
                              ? 'sign-up__inp_war'
                              : ''
                          } ${
                            8 <= values.password.length && !touched.password
                              ? 'sign-up__inp_suc'
                              : ''
                          }`}
                          type="password"
                          name="password"
                          placeholder="password"
                        />
                        <IconWrap>
                          {window.innerWidth < 768 && (
                            <FiLock
                              className="input-icon__mobile"
                              color={`${
                                errors.password && touched.password
                                  ? 'red'
                                  : 'white'
                              }`}
                              size={20}
                            />
                          )}
                          {window.innerWidth >= 768 && (
                            <FiLock
                              className="input-con"
                              color={`${
                                errors.password && touched.password
                                  ? 'red'
                                  : 'white'
                              }`}
                              size={24}
                            />
                          )}
                        </IconWrap>
                        {0 < values.password.length &&
                          values.password.length < 8 &&
                          !touched.password && (
                            <StateInputIcon src={warningIcon} />
                          )}
                        {0 < values.password.length &&
                          values.password.length < 8 &&
                          !touched.password && (
                            <p className="sing-up__inp_war-mess">
                              Your password is little secure
                            </p>
                          )}
                        {8 <= values.password.length && !touched.password && (
                          <StateInputIcon src={succesIcon} />
                        )}
                        {8 <= values.password.length && !touched.password && (
                          <p className="sing-up__inp_suc-mess">
                            Password is secure
                          </p>
                        )}
                        {errors.password && touched.password && (
                          <StateInputIcon src={errorIcon} />
                        )}
                        <FormError name="password" component="div" />
                      </InputWrapper>

                      <SingInButtonGreen type="submit">
                        Sign up
                      </SingInButtonGreen>
                    </Form>
                  )}
                </Formik>
                <Link to="/signin">Sign in</Link>
              </ModalWrapper>
            </StyledWrapper>
          )}
        </>
      )}
    </>
  );
};
