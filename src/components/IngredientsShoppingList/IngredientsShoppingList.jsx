import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { IngridientsShoppingListItem } from './IngridientsShoppingListItem';
import {
  Header,
  NumberIRemoveWrapper,
  ShppList,
} from './IngredientsShoppingList.styled';

export const IngridientsShoppingList = ({
  ingridients,
  handleDelete,
  state,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Header>
        <div>
          <span>{t('Products')}</span>
        </div>
        <NumberIRemoveWrapper>
          <span>{t('Number')}</span>
          <span>{t('Remove')}</span>
        </NumberIRemoveWrapper>
      </Header>

      <ShppList state={state}>
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
