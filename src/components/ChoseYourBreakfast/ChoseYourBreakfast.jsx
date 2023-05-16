import React from 'react';
import { useTranslation } from 'react-i18next';

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
import { Container } from 'components/Container/Container';

export const ChoseYourBreakfast = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

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
        <Container children>
          <HeroTitle>
            <Span>So</Span>Yummy
          </HeroTitle>
          <HeroInfo>{t('What to cook?')}</HeroInfo>
          <InputWraper>
            <BreakfastButton>
              <Link to={`/categories/Breakfast`} state={{ from: location }}>
                <Text>
                  <Span>{t('Delicious and healthy')}</Span> {t('Way to enjoy')}
                </Text>
                <Arrow tipe="button">
                  {t('See recipes')}
                  <BsArrowRight style={{ marginLeft: '7px' }} />
                </Arrow>
              </Link>
            </BreakfastButton>
            <Search onSubmit={formSubmitHandler} />
          </InputWraper>
        </Container>
      </MainPageHero>
    </div>
  );
};
