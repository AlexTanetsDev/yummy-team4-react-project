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

const CategoriesPage = () => {
  const { categoryName = 'Beef' } = useParams();
  const [recipes, setRecipes] = useState([]);
  const token = useSelector(selectToken);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const categories = useSelector(selectCategoryList);

  useEffect(() => {
    const renderRecipeList = async () => {
      try {
        setIsLoading(true);
        const { data } = await getRecipesByCategory(categoryName, token);
        setRecipes(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    renderRecipeList();
  }, [categoryName, token]);

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
        </Sections>
      )}
    </Container>
  );
};

export default CategoriesPage;
