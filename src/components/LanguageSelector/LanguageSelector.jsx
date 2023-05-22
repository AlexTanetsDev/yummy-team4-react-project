import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledSelect, StyledOption } from './LanguageSelector.styled';

export const LanguageSelector = ({ page }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng');

    if (
      storedLanguage !== 'en' &&
      storedLanguage !== 'ua' &&
      storedLanguage !== 'pl'
    ) {
      i18n.changeLanguage('en');
      localStorage.setItem('i18nextLng', 'en');
    } else {
      i18n.changeLanguage(storedLanguage);
      localStorage.setItem('i18nextLng', storedLanguage);
    }
  }, [i18n]);

  const changeLanguage = e => {
    const selectedLanguage = e.target.value;

    i18n.changeLanguage(selectedLanguage);

    localStorage.setItem('i18nextLng', selectedLanguage);
  };

  return (
    <StyledSelect page={page} onChange={changeLanguage} value={i18n.language}>
      <StyledOption value="en">ENG</StyledOption>
      <StyledOption value="ua">УКР</StyledOption>
      <StyledOption value="pl">POL</StyledOption>
    </StyledSelect>
  );
};
