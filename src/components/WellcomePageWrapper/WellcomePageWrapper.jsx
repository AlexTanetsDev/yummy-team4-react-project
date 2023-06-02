import { useTranslation } from 'react-i18next';
import { RegistrationButton, SingInButton } from 'components/Button/Button';
import { LanguageSelector } from 'components/LanguageSelector/LanguageSelector';
import { startPageLogo } from '../../images';

import {
  ContentWrapper,
  StyledWrapper,
  ButtonWrapper,
  Title,
  Text,
  Logo,
  LogoImage,
} from './WellcomePageWrapper.styled';

export const WellcomPageWrapper = () => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <LanguageSelector page="welcome" />

      <ContentWrapper>
        <Logo>
          <LogoImage src={startPageLogo} />
        </Logo>
        <Title>{t('Welcome to the app!')}</Title>
        <Text>{t('This app offers')}</Text>
        <ButtonWrapper>
          <RegistrationButton children={t('Register')} />
          <SingInButton children={t('Sign in')} />
        </ButtonWrapper>
      </ContentWrapper>
    </StyledWrapper>
  );
};
