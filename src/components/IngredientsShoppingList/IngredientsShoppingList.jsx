import PropTypes from 'prop-types';
import { IngridientsShoppingListItem } from './IngridientsShoppingListItem';
import { Header, ProductsWrapper } from './IngredientsShoppingList.styled';

export const IngridientsShoppingList = ({ ingridients, handleDelete }) => {
  return (
    <>
      <Header>
        <li>
          <ProductsWrapper>
            <span>Products</span>
          </ProductsWrapper>
        </li>
        <li>
          <div>
            <span>Number</span>
          </div>
        </li>
        <li>
          <div>
            <span>Remove</span>
          </div>
        </li>
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
