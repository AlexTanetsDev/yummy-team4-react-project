import {
  RecipePreparationWrapper,
  PreparationTitle,
  PreparationList,
  PreparationListItem,
  Point,
  PreparationText,
  RecipeImage,
} from './RecipePreparation.styled';

export const RecepiePreparation = ({ image, instructions }) => {
  let pointNumber = 0;

  return (
    <RecipePreparationWrapper>
      <div>
        <PreparationTitle>Recipe Preparation</PreparationTitle>
        <PreparationList>
          {instructions?.map(item => {
            if (item === '\r') {
              return null;
            }

            pointNumber += 1;
            return (
              <PreparationListItem key={pointNumber}>
                <Point>{pointNumber}</Point>
                <PreparationText>{item}</PreparationText>
              </PreparationListItem>
            );
          })}
        </PreparationList>
      </div>
      <RecipeImage src={image} alt="Recipe photo" />
    </RecipePreparationWrapper>
  );
};
