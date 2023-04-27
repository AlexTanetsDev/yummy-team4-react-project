import { Link, useLocation } from 'react-router-dom';
import { shortensTitleLength } from 'helpers/shortensTitleLength';
import { ImgRecipe, Recipe, TitleRecipe } from './RecipeItem.styled';

export const RecipeItem = ({ id, title, preview, onClick }) => {
  const location = useLocation();
  return (
    <>
      <Recipe key={id}>
        <Link to={`/recipe/${id}`} onClick={onClick} state={{ from: location }}>
          <ImgRecipe src={preview} alt={title} />
          <TitleRecipe>{shortensTitleLength(title)}</TitleRecipe>
        </Link>
      </Recipe>
    </>
  );
};
