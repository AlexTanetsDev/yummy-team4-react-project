import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { IngredientsApi, CategoryApi, PopularApi } from '../../apiService';
import { AddRecipeForm } from '../../components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from '../../components/PopularRecipe/PopularRecipe';
import { Container } from '../../components/Container/Container';
import { Sections } from '../../components/Sections/Sections';
import { ContentContainer} from './AddRecipesPage.styled';

export const AddRecipePage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    IngredientsApi.fetchIngredientsList().then(resp => setIngredients(resp));
    CategoryApi.fetchCategoryList().then(resp => setCategories(resp));
    PopularApi.fetchPopularList().then(resp => setPopular(resp));
  }, []);

  return (
    <Container>
      <Sections title="Add recipe">
        <ContentContainer>
          <AddRecipeForm ingredients={ingredients} categories={categories} />
          <PopularRecipe popular={popular} />
        </ContentContainer>
      </Sections>
    </Container>
  );
};

export default AddRecipePage;
