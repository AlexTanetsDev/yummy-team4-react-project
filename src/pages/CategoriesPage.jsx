import { Sections } from 'components/Sections/Sections';
import { useEffect, useState } from 'react';
import { Container } from 'components/Container/Container';
import { useSelector } from 'react-redux';
import { selectToken } from 'Redux/auth/selectors';
import CategoryList from 'components/CategoryList/CategoryList';
import { NavCategory } from 'components/CategoryList/CategoryList.styled';
import ResipeCategoriItems from 'components/ResipeCategoriItems/ResipeCategoriItems';
import { useParams } from 'react-router-dom';
import { getCategoryList, getRecipesByCategory } from 'apiService';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { categoryName = 'Beef' } = useParams();
  const [recipes, setRecipes] = useState([]);
  const token = useSelector(selectToken);

  useEffect(() => {
    getCategoryList(token)
      .then(res => setCategories(res))
      .catch(error => console.error(error));
  }, [token]);

  useEffect(() => {
    if (categoryName) {
      getRecipesByCategory(categoryName, token)
        .then(res => setRecipes(res))
        .catch(error => console.error(error));
    } else {
      setSelectedCategory('Beef');
      getRecipesByCategory(selectedCategory, token)
        .then(res => setRecipes(res))
        .catch(error => console.error(error));
    }
  }, [categoryName, selectedCategory, token]);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <Sections title="Categories">
        <NavCategory>
          <CategoryList categories={categories} onClick={handleCategoryClick} />
        </NavCategory>
        <ResipeCategoriItems recipes={recipes} />
      </Sections>
    </Container>
  );
};

export default CategoriesPage;
