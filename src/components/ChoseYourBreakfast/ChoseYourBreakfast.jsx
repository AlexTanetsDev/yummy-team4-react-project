import React from 'react';

import {
  Hero,
  Span,
  HeroInfo,
  BreakfastButton,
} from './ChooseYourBreakfast.styled';

export const ChoseYourBreakfast = onClick => {
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
      <BreakfastButton onClick={onClick}>
        <p>
          <Span>Delicious and healthy</Span> way to enjoy a variety of fresh
          ingredients in one satisfying meal
        </p>
      </BreakfastButton>
    </div>
  );
};
