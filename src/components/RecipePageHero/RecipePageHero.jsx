import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { AddToFavoriteButton } from 'components/Button/Button';
import { addFavoriteById } from 'apiService';
import { selectUser } from 'Redux/auth/selectors';

import {
  HeroSection,
  HeroSectionTitle,
  HeroSectionText,
  HeroSectionRecipeTimeBox,
  HeroSectionRecipeTime,
  ClockIcon,
} from './RecipePageHero.styled';

export const RecipeHero = ({ descr, title, time, id, favorites }) => {
  const [isOwner, setIsOwner] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (favorites?.includes(user.id)) {
      setIsOwner(true);
    }
  }, [favorites, user.id]);

  const notify = () => {
    toast.success('Success!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleAddToFavorite = async () => {
    const resp = await addFavoriteById(id);
    if (resp) {
      setIsOwner(true);
      notify();
    }
  };

  return (
    <HeroSection>
      <ToastContainer />
      <HeroSectionTitle>{title}</HeroSectionTitle>
      <HeroSectionText>{descr}</HeroSectionText>
      {!isOwner && (
        <AddToFavoriteButton
          onClick={handleAddToFavorite}
          children={'Add to favorite recipes'}
        />
      )}
      <HeroSectionRecipeTimeBox>
        <ClockIcon />
        <HeroSectionRecipeTime>{time} min</HeroSectionRecipeTime>
      </HeroSectionRecipeTimeBox>
    </HeroSection>
  );
};
