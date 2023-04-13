import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  SeeRecipeButtonGreen,
  MyRecipesDeleteButton,
} from 'components/Button/Button';

import {
  StyledMyRecipesItem,
  ImageWrapper,
  InfoWrapper,
  Image,
  Title,
  TextWrapper,
  DescriptionText,
  InstructionsText,
  TimeWrapper,
  TimeText,
} from './MyRecipesItem.styled';

export const MyRecipesItem = ({
  id,
  title,
  description,
  instructions,
  time,
  preview,
  onDelete,
}) => {
  return (
    <>
      <StyledMyRecipesItem>
        <ImageWrapper>
          <Image src={preview} alt={title} />
        </ImageWrapper>
        <InfoWrapper>
          <Title>{title}</Title>
          <TextWrapper>
            <DescriptionText>{description}</DescriptionText>
            {instructions.map(i => (
              <InstructionsText>{i}</InstructionsText>
            ))}
          </TextWrapper>
          <TimeWrapper>
            <TimeText>{time} min</TimeText>
          </TimeWrapper>
        </InfoWrapper>

        <Link to={`/recipe/${id}`}>
          <SeeRecipeButtonGreen children="See recipe" />
        </Link>
        <MyRecipesDeleteButton onClick={onDelete} children={<FiTrash2 />} />
      </StyledMyRecipesItem>
    </>
  );
};
