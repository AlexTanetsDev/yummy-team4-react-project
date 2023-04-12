import { useState } from 'react';
import { pick } from 'images';
import { CheckBox, Pick } from './CheckBoxForRecipeList.styled.';
import { toast } from 'react-hot-toast';

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
      toast.success('Product will be added to to the shopping-list!');
      return;
    }
    setChecked(false);
    const idx = list.findIndex(i => i.title === item.name);
    list.splice(idx, 1);
    toast.error('Product was removed from the shopping-list!');
  };

  return (
    <CheckBox onClick={handleClick}>{checked && <Pick src={pick} />}</CheckBox>
  );
};
