import {
  IngredientsSection,
  TableTitlesBox,
  TableTitle,
} from './RecipeIngredientsList.styled';

export const RecipeIngredientsList = () => {
  return (
    <IngredientsSection>
      <TableTitlesBox>
        <TableTitle>Ingredients</TableTitle>
        <div>
          <TableTitle>Number</TableTitle>
          <TableTitle>Add to list</TableTitle>
        </div>
      </TableTitlesBox>
      <ul></ul>
    </IngredientsSection>
  );
};
