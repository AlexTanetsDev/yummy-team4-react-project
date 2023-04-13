import { Link } from 'react-router-dom';
import { shortensTitleLength } from 'helpers/shortensTitleLength';
import { ImgRecipe, Recipe, TitleRecipe } from './RecipeItem.styled';

export const RecipeItem = ({ id, title, preview }) => {
  return (
    <>
      <Recipe key={id}>
        <Link to={`/recipe/${id}`}>
          <ImgRecipe src={preview} alt={title} />
          <TitleRecipe>{shortensTitleLength(title)}</TitleRecipe>
        </Link>
      </Recipe>
    </>
  );
};
