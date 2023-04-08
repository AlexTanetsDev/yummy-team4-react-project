import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  Hero,
  Span,
  HeroInfo,
  // BreakfastButton,
  Text,
  Arrow,
} from './ChooseYourBreakfast.styled';

export const ChoseYourBreakfast = onClick => {
  const location = useLocation();

  return (
    <div>
      <Hero>
        <Span>So</Span>Yummy
      </Hero>
      <HeroInfo>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.
      </HeroInfo>
      {/* <img alt={} src={}/> */}
      {/* <BreakfastButton onClick={onClick}> */}
      <Text>
        <Span>Delicious and healthy</Span> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </Text>
      <Link to={`/categories/breakfast`} state={{ from: location }}>
        <Arrow>See recipes</Arrow>
      </Link>
      {/* </BreakfastButton> */}
    </div>
  );
};
