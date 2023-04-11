import React, { useState } from 'react';
import { SearchMainPageBlack, SerchInput } from './Search.styled';

import PropTypes from 'prop-types';

export function Search({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = eve => {
    setSearchQuery(eve.currentTarget.value.toLowerCase());
  };

  const handleSubmit = eve => {
    eve.preventDefault();

    if (searchQuery.trim() === '') {
      console.log('Fill form');
      return;
    }

    onSubmit(searchQuery);
    eve.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SerchInput
          type="text"
          autoComplete="off"
          placeholder="Beef"
          onChange={handleInputChange}
        />
        <SearchMainPageBlack type="submit">Search</SearchMainPageBlack>
      </form>
    </div>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
