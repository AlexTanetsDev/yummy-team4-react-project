import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

import { getSearchedRecipes } from '../apiService/search.js';
import { getAreasList } from '../apiService';
import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchedRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';
import { MiniLoader } from 'components/Loader/Loader.jsx';
import { RecipesPagination } from 'components/Paginator/Paginator';
import {
  FlagsList,
  FlagsItem,
} from 'components/SearchedRecipesList/SearchedRecipesList.styled.js';

const SearchPage = () => {
  const ref = useRef(1);
  const [recipes, setRecipes] = useState([]);
  const [totalRecipe, setTotalRecipe] = useState(0);
  const { query } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(() => {
    if (!location.state || location.state === 'Area') return 'Title';
    return location.state;
  });
  const [selectedOptionFinal, setSelectedOptionFinal] =
    useState(selectedOption);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [areasList, setAreasList] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const list = await getAreasList();
      setAreasList(list);
    })();
  }, []);

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
          toast.success(t('Recipes are found!'));
        } else {
          toast.error(t('No recipes are found'));
        }
      } catch (error) {
        toast.error(t('No recipes with this ingredient are found'));
        setRecipes([]);
        setTotalRecipe(0);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, selectedOptionFinal, t]);

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
      toast.error(t('Oops.. something went wrong try again'));
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

  const handleFlagClick = e => {
    const arr = e.target.title.split('');
    const cap = arr.slice(0, 1).toString().toUpperCase();
    arr.splice(0, 1, cap);
    const cous = arr.join('');
    setSelectedOptionFinal(selectedOption);
    setSelectedOption('Title');
    navigate(`/search/${cous}`);
    ref.current = 1;
  };

  return (
    <>
      <Sections>
        <Container>
          <SectionTitle title={t('Search')} />
          {selectedOption === 'Area' ? (
            <FlagsList>
              {areasList.map(area => {
                return (
                  <FlagsItem key={area.cuisine} onClick={handleFlagClick}>
                    <ReactCountryFlag
                      countryCode={area.code}
                      style={{
                        fontSize: '3em',
                        lineHeight: '1em',
                        cursor: 'pointer',
                      }}
                      title={area.cuisine}
                    />
                  </FlagsItem>
                );
              })}
            </FlagsList>
          ) : (
            <SearchBar
              query={query}
              handleSubmit={handleSubmit}
              handleOptionClick={handleOptionClick}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              selectedOption={selectedOption}
            />
          )}
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
