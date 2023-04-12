import { useEffect, useState } from 'react';

import { PopularApi } from '../../apiService';
import { AlertMessage } from '../../components/AlertMessage/AlertMessage';
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
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
	    (async() => {
      try {
        setIsLoading(true);
        const data  = await PopularApi.fetchPopularList();
        setPopular(data);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <ContainerPopular>
      {error && (
        <AlertMessage>
          Oops, something went wrong. Please try again later...
        </AlertMessage>
      )}
      {isLoading ? (
        <AlertMessage>Loading...</AlertMessage>
      ) : (
        <>
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
        </>
      )}
    </ContainerPopular>
  );
};
