import PropTypes from 'prop-types';
import { IngridientsShoppingListItem } from './IngridientsShoppingListItem';
import { tableHeader } from './IngredientsShoppingList.styled';

export const IngridientsShoppingList = ({ ingridients, handleDelete }) => {
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
            <IngridientsShoppingListItem
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            />
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
