import { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';

import { Sections } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { FavoritesList } from 'components/FavoriteList/FavoriteList';
import { FavoritesItem } from 'components/FavoriteItem/FavoriteItem';

import { getAllFavorite, deleteFavoriteById } from '../../apiService';

export const FavoriteRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  // const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    const renderFavorite = async () => {
      try {
        const data = await getAllFavorite();

        // const totalCountPage = Math.ceil(data.total / 4);
        // if (totalCountPage > 1) {
        //   setTotalPage(totalCountPage);
        // }

        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    };
    renderFavorite();
  }, []);

  // console.log(recipes);

  const handleDelete = async id => {
    try {
      await deleteFavoriteById(id);
      const data = await getAllFavorite();
      setRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRecipe = () => {
    console.log('This is recipe');
  };

  return (
    <>
      {/* <Helmet>
        <title>Favorite</title>
      </Helmet> */}
      <Sections>
        <Container>
          <SectionTitle title="Favorites" />
          <FavoritesList>
            {recipes.map(
              ({ _id, title, description, instructions, time, preview }) => (
                <FavoritesItem
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
                  onClick={handleRecipe}
                />
              )
            )}
          </FavoritesList>
        </Container>
      </Sections>
    </>
  );
};

export default FavoriteRecipesPage;
