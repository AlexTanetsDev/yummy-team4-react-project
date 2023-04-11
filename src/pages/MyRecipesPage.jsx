import React, { useState, useEffect } from 'react';

import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { MyRecipesList } from 'components/MyRecipesList/MyResipesList';
import { MyRecipesItem } from 'components/MyRecipesItem/MyRecipesItem';
import { AlertMessage } from '../components/AlertMessage/AlertMessage';
import RecipesPagination from 'components/Paginator/Paginator';

import { OwnRecipeApi } from '../apiService';
const rec = [
  {
    _id: '1',
    title: 'Recipe1',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Description text',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
  {
    _id: '2',
    title: 'Recipe2',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Description sdfsdfdstext',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
  {
    _id: '3',
    title: 'Recipe3',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Description text',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
  {
    _id: '4',
    title: 'Recipe4',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Descriptsdfsdfion text',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
  {
    _id: '5',
    title: 'Recipe5',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Descriptiosfsdfsewrwerwen text',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
  {
    _id: '6',
    title: 'Recipe6',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Description textsdsdfsdfsdfsd',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
  {
    _id: '7',
    title: 'Recipe7',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Description textaasdasdasdasd',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
  {
    _id: '8',
    title: 'Recipe8',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Description texadasdasdasdadzxczxcvzdvt',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
  {
    _id: '9',
    title: 'Recipe9',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Description tadaqww2222222ext',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
  {
    _id: '10',
    title: 'Recipe10',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Description text',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
  {
    _id: '11',
    title: 'Recipe11',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Description text',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
  {
    _id: '12',
    title: 'Recipe12',
    category: 'Beaf',
    instructions: ['String1', 'String2'],
    description: 'Description text',
    time: '40',
    ingredients: [
      {
        id: '640cd5ac2d9fecf12e8898fa',
        measure: '50g',
      },
    ],
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    preview:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
    author: '642c1a793b784cfcabb33f6b',
  },
];
export const MyRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const renderMyRecipesPage = async () => {
      try {
        setIsLoading(true);
        // const data = await OwnRecipeApi.FetchRecipes();
        const data = rec;
        setTotalItemsCount(rec.length);
        setRecipes(data);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    renderMyRecipesPage();
  }, [currentPage]);

  const deleteMyRecipe = async id => {
    try {
      await OwnRecipeApi.DeleteRecipe({ id });
      const data = await OwnRecipeApi.FetchRecipes();

      setRecipes(data);
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const currentPageRecipes = recipes.slice(
    (currentPage - 1) * 4,
    currentPage * 4
  );
  // console.log(currentPage);
  // console.log(currentPageRecipes);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Sections>
        <Container>
          {error && (
            <AlertMessage>
              Oops, something went wrong. Please try again later...
            </AlertMessage>
          )}
          {isLoading ? (
            <AlertMessage>Please wait...</AlertMessage>
          ) : (
            <>
              <SectionTitle title="My recipes" />
              <MyRecipesList>
                {currentPageRecipes.map(
                  ({
                    _id,
                    title,
                    description,
                    instructions,
                    time,
                    preview,
                  }) => (
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
              <RecipesPagination
                totalItemsCount={rec.length}
                paginate={paginate}
                currentPage={currentPage}
                totalPages={Math.ceil(totalItemsCount / 4)}
              />
              <AlertMessage>
                Please add the recipe to your my recipes...
              </AlertMessage>
            </>
          )}
        </Container>
      </Sections>
    </>
  );
};

export default MyRecipesPage;
