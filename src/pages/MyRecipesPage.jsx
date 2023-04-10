import React, { useState, useEffect } from 'react';

import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { MyRecipesList } from 'components/MyRecipesList/MyResipesList';
import { MyRecipesItem } from 'components/MyRecipesItem/MyRecipesItem';
// import { Pagination } from 'components/Paginator/Paginator';

// import { FetchRecipes, DeleteRecipe } from '../apiService/OwnRecipeApi';
import { OwnRecipeApi } from '../apiService';

export const MyRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const renderMyRecipesPage = async () => {
      try {
        const data = await OwnRecipeApi.FetchRecipes()();

        setRecipes(data);
      } catch (error) {
        return error.message;
      }
    };
    renderMyRecipesPage();
  }, []);

  const deleteMyRecipe = async id => {
    try {
      await OwnRecipeApi.DeleteRecipe({ id });
      const data = await OwnRecipeApi.FetchRecipes();
      setRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Sections>
        <Container>
          <SectionTitle title="My recipes" />
          <MyRecipesList>
            {recipes.map(
              ({ _id, title, description, instructions, time, preview }) => (
                <MyRecipesItem
                  key={_id}
                  title={title}
                  description={description}
                  instructions={instructions}
                  time={time}
                  preview={preview}
                  id={_id}
                  onDelete={() => {
                    deleteMyRecipe(_id);
                  }}
                />
              )
            )}
          </MyRecipesList>
          {/* <Pagination></Pagination> */}
        </Container>
      </Sections>
    </>
  );
};

export default MyRecipesPage;
