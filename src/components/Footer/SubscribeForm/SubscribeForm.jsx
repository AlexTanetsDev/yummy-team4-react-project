import { useTranslation } from 'react-i18next';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { subscripbeValidationSchema } from 'helpers/subscripbeValidationSchema';
import { useAuth } from 'hooks';
import {
  FormStyled,
  InputWrapper,
  Input,
  MailIconStyled,
  ErrMsg,
  SubscribeBtn,
  SubscribeWrapper,
  SubscribeTitle,
  SubscribeText,
} from './SubscribeForm.styled';

import { updateSubscription } from 'Redux/auth/operations.js';
import { selectSubscription } from 'Redux/auth/selectors.js';

const SubscribeForm = () => {
  const isMobile = useMedia('(max-width: 1439px)');
  const { user } = useAuth();
  const dispatch = useDispatch();
  const subscribe = useSelector(selectSubscription);
  const { t } = useTranslation();

  const handleSubmit = async values => {
    if (subscribe === 'unsubscribe') {
      dispatch(
        updateSubscription({ email: values.email, subscription: 'subscribe' })
      );
    } else {
      dispatch(
        updateSubscription({ email: values.email, subscription: 'unsubscribe' })
      );
    }
  };

  return (
    <div>
      {!isMobile && (
        <SubscribeWrapper>
          <SubscribeTitle>{t('Subscribe to our Newsletter')}</SubscribeTitle>
          <SubscribeText>
            {t('Subscribe up to our newsletter. Be in touch')}
          </SubscribeText>
        </SubscribeWrapper>
      )}

      <Formik
        initialValues={{
          email: user.email || '',
        }}
        validationSchema={subscripbeValidationSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {props => (
          <FormStyled>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                border={
                  props.touched.email && props.errors.email
                    ? '1px solid #E74A3B'
                    : props.touched.email && props.isValid
                    ? '1px solid #3CBC81'
                    : '1px solid rgba(255, 255, 255, 0.3)'
                }
                onBlur={() => {
                  props.setTouched({
                    email: true,
                  });
                }}
                onChange={event => {
                  props.setTouched({
                    email: true,
                  });
                  props.setFieldValue('email', event.target.value);
                }}
              />
              <MailIconStyled
                stroke={
                  props.touched.email && props.errors.email
                    ? '#E74A3B'
                    : props.touched.email && props.isValid
                    ? '#3CBC81'
                    : '#FAFAFA'
                }
              />

              {props.errors.email && props.touched.email ? (
                <ErrMsg>{props.errors.email}</ErrMsg>
              ) : null}
            </InputWrapper>
            {subscribe !== 'subscribe' ? (
              <SubscribeBtn type="submit" disabled={!props.isValid}>
                {t('Subscribe')}
              </SubscribeBtn>
            ) : (
              <SubscribeBtn type="submit" disabled={!props.isValid}>
                {t('Unsubscribe')}
              </SubscribeBtn>
            )}
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};

export default SubscribeForm;
