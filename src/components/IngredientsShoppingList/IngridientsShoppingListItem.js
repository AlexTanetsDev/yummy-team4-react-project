import React from 'react';
import PropTypes from 'prop-types';

export const IngridientsShoppingListItem = ({ ingridient }) => {
  return (
    <>
      <tr>
        <th>{ingridient.thumb}</th>
        <th>{ingridient.title}</th>
        <th>{ingridient.quantity}</th>
        <th><button></button></th>
      </tr>
    </>
  );
};

export default IngridientsShoppingListItem;
IngridientsShoppingListItem.propTypes = {
  movie: PropTypes.object,
};
