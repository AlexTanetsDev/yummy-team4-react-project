import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
  padding: 10px;
  background: #8baa36;
  border-radius: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;

  color: #fafafa;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
    padding: 20px;
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    margin-top: 70px;
    margin-bottom: 5px;
    color: #fafafa;
    padding: 20px 40px;
  }
`;

export const NumberIRemoveWrapper = styled.div`
  display: flex;
  gap: 25px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    gap: 140px;
  }
`;

export const ShoppingListTitle = styled.h2`
  display: 'flex';
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  margin: 50px 10px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
    margin: 70px 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
    line-height: 44px;
  }
`;

export const ShppList = styled.ul`
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    margin-bottom: 200px;
  }
`;
