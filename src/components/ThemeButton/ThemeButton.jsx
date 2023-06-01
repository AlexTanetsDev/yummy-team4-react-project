import { useState } from 'react';

import { Input, LabelSwitch, Span } from './ThemeButton.styled';

const ThemeButton = ({ onClick }) => {
  const [isToggled, setIsToggled] = useState(
    localStorage.getItem('theme') === 'light' ? true : false
  );

  const onToggle = () => {
    onClick();
    setIsToggled(!isToggled);
  };

  return (
    <LabelSwitch>
      <Input type="checkbox" checked={!isToggled} onChange={onToggle} />
      <Span />
    </LabelSwitch>
  );
};
export default ThemeButton;
