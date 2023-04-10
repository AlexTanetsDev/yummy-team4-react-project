import {
  StyledRecipeItem,
  InfoWrapper,
  ImageWrapper,
  Image,
  Title,
} from './RecipeItem.styled';

export const RecipeItem = ({ title, preview }) => {
  return (
    <>
      <StyledRecipeItem>
        <ImageWrapper>
          <Image src={preview} alt={title} />
        </ImageWrapper>
        <InfoWrapper>
          <Title>{title}</Title>
        </InfoWrapper>
      </StyledRecipeItem>
    </>
  );
};
