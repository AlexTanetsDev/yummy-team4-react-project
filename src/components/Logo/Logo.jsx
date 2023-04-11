import { logoWhite, logoGreen } from 'images';

import {
  LogoHeaderWrapper,
  LogoHeaderLink,
  LogoHeaderImg,
  LogoFooterWrapper,
  LogoFooterLink,
  LogoFooterImg,
} from './Logo.styled';

export const LogoHeader = () => {
  return (
    <LogoHeaderWrapper>
      <LogoHeaderLink to="/main">
        <LogoHeaderImg src={logoWhite} alt="logo-header" />
      </LogoHeaderLink>
    </LogoHeaderWrapper>
  );
};

export const LogoFooter = () => {
  return (
    <LogoFooterWrapper>
      <LogoFooterLink to="/main">
        <LogoFooterImg src={logoGreen} alt="logo-footer" />
      </LogoFooterLink>
    </LogoFooterWrapper>
  );
};
