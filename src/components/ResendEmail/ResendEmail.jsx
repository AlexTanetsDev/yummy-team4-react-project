import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {
  StyledWrapper,
  ContentWrapper,
  Logo,
  LogoImage,
  Title,
  Modal,
  InputWrapper,
  IconWrap,
  StyledFiMail,
  StateInputIcon,
  InputField,
  ModalTitle,
} from './ResendEmail.styled';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { SingInButtonGreen } from 'components/Button/Button';
import { FormError } from 'components/FormError/FormError';
import { startPageLogo } from '../../images';
import { errorIcon, succesIcon } from 'images';
import { resend } from 'Redux/auth/operations';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';
import { MainLoader } from 'components/Loader/Loader';

const initialValues = {
  email: '',
};

const signInSchema = object({
  email: string().email().required(),
});

export const ResendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(resend(values));
      navigate('/signin');
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
              <ContentWrapper>
                <Logo>
                  <LogoImage src={startPageLogo} />
                </Logo>
                <Title>Please, verify your email!</Title>
                <Modal>
                  <ModalTitle>Enter your email</ModalTitle>
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
                                (errors.email && touched.email && '#e74a3b') ||
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

                        <SingInButtonGreen type="submit">
                          Resend email
                        </SingInButtonGreen>
                      </Form>
                    )}
                  </Formik>
                </Modal>
              </ContentWrapper>
            </StyledWrapper>
          )}
        </>
      )}
    </>,
    document.querySelector('#modal-root')
  );
};
