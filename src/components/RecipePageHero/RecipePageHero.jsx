import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import {
  AddToFavoriteButton,
  RemoveFromFavoriteBtn,
} from 'components/Button/Button';
import { addFavoriteById, deleteFavoriteById } from 'apiService';
import { selectUser } from 'redux/auth/selectors';
import { updateMotivation } from '../../redux/auth/authSlise';

import {
  HeroSection,
  HeroSectionTitle,
  HeroSectionText,
  HeroSectionRecipeTimeBox,
  HeroSectionRecipeTime,
  ClockIcon,
} from './RecipePageHero.styled';
import { MiniLoader } from 'components/Loader/Loader';
import { toast } from 'react-hot-toast';

export const RecipeHero = ({ descr, title, time, id, favorites }) => {
  const [isOwner, setIsOwner] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites?.includes(user.id)) {
      setIsOwner(true);
    }
  }, [favorites, user.id]);

  const handleAddToFavorite = async () => {
    const resp = await addFavoriteById(id);
    if (resp) {
      setIsOwner(true);
      toast.success('Added to favorite sucsess!');

      const { firstFavoriteRecipe } = resp;
      dispatch(updateMotivation({ firstFavoriteRecipe }));
    }
  };

  const handleRemoveFromFavorites = async () => {
    const resp = await deleteFavoriteById(id);

    if (resp) {
      setIsOwner(false);
      toast.error('Deleted from favorites');
    }
  };

  return (
    <HeroSection>
      {title !== undefined ? (
        <>
          <HeroSectionTitle>{title}</HeroSectionTitle>
          <HeroSectionText>{descr}</HeroSectionText>
          {!isOwner ? (
            <AddToFavoriteButton
              onClick={handleAddToFavorite}
              children={'Add to favorite recipes'}
            />
          ) : (
            <RemoveFromFavoriteBtn
              onClick={handleRemoveFromFavorites}
              children={'Remove from favorite'}
            />
          )}
          <HeroSectionRecipeTimeBox>
            <ClockIcon />
            <HeroSectionRecipeTime>{time} min</HeroSectionRecipeTime>
          </HeroSectionRecipeTimeBox>
        </>
      ) : (
        <MiniLoader />
      )}
    </HeroSection>
  );
};
