import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mainRegImgMob, mainRegImgTab, mainRegImg, bottomRegImgMob, bottomRegImgTab, bottomRegImg} from '../../images';

export const StyledWrapper = styled.div`
  width: 100%;
	height: 100vh;
	background-color: ${p => p.theme.colors.lightBgColor};
`;

export const ImageReg = styled.div`
	position: absolute;
  top: 125px;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 87px;
	width: 285px;
	height: 250px;
	z-index: 9;
	background-image: url(${mainRegImgMob});
	@media (min-width: 768px) {
		top: 19%;
  	left: 50%;
		transform: translate(-50%, -50%);
		margin-top: 87px;
		width: 409px;
		height: 359px;
		background-image: url(${mainRegImgTab});
  }	
	@media (min-width: 1440px) {
		top: 35%;
  	left: 50%;
		transform: translate(-110%, -50%);
		width: 532px;
		height: 468px;
		background-image: url(${mainRegImg});
		background-size: contain;
  }
`;

export const BottomBgImage = styled.div`
	position: absolute;
	left: 50%;
	top: 100%;
	transform: translate(-50%, -100%);
	width: 100vw;
	height: 490px;
	background-image: url(${bottomRegImgMob});
	background-repeat: no-repeat;
	background-size: cover;
	@media (min-width: 768px) {
		height: 606px;
		background-image: url(${bottomRegImgTab});

  };
	@media (min-width: 1440px) {
		height: 325px;
		background-image: url(${bottomRegImg});
  };
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 480px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 350px;
	padding-top: 32px;
	padding-bottom: 40px;
	padding-left: 28px;
	padding-right: 28px;
  background-color: ${p => p.theme.colors.thirdAccentColor};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
	@media (min-width: 768px) {
	top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
	height: 419px;
	padding-top: 44px;
	padding-bottom: 44px;
	padding-left: 50px;
	padding-right: 50px;
  };
	@media (min-width: 1440px) {
	top: 48%;
  left: 50%;
  transform: translate(10%, -50%);
  };
`;

export const Title = styled.h1`
  margin-bottom: 18px;
	font-weight: 600;
	color: ${p => p.theme.colors.mainBgColor};
	@media (min-width: 768px) {
		margin-bottom: 32px;
    font-size: ${p => p.theme.fontSizes.xxxl}px;  }	
`;

export const InputWrapper = styled.div`
	position: relative;
`;

export const InputField = styled.input`
	display: block;
	margin-bottom: 12px;
	width: 279px;
	height: 45px;
	padding-left: 40px;
	color: ${p => p.theme.colors.mainBgColor};
	background-color: ${p => p.theme.colors.thirdAccentColor};
	border:solid 1px ${p => p.theme.colors.mainBgColor};
	border-radius: 6px;
	opacity: 0.8;
	&:hover {
  opacity: 1;
	};
	@media (min-width: 768px) {
		margin-bottom: 24px;
		padding-left: 50px;
		width: 400px;
	  height: 59px;
  };
`;

export const IconWrap = styled.div`
 position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  margin-left: 14px;
  opacity: 0.8;
	color: #fff;
	width: 24px;
	height: 24px;
	&:hover {
  opacity: 1;
}
`;

export const Button = styled.button`
	display: block;
	margin-top: 28px;
	width: 279px;
	height: 45px;
	color: ${p => p.theme.colors.mainBgColor};
	border-radius: 6px;
	border-color:transparent;
	background-color: ${p => p.theme.colors.firstAccentColor};
	@media (min-width: 768px) {
	 margin-top: 50px;
	  width: 400px;
	  height: 59px;
  }	
	@media (min-width: 1440px) {
	 margin-top: 50px;
	  width: 400px;
	  height: 59px;
  }
`;

export const Link = styled(NavLink)`
	position: absolute;
	top: 380px;
	left: 50%;
  transform: translate(-50%, -50%);
	color: ${p => p.theme.colors.mainBgColor};
	@media (min-width: 768px) {
		top: 455px;
	}
`;

