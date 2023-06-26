import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';

import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { FavoriteItem } from 'components/FavoriteItem/FavoriteItem';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';
import { MiniLoader } from 'components/Loader/Loader';
import { RecipesPagination } from 'components/Paginator/Paginator';

import { getAllFavorite, deleteFavoriteById } from '../apiService';

const FavoritePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const renderFavorite = async () => {
      try {
        setIsLoading(true);
        const { data, total } = await getAllFavorite(page, 4);

        setTotalPage(total);

        setRecipes(data);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    renderFavorite();
  }, [page]);

  const handleDelete = async id => {
    const lastItem = totalPage % 4;
    const lastPage = Math.trunc((totalPage + 3) / 4);

    try {
      setIsLoading(true);

      await deleteFavoriteById(id);
      toast.error(t('Deleted'));

      if (page > 1 && lastPage === page && lastItem === 1) {
        setPage(page - 1);
      } else {
        const { data, total } = await getAllFavorite(page, 4);

        setTotalPage(total);

        setRecipes(data);
      }
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePagination = pageNumber => setPage(pageNumber);

  return (
    <>
      <Sections>
        <Container>
          {error && (
            <AlertMessage>{t('Oops, something went wrong')}</AlertMessage>
          )}
          <SectionTitle title={t('Favorites')} />
          {isLoading ? (
            <MiniLoader />
          ) : (
            <>
              {recipes && recipes.length > 0 ? (
                <>
                  <FavoriteList>
                    {recipes.map(
                      ({
                        _id,
                        title,
                        description,
                        instructions,
                        time,
                        preview,
                      }) => (
                        <FavoriteItem
                          key={_id}
                          title={title}
                          description={description}
                          instructions={instructions}
                          time={time}
                          preview={preview}
                          id={_id}
                          onDelete={() => {
                            handleDelete(_id);
                          }}
                        />
                      )
                    )}
                  </FavoriteList>
                  <RecipesPagination
                    totalItemsCount={totalPage}
                    paginate={handlePagination}
                    currentPage={page}
                    totalPages={Math.ceil(totalPage / 4)}
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

export default FavoritePage;
