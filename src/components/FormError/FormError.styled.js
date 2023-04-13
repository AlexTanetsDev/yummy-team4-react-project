import styled from "styled-components";

export const ErrorText = styled.p`
position: absolute;
top: 40px;
color: ${p => p.theme.colors.errorColor};
font-size: 10px;
line-height: 21px;
 @media (min-width: 768px){
	top: 60px;
	font-size: 14px;
 }
 @media (max-width: 1440px) and (max-height: 940px) {
    top: 40px;
    font-size: 10px;
  }
`;