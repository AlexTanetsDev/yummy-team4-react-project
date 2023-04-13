import styled from 'styled-components';

export const LeftGreenDecorWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: ${p => p.theme.space(3)};
  left: ${p => p.theme.space(30)};

  @media (min-width: 768px) {
    top: ${p => p.theme.space(5.25)};
    left: ${p => p.theme.space(54.75)};
  }
  @media (min-width: 1440px) {
    top: ${p => p.theme.space(13)};
    left: ${p => p.theme.space(82)};
  }
`;

export const RightGreenDecorWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: ${p => p.theme.space(11.12)};
  right: ${p => p.theme.space(3.85)};

  @media (min-width: 768px) {
    top: ${p => p.theme.space(8.5)};
    right: ${p => p.theme.space(5.85)};
  }
  @media (min-width: 1440px) {
    top: ${p => p.theme.space(16.25)};
    right: ${p => p.theme.space(42.85)};
  }
`;

export const ImageGreen = styled.img`
  width: ${p => p.theme.space(2)};
  height: ${p => p.theme.space(2)};

  @media (min-width: 768px) {
    width: ${p => p.theme.space(3.5)};
    height: ${p => p.theme.space(3.5)};
  }
`;

export const DarkDecorWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: ${p => p.theme.space(19.36)};
  right: ${p => p.theme.space(30.01)};

  @media (min-width: 768px) {
    top: ${p => p.theme.space(22.75)};
    right: ${p => p.theme.space(78.76)};
  }
  @media (min-width: 1440px) {
    top: ${p => p.theme.space(34.75)};
    right: ${p => p.theme.space(154.26)};
  }
`;

export const ImageDark = styled.img`
  width: ${p => p.theme.space(1.5)};
  height: ${p => p.theme.space(1.5)};

  @media (min-width: 768px) {
    width: ${p => p.theme.space(3)};
    height: ${p => p.theme.space(3)};
  }
`;

export const LeftSpinachWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: -${p => p.theme.space(45)};
  left: 0;

  @media (min-width: 768px) {
    top: -${p => p.theme.space(85)};
    left: 0px;
  }
  @media (min-width: 1440px) {
    top: -${p => p.theme.space(107)};
    left: 0;
  }
`;

export const LeftSpinachImage = styled.img`
  width: ${p => p.theme.space(64)};
  height: ${p => p.theme.space(98)};

  @media (min-width: 768px) {
    width: ${p => p.theme.space(105.75)};
    height: ${p => p.theme.space(161.5)};
  }
  @media (min-width: 1440px) {
    width: ${p => p.theme.space(139.5)};
    height: ${p => p.theme.space(213)};
  }
`;

export const RightSpinachWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: ${p => p.theme.space(83.25)};
  right: 0;

  @media (min-width: 768px) {
    top: ${p => p.theme.space(49)};
    right: 0px;
  }
  @media (min-width: 1440px) {
    top: ${p => p.theme.space(19.5)};
    right: 0;
  }
`;

export const RightSpinachImage = styled.img`
  width: ${p => p.theme.space(45)};
  height: ${p => p.theme.space(43)};

  @media (min-width: 768px) {
    width: ${p => p.theme.space(91.5)};
    height: ${p => p.theme.space(78.25)};
  }
  @media (min-width: 1440px) {
    width: ${p => p.theme.space(152)};
    height: ${p => p.theme.space(118.5)};
  }
`;
