import React from 'react';
import { useState, useEffect } from 'react';
import { IngridientsShoppingList } from '../components/IngredientsShoppingList/IngredientsShoppingList';
import {
  deleteShoppingListItem,
  fetchShoppingList,
} from 'apiService/ShoppingListApi';
import { Container } from 'components/Container/Container';
import { ShoppingListTitle } from 'components/IngredientsShoppingList/IngredientsShoppingList.styled';
import { toast } from 'react-hot-toast';

const ShoppingList = () => {
  const [ingridients, setIngridients] = useState([]);
  useEffect(() => {
    fetchShoppingList().then(resp => setIngridients(resp.data));
  }, []);

  const handleDelete = id => {
    deleteShoppingListItem(id).then(resp =>
      setIngridients(ingridients.filter(item => item._id !== id))
    );
    toast.success('Ingredient removed');
  };

  return (
    <Container>
      <ShoppingListTitle>Shopping List</ShoppingListTitle>

      <IngridientsShoppingList
        handleDelete={handleDelete}
        ingridients={ingridients}
      />
    </Container>
  );
};

export default ShoppingList;
