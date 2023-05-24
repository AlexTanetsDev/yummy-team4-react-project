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
  FavoritesDeleteBtn,
  MyRecipesDeleteBtn,
  RemoveFavoriteRecBtn,
  ButtonUp,
  BackTorecipeBtn,
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
    <SingInBtn to="/signin" type={type} onClick={onClick}>
      {children}
    </SingInBtn>
  );
};

export const ResendEmailButton = ({ type = 'button', onClick, children }) => {
  return (
    <SingInBtn type={type} onClick={onClick}>
      {children}
    </SingInBtn>
  );
};

export const SingInButtonGreen = ({ type = 'button', children }) => {
  return <SingInBtnGreen type={type}>{children}</SingInBtnGreen>;
};


export const RegistrationButton = ({ type = 'button', onClick, children }) => {
  return (
    <RegistrationBtn to="/register" type={type} onClick={onClick}>
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

export const RemoveFromFavoriteBtn = ({
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <RemoveFavoriteRecBtn type={type} onClick={onClick}>
      {children}
    </RemoveFavoriteRecBtn>
  );
};

export const SeeRecipeButtonBlack = ({ to, children, state }) => {
  return (
    <SeeRecipeBtnBlack to={to} state={state}>
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

export const FavoritesDeleteButton = ({
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <FavoritesDeleteBtn type={type} onClick={onClick}>
      {children}
    </FavoritesDeleteBtn>
  );
};

export const MyRecipesDeleteButton = ({
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <MyRecipesDeleteBtn type={type} onClick={onClick}>
      {children}
    </MyRecipesDeleteBtn>
  );
};

export const ButtonScrollUp = ({
  type = 'button',
  onClick,
  children,
  isButtonUp,
}) => {
  return (
    <ButtonUp type={type} onClick={onClick} isButtonUp={isButtonUp}>
      {children}
    </ButtonUp>
  );
};

export const GoBackToRecipeBtn = ({ from, children }) => {
  return <BackTorecipeBtn to={from}>{children}</BackTorecipeBtn>;
};
