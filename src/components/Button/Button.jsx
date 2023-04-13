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

export const SingInButton = () => {
  return <SingInBtn to="/signin">Sign in</SingInBtn>;
};

export const SingInButtonGreen = ({ type = 'button', onClick, children }) => {
  return (
    <SingInBtnGreen type={type} onClick={onClick}>
      {children}
    </SingInBtnGreen>
  );
};

export const RegistrationButton = () => {
  return <RegistrationBtn to="/register">Register</RegistrationBtn>;
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

export const SeeRecipeButtonBlack = ({ to, children }) => {
  return <SeeRecipeBtnBlack to={to}>{children}</SeeRecipeBtnBlack>;
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
