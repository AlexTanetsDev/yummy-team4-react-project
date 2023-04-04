import {
  SearchBtnBlack,
  SearchBtnGreen,
  SingInBtn,
  SingInBtnGreen,
  RegistrationBtn,
  OtherCategoriesBtn,
  SubscribeBtnGreen,
  SubscribeBtnBlack,
  SaveChangesBtn,
  SeeAllBtn,
  LogOutBtn,
  CancelBtn,
  AddBtn,
  AddToFavoriteBtn,
  SeeRecipeBtnBlack,
  SeeRecipeBtnGreen,
} from './Button.styled';

export const SearchButtonBlack = ({ type = 'button', onClick, children }) => {
  return (
    <SearchBtnBlack type={type} onClick={onClick}>
      {children}
    </SearchBtnBlack>
  );
};

export const SearchButtonGreen = ({ type = 'button', onClick, children }) => {
  return (
    <SearchBtnGreen type={type} onClick={onClick}>
      {children}
    </SearchBtnGreen>
  );
};

export const SingInButton = ({ type = 'button', onClick, children }) => {
  return (
    <SingInBtn type={type} onClick={onClick}>
      {children}
    </SingInBtn>
  );
};

export const SingInButtonGreen = ({ type = 'button', onClick, children }) => {
  return (
    <SingInBtnGreen type={type} onClick={onClick}>
      {children}
    </SingInBtnGreen>
  );
};

export const RegistrationButton = ({ type = 'button', onClick, children }) => {
  return (
    <RegistrationBtn type={type} onClick={onClick}>
      {children}
    </RegistrationBtn>
  );
};

export const OtherCategoriesButton = ({
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <OtherCategoriesBtn type={type} onClick={onClick}>
      {children}
    </OtherCategoriesBtn>
  );
};

export const SubscribeButtonGreen = ({
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <SubscribeBtnGreen type={type} onClick={onClick}>
      {children}
    </SubscribeBtnGreen>
  );
};

export const SubscribeButtonBlack = ({
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <SubscribeBtnBlack type={type} onClick={onClick}>
      {children}
    </SubscribeBtnBlack>
  );
};

export const SaveChangesButton = ({ type = 'button', onClick, children }) => {
  return (
    <SaveChangesBtn type={type} onClick={onClick}>
      {children}
    </SaveChangesBtn>
  );
};

export const SeeAllButton = ({ type = 'button', onClick, children }) => {
  return (
    <SeeAllBtn type={type} onClick={onClick}>
      {children}
    </SeeAllBtn>
  );
};

export const LogOutButton = ({ type = 'button', onClick, children }) => {
  return (
    <LogOutBtn type={type} onClick={onClick}>
      {children}
    </LogOutBtn>
  );
};

export const CancelButton = ({ type = 'button', onClick, children }) => {
  return (
    <CancelBtn type={type} onClick={onClick}>
      {children}
    </CancelBtn>
  );
};

export const AddButton = ({ type = 'button', onClick, children }) => {
  return (
    <AddBtn type={type} onClick={onClick}>
      {children}
    </AddBtn>
  );
};

export const AddToFavoriteButton = ({ type = 'button', onClick, children }) => {
  return (
    <AddToFavoriteBtn type={type} onClick={onClick}>
      {children}
    </AddToFavoriteBtn>
  );
};

export const SeeRecipeButtonBlack = ({
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <SeeRecipeBtnBlack type={type} onClick={onClick}>
      {children}
    </SeeRecipeBtnBlack>
  );
};

export const SeeRecipeButtonGreen = ({
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <SeeRecipeBtnGreen type={type} onClick={onClick}>
      {children}
    </SeeRecipeBtnGreen>
  );
};
