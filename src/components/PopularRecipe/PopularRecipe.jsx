import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PopularApi } from '../../apiService';
import { MiniLoader } from 'components/Loader/Loader';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';
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
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await PopularApi.fetchPopularList();
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
      {error && <AlertMessage>{t('Oops, something went wrong')}</AlertMessage>}
      {isLoading ? (
        <MiniLoader />
      ) : (
        <>
          {popular.length > 0 ? (
            <>
              <Title>{t('Popular recipe')}</Title>
              <PopularList>
                {popular.map(({ id, preview, title, description }) => (
                  <PopularItem key={id}>
                    <RecipeLink to={`/recipe/${id}`} state={{ from: location }}>
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
              <Title>{t('No recipes are found')}</Title>
            </ContainerEmpty>
          )}
        </>
      )}
    </ContainerPopular>
  );
};
