import React from 'react';
import PropTypes from 'prop-types';
import {
  ItemWrapper,
  ImgTitleWrapper,
  Quantity,
  
} from './IngridientsShoppingListItem.styled';

export const IngridientsShoppingListItem = ({ item, handleDelete }) => {
  return (
    <>
      <li>
        <ItemWrapper>
          <ImgTitleWrapper>
            <img src={item.thumb} alt={item.title} width="93px" height="97px" />
            <div>{item.title}</div>
          </ImgTitleWrapper>
          <Quantity>{item.quantity}</Quantity>
          <div>
            <button type="button" onClick={() => handleDelete(item._id)}>
              X
            </button>
          </div>
        </ItemWrapper>
      </li>
    </>
  );
};

export default IngridientsShoppingListItem;
IngridientsShoppingListItem.propTypes = {
  movie: PropTypes.object,
};
