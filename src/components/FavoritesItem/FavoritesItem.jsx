import { FiTrash2 } from 'react-icons/fi';

import {
  SeeRecipeButtonBlack,
  FavoritesDeleteButton,
} from 'components/Button/Button';

import {
  StyledFavoritesItem,
  ImageWrapper,
  InfoWrapper,
  Image,
  Title,
  TextWrapper,
  DescriptionText,
  InstructionsText,
  TimeWrapper,
  TimeText,
} from './FavoritesItem.styled';

export const FavoritesItem = ({
  id,
  title,
  description,
  instructions,
  time,
  preview,
  onClick,
  onDelete,
}) => {
  const recipeId = id;
  console.log(recipeId);

  return (
    <>
      <StyledFavoritesItem>
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
            <TimeText>{time}</TimeText>
          </TimeWrapper>
        </InfoWrapper>
        <SeeRecipeButtonBlack onClick={onClick} children="See recipe" />
      </StyledFavoritesItem>
    </>
  );
};
