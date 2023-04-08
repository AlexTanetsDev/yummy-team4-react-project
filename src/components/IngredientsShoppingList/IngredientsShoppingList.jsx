import PropTypes from 'prop-types';
import { IngridientsShoppingListItem } from './IngredientsShoppingListItem';
// import { useEffect, useState, Suspense } from 'react';

export const IngridientsShoppingList = ({ ingridients }) => {
  return (
    <>
      <h2>Shopping List</h2>
      <table>
        <tr>
          <th>Products</th>
          <th>Number</th>
          <th>Remove</th>
        </tr>

        {ingridients.map(item => (
          <IngridientsShoppingListItem item={item} />
        ))}
      </table>
    </>
  );
};

export default IngridientsShoppingList;

IngridientsShoppingList.propTypes = {
  ingridients: PropTypes.array.isRequired,
};
