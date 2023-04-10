import { AddToFavoriteButton } from 'components/Button/Button';

import {
  HeroSection,
  HeroSectionTitle,
  HeroSectionText,
  HeroSectionRecipeTimeBox,
  HeroSectionRecipeTime,
  ClockIcon,
} from './RecipePageHero.styled';

export const RecipeHero = () => {
  return (
    <HeroSection>
      <HeroSectionTitle>Salmon Avocado Salad</HeroSectionTitle>
      <HeroSectionText>
        Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
        pan seared salmon is layered on top of spinach, avocado, tomatoes, and
        red onions. Then drizzled with a homemade lemon vinaigrette.
      </HeroSectionText>
      <AddToFavoriteButton
        onClick={() => console.log('Add to favorite')}
        children={'Add to favorite recipes'}
      />
      <HeroSectionRecipeTimeBox>
        <ClockIcon />
        <HeroSectionRecipeTime>30 min</HeroSectionRecipeTime>
      </HeroSectionRecipeTimeBox>
    </HeroSection>
  );
};
