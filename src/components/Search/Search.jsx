import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchMainPageBlack } from './Search.styled';
import { SerchInput } from './Search.styled';

export function Search(onSubmit) {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleInputChange = eve => {
    setSearchQuery(eve.currentTarget.value.toLowerCase());
  };

  const handleSubmit = eve => {
    eve.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }
    onSubmit(searchQuery);
    eve.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SerchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Beef"
          onChange={handleInputChange}
        />
        <SearchMainPageBlack
          to={searchQuery ? `/search/${searchQuery}` : ``}
          state={{ query: searchQuery }}
        >
          Search
        </SearchMainPageBlack>
      </form>
    </>
  );
}
