// import StyledRecipeItem,
// InfoWrapper,
// ImageWrapper,
// Image,
// Title,
// './RecipeItem.styled';
import { Link } from 'react-router-dom';
import {
  ImgRecipe,
  Recipe,
  TitleRecipe,
  RecipesContainer,
} from './RecipeItem.styled';

export const RecipeItem = ({ id, title, preview }) => {
  return (
    <>
      {/* <StyledRecipeItem>
        <ImageWrapper>
          <Image src={preview} alt={title} />
        </ImageWrapper>
        <InfoWrapper>
          <Title>{title}</Title>
        </InfoWrapper>
      </StyledRecipeItem> */}
      <RecipesContainer>
        <Recipe key={id}>
          <Link to={`/recepie/${id}`}>
            <ImgRecipe src={preview} alt={title} />
            <TitleRecipe>{title}</TitleRecipe>
          </Link>
        </Recipe>
      </RecipesContainer>
    </>
  );
};
