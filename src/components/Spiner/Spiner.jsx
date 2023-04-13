import { TailSpin } from 'react-loader-spinner';

export const Spiner = ({size = 150, wrapperHeight = "auto", positionY = "center"}) => {
  return (
    <TailSpin
      height={size}
      width={size}
      color="#8BAA36"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        display: 'flex',
        height:  wrapperHeight,
        alignItems: positionY,
        justifyContent: 'center',
        margin: '0 auto',
      }}
      visible={true}
    />
  );
};