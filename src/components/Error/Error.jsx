import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
import {
  ErrorContainer,
  AlertContainer,
  AlertTextPartOne,
  AlertTextPartTwo,
  AlertTextLink,
  ErrorImage,
} from './Error.styled';

import notFoundPeopleMob1x from '../../images/notFound/not_found_people_mob_1x.png';
import notFoundPeopleMob2x from '../../images/notFound/not_found_people_mob_2x.png';
import notFoundPeopleTab1x from '../../images/notFound/not_found_people_tab_1x.png';
import notFoundPeopleTab2x from '../../images/notFound/not_found_people_tab_2x.png';
import notFoundPeopleDesk1x from '../../images/notFound/not_found_people_desk_1x.png';
import notFoundPeopleDesk2x from '../../images/notFound/not_found_people_desk_2x.png';

const getImageSrc = (
  pixelRatio = window.devicePixelRatio || 1,
  screenWidth = window.innerWidth
) => {
  const images = {
    mobile: {
      '1x': notFoundPeopleMob1x,
      '2x': notFoundPeopleMob2x,
    },
    tablet: {
      '1x': notFoundPeopleTab1x,
      '2x': notFoundPeopleTab2x,
    },
    desktop: {
      '1x': notFoundPeopleDesk1x,
      '2x': notFoundPeopleDesk2x,
    },
  };

  const deviceType =
    screenWidth <= 767
      ? 'mobile'
      : screenWidth >= 768 && screenWidth <= 1440
      ? 'tablet'
      : 'desktop';
  const imageDensity = pixelRatio > 1 ? '2x' : '1x';

  return images[deviceType][imageDensity];
};

const Alert = () => {
  return (
    <ThemeProvider theme={theme}>
      <AlertContainer>
        <AlertTextPartOne>We are sorry,</AlertTextPartOne>
        <AlertTextPartTwo>
          but you are not logged in. Please return to the{' '}
          <AlertTextLink to="/">main page...</AlertTextLink>
        </AlertTextPartTwo>
      </AlertContainer>
    </ThemeProvider>
  );
};

export const Error = () => {
  return (
    <ErrorContainer>
      <ErrorImage src={getImageSrc()} alt="Logo" />
      <Alert />
    </ErrorContainer>
  );
};
