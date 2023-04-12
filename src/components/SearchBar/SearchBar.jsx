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

const SearchBar = ({ handleSubmit, handleOptionClick, isOpen, setIsOpen, selectedOption }) => {
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
          {/* <SelectForm id="mySelect" name="searchSelect" defaultValue="ingredient">
            <SelectOption value="title">Title</SelectOption>
            <SelectOption value="ingredient">Ingredients</SelectOption>
          </SelectForm> */}
        </SearchTypeSelector>
      </SearchBarForm>
    </SearchBarContainer>
  );
};

export default SearchBar;
