import { FiTrash2 } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  const location = useLocation();
  const { t } = useTranslation();

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
            <InstructionsText>{instructions}</InstructionsText>
          </TextWrapper>
          <TimeWrapper>
            <TimeText>
              {time} {t('Min')}
            </TimeText>
          </TimeWrapper>
        </InfoWrapper>
        <Link to={`/recipe/${id}`} state={{ from: location }}>
          <SeeRecipeButtonGreen children={t('See recipe')} />
        </Link>
        <MyRecipesDeleteButton onClick={onDelete} children={<FiTrash2 />} />
      </StyledMyRecipesItem>
    </>
  );
};
