import React from 'react';
import PropTypes from 'prop-types';
export const IngridientsShoppingListItem = ({ item, handleDelete }) => {
  return (
    <>
      <tr>
        <th>
          <img src={item.thumb} alt={item.title} />
        </th>
        <th>{item.title}</th>
        <th>{item.quantity}</th>
        <th>
          <button type="button" onClick={() => handleDelete(item._id)}>
            X
          </button>
        </th>
      </tr>
    </>
  );
};

export default IngridientsShoppingListItem;
IngridientsShoppingListItem.propTypes = {
  movie: PropTypes.object,
};
