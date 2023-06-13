import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { IngridientsShoppingList } from '../components/IngredientsShoppingList/IngredientsShoppingList';
import {
  deleteShoppingListItem,
  fetchShoppingList,
} from 'apiService/ShoppingListApi';
import { Container } from 'components/Container/Container';
import { ShoppingListTitle } from 'components/IngredientsShoppingList/IngredientsShoppingList.styled';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { GoBackToRecipeBtn } from 'components/Button/Button';
import { MiniLoader } from 'components/Loader/Loader';

const ShoppingList = () => {
  const [ingridients, setIngridients] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const shoppingList = await fetchShoppingList();
        setIngridients(shoppingList.data);
      } catch (error) {
      } finally {
        setIsLoading(false);
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }, 300);
      }
    })();
  }, []);

  const handleDelete = id => {
    deleteShoppingListItem(id).then(resp =>
      setIngridients(ingridients.filter(item => item._id !== id))
    );
    toast.success(t('Deleted'));
  };

  return (
    <Container>
      <ShoppingListTitle>{t('Shopping List')}</ShoppingListTitle>

      {isLoading ? (
        <MiniLoader />
      ) : (
        <IngridientsShoppingList
          handleDelete={handleDelete}
          ingridients={ingridients}
          state={location.state}
        />
      )}
      {location.state && (
        <GoBackToRecipeBtn from={location.state}>
          {t('Back to recipes')}
        </GoBackToRecipeBtn>
      )}
    </Container>
  );
};

export default ShoppingList;
