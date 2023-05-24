import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { register } from 'Redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { SingInButtonGreen } from 'components/Button/Button';
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
  StyledAiFillEyeInvisible,
  StyledAiFillEye,
  EyeIcon,
} from './RegisterForm.styled';
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
  password: string().min(6).required(),
});

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const [type, setType] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(<StyledAiFillEyeInvisible />);

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
                              brdcolor={
                                (!touched.name && 'white') ||
                                (errors.name && touched.name && '#e74a3b') ||
                                (!errors.name && touched.name && '#3cbc81')
                              }
                              type="text"
                              name="name"
                              placeholder="Name"
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
                              type={type}
                              name="password"
                              placeholder="Password"
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
                            <EyeIcon onClick={handleClick}>
                              {toggleIcon}
                            </EyeIcon>
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
                            Sign up
                          </SingInButtonGreen>
                        </Form>
                      )}
                    </Formik>
                  </Modal>
                  <Link to="/signin">Sign in</Link>
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
