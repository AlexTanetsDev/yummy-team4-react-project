import { useMediaQuery } from 'react-responsive';

import { Container } from 'components/Container/Container';

import {
  squareGreen,
  squareDark,
  circleDark,
  leftSpinachDesktop1x,
  leftSpinachDesktop2x,
  leftSpinachTablet1x,
  leftSpinachTablet2x,
  leftSpinachMobile1x,
  leftSpinachMobile2x,
  rightSpinachDesktop1x,
  rightSpinachDesktop2x,
  rightSpinachTablet1x,
  rightSpinachTablet2x,
  rightSpinachMobile1x,
  rightSpinachMobile2x,
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
      <LeftSpinachWrapper>
        {isMobile && !isTablet && !isDesktop && (
          <LeftSpinachImage
            srcSet={leftSpinachMobile2x}
            src={leftSpinachMobile1x}
            alt="left-spinach-decor"
          />
        )}
        {!isMobile && isTablet && !isDesktop && (
          <LeftSpinachImage
            srcSet={leftSpinachTablet2x}
            src={leftSpinachTablet1x}
            alt="left-spinach-decor"
          />
        )}
        {!isMobile && !isTablet && isDesktop && (
          <LeftSpinachImage
            srcSet={leftSpinachDesktop2x}
            src={leftSpinachDesktop1x}
            alt="left-spinach-decor"
          />
        )}
      </LeftSpinachWrapper>
      <RightSpinachWrapper>
        {isMobile && !isTablet && !isDesktop && (
          <RightSpinachImage
            srcSet={rightSpinachMobile2x}
            src={rightSpinachMobile1x}
            alt="right-spinach-decor"
          />
        )}
        {!isMobile && isTablet && !isDesktop && (
          <RightSpinachImage
            srcSet={rightSpinachTablet2x}
            src={rightSpinachTablet1x}
            alt="right-spinach-decor"
          />
        )}
        {!isMobile && !isTablet && isDesktop && (
          <RightSpinachImage
            srcSet={rightSpinachDesktop2x}
            src={rightSpinachDesktop1x}
            alt="right-spinach-decor"
          />
        )}
      </RightSpinachWrapper>
    </>
  );
};
