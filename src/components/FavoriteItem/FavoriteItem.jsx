import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

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

  return (
    <>
      {isMobile ? (
        <StyledFavoriteItem>
          <FavoritesDeleteButton onClick={onDelete} children={<FiTrash2 />} />
          <NavLink to={`/recipes/id/${id}`}>
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
              <TimeText>{time} min</TimeText>
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
              <TimeText>{time} min</TimeText>
            </TimeWrapper>
          </InfoWrapper>
          <SeeRecipeButtonBlack
            to={`/recipes/id/${id}`}
            children="See recipe"
          />
        </StyledFavoriteItem>
      )}
    </>
  );
};
