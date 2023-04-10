import { useMediaQuery } from 'react-responsive';

import { Container } from 'components/Container/Container';

import {
  squareGreen,
  squareDark,
  circleDark,
  leftSpinachDesktop,
  leftSpinachTablet,
  leftSpinachMobile,
  rightSpinachDesktop,
  rightSpinachTablet,
  rightSpinachMobile,
} from 'images';

import {
  LeftGreenDecorWrapper,
  RightGreenDecorWrapper,
  ImageGreen,
  DarkDecorWrapper,
  ImageDark,
  LeftSpinachWrapper,
  LeftSpinachImage,
  RightSpinachWrapper,
  RightSpinachImage,
} from './BackgroundDecor.styled';

export const BackgroundDecorHeader = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <>
      <Container>
        <LeftGreenDecorWrapper>
          <ImageGreen src={squareGreen} alt="left-green-decor" />
        </LeftGreenDecorWrapper>
        <DarkDecorWrapper>
          {isMobile ? (
            <ImageDark src={circleDark} alt="mobile-dark-decor" />
          ) : (
            <ImageDark src={squareDark} alt="dark-decor" />
          )}
        </DarkDecorWrapper>
        <RightGreenDecorWrapper>
          <ImageGreen src={squareGreen} alt="right-green-decor" />
        </RightGreenDecorWrapper>
      </Container>
    </>
  );
};

export const BackgroundDecorFooter = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });

  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  return (
    <>
      <Container>
        <LeftSpinachWrapper>
          {isMobile && !isTablet && !isDesktop && (
            <LeftSpinachImage
              src={leftSpinachMobile}
              alt="left-spinach-decor"
            />
          )}
          {!isMobile && isTablet && !isDesktop && (
            <LeftSpinachImage
              src={leftSpinachTablet}
              alt="left-spinach-decor"
            />
          )}
          {!isMobile && !isTablet && isDesktop && (
            <LeftSpinachImage
              src={leftSpinachDesktop}
              alt="left-spinach-decor"
            />
          )}
        </LeftSpinachWrapper>
        <RightSpinachWrapper>
          {isMobile && !isTablet && !isDesktop && (
            <RightSpinachImage
              src={rightSpinachMobile}
              alt="right-spinach-decor"
            />
          )}
          {!isMobile && isTablet && !isDesktop && (
            <RightSpinachImage
              src={rightSpinachTablet}
              alt="right-spinach-decor"
            />
          )}
          {!isMobile && !isTablet && isDesktop && (
            <RightSpinachImage
              src={rightSpinachDesktop}
              alt="right-spinach-decor"
            />
          )}
        </RightSpinachWrapper>
      </Container>
    </>
  );
};
