import { Link } from 'react-router-dom';
import {
  ImgRecipe,
  RecipeItem,
  RecipesContainer,
  TitleRecipe,
} from './ResipeCategoriItems.styled';

export const ResipeCategoriItems = ({ recipes }) => {
  const titleLength = title => {
    if (title.length >= 40) {
      const shortTitle = title.split(' ').slice(0, 5).join(' ') + '...';
      return shortTitle;
    }
    return title;
  };

  return (
    <>
      <RecipesContainer>
        {recipes.length !== 0 &&
          recipes.map(({ _id: id, title, thumb }) => {
            const shortTitle = titleLength(title);
            return (
              <RecipeItem key={id}>
                <Link to={`/recipe/${id}`}>
                  <ImgRecipe src={thumb} alt={title} />
                  <TitleRecipe>{shortTitle}</TitleRecipe>
                </Link>
              </RecipeItem>
            );
          })}
      </RecipesContainer>
    </>
  );
};
