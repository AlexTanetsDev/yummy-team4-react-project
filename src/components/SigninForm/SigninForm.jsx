import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { categoryList, signIn } from '../../redux/auth/operations';
import { object, string } from 'yup';
import { useTranslation } from 'react-i18next';

import { SingInButtonGreen } from 'components/Button/Button';
import {
  selectError,
  selectIsLoading,
  selectIsLoggedIn,
} from 'redux/auth/selectors';

import { MiniLoader } from 'components/Loader/Loader';
import { FormError } from 'components/FormError/FormError';

import {
  StyledWrapper,
  ImageReg,
  InputField,
  BottomBgImage,
  StateInputIcon,
  ModalWrapper,
  Modal,
  ModalTitle,
  Link,
  IconsWrap,
  InputWrapper,
  ContentWrapper,
  StyledFiMail,
  StyledFiLock,
  WarningAndSuccessMessage,
  ResendLink,
  StyledAiFillEyeInvisible,
  StyledAiFillEye,
  EyeIcon,
  LoaderWrapper,
} from './SignInForm.styled';

import { errorIcon, warningIcon, succesIcon } from 'images';
import { LanguageSelector } from 'components/LanguageSelector/LanguageSelector';

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
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [type, setType] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(<StyledAiFillEyeInvisible />);
  const error = useSelector(selectError);
  const { t } = useTranslation();
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(categoryList());
    }
  }, [dispatch, isLoggedIn]);

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(signIn(values));
    if (!error) {
      resetForm();
    }
  };

  const handleClick = () => {
    if (type === 'password') {
      setType('text');
      setToggleIcon(<StyledAiFillEye />);
    } else {
      setType('password');
      setToggleIcon(<StyledAiFillEyeInvisible />);
    }
  };

  return ReactDOM.createPortal(
    <>
      <StyledWrapper>
        <LanguageSelector page="auth" />
        <BottomBgImage />
        <ContentWrapper>
          <ImageReg />
          <ModalWrapper>
            <Modal>
              <ModalTitle>{t('Sign In')}</ModalTitle>
              {isLoading && isMobile && (
                <LoaderWrapper>
                  <MiniLoader />
                </LoaderWrapper>
              )}
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
                        placeholder={t('Email')}
                        values={values.email}
                      />
                      <StyledFiMail
                        color={`${
                          (!touched.email && 'white') ||
                          (errors.email && touched.email && '#e74a3b') ||
                          (!errors.email && touched.email && '#3cbc81')
                        }`}
                      />
                      <IconsWrap>
                        {errors.email && touched.email && (
                          <StateInputIcon src={errorIcon} />
                        )}
                        {!errors.email && touched.email && (
                          <StateInputIcon src={succesIcon} />
                        )}
                      </IconsWrap>
                      <FormError name="email" component="div" />
                    </InputWrapper>
                    <InputWrapper>
                      <Field
                        type={type}
                        name="password"
                        placeholder={t('Password')}
                        as={InputField}
                        brdcolor={
                          (!touched.password && 'white') ||
                          (errors.password && touched.password && '#e74a3b') ||
                          (6 <= values.password.length &&
                            values.password.length < 8 &&
                            '#f6c23e') ||
                          (8 <= values.password.length && '#3cbc81')
                        }
                      />
                      <StyledFiLock
                        color={`${
                          (!touched.password && 'white') ||
                          (errors.password && touched.password && '#e74a3b') ||
                          (6 <= values.password.length &&
                            values.password.length < 8 &&
                            '#f6c23e') ||
                          (8 <= values.password.length && '#3cbc81')
                        }`}
                      />
                      <IconsWrap>
                        {6 <= values.password.length &&
                          values.password.length < 8 &&
                          !errors.password && (
                            <StateInputIcon src={warningIcon} />
                          )}
                        {8 <= values.password.length && !errors.password && (
                          <StateInputIcon src={succesIcon} />
                        )}
                        {errors.password && touched.password && (
                          <StateInputIcon src={errorIcon} />
                        )}
                        <EyeIcon onClick={handleClick}>{toggleIcon}</EyeIcon>
                      </IconsWrap>
                      {6 <= values.password.length &&
                        values.password.length < 8 &&
                        !errors.password && (
                          <WarningAndSuccessMessage color={'#f6c23e'}>
                            {t('Your password is little secure')}
                          </WarningAndSuccessMessage>
                        )}
                      {8 <= values.password.length && !errors.password && (
                        <WarningAndSuccessMessage color={'#3cbc81'}>
                          {t('Password is secure')}
                        </WarningAndSuccessMessage>
                      )}
                      <FormError name="password" component="div" />
                    </InputWrapper>
                    <SingInButtonGreen type="submit">
                      {t('Sign in')}
                    </SingInButtonGreen>
                  </Form>
                )}
              </Formik>
              <ResendLink to="/resend">{t('Resend')}</ResendLink>
              <ResendLink to="/forgot">{t('Forgot a password')}</ResendLink>
            </Modal>
            <Link to="/register">{t('Registration')}</Link>
          </ModalWrapper>
        </ContentWrapper>
        {isLoading && !isMobile && (
          <LoaderWrapper>
            <MiniLoader />
          </LoaderWrapper>
        )}
      </StyledWrapper>
    </>,
    document.querySelector('#modal-root')
  );
};
