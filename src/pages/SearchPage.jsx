import { useState, useEffect, useRef } from 'react';
import { getSearchedRecipes } from '../apiService/search.js';
import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchedRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { MiniLoader } from 'components/Loader/Loader.jsx';
import { toast } from 'react-hot-toast';
import { RecipesPagination } from 'components/Paginator/Paginator';
import ReactCountryFlag from 'react-country-flag';

const SearchPage = () => {
  const ref = useRef(1);
  const [recipes, setRecipes] = useState([]);
  const [totalRecipe, setTotalRecipe] = useState(0);
  const { query } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(
    location.state ?? 'Title'
  );
  const [selectedOptionFinal, setSelectedOptionFinal] =
    useState(selectedOption);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) return;
    if (ref.current !== 1) return;
    ref.current += 1;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data, total } = await getSearchedRecipes(
          selectedOptionFinal,
          query
        );
        setRecipes(data);
        setTotalRecipe(total);
        if (data.length > 0) {
          toast.success('Recipes are found!');
        } else {
          toast.error('No recipes are found');
        }
      } catch (error) {
        toast.error('No recipes with this ingredient are found');
        setRecipes([]);
        setTotalRecipe(0);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, selectedOptionFinal]);

  const searcRecipe = async page => {
    try {
      setIsLoading(true);
      const { data } = await getSearchedRecipes(
        selectedOptionFinal,
        query,
        page
      );
      setRecipes(data);
    } catch (error) {
      toast.error('Oops.. something went wrong try again');
      setRecipes([]);
      setTotalRecipe(0);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 500);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const searchBarValue = e.target.searchBar.value;
    setSelectedOptionFinal(selectedOption);
    navigate(`/search/${searchBarValue}`);
    ref.current = 1;
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    searcRecipe(pageNumber);
  };
  return (
    <>
      <Sections>
        <Container>
          <SectionTitle title="Search" />
          <div>
            <ReactCountryFlag
              countryCode="IT"
              style={{
                fontSize: '2em',
                lineHeight: '2em',
                cursor: 'pointer',
              }}
              aria-label="United States"
              title="US"
            />
          </div>
          <SearchBar
            query={query}
            handleSubmit={handleSubmit}
            handleOptionClick={handleOptionClick}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedOption={selectedOption}
          />
          {isLoading ? (
            <MiniLoader />
          ) : (
            <SearchedRecipesList recipes={recipes} />
          )}
          <RecipesPagination
            totalItemsCount={totalRecipe}
            paginate={paginate}
            currentPage={currentPage}
            totalPages={Math.ceil(totalRecipe / 12)}
          />
        </Container>
      </Sections>
    </>
  );
};

export default SearchPage;
