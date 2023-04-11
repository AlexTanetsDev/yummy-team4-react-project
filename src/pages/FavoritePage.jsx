import { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';

import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { FavoriteItem } from 'components/FavoriteItem/FavoriteItem';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';

import { getAllFavorite, deleteFavoriteById } from '../apiService';

const FavoritePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  // const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    const renderFavorite = async () => {
      try {
        setIsLoading(true);

        const data = await getAllFavorite(1, 4);

        // const totalCountPage = Math.ceil(data.length / 4);
        // if (totalCountPage > 1) {
        //   setTotalPage(totalCountPage);
        // }

        setRecipes(data);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    renderFavorite();
  }, []); // ---------------> page

  // console.log(page);

  const handleDelete = async id => {
    try {
      await deleteFavoriteById(id);
      const data = await getAllFavorite();
      setRecipes(data);
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>Favorite</title>
      </Helmet> */}
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
              <SectionTitle title="Favorites" />
              {recipes && recipes.length > 0 ? (
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
