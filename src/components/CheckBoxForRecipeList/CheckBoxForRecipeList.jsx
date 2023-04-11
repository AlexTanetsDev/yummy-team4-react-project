import { useState } from 'react';
import { pick } from 'images';
import { CheckBox, Pick } from './CheckBoxForRecipeList.styled.';

export const CheckBoxCustom = ({ list, item }) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    if (!checked) {
      setChecked(true);
      list.push({
        title: item?.name,
        quantity: item?.measure,
        thumb: item?.image,
      });
    }
  };

  return (
    <CheckBox onClick={handleClick}>{checked && <Pick src={pick} />}</CheckBox>
  );
};
