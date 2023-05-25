import React from 'react';
import { useTranslation } from 'react-i18next';

import { useNavigate, useLocation } from 'react-router-dom';
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
    <>
      <MainPageHero>
        <Container children>
          <HeroTitle>
            <Span>So</Span>Yummy
          </HeroTitle>
          <HeroInfo>{t('What to cook?')}</HeroInfo>
          <InputWraper>
            <BreakfastButton>
              <div>
                <Text>
                  <Span>{t('Delicious and healthy')}</Span> {t('Way to enjoy')}
                </Text>
                <Arrow to={`/categories/Breakfast`} state={{ from: location }}>
                  {t('See recipes')}
                  <BsArrowRight style={{ marginLeft: '7px' }} />
                </Arrow>
              </div>
            </BreakfastButton>
            <Search onSubmit={formSubmitHandler} />
          </InputWraper>
        </Container>
      </MainPageHero>
    </>
  );
};
