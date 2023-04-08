import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
	height: 100vh;
	background-color: ${p => p.theme.colors.lightBgColor};
`

export const ModalWrapper = styled.div`
  position: absolute;
	position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 335px;
  height: 350px;
 
  background-color: ${p => p.theme.colors.thirdAccentColor};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

export const Form = styled.div`
	display: flex;
`;

export const Label = styled.div`
	width: 279px;
`;

