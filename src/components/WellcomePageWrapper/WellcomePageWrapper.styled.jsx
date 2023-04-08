import styled from 'styled-components';

export const StyledWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #13420c;
`;

export const Logo = styled.div`
margin-right: auto;
margin-left: auto;
width: 54px;
height: 54px;
margin-bottom: 28px;
border-radius: 12px;
background-color: ${p => p.theme.colors.firstAccentColor};`;

export const ContentWrapper = styled.div`
	position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
`;

export const Title = styled.h1`
  margin-bottom: 14px;
	text-align: center;
	color: ${p => p.theme.colors.mainBgColor};
`;

export const Text = styled.p`
	width: 304px;
	margin-bottom: 44px;
	text-align: center;
	font-size: ${p => p.theme.fontSizes.l}px;
	color: ${p => p.theme.colors.mainBgColor};
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 12px;
`;