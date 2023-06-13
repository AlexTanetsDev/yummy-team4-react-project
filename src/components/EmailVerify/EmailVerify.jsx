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
  Logo,
  LogoImage,
  ErrorText,
} from './EmailVerify.styled';
import { SingInButton } from 'components/Button/Button';
import { startPageLogo } from '../../images';
import { MainLoader } from 'components/Loader/Loader';

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
    <>
      {isLoading ? (
        <MainLoader />
      ) : (
        <StyledWrapper>
          <ContentWrapper>
            <Logo>
              <LogoImage src={startPageLogo} />
            </Logo>
            {!error ? (
              <Title>{t('Email verified!')}</Title>
            ) : (
              <ErrorText>
                {t('Your email has already been verified or email not found!')}
              </ErrorText>
            )}
            <ButtonWrapper>
              <SingInButton>{t('Sign In')}</SingInButton>
            </ButtonWrapper>
          </ContentWrapper>
        </StyledWrapper>
      )}
    </>
  );
};
