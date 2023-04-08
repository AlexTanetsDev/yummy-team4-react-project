import {
  IngredientsSection,
  TableTitlesBox,
  TableTitle,
  Wrapper,
  IngredietntsList,
  IngredientItem,
  IngredientName,
  IngredientMeasure,
  CheckBox,
  MeasureCheckBoxWrapper,
  Pick,
  IngredientPhoto,
  IngredientWrapper,
  CheckBoxCustom,
} from './RecipeIngredientsList.styled';
import { pick, vegetablesBasket } from 'images';

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
        <IngredientItem onClick={e => console.log(e.target)}>
          <IngredientWrapper>
            <IngredientPhoto src={vegetablesBasket} alt="" />
            <IngredientName>Salmon</IngredientName>
          </IngredientWrapper>
          <MeasureCheckBoxWrapper>
            <IngredientMeasure>2 chopped</IngredientMeasure>
            {/* <CheckBox>
              <Pick src={pick} alt="" />
            </CheckBox> */}
            <CheckBoxCustom />
          </MeasureCheckBoxWrapper>
        </IngredientItem>
      </IngredietntsList>
    </IngredientsSection>
  );
};
