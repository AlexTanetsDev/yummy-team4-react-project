import React from 'react';

import Logo from '../../Logo/Logo';
import { LogoWrapper, Title } from './LogoFooter.styled';

const LogoFooter = () => {
  return (
    <LogoWrapper>
      <Logo inv="true" footer="true" />
      <Title>So Yummy</Title>
    </LogoWrapper>
  );
};

export default LogoFooter;