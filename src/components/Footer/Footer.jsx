import { useMedia } from 'react-use';
import { useTranslation } from 'react-i18next';

import { LogoFooter } from 'components/Logo/Logo';

import FooterLogo from './FooterLogo';
import FooterInfo from './FooterInfo';
import NavFooter from './NavFooter';
import SubscribeForm from './SubscribeForm';
import SocNetworks from './SocNetworks';
import { BackgroundDecorFooter } from 'components/BackgroundDecor/BackgroundDecor';

import {
  TopWrapper,
  FooterStyled,
  BottomWrapper,
  LogoNavWrapper,
  WrapperForDesktop,
} from './Footer.styled';

export const Footer = () => {
  const { t } = useTranslation();

  const isMobile = useMedia('(max-width: 767px)');

  return (
    <>
      <FooterStyled>
        <TopWrapper>
          <LogoFooter />
          <WrapperForDesktop>
            <LogoNavWrapper isMobile={isMobile}>
              <div>
                <FooterLogo />
                {!isMobile && <FooterInfo />}
              </div>
              <NavFooter />
            </LogoNavWrapper>
            <SubscribeForm />
          </WrapperForDesktop>
          <SocNetworks />
        </TopWrapper>
        <BackgroundDecorFooter />
      </FooterStyled>
      <BottomWrapper>
        <p>
          © 2023 {t('All Rights Reserved')}
          <span>{t('Terms of Service')}</span>
        </p>
      </BottomWrapper>
    </>
  );
};
