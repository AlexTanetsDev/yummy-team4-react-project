import React from 'react';
import { useState, useEffect } from 'react';
import { IngridientsShoppingList } from '../components/IngredientsShoppingList/IngredientsShoppingList';
import {
  deleteShoppingListItem,
  fetchShoppingList,
} from 'apiService/ShoppingListApi';
import { Container } from 'components/Container/Container';

export default function ShoppingList() {
  const [ingridients, setIngridients] = useState([]);
  useEffect(() => {
    fetchShoppingList().then(resp => setIngridients(resp.data));
  }, []);

  const handleDelete = id => {
    deleteShoppingListItem(id).then(resp =>
      setIngridients(ingridients.filter(item => item._id !== id))
    );
  };

  return (
    <Container>
      <h1>Shopping List</h1>
      <IngridientsShoppingList
        handleDelete={handleDelete}
        ingridients={ingridients}
      />
    </Container>
  );
}
