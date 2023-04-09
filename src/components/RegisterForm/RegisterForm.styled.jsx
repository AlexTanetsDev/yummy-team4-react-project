import styled from "styled-components";
import { mainRegImgMob } from '../../images';
import{bottomRegImgMob} from '../../images';

export const StyledWrapper = styled.div`
  width: 100%;
	height: 100vh;
	background-color: ${p => p.theme.colors.lightBgColor};
`;

export const ContentWrapper=styled.div`
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`

export const ImageReg = styled.div`
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 87px;
	width: 285px;
	height: 250px;
	/* background-color: #757373; */
	background-image: url(${mainRegImgMob});
	background-size: contain;
`;

export const BottomBgImage = styled.div`
	position: absolute;
	left: 50%;
	top: 100%;
	transform: translate(-50%, -100%);
	width: 375px;
	height: 490px;
	background-image: url(${bottomRegImgMob});
	/* background-size: contain; */
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 335px;
  height: 350px;
	padding-top: 32px;
	padding-bottom: 40px;
	padding-left: 28px;
	padding-right: 28px;
  background-color: ${p => p.theme.colors.thirdAccentColor};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

export const Title = styled.h1`
  margin-bottom: 18px;
	font-weight: 600;
	color: ${p => p.theme.colors.mainBgColor}
`;

export const InputField = styled.input`
	display: block;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 12px;
	width: 279px;
	height: 45px;
	color: ${p => p.theme.colors.mainBgColor};
	background-color: ${p => p.theme.colors.thirdAccentColor};
	border:solid 1px ${p => p.theme.colors.mainBgColor};
	border-radius: 6px;
`;



export const Button = styled.button`
	display: block;
	margin-right: auto;
	margin-left: auto;
	margin-top: 28px;
	width: 279px;
	height: 45px;
	color: ${p => p.theme.colors.mainBgColor};
	border-radius: 6px;
	border-color:transparent;
	background-color: ${p => p.theme.colors.firstAccentColor};
`;

