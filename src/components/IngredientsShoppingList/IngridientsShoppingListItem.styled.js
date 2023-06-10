import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: ${p => p.theme.border.grayBorder};
  padding: 25px 0;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    padding: 40px 0;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    font-size: 18px;
    line-height: 27px;
    padding: 45px 40px;
  }
`;

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

  color: #fafafa;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    margin-top: 70px;
    margin-bottom: 10px;
    padding: 40px 21px;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #fafafa;
  }
`;

export const ImgTitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: ${p => p.theme.colors.itemTitleColor};
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    gap: 15px;
    font-size: 20px;
  }
`;

export const Quantity = styled.div`
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 37px;
  min-height: 23px;
  background: #8baa36;
  border-radius: 4px;
  font-size: 10px;
  line-height: 15px;
  font-weight: 600;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    padding: 4px 8px;
    min-width: 80px;
    min-height: 40px;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px 16px;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;

  @media screen and (min-width: 768px) {
    gap: 70px;
  }

  @media screen and (min-width: 1440px) {
    gap: 170px;
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 93px;
    height: 97px;
  }
`;
