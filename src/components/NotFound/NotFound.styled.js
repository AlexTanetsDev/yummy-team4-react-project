import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  max-width: 375px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 204px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const NotFoundImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;

export const Alert = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 148px;
  margin-bottom: 16px;
  text-align: center;
`;

export const AlertContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${p => p.theme.colors.addRecepiesTexteriaText};
  width: 206px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const AlertTextPartOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Poppins, sans-serif;
  font-weight: ${props => props.theme.fontWeights[2]};
  font-size: 18px;
  line-height: 20px;
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-top: 32px;
    font-size: 24px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin-top: 32px;
  }
`;

export const AlertTextPartTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Poppins, sans-serif;
  font-weight: ${props => props.theme.fontWeights[0]};
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-top: 32px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400px;
    margin-top: 14px;
  }
`;
