import React from 'react';
import PropTypes from 'prop-types';
import { RxCross1 } from 'react-icons/rx';
import {
  QuantityWrapper,
  ImgTitleWrapper,
  Quantity,
  Button,
  Img,
  Item,
} from './IngridientsShoppingListItem.styled';
import { useTheme } from 'styled-components';

export const IngridientsShoppingListItem = ({ item, handleDelete }) => {
  const theme = useTheme();
  return (
    <Item>
      <ImgTitleWrapper>
        <Img src={item.thumb} alt={item.title} />
        <div>{item.title}</div>
      </ImgTitleWrapper>
      <QuantityWrapper>
        <Quantity>{item.quantity}</Quantity>
        <Button type="button" onClick={() => handleDelete(item._id)}>
          <RxCross1 size={15} color={theme.colors.shopingListCrossIcon} />
        </Button>
      </QuantityWrapper>
    </Item>
  );
};

export default IngridientsShoppingListItem;
IngridientsShoppingListItem.propTypes = {
  movie: PropTypes.object,
};
