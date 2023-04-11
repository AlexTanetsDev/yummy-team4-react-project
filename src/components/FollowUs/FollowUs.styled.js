import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    margin-bottom: ${p => p.theme.space(25)};
  }
`;

export const Title = styled.h2`
  display: inline-block;
  margin: 0;
  margin-bottom: ${p => p.theme.space(8)};

  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: ${p => p.theme.colors.itemTitleColor};

  @media (min-width: 768px) {
    margin-bottom: ${p => p.theme.space(10)};
  }
`;

export const SocLinkList = styled.ul`
  display: flex;
  align-items: center;

  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const SocLinkItem = styled.li`
  background-color: ${p => p.theme.colors.mainBgColor};

  :hover {
    fill: ${p => p.theme.colors.firstAccentColor};
  }

  svg {
    fill: ${p => p.theme.colors.firstAccentColor};
    transition: ${p => p.theme.transitions.main};

    :hover {
      fill: ${p => p.theme.colors.darkBgColor};
    }
  }
`;