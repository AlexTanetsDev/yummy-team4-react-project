import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { verify } from 'Redux/auth/operations';
import { selectIsVerified } from 'Redux/auth/selectors';

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

export const EmailVerify = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const isVerified = useSelector(selectIsVerified);

  useEffect(() => {
    const EmailVerification = async () => {
      await dispatch(verify(params.verificationToken));
    };
    EmailVerification();
  }, [dispatch, params.verificationToken]);

  return (
    <StyledWrapper>
      <ContentWrapper>
        <Logo>
          <LogoImage src={startPageLogo} />
        </Logo>
        {isVerified && <Title>Email verified!</Title>}
        {!isVerified && (
          <ErrorText>
            Your email has already been verified or email not found!
          </ErrorText>
        )}
        <ButtonWrapper>
          <SingInButton>SigngIn</SingInButton>
        </ButtonWrapper>
      </ContentWrapper>
    </StyledWrapper>
  );
};
