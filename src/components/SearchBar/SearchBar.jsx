import {
  Input,
  InputWrapper,
  SearchButton,
  SearchTypeSelector,
  SelectLabel,
  SearchBarContainer,
  SearchBarForm,
} from './SearchBar.styled';
import { CustomDropdownMenu } from 'components/CustomDropdownMenu/CustomDropdownMenu';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const SearchBar = ({
  query,
  handleSubmit,
  handleOptionClick,
  isOpen,
  setIsOpen,
  selectedOption,
}) => {
  const [value, setValue] = useState(query ?? '');
  const { t } = useTranslation();

  return (
    <SearchBarContainer>
      <SearchBarForm id="form" onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            value={value}
            onChange={event => setValue(event.target.value)}
            type="text"
            autoComplete="off"
            placeholder={t('Search')}
            name="searchBar"
            id="searchText"
            required
          />
          <SearchButton type="submit" children={t('Search')} />
        </InputWrapper>

        <SearchTypeSelector>
          <SelectLabel>{t('Search by:')}</SelectLabel>
          <CustomDropdownMenu
            handleOptionClick={handleOptionClick}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedOption={selectedOption}
          />
        </SearchTypeSelector>
      </SearchBarForm>
    </SearchBarContainer>
  );
};
