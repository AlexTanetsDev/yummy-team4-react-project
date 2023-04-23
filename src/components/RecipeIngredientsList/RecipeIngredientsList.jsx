import { useEffect, useState } from 'react';
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
import { RemoveFromFavoriteBtn } from 'components/Button/Button';
import { toast } from 'react-hot-toast';

export const RecipeIngredientsList = ({ ingredients }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('shoppingList'));
    if (items) {
      setList(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(list));
  }, [list]);

  const handleAddtoShoppingList = () => {
    if (list.length > 0) {
      const res = addToShoppingList(list);
      if (res) {
        setList([]);
        toast.success('Added to shopping list');
      }
      toast.error('Something went wrong. Try again.');
    }
    toast.error('Ingredients allready added');
  };

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
                <CheckBoxCustom list={list} setList={setList} item={item} />
              </MeasureCheckBoxWrapper>
            </IngredientItem>
          );
        })}
      </IngredietntsList>
      <RemoveFromFavoriteBtn onClick={handleAddtoShoppingList}>
        Add to shopping list
      </RemoveFromFavoriteBtn>
    </IngredientsSection>
  );
};
