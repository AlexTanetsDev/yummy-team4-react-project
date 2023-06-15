import { Sections } from 'components/Sections/Sections';
import { useEffect, useState } from 'react';
import { Container } from 'components/Container/Container';
import { useSelector } from 'react-redux';
import { selectCategoryList, selectToken } from 'redux/auth/selectors';
import { CategoryList } from 'components/CategoryList/CategoryList';
import { NavCategory } from 'components/CategoryList/CategoryList.styled';
import { ResipeCategoriItems } from 'components/ResipeCategoriItems/ResipeCategoriItems';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getRecipesByCategory } from 'apiService';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';
import { MiniLoader } from 'components/Loader/Loader';
import { RecipesPagination } from 'components/Paginator/Paginator';

const CategoriesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [prevCategoryName, setPrevCategoryName] = useState('');
  const { categoryName = 'Beef' } = useParams();
  const [recipes, setRecipes] = useState([]);
  const token = useSelector(selectToken);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const categories = useSelector(selectCategoryList);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get('page')
      ? Number(searchParams.get('page'))
      : 1;
    return page;
  });
  const [isRefreshPagination, setIsRefreshPagination] = useState(false);

  useEffect(() => {
    const renderRecipeList = async () => {
      const searchParam = searchParams.get('page');
      if (prevCategoryName !== categoryName && !searchParam) {
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
  }, [prevCategoryName, categoryName, currentPage, token, searchParams]);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber });
  };

  return (
    <Container>
      {error ? (
        <AlertMessage>{t('Oops, something went wrong')}</AlertMessage>
      ) : (
        <Sections title={t('Categories')}>
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
