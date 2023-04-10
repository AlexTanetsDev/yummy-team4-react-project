import { Link } from 'react-router-dom';
import {
  ImgRecipe,
  RecipeItem,
  RecipesContainer,
  TitleRecipe,
} from './ResipeCategoriItems.styled';

const ResipeCategoriItems = ({ recipes }) => {
  return (
    <>
      <RecipesContainer>
        {recipes.length !== 0 &&
          recipes.map(({ _id: id, title, thumb }) => (
            <RecipeItem key={id}>
              <Link to={`/recepie/${id}`}>
                <ImgRecipe src={thumb} alt={title} />
                <TitleRecipe>{title}</TitleRecipe>
              </Link>
            </RecipeItem>
          ))}
      </RecipesContainer>
    </>
  );
};

export default ResipeCategoriItems;
