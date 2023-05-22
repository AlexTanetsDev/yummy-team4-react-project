import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { register } from 'Redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { useTranslation } from 'react-i18next';

import { SingInButtonGreen } from 'components/Button/Button';
import { FormError } from 'components/FormError/FormError';
import { MainLoader } from 'components/Loader/Loader';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';
import { LanguageSelector } from 'components/LanguageSelector/LanguageSelector';

import { register, categoryList } from 'Redux/auth/operations';

import {
  StyledWrapper,
  ModalWrapper,
  Modal,
  InputField,
  Title,
  ImageReg,
  BottomBgImage,
  Link,
  InputWrapper,
  IconWrap,
  StateInputIcon,
  ContentWrapper,
  StyledAiOutlineUser,
  StyledFiMail,
  StyledFiLock,
  WarningAndSuccessMessage,
} from './RegisterForm.styled';

import { errorIcon, warningIcon, succesIcon } from 'images';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      await dispatch(register(values));
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
              <LanguageSelector page="auth" />
              <BottomBgImage />
              <ContentWrapper>
                <ImageReg />
                <ModalWrapper>
                  <Modal>
                    <Title>{t('Registration')}</Title>
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
                              brdcolor={
                                (!touched.name && 'white') ||
                                (errors.name && touched.name && '#e74a3b') ||
                                (!errors.name && touched.name && '#3cbc81')
                              }
                              type="text"
                              name="name"
                              placeholder={t('Name')}
                              values={values.name}
                            />
                            <IconWrap>
                              <StyledAiOutlineUser
                                color={`${
                                  (!touched.name && 'white') ||
                                  (errors.name && touched.name && '#e74a3b') ||
                                  (!errors.name && touched.name && '#3cbc81')
                                }`}
                              />
                            </IconWrap>
                            {errors.name && touched.name && (
                              <StateInputIcon src={errorIcon} />
                            )}
                            {!errors.name && touched.name && (
                              <StateInputIcon src={succesIcon} />
                            )}
                            <FormError name="name" component="div" />
                          </InputWrapper>
                          <InputWrapper>
                            <Field
                              as={InputField}
                              brdcolor={
                                (!touched.email && 'white') ||
                                (errors.email && touched.email && '#e74a3b') ||
                                (!errors.email && touched.email && '#3cbc81')
                              }
                              name="email"
                              type="email"
                              inputmode="email"
                              placeholder={t('Email')}
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
                              placeholder={t('Password')}
                              values={values.password}
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
                                  {t('Your password is little secure')}
                                </WarningAndSuccessMessage>
                              )}
                            {8 <= values.password.length &&
                              !errors.password && (
                                <StateInputIcon src={succesIcon} />
                              )}
                            {8 <= values.password.length &&
                              !errors.password && (
                                <WarningAndSuccessMessage color={'#3cbc81'}>
                                  {t('Password is secure')}
                                </WarningAndSuccessMessage>
                              )}
                            {errors.password && touched.password && (
                              <StateInputIcon src={errorIcon} />
                            )}
                            <FormError name="password" component="div" />
                          </InputWrapper>
                          <SingInButtonGreen type="submit">
                            {t('Sign up')}
                          </SingInButtonGreen>
                        </Form>
                      )}
                    </Formik>
                  </Modal>
                  <Link to="/signin">{t('Sign in')}</Link>
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
