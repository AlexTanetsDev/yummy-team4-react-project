import { useState, useEffect } from 'react';
import { pick } from 'images';
import { CheckBox, Pick } from './CheckBoxForRecipeList.styled.';

export const CheckBoxCustom = ({ list, item, setList }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const inList = list.find(i => i.title === item.name);
    if (inList) setChecked(true);
  }, [item.name, list]);

  const handleClick = () => {
    if (!checked) {
      setChecked(true);
      setList(prevstate => {
        return [
          ...prevstate,
          {
            title: item?.name,
            quantity: item?.measure,
            thumb: item?.image,
          },
        ];
      });
      return;
    }
    setChecked(false);
    const filtredList = list.filter(i => i.title !== item.name);
    setList(filtredList);
  };

  return (
    <CheckBox onClick={handleClick}>{checked && <Pick src={pick} />}</CheckBox>
  );
};
