import {
  ContainerPopular,
  Title,
  PopularList,
  PopularItem,
  RecipeLink,
  ImageWrapper,
  InfoWrapper,
  TitleRecipe,
  Image,
  Description,
  SocialContainer,
  Social,
} from './PopularRecipe.styled';

export const PopularRecipe = ({ popular }) => {
  return (
      <ContainerPopular>
        <SocialContainer>
          <Title>Folow us</Title>
          <Social />
        </SocialContainer>
        <Title>Popular recipe</Title>
        <PopularList>
          {popular.map(({ id, preview, title, description }) => (
            <PopularItem key={id}>
              <RecipeLink to={`/recepie/${id}`}>
                <ImageWrapper>
                  <Image src={preview} alt={title} />
                </ImageWrapper>
                <InfoWrapper>
                  <TitleRecipe>{title}</TitleRecipe>
                  <Description>{description}</Description>
                </InfoWrapper>
              </RecipeLink>
            </PopularItem>
          ))}
        </PopularList>
      </ContainerPopular>
  );
};
