import PropTypes from 'prop-types';
import { IngridientsShoppingListItem } from './IngridientsShoppingListItem';
import {
  Header,
  NumberIRemoveWrapper,
  ShppList,
} from './IngredientsShoppingList.styled';

export const IngridientsShoppingList = ({ ingridients, handleDelete }) => {
  return (
    <>
      <Header>
        <div>
          <span>Products</span>
        </div>
        <NumberIRemoveWrapper>
          <span>Number</span>
          <span>Remove</span>
        </NumberIRemoveWrapper>
      </Header>

      <ShppList>
        {ingridients.map(item => (
          <IngridientsShoppingListItem
            key={item._id}
            item={item}
            handleDelete={handleDelete}
          />
        ))}
      </ShppList>
    </>
  );
};

export default IngridientsShoppingList;

IngridientsShoppingList.propTypes = {
  ingridients: PropTypes.array.isRequired,
};
