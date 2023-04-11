import { useState, useEffect } from 'react';
import { getSearchedRecipes } from '../apiService/search.js';
import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const query = location.state !== null ? location.state.query : '';
  
  useEffect(() => {
    if(query === '') {
      return;
    }
    async function fetchData() {
      const recipesData = await getSearchedRecipes('title', query);
      setRecipes(recipesData);
    }
      
    fetchData();
  }, [query])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchBarValue = e.target.searchBar.value;
    const searchSelectValue = e.target.searchSelect.value;

    const recipesData = await getSearchedRecipes(searchSelectValue, searchBarValue);
    setRecipes(recipesData);
  }

  return (
    <>
     <Sections>
     <Container>
     <SectionTitle title="Search" />
      <SearchBar handleSubmit={handleSubmit} />
      <SearchedRecipesList recipes={recipes}/>
      </Container>
      </Sections>
    </>
  );
};

export default SearchPage;




