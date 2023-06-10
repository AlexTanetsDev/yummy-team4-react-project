import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { selectError, selectIsLoading } from 'redux/auth/selectors';

import {
  StyledWrapper,
  ContentWrapper,
  Title,
  Modal,
  InputWrapper,
  IconWrap,
  StyledFiMail,
  StateInputIcon,
  InputField,
  ModalTitle,
  LoaderWrapper,
} from './ResendEmail.styled';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { SingInButtonGreen, SingInButton } from 'components/Button/Button';
import { FormError } from 'components/FormError/FormError';
import { errorIcon, succesIcon } from 'images';
import { resend } from 'redux/auth/operations';
import { MiniLoader } from 'components/Loader/Loader';

import { selectError, selectIsLoading } from 'redux/auth/selectors';


const initialValues = {
  email: '',
};

const emailSchema = object({
  email: string().email().required(),
});

export const ResendEmail = () => {

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(resend(values));
    if (!error) {
      navigate('/signin');
      resetForm();
    }
  };

  return ReactDOM.createPortal(
    <>
      <StyledWrapper>
        <ContentWrapper>
          <Title>Please, verify your email!</Title>
          <Modal>
            <ModalTitle>Enter your email</ModalTitle>
            <Formik
              initialValues={initialValues}
              validationSchema={emailSchema}
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
        <LoaderWrapper> {isLoading && <MiniLoader />}</LoaderWrapper>
      </StyledWrapper>
    </>,
    document.querySelector('#modal-root')
  );
};
