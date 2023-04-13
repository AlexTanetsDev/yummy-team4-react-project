import { useEffect, useMemo } from 'react';
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const shoppingList = [];
  useEffect(() => {
    return () => {
      if (shoppingList.length > 0) {
        const res = addToShoppingList(shoppingList);
        if (res) {
          const numToSplice = shoppingList.length - 1;
          shoppingList.splice(0, numToSplice);
        }
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
