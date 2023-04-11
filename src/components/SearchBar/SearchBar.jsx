import {
  Input,
  InputWrapper,
  SearchButton,
  SearchTypeSelector,
  SelectLabel,
  SearchBarContainer,
  SelectForm,
  SelectOption,
  SearchBarForm,
} from './SearchBar.styled';
import React from 'react';

const SearchBar = ({ handleSubmit }) => {
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
          <SearchButton type="submit" children="submit" />
        </InputWrapper>
        
        <SearchTypeSelector>
          <SelectLabel>Search by:</SelectLabel>
          <SelectForm id="mySelect" name="searchSelect" defaultValue="ingredient">
            <SelectOption value="title">Title</SelectOption>
            <SelectOption value="ingredient">Ingredients</SelectOption>
          </SelectForm>
        </SearchTypeSelector>
      </SearchBarForm>
    </SearchBarContainer>
  );
};

export default SearchBar;
