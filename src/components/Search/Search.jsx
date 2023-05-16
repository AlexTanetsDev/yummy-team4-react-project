import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

import { SearchMainPageBlack, SerchInput } from './Search.styled';

import PropTypes from 'prop-types';

export function Search({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  const handleInputChange = eve => {
    setSearchQuery(eve.currentTarget.value.toLowerCase());
  };

  const handleSubmit = eve => {
    eve.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Enter the recipe name or ingredient to search.', {
        style: {
          border: '1px solid #eb300d',
          padding: '16px',
          color: '#174885',
        },
        position: 'top-right',
      });
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
          onChange={handleInputChange}
        />

        <SearchMainPageBlack>{t('Search')}</SearchMainPageBlack>
      </form>
    </div>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
