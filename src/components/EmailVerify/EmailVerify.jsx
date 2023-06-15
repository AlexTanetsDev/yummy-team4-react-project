import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { verify } from 'redux/auth/operations';
import { selectError, selectIsLoading } from 'redux/auth/selectors';

import {
  ContentWrapper,
  StyledWrapper,
  ButtonWrapper,
  Title,
  ErrorText,
  LoaderWrapper,
} from './EmailVerify.styled';
import { SingInButton } from 'components/Button/Button';
import { MiniLoader } from 'components/Loader/Loader';

export const EmailVerify = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const { t } = useTranslation();

  useEffect(() => {
    const EmailVerification = async verificationToken => {
      await dispatch(verify(verificationToken));
    };
    EmailVerification(params.verificationToken);
  }, [dispatch, params.verificationToken]);

  return (
     <StyledWrapper>
        <ContentWrapper>
          {!error ? (
            <Title>{t('Email verified!')}</Title>
          ) : (
            <ErrorText>{t(error)}</ErrorText>
          )}
          <ButtonWrapper>
            <SingInButton>{t('Sign In')}</SingInButton>
          </ButtonWrapper>
        </ContentWrapper>
        <LoaderWrapper> {isLoading && <MiniLoader />}</LoaderWrapper>
      </StyledWrapper>

  );
};
