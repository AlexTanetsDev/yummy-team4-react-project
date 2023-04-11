import { useMedia } from 'react-use';

import LogoFooter from './LogoFooter';
import FooterInfo from './FooterInfo';
import NavFooter from './NavFooter';
import SubscribeForm from './SubscribeForm';
import SocNetworks from './SocNetworks';

import {
  TopWrapper,
  FooterStyled,
  BottomWrapper,
  LogoNavWrapper,
  WrapperForDesktop,
} from './Footer.styled';

const Footer = () => {
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <>
      <FooterStyled>
        <TopWrapper>
          <WrapperForDesktop>
            <LogoNavWrapper isMobile={isMobile}>
              <div>
                <LogoFooter />
                {!isMobile && <FooterInfo />}
              </div>
              <NavFooter />
            </LogoNavWrapper>
            <SubscribeForm />
          </WrapperForDesktop>
          <SocNetworks />
        </TopWrapper>
      </FooterStyled>

      <BottomWrapper>
        <p>
          © 2023 All Rights Reserved. <span>Terms of Service</span>
        </p>
      </BottomWrapper>
    </>
  );
};

export default Footer;
