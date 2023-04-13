import { ThreeDots as Spinner } from 'react-loader-spinner';

import { SectionLoaderOverlay, MainLoaderOverlay } from './Loader.styled';

export const SectionLoader = () => {
  return (
    <SectionLoaderOverlay>
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
    </SectionLoaderOverlay>
  );
};

export const MainLoader = () => {
  return (
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
  );
};
