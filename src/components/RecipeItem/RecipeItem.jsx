// import StyledRecipeItem,
// InfoWrapper,
// ImageWrapper,
// Image,
// Title,
// './RecipeItem.styled';
import { Link } from 'react-router-dom';
import { ImgRecipe, Recipe, TitleRecipe } from './RecipeItem.styled';

export const RecipeItem = ({ id, title, preview }) => {
  return (
    <>
      <Recipe key={id}>
        <Link to={`/recipe/${id}`}>
          <ImgRecipe src={preview} alt={title} />
          <TitleRecipe>{title}</TitleRecipe>
        </Link>
      </Recipe>
    </>
  );
};
