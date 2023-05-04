import { Sections } from 'components/Sections/Sections';
import { useEffect, useState } from 'react';
import { Container } from 'components/Container/Container';
import { useSelector } from 'react-redux';
import { selectCategoryList, selectToken } from 'Redux/auth/selectors';
import { CategoryList } from 'components/CategoryList/CategoryList';
import { NavCategory } from 'components/CategoryList/CategoryList.styled';
import { ResipeCategoriItems } from 'components/ResipeCategoriItems/ResipeCategoriItems';
import { useParams } from 'react-router-dom';
import { getRecipesByCategory } from 'apiService';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';
import { MiniLoader } from 'components/Loader/Loader';
import { RecipesPagination } from 'components/Paginator/Paginator';

const CategoriesPage = () => {
  const [prevCategoryName, setPrevCategoryName] = useState('');
  const { categoryName = 'Beef' } = useParams();
  const [recipes, setRecipes] = useState([]);
  const token = useSelector(selectToken);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const categories = useSelector(selectCategoryList);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isRefreshPagination, setIsRefreshPagination] = useState(false);

  useEffect(() => {
    const renderRecipeList = async () => {
      if (prevCategoryName !== categoryName) {
        setPrevCategoryName(categoryName);
        setIsRefreshPagination(true);
        setCurrentPage(1);
      } else {
        try {
          setIsLoading(true);
          const { data, total } = await getRecipesByCategory(
            categoryName,
            token,
            currentPage,
            8
          );
          setRecipes(data);
          setTotalItemsCount(total);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }, 500);
          setIsRefreshPagination(false);
        }
      }
    };
    renderRecipeList();
  }, [prevCategoryName, categoryName, currentPage, token]);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      {error ? (
        <AlertMessage>
          Oops, something went wrong. Please try again later...
        </AlertMessage>
      ) : (
        <Sections title="Categories">
          <NavCategory>
            <CategoryList categories={categories} />
          </NavCategory>

          {isLoading ? (
            <MiniLoader />
          ) : (
            <ResipeCategoriItems recipes={recipes} />
          )}
          {!isRefreshPagination && (
            <RecipesPagination
              totalItemsCount={totalItemsCount}
              paginate={paginate}
              currentPage={currentPage}
              totalPages={Math.ceil(totalItemsCount / 8)}
            />
          )}
        </Sections>
      )}
    </Container>
  );
};

export default CategoriesPage;
