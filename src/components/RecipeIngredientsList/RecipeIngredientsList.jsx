import { useEffect } from 'react';
import { addToShoppingList } from 'apiService/ShoppingListApi';
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

export const RecipeIngredientsList = ({ ingredients }) => {
  const shoppingList = [];
  useEffect(() => {
    return () => {
      if (shoppingList.length > 0) {
        addToShoppingList(shoppingList);
      }
    };
  }, [shoppingList, shoppingList.length]);

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
        {ingredients?.map(item => {
          return (
            <IngredientItem key={item.id}>
              <IngredientWrapper>
                <IngredientPhoto src={item.image} alt="ingredient image" />
                <IngredientName>{item.name}</IngredientName>
              </IngredientWrapper>
              <MeasureCheckBoxWrapper>
                <IngredientMeasure>{item.measure}</IngredientMeasure>
                <CheckBoxCustom list={shoppingList} item={item} />
              </MeasureCheckBoxWrapper>
            </IngredientItem>
          );
        })}
      </IngredietntsList>
    </IngredientsSection>
  );
};
