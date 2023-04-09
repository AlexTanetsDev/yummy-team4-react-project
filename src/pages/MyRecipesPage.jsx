import React, { useState, useEffect } from 'react';

import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { MyRecipesList } from 'components/MyRecipesList/MyRecipesList';
import { MyRecipesItem } from 'components/MyRecipesItem/MyRecipesItem';
// import { Pagination } from 'components/Paginator/Paginator';

import { fetchMyrecipes } from '../apiService/myRecipesApi';

export const MyRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const renderMyRecipesPage = async () => {
      try {
        const data = await fetchMyrecipes();

        setRecipes(data);
      } catch (error) {
        return error.message;
      }
    };
    renderMyRecipesPage();
  }, []);

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
