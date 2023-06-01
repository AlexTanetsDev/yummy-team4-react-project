import { useEffect, useState } from 'react';
import { getRecipeById } from 'apiService';
import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

import { RecipeHero } from 'components/RecipePageHero/RecipePageHero';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';
import { RecepiePreparation } from 'components/RecipePreparation/RecipePreparation';
import { Container } from 'components/Container/Container';
import { GoBackToRecipeBtn } from 'components/Button/Button';

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const token = useSelector(selectToken);
  const { recipeId } = useParams();
  let location = useLocation();
  const { pathname, search } = location.state?.from;

  useEffect(() => {
    (async () => {
      const recipe = await getRecipeById(recipeId, token);
      setRecipe(recipe);
    })();
  }, [recipeId, token]);

  return (
    <>
      <RecipeHero
        descr={recipe?.description}
        title={recipe?.title}
        time={recipe?.time}
        id={recipeId}
        favorites={recipe?.favorites}
      />
      <Container>
        <RecipeIngredientsList ingredients={recipe?.ingredients} />
        <RecepiePreparation
          image={recipe?.thumb}
          instructions={recipe?.instructions}
        />
        <GoBackToRecipeBtn from={pathname + search}>
          Back to recipes
        </GoBackToRecipeBtn>
      </Container>
    </>
  );
};

export default RecipePage;
