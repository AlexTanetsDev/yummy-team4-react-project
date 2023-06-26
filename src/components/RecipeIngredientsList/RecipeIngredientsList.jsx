import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
import { vegetablesBasket } from 'images';

export const RecipeIngredientsList = ({ ingredients, backTo, state }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('shoppingList'));
    if (items) {
      setList(items);
    }
  }, []);

  const handleAddtoShoppingList = () => {
    if (list.length > 0) {
      const res = addToShoppingList(list);
      if (res) {
        setList([]);
        localStorage.setItem('shoppingList', JSON.stringify([]));
        toast.success(t('Added'));
        navigate('/shopping-list', { state: backTo });
        return;
      }
      toast.error(t('Oops.. something went wrong try again'));
      return;
    }
    toast.error(t('Ingredients allready added'));
  };

  return (
    <IngredientsSection>
      <TableTitlesBox>
        <TableTitle>{t('Ingredients')}</TableTitle>
        <Wrapper>
          <TableTitle>{t('Number')}</TableTitle>
          <TableTitle>{t('Add to list')}</TableTitle>
        </Wrapper>
      </TableTitlesBox>
      <IngredietntsList>
        {ingredients?.map(item => {
          return (
            <IngredientItem key={item.id}>
              <IngredientWrapper>
                <IngredientPhoto
                  src={item.image ? item.image : vegetablesBasket}
                  alt="ingredient image"
                />
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
        {t('Add to shopping list')}
      </RemoveFromFavoriteBtn>
    </IngredientsSection>
  );
};
