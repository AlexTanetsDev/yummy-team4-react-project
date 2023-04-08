import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import vegetablesDish from '../../images/mobileMainPage/unsplash.webp';

import {
  Hero,
  Span,
  HeroInfo,
  BreakfastButton,
  Text,
  Arrow,
} from './ChooseYourBreakfast.styled';

export const ChoseYourBreakfast = () => {
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
      <div
        style={{
          position: 'relative',
        }}
      >
        <img alt={'Breakfast'} src={vegetablesDish} />
        <Link to={`/categories/breakfast`} state={{ from: location }}>
          <BreakfastButton
            tipe="button"
            style={{
              position: 'absolute',
              top: '113px',
              right: '7px',
              border: 'transparent',
            }}
          >
            <Text>
              <Span>Delicious and healthy</Span> way to enjoy a variety of fresh
              ingredients in one satisfying meal
            </Text>

            <Arrow>
              See recipes <BsArrowRight />
            </Arrow>
          </BreakfastButton>
        </Link>
      </div>
    </div>
  );
};
