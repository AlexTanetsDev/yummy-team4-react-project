import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Search } from 'components/Search/Search';
import {
  MainPageHero,
  HeroTitle,
  Span,
  HeroInfo,
  BreakfastButton,
  Text,
  Arrow,
  InputWraper,
} from './ChooseYourBreakfast.styled';

export const ChoseYourBreakfast = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const formSubmitHandler = data => {
    if (data) {
      const replaced = data.trim();
      navigate(`/search/${replaced}`);
    }
    return;
  };

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
        <InputWraper>
          <BreakfastButton>
            <Link to={`/categories/Breakfast`} state={{ from: location }}>
              <Text>
                <Span>Delicious and healthy</Span> way to enjoy a variety of
                fresh ingredients in one satisfying meal
              </Text>
              <Arrow tipe="button">
                See recipes <BsArrowRight style={{ marginLeft: '7px' }} />
              </Arrow>
            </Link>
          </BreakfastButton>
          <Search onSubmit={formSubmitHandler} />
        </InputWraper>
      </MainPageHero>
    </div>
  );
};
