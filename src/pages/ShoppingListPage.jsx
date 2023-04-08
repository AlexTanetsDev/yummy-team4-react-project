import React from 'react';
import { useState, useEffect } from 'react';
import { IngridientsShoppingList } from '../components/IngredientsShoppingList/IngredientsShoppingList'
import toast from 'react-hot-toast';
// import api, { baseUrl, key, type } from 'Fetch/Fetch';


export const ShoppingList = () => {
  const [ingridients, setIngridients] = useState([]);
  useEffect(() => {
    api
      .FetchTrending(baseUrl, key, type)
      .then(resp => setIngridients(resp.results))
      .catch(() => {
        toast.error('Ups... Something is wrong.', {
          duration: 4000,
          position: 'top-center',
        });
      });
  }, []);

  return (
    <div>
      <h1>Shopping List</h1>
      <IngridientsShoppingList ingridients={ingridients} />
    </div>
  );
};

export default ShoppingList;
