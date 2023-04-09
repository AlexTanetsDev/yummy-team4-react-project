import { useState } from 'react';
import { pick } from 'images';
import { CheckBox, Pick } from './CheckBoxForRecipeList.styled.';

export const CheckBoxCustom = () => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckBox onClick={() => setChecked(!checked)}>
      {checked && <Pick src={pick} />}
    </CheckBox>
  );
};
