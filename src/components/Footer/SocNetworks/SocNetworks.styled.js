import styled from 'styled-components';

export const SocLinkList = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 18px;
  }
  svg {
    fill: ${p => p.theme.colors.footerSocialIcon};
    transition: ${p => p.theme.transitions.main};
    :hover {
      fill: ${p => p.theme.colors.mainBgColor};
    }
  }
`;
