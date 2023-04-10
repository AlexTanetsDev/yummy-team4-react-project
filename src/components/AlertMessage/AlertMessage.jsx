import { AlertWrapper, Message } from './AlertMessage.styled';

export const AlertMessage = ({ children }) => {
  return (
    <AlertWrapper>{children && <Message>{children}</Message>}</AlertWrapper>
  );
};
