import PropTypes from 'prop-types';
import { IngridientsShoppingListItem } from './IngridientsShoppingListItem';
import { Header, ProductsWrapper,NumberIRemoveWrapper } from './IngredientsShoppingList.styled';

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

      <ul>
        {ingridients.map(item => (
          <IngridientsShoppingListItem
            key={item._id}
            item={item}
            handleDelete={handleDelete}
          />
        ))}
      </ul>

      {/* <>
        <table>
          <Header>
            <tr>
              <th>Products</th>
              <th>Number</th>
              <th>Remove</th>
            </tr>
          </Header>
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
      </> */}
    </>
  );
};

export default IngridientsShoppingList;

IngridientsShoppingList.propTypes = {
  ingridients: PropTypes.array.isRequired,
};
