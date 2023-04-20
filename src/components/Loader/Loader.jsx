import { useMediaQuery } from 'react-responsive';
import { ThreeDots as Spinner } from 'react-loader-spinner';

import { MiniLoaderOverlay, MainLoaderOverlay } from './Loader.styled';

export const MiniLoader = () => {
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
      {isMobile && !isTablet && !isDesktop && (
        <MiniLoaderOverlay>
          <Spinner
            height="80"
            width="80"
            radius="9"
            color="#8BAA36"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </MiniLoaderOverlay>
      )}
      {!isMobile && isTablet && !isDesktop && (
        <MiniLoaderOverlay>
          <Spinner
            height="120"
            width="120"
            radius="9"
            color="#8BAA36"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </MiniLoaderOverlay>
      )}
      {!isMobile && !isTablet && isDesktop && (
        <MiniLoaderOverlay>
          <Spinner
            height="150"
            width="150"
            radius="9"
            color="#8BAA36"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </MiniLoaderOverlay>
      )}
    </>
  );
};

export const MainLoader = () => {
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
      {isMobile && !isTablet && !isDesktop && (
        <MainLoaderOverlay>
          <Spinner
            height="100"
            width="100"
            radius="9"
            color="#8BAA36"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </MainLoaderOverlay>
      )}
      {!isMobile && isTablet && !isDesktop && (
        <MainLoaderOverlay>
          <Spinner
            height="300"
            width="300"
            radius="9"
            color="#8BAA36"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </MainLoaderOverlay>
      )}
      {!isMobile && !isTablet && isDesktop && (
        <MainLoaderOverlay>
          <Spinner
            height="400"
            width="400"
            radius="9"
            color="#8BAA36"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </MainLoaderOverlay>
      )}
    </>
  );
};
