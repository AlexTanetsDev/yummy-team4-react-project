import React from 'react';

import { LogoWrapper, Title } from './LogoFooter.styled';
import { LogoFooter } from 'components/Logo/Logo';

const FooterLogo = () => {
  return (
    <LogoWrapper>
      <LogoFooter inv="true" footer="true" />
      <Title>So Yummy</Title>
    </LogoWrapper>
  );
};

export default FooterLogo;
