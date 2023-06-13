import { tick } from 'images';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import {
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  ImageTick,
} from './CustomDropdownMenu.styled';

export const CustomDropdownMenu = ({
  handleOptionClick,
  isOpen,
  setIsOpen,
  selectedOption,
}) => {
  const modalRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div>
      <DropdownButton
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        ref={modalRef}
      >
        {selectedOption}
        <ImageTick src={tick} alt="tick" />
      </DropdownButton>

      <DropdownMenu isOpen={isOpen}>
        <DropdownItem onClick={() => handleOptionClick('Title')}>
          {t('Title')}
        </DropdownItem>
        <DropdownItem onClick={() => handleOptionClick('Ingredient')}>
          {t('Ingredient')}
        </DropdownItem>
        <DropdownItem onClick={() => handleOptionClick('Area')}>
          {t('Area')}
        </DropdownItem>
      </DropdownMenu>
    </div>
  );
};
