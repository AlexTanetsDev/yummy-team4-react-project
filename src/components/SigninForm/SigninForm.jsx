import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { categoryList, signIn } from '../../Redux/auth/operations';
import { object, string } from 'yup';
import { SingInButtonGreen } from 'components/Button/Button';
import { selectIsLoggedIn } from 'Redux/auth/selectors';
import {
  StyledWrapper,
  ImageReg,
  InputField,
  BottomBgImage,
  StateInputIcon,
  ModalWrapper,
  Modal,
  Title,
  Link,
  IconWrap,
  InputWrapper,
  ContentWrapper,
  StyledFiMail,
  StyledFiLock,
  WarningAndSuccessMessage,
  ResendLink,
} from './SignInForm.styled';
import { FormError } from 'components/FormError/FormError';
import { errorIcon, warningIcon, succesIcon } from 'images';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';
import { MainLoader } from 'components/Loader/Loader';

const initialValues = {
  email: '',
  password: '',
};

const signInSchema = object({
  email: string().email().required(),
  password: string().min(6).required(),
});

export const SignInForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(categoryList());
    }
  }, [dispatch, isLoggedIn]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      await dispatch(signIn(values));
      resetForm();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return ReactDOM.createPortal(
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
              <BottomBgImage />
              <ContentWrapper>
                <ImageReg />
                <ModalWrapper>
                  <Modal>
                    <Title>Sign In</Title>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={signInSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ values, errors, touched }) => (
                        <Form>
                          <InputWrapper>
                            <Field
                              as={InputField}
                              brdcolor={
                                (!touched.email && 'white') ||
                                (errors.email && touched.email && '#e74a3b') ||
                                (!errors.email && touched.email && '#3cbc81')
                              }
                              name="email"
                              type="text"
                              placeholder="Email"
                              values={values.email}
                            />
                            <IconWrap>
                              <StyledFiMail
                                color={`${
                                  (!touched.email && 'white') ||
                                  (errors.email &&
                                    touched.email &&
                                    '#e74a3b') ||
                                  (!errors.email && touched.email && '#3cbc81')
                                }`}
                              />
                            </IconWrap>
                            {errors.email && touched.email && (
                              <StateInputIcon src={errorIcon} />
                            )}
                            {!errors.email && touched.email && (
                              <StateInputIcon src={succesIcon} />
                            )}
                            <FormError name="email" component="div" />
                          </InputWrapper>
                          <InputWrapper>
                            <Field
                              type="password"
                              name="password"
                              placeholder="Password"
                              as={InputField}
                              brdcolor={
                                (!touched.password && 'white') ||
                                (errors.password &&
                                  touched.password &&
                                  '#e74a3b') ||
                                (6 <= values.password.length &&
                                  values.password.length < 8 &&
                                  '#f6c23e') ||
                                (8 <= values.password.length && '#3cbc81')
                              }
                            />
                            <IconWrap>
                              <StyledFiLock
                                color={`${
                                  (!touched.password && 'white') ||
                                  (errors.password &&
                                    touched.password &&
                                    '#e74a3b') ||
                                  (6 <= values.password.length &&
                                    values.password.length < 8 &&
                                    '#f6c23e') ||
                                  (8 <= values.password.length && '#3cbc81')
                                }`}
                              />
                            </IconWrap>
                            {6 <= values.password.length &&
                              values.password.length < 8 &&
                              !errors.password && (
                                <StateInputIcon src={warningIcon} />
                              )}
                            {6 <= values.password.length &&
                              values.password.length < 8 &&
                              !errors.password && (
                                <WarningAndSuccessMessage color={'#f6c23e'}>
                                  Your password is little secure
                                </WarningAndSuccessMessage>
                              )}
                            {8 <= values.password.length &&
                              !errors.password && (
                                <StateInputIcon src={succesIcon} />
                              )}
                            {8 <= values.password.length &&
                              !errors.password && (
                                <WarningAndSuccessMessage color={'#3cbc81'}>
                                  Password is secure
                                </WarningAndSuccessMessage>
                              )}
                            {errors.password && touched.password && (
                              <StateInputIcon src={errorIcon} />
                            )}
                            <FormError name="password" component="div" />
                          </InputWrapper>
                          <SingInButtonGreen type="submit">
                            Sign in
                          </SingInButtonGreen>
                        </Form>
                      )}
                    </Formik>
                    <ResendLink to="/resend">
                      Resend verification email
                    </ResendLink>
                  </Modal>
                  <Link to="/register">Registration</Link>
                </ModalWrapper>
              </ContentWrapper>
            </StyledWrapper>
          )}
        </>
      )}
    </>,
    document.querySelector('#modal-root')
  );
};
