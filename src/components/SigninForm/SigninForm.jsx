import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { categoryList, signIn } from '../../Redux/auth/operations';
import { object, string } from 'yup';
import { FiMail } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { SingInButtonGreen } from 'components/Button/Button';
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
	ContentWrapper
} from './SignInForm.styled';
import '../../styles/styles.css';
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      await dispatch(signIn(values));
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
                          className={`sign-up__inp ${
                            errors.email && touched.email
                              ? 'sign-up__inp_error'
                              : ''
                          } ${
                            !errors.email && touched.email
                              ? 'sign-up__inp_suc'
                              : ''
                          }`}	
                          name="email"
                          type="text"
                          placeholder="Email"
                          values={values.email}
                        />
                        <IconWrap>
                          {window.innerWidth < 768 && (
                            <FiMail
                              color={`${(!touched.email && 'white') ||
																				(errors.email && touched.email && '#e74a3b') ||
																				(!errors.email && touched.email && '#3cbc81')
                              }`}
                              size={20}
                            />
                          )}
                          {window.innerWidth >= 768 && (
                            <FiMail
                              color={`${(!touched.email && 'white') ||
																				(errors.email && touched.email && '#e74a3b') ||
																				(!errors.email && touched.email && '#3cbc81')
                              }`}
                              size={24}
                            />
                          )}
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
                          as={InputField}
                          className={`sign-up__inp ${
                            errors.password && touched.password
                              ? 'sign-up__inp_error'
                              : ''
                          } ${
                            0 < values.password.length &&
                            values.password.length < 8 &&
                            !errors.password
                              ? 'sign-up__inp_war'
                              : ''
                          } ${
                            8 <= values.password.length && !errors.password
                              ? 'sign-up__inp_suc'
                              : ''
                          }`}		
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                        <IconWrap>
                          {window.innerWidth < 768 && (
                            <FiLock
                              className="input-icon__mobile"
                              color={`${(!touched.password && 'white') ||
																				(errors.password && touched.password && '#e74a3b') ||
																        (6 <= values.password.length && values.password.length < 8 && '#f6c23e') ||
																        (8 <= values.password.length && '#3cbc81')
                                    }`}
                              size={20}
                            />
                          )}
                          {window.innerWidth >= 768 && (
                            <FiLock
                              className="input-con"
                              color={`${(!touched.password && 'white') ||
																				(errors.password && touched.password && '#e74a3b') ||
																        (6 <= values.password.length && values.password.length < 8 && '#f6c23e') ||
																        (8 <= values.password.length && '#3cbc81')
                                    }`}
                              size={24}
                            />
                          )}
                        </IconWrap>
                        {6 <= values.password.length &&
                          values.password.length < 8 && !errors.password &&
                           (
                            <StateInputIcon src={warningIcon} />
                          )}
                        {6 <= values.password.length &&
                          values.password.length < 8 && !errors.password &&
                           (
                            <p className="sing-up__inp_war-mess">
                              Your password is little secure
                            </p>
                          )}
                        {8 <= values.password.length && !errors.password && (
                          <StateInputIcon src={succesIcon} />
                        )}
                        {8 <= values.password.length && !errors.password && (
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
                        Sign in
                      </SingInButtonGreen>
                    </Form>
                  )}
								</Formik>
								</Modal>
                <Link to="/register">Registration</Link>
								</ModalWrapper>
							</ContentWrapper>										
            </StyledWrapper>
          )}
        </>
      )}
    </>
  );
};
