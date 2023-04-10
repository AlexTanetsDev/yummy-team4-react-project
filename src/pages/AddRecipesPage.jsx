import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { IngredientsApi, CategoryApi } from '../apiService';
import { AddRecipeForm } from '../components/AddRecipeForm/AddRecipeForm';
import { Container } from '../components/Container/Container';
import { Sections } from '../components/Sections/Sections';

export const AddRecipePage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    IngredientsApi.fetchIngredientsList().then(resp => setIngredients(resp));
    CategoryApi.fetchCategoryList().then(resp => setCategories(resp));
  }, []);
  
  return (
    <Container>
      <Sections title="Add recipe">
        <AddRecipeForm ingredients={ingredients} categories={categories} />
      </Sections>
    </Container>
  );
};

export default AddRecipePage;
