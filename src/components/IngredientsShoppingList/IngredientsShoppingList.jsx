import PropTypes from 'prop-types';
import { IngridientsShoppingListItem } from './IngridientsShoppingListItem';
// import { useEffect, useState, Suspense } from 'react';

export const IngridientsShoppingList = ({ ingridients }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th>Number</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {ingridients.map(item => (
            <IngridientsShoppingListItem item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default IngridientsShoppingList;

IngridientsShoppingList.propTypes = {
  ingridients: PropTypes.array.isRequired,
};
