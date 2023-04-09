import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'components/Search/Search';

import {
  MainPageHero,
  HeroTitle,
  Span,
  HeroInfo,
  BreakfastButton,
  Text,
  Arrow,
} from './ChooseYourBreakfast.styled';

function handlSubmit() {
  console.log('Submit');
}

export const ChoseYourBreakfast = () => {
  const location = useLocation();

  return (
    <div>
      <MainPageHero>
        <HeroTitle>
          <Span>So</Span>Yummy
        </HeroTitle>
        <HeroInfo>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </HeroInfo>
        <Link to={`/categories/breakfast`} state={{ from: location }}>
          <BreakfastButton tipe="button">
            <Text>
              <Span>Delicious and healthy</Span> way to enjoy a variety of fresh
              ingredients in one satisfying meal
            </Text>

            <Arrow>
              See recipes <BsArrowRight style={{ marginLeft: '7px' }} />
            </Arrow>
          </BreakfastButton>
        </Link>
        <Search onSubmit={handlSubmit} />
      </MainPageHero>
    </div>
  );
};
