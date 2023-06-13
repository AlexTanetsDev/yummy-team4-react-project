import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { MyRecipesList } from 'components/MyRecipesList/MyResipesList';
import { MyRecipesItem } from 'components/MyRecipesItem/MyRecipesItem';
import { AlertMessage } from '../components/AlertMessage/AlertMessage';
import { RecipesPagination } from 'components/Paginator/Paginator';
import { OwnRecipeApi } from '../apiService';
import { toast } from 'react-hot-toast';
import { MiniLoader } from 'components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

const MyRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const renderMyRecipesPage = async () => {
      try {
        setIsLoading(true);
        const { data, total } = await OwnRecipeApi.FetchRecipes(currentPage, 4);
        setTotalItemsCount(total);
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
    const lastItem = totalItemsCount % 4;
    const lastPage = Math.trunc((totalItemsCount + 3) / 4);

    try {
      setIsLoading(true);

      await OwnRecipeApi.DeleteRecipe(id);
      toast.error(t('Deleted'));

      if (currentPage > 1 && lastPage === currentPage && lastItem === 1) {
        setCurrentPage(currentPage - 1);
      } else {
        const { data, total } = await OwnRecipeApi.FetchRecipes(currentPage, 4);

        setTotalItemsCount(total);

        setRecipes(data);
      }
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Sections>
        <Container>
          {error && (
            <AlertMessage>{t('Oops, something went wrong')}</AlertMessage>
          )}
          <SectionTitle title={t('My recipes Title')} />
          {isLoading ? (
            <MiniLoader />
          ) : (
            <>
              {recipes && recipes.length > 0 ? (
                <>
                  <MyRecipesList>
                    {recipes.map(
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
                    totalItemsCount={totalItemsCount}
                    paginate={paginate}
                    currentPage={currentPage}
                    totalPages={Math.ceil(totalItemsCount / 4)}
                  />
                </>
              ) : (
                <AlertMessage>{t('Please add the recipe...')}</AlertMessage>
              )}
            </>
          )}
        </Container>
      </Sections>
    </>
  );
};

export default MyRecipesPage;
