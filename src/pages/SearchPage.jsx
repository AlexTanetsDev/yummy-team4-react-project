import { useState, useEffect } from 'react';
import { getSearchedRecipes } from '../apiService/search.js';
import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
  const [recipes, setRecipes] = useState([]);
  const {query} = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Ingredient');
  
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

    const recipesData = await getSearchedRecipes(selectedOption, searchBarValue);
    setRecipes(recipesData);
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <Sections>
      <Container>
      <SectionTitle title="Search" />
      <SearchBar handleSubmit={handleSubmit} handleOptionClick={handleOptionClick} isOpen={isOpen} setIsOpen={setIsOpen} selectedOption={selectedOption} />
      <SearchedRecipesList recipes={recipes}/>
      </Container>
      </Sections>
    </>
  );
};

export default SearchPage;




