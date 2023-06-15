import {
  RecipeLabel,
  SearchedRecipesItem,
  RecipesList,
  RecipePreview,
  ImageWrapper,
  ImageBasket,
  Title,
} from './SearchedRecipesList.styled';
import { vegetablesBasket } from '../../images/index';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const SearchedRecipesList = ({ recipes }) => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <RecipesList>
      {recipes && recipes.length > 0 ? (
        recipes.map(({ _id, title, preview }) => (
          <SearchedRecipesItem
            key={_id}
            to={`/recipe/${_id}`}
            state={{ from: location }}
          >
            <RecipeLabel>
              {title.length > 25 ? title.slice(0, 25) + '...' : title}
            </RecipeLabel>
            <RecipePreview src={preview} alt={title} />
          </SearchedRecipesItem>
        ))
      ) : (
        <ImageWrapper>
          <ImageBasket src={vegetablesBasket} alt="Vegetables basket" />
          <Title>{t('Try looking for something else...')}</Title>
        </ImageWrapper>
      )}
    </RecipesList>
  );
};
