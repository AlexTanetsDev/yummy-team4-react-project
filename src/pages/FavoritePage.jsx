import { useEffect, useState } from 'react';
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
    try {
      setIsLoading(true);
      toast.error('Deleted from favorites');

      await deleteFavoriteById(id);

      const { data, total } = await getAllFavorite(page, 4);

      setTotalPage(total);

      setRecipes(data);
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
            <AlertMessage>
              Oops, something went wrong. Please try again later...
            </AlertMessage>
          )}
          <SectionTitle title="Favorites" />
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
                <AlertMessage>
                  Please add the recipe to your favorites...
                </AlertMessage>
              )}
            </>
          )}
        </Container>
      </Sections>
    </>
  );
};

export default FavoritePage;
