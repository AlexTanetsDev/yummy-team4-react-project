import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  Link,
} from './ForgotEmail.styled';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { SingInButtonGreen } from 'components/Button/Button';
import { FormError } from 'components/FormError/FormError';
import { errorIcon, succesIcon } from 'images';
import { forgot } from 'redux/auth/operations';
import { MiniLoader } from 'components/Loader/Loader';

const initialValues = {
  email: '',
};

const emailSchema = object({
  email: string().email().required(),
});

export const ForgotEmail = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(forgot(values));

    if (!error) {
      navigate('/signin');
      resetForm();
    }
  };

  return ReactDOM.createPortal(
    <>
      <StyledWrapper>
        <ContentWrapper>
          <Title>{t('Recovery password')}</Title>

          <Modal>
            <ModalTitle>{t('Enter your email address')}</ModalTitle>
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
                      placeholder={t('Email')}
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
                    {t('Send email')}
                  </SingInButtonGreen>
                </Form>
              )}
            </Formik>
          </Modal>
          <Link to="/signin">{t('Sign in')}</Link>
        </ContentWrapper>
        <LoaderWrapper> {isLoading && <MiniLoader />}</LoaderWrapper>
      </StyledWrapper>
    </>,
    document.querySelector('#modal-root')
  );
};
