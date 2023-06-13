import { useMediaQuery } from 'react-responsive';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FiTrash2 } from 'react-icons/fi';

import {
  SeeRecipeButtonBlack,
  FavoritesDeleteButton,
} from 'components/Button/Button';

import {
  StyledFavoriteItem,
  ImageWrapper,
  InfoWrapper,
  Image,
  Title,
  TextWrapper,
  DescriptionText,
  InstructionsText,
  TimeWrapper,
  TimeText,
} from './FavoriteItem.styled';

export const FavoriteItem = ({
  id,
  title,
  description,
  instructions,
  time,
  preview,
  onDelete,
}) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <>
      {isMobile ? (
        <StyledFavoriteItem>
          <FavoritesDeleteButton onClick={onDelete} children={<FiTrash2 />} />
          <NavLink to={`/recipe/${id}`} state={{ from: location }}>
            <ImageWrapper>
              <Image src={preview} alt={title} />
            </ImageWrapper>
          </NavLink>
          <InfoWrapper>
            <Title>{title}</Title>
            <TextWrapper>
              <DescriptionText>{description}</DescriptionText>
              <InstructionsText>{instructions}</InstructionsText>
            </TextWrapper>
            <TimeWrapper>
              <TimeText>
                {time} {t('Min')}
              </TimeText>
            </TimeWrapper>
          </InfoWrapper>
        </StyledFavoriteItem>
      ) : (
        <StyledFavoriteItem>
          <FavoritesDeleteButton onClick={onDelete} children={<FiTrash2 />} />
          <ImageWrapper>
            <Image src={preview} alt={title} />
          </ImageWrapper>
          <InfoWrapper>
            <Title>{title}</Title>
            <TextWrapper>
              <DescriptionText>{description}</DescriptionText>
              <InstructionsText>{instructions}</InstructionsText>
            </TextWrapper>
            <TimeWrapper>
              <TimeText>
                {time} {t('Min')}
              </TimeText>
            </TimeWrapper>
          </InfoWrapper>
          <SeeRecipeButtonBlack
            to={`/recipe/${id}`}
            state={{ from: location }}
            children={t('See recipe')}
          />
        </StyledFavoriteItem>
      )}
    </>
  );
};
