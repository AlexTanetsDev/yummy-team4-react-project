import LogoWhite from '../../images/logo-white.png';
import LogoGreen from '../../images/logo-green.png';

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
      <LogoHeaderLink to="/">
        <LogoHeaderImg src={LogoWhite} alt="logo-header" />
      </LogoHeaderLink>
    </LogoHeaderWrapper>
  );
};

export const LogoFooter = () => {
  return (
    <LogoFooterWrapper>
      <LogoFooterLink to="/">
        <LogoFooterImg src={LogoGreen} alt="logo-footer" />
      </LogoFooterLink>
    </LogoFooterWrapper>
  );
};
