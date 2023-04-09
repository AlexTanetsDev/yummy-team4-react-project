import React from 'react';
import { useState, useEffect } from 'react';
import { IngridientsShoppingList } from '../components/IngredientsShoppingList/IngredientsShoppingList';
import api, { baseUrl } from 'apiService/ShoppingListApi';

export const ShoppingList = () => {
  const [ingridients, setIngridients] = useState([]);
  useEffect(() => {
    api.FetchShoppingList(baseUrl).then(resp => setIngridients(resp.results));
  }, []);

  return (
    <div>
      <h1>Shopping List</h1>
      <IngridientsShoppingList ingridients={ingridients} />
    </div>
  );
};

export default ShoppingList;
