import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

import { verifyReset, resetPassword } from 'redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { selectError, selectIsLoading, selectUser } from 'redux/auth/selectors';
import { FormError } from '../FormError/FormError';
import { SingInButtonGreen } from '../Button/Button';
import {
  ContentWrapper,
  StyledWrapper,
  ButtonWrapper,
  Title,
  ErrorText,
  ModalWrapper,
  Modal,
  InputWrapper,
  InputField,
  StyledFiLock,
  IconsWrap,
  StateInputIcon,
  EyeIcon,
  WarningAndSuccessMessage,
  StyledAiFillEyeInvisible,
  StyledAiFillEye,
  LoaderWrapper,
} from './ResetPassword.styled';
import { errorIcon, warningIcon, succesIcon } from 'images';
import { SingInButton } from 'components/Button/Button';
import { MiniLoader } from 'components/Loader/Loader';

const initialValues = {
  password: '',
  confirmPassword: '',
};

const passwordSchema = object({
  password: string().min(6).required(),
  confirmPassword: string().min(6).required(),
});

export const ResetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const params = useParams();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const [type, setType] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(<StyledAiFillEyeInvisible />);
  const navigate = useNavigate();
  const ref = useRef(1);

  useEffect(() => {
    if (ref.current !== 1) {
      return;
    }
    ref.current += 1;
    const PasswordVerification = async resetPasswordToken => {
      await dispatch(verifyReset(resetPasswordToken));
    };
    PasswordVerification(params.resetPasswordToken);
  }, [dispatch, params.resetPasswordToken]);

  const handleSubmit = async (values, { resetForm }) => {
    const { password, confirmPassword } = values;
    if (password !== confirmPassword) {
      toast.error('Password mismatch!', {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#DD4F4F',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return;
    }
    const userValue = { password: password, email: user.email };
    await dispatch(resetPassword(userValue));
    if (!error) {
      navigate('/signin');
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
        {error ? (
          <>
            <ContentWrapper>
              <ModalWrapper>
                <Modal>
                  <Title>{t('Enter your new password')}</Title>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={passwordSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ values, errors, touched }) => (
                      <Form autoComplete="off">
                        <InputWrapper>
                          <Field
                            type={type}
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
                          <IconsWrap>
                            {6 <= values.password.length &&
                              values.password.length < 8 &&
                              !errors.password && (
                                <StateInputIcon src={warningIcon} />
                              )}
                            {8 <= values.password.length &&
                              !errors.password && (
                                <StateInputIcon src={succesIcon} />
                              )}
                            {errors.password && touched.password && (
                              <StateInputIcon src={errorIcon} />
                            )}
                            <EyeIcon onClick={handleClick}>
                              {toggleIcon}
                            </EyeIcon>
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
                        <InputWrapper>
                          <Field
                            type={type}
                            name="confirmPassword"
                            placeholder={t('Confirm password')}
                            values={values.confirmPassword}
                            as={InputField}
                            brdcolor={
                              (!touched.confirmPassword && 'white') ||
                              (errors.confirmPassword &&
                                touched.confirmPassword &&
                                '#e74a3b') ||
                              (6 <= values.confirmPassword.length &&
                                values.confirmPassword.length < 8 &&
                                '#f6c23e') ||
                              (8 <= values.confirmPassword.length && '#3cbc81')
                            }
                          />
                          <StyledFiLock
                            color={`${
                              (!touched.confirmPassword && 'white') ||
                              (errors.confirmPassword &&
                                touched.confirmPassword &&
                                '#e74a3b') ||
                              (6 <= values.confirmPassword.length &&
                                values.confirmPassword.length < 8 &&
                                '#f6c23e') ||
                              (8 <= values.confirmPassword.length && '#3cbc81')
                            }`}
                          />
                          <IconsWrap>
                            {6 <= values.confirmPassword.length &&
                              values.confirmPassword.length < 8 &&
                              !errors.confirmPassword && (
                                <StateInputIcon src={warningIcon} />
                              )}
                            {8 <= values.confirmPassword.length &&
                              !errors.confirmPassword && (
                                <StateInputIcon src={succesIcon} />
                              )}
                            {errors.confirmPassword &&
                              touched.confirmPassword && (
                                <StateInputIcon src={errorIcon} />
                              )}
                            <EyeIcon onClick={handleClick}>
                              {toggleIcon}
                            </EyeIcon>
                          </IconsWrap>
                          {6 <= values.confirmPassword.length &&
                            values.confirmPassword.length < 8 &&
                            !errors.confirmPassword && (
                              <WarningAndSuccessMessage color={'#f6c23e'}>
                                {t('Your password is little secure')}
                              </WarningAndSuccessMessage>
                            )}
                          {8 <= values.confirmPassword.length &&
                            !errors.confirmPassword && (
                              <WarningAndSuccessMessage color={'#3cbc81'}>
                                {t('Password is secure')}
                              </WarningAndSuccessMessage>
                            )}
                          <FormError name="confirmPassword" component="div" />
                        </InputWrapper>
                        <SingInButtonGreen type="submit">
                          {t('Sign up')}
                        </SingInButtonGreen>
                      </Form>
                    )}
                  </Formik>
                </Modal>
              </ModalWrapper>
            </ContentWrapper>
            <LoaderWrapper> {isLoading && <MiniLoader />}</LoaderWrapper>
          </>
        ) : (
          <ContentWrapper>
            <ErrorText>{error}</ErrorText>
            <ButtonWrapper>
              <SingInButton>SigngIn</SingInButton>
            </ButtonWrapper>
          </ContentWrapper>
        )}
      </StyledWrapper>
    </>,
    document.querySelector('#modal-root')
  );
};
