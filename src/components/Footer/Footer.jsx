import { useMedia } from 'react-use';
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
          © 2023 All Rights Reserved. <span>Terms of Service</span>
        </p>
      </BottomWrapper>
    </>
  );
};
