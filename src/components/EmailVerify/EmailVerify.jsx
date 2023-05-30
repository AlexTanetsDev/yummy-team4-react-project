import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { verify } from 'Redux/auth/operations';
import { selectUser } from 'Redux/auth/selectors';

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
import { AlertMessage } from 'components/AlertMessage/AlertMessage';

export const EmailVerify = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector(selectUser);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const EmailVerification = async verificationToken => {
      try {
        setIsLoading(true);
        const response = await dispatch(verify(verificationToken));
        if (!response.error) {
          setIsVerified(true);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    EmailVerification(params.verificationToken);
  }, [dispatch, params.verificationToken]);

  return (
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
                {isVerified ? (
                  <Title>Email verified!</Title>
                ) : (
                  <ErrorText>
                    Your email has already been verified or email not found!
                  </ErrorText>
                )}
                <ButtonWrapper>
                  <SingInButton>SigngIn</SingInButton>
                </ButtonWrapper>
              </ContentWrapper>
            </StyledWrapper>
          )}
        </>
      )}
    </>
  );
};
