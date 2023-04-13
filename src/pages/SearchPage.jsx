import { useState, useEffect } from 'react';
import { getSearchedRecipes } from '../apiService/search.js';
import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import {SearchBar} from 'components/SearchBar/SearchBar';
import {SearchedRecipesList} from 'components/SearchedRecipesList/SearchedRecipesList';
import { useParams, useNavigate } from 'react-router-dom';
import { AlertMessage } from 'components/AlertMessage/AlertMessage.jsx';
import { MiniLoader } from 'components/Loader/Loader.jsx';
import { Toaster } from 'react-hot-toast';

const SearchPage = () => {
  const [recipes, setRecipes] = useState([]);
  const {query} = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Title');
  const [selectedOptionFinal, setSelectedOptionFinal] = useState(selectedOption);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const recipesData = await getSearchedRecipes(selectedOptionFinal, query);
        setRecipes(recipesData);
      } catch (error) {
        setError({error});
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, selectedOptionFinal]) 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchBarValue = e.target.searchBar.value;
    setSelectedOptionFinal(selectedOption);
    navigate(`/search/${searchBarValue}`);
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (    
    <>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      {error ? (
          <AlertMessage>
            Oops, something went wrong. Please try again later...
          </AlertMessage>
        ) : (
          <Sections>
            <Container>
            <SectionTitle title="Search" />
            <SearchBar handleSubmit={handleSubmit} handleOptionClick={handleOptionClick} isOpen={isOpen} setIsOpen={setIsOpen} selectedOption={selectedOption} />
              {isLoading ? (
                <MiniLoader />
                ) : (
                <SearchedRecipesList recipes={recipes}/>
                )}
            </Container>
          </Sections> 
        )}  
    </>            
  );
};

export default SearchPage;




