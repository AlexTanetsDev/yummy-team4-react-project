import { useEffect, useState } from 'react';
import { PopularApi } from '../../apiService';

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
  ContainerEmpty,
} from './PopularRecipe.styled';

export const PopularRecipe = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    PopularApi.fetchPopularList().then(resp => setPopular(resp));
  }, []);

  return (
    <ContainerPopular>
      {popular.length > 0 ? (
        <>
          <Title>Popular recipe</Title>
          <PopularList>
            {popular.map(({ id, preview, title, description }) => (
              <PopularItem key={id}>
                <RecipeLink to={`/recipe/${id}`}>
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
        </>
      ) : (
        <ContainerEmpty>
          <Title>No popular recipe...</Title>
        </ContainerEmpty>
      )}
    </ContainerPopular>
  );
};
