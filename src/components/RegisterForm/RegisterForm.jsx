import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { useTranslation } from 'react-i18next';

import { SingInButtonGreen } from 'components/Button/Button';
import { FormError } from 'components/FormError/FormError';
import { MiniLoader } from 'components/Loader/Loader';
import { LanguageSelector } from 'components/LanguageSelector/LanguageSelector';
import { selectError, selectIsLoading } from 'redux/auth/selectors';

import { register } from 'redux/auth/operations';

import {
  StyledWrapper,
  ModalWrapper,
  Modal,
  InputField,
  ModalTitle,
  ImageReg,
  BottomBgImage,
  Link,
  InputWrapper,
  IconsWrap,
  StateInputIcon,
  ContentWrapper,
  StyledAiOutlineUser,
  StyledFiMail,
  StyledFiLock,
  WarningAndSuccessMessage,
  StyledAiFillEyeInvisible,
  StyledAiFillEye,
  EyeIcon,
  LoaderWrapper,
  GoogleLink,
  LinkText,
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
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [type, setType] = useState('password');
  const [isloadingGoogle, setIsloadingGoogle] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(<StyledAiFillEyeInvisible />);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(register(values));
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

  const handleClickGoogle = () => {
    setIsloadingGoogle(true);
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
              <ModalTitle>{t('Registration')}</ModalTitle>
              {(isLoading || isloadingGoogle) && isMobile && (
                <LoaderWrapper>
                  <MiniLoader />
                </LoaderWrapper>
              )}
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
                      <StyledAiOutlineUser
                        color={`${
                          (!touched.name && 'white') ||
                          (errors.name && touched.name && '#e74a3b') ||
                          (!errors.name && touched.name && '#3cbc81')
                        }`}
                      />
                      <IconsWrap>
                        {errors.name && touched.name && (
                          <StateInputIcon src={errorIcon} />
                        )}
                        {!errors.name && touched.name && (
                          <StateInputIcon src={succesIcon} />
                        )}
                      </IconsWrap>
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
                        values={values.password}
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
                      {t('Sign up')}
                    </SingInButtonGreen>
                    <GoogleLink
                      onClick={handleClickGoogle}
                      href="https://yummy-team4-nodejs-project.onrender.com/api/users/google"
                    >
                      <LinkText>GOOGLE</LinkText>
                    </GoogleLink>
                  </Form>
                )}
              </Formik>
            </Modal>
            <Link to="/signin">{t('Sign in')}</Link>
          </ModalWrapper>
        </ContentWrapper>
        {(isLoading || isloadingGoogle) && !isMobile && (
          <LoaderWrapper>
            <MiniLoader />
          </LoaderWrapper>
        )}
      </StyledWrapper>
    </>,
    document.querySelector('#modal-root')
  );
};
