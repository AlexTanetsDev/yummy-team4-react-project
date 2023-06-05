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
import { MiniLoader } from 'components/Loader/Loader';

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const token = useSelector(selectToken);
  const { recipeId } = useParams();
  let location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { pathname, search } = location.state?.from;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const recipe = await getRecipeById(recipeId, token);
        setRecipe(recipe);
      } catch (error) {
      } finally {
        setIsLoading(false);
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }, 300);
      }
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
        {isLoading ? (
          <MiniLoader />
        ) : (
          <>
            <RecipeIngredientsList
              ingredients={recipe?.ingredients}
              backTo={pathname + search}
            />
            <RecepiePreparation
              image={recipe?.thumb}
              instructions={recipe?.instructions}
            />
          </>
        )}
        <GoBackToRecipeBtn from={pathname + search}>
          Back to recipes
        </GoBackToRecipeBtn>
      </Container>
    </>
  );
};

export default RecipePage;
