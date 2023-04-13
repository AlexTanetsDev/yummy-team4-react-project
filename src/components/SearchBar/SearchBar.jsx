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
import React from 'react';

export const SearchBar = ({ handleSubmit, handleOptionClick, isOpen, setIsOpen, selectedOption }) => {
  return (
    <SearchBarContainer>
      <SearchBarForm id="form" onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            autoComplete="off"
            placeholder="Search"
            name="searchBar"
            id="searchText"
            required
          />
          <SearchButton type="submit" children="Search" />
        </InputWrapper>

        <SearchTypeSelector>
          <SelectLabel>Search by:</SelectLabel>
          <CustomDropdownMenu handleOptionClick={handleOptionClick} isOpen={isOpen} setIsOpen={setIsOpen} selectedOption={selectedOption} />
        </SearchTypeSelector>
      </SearchBarForm>
    </SearchBarContainer>
  );
};


