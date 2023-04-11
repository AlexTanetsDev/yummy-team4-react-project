import {
  IngredientsSection,
  TableTitlesBox,
  TableTitle,
  Wrapper,
  IngredietntsList,
  IngredientItem,
  IngredientName,
  IngredientMeasure,
  MeasureCheckBoxWrapper,
  IngredientPhoto,
  IngredientWrapper,
} from './RecipeIngredientsList.styled';
import { CheckBoxCustom } from 'components/CheckBoxForRecipeList/CheckBoxForRecipeList';
import { vegetablesBasket } from 'images';

export const RecipeIngredientsList = () => {
  return (
    <IngredientsSection>
      <TableTitlesBox>
        <TableTitle>Ingredients</TableTitle>
        <Wrapper>
          <TableTitle>Number</TableTitle>
          <TableTitle>Add to list</TableTitle>
        </Wrapper>
      </TableTitlesBox>
      <IngredietntsList>
        <IngredientItem>
          <IngredientWrapper>
            <IngredientPhoto src={vegetablesBasket} alt="" />
            <IngredientName>Salmon</IngredientName>
          </IngredientWrapper>
          <MeasureCheckBoxWrapper>
            <IngredientMeasure>400 g</IngredientMeasure>
            <CheckBoxCustom />
          </MeasureCheckBoxWrapper>
        </IngredientItem>
      </IngredietntsList>
    </IngredientsSection>
  );
};
