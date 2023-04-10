import React from 'react';
import PropTypes from 'prop-types';
import {
  ItemWrapper,
  ImgTitleWrapper,
  Quantity,
  Button,
  Img,
} from './IngridientsShoppingListItem.styled';

export const IngridientsShoppingListItem = ({ item, handleDelete }) => {
  return (
    <>
      <li>
        <ItemWrapper>
          <ImgTitleWrapper>
            <Img src={item.thumb} alt={item.title} width="93px" height="97px" />
            <div>{item.title}</div>
          </ImgTitleWrapper>
          <Quantity>{item.quantity}</Quantity>
          <div>
            <Button type="button" onClick={() => handleDelete(item._id)}>
              X
            </Button>
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
