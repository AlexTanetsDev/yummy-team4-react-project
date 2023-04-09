import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
	position: absolute;
	top: 85%;
	left: 50%;
  transform: translate(-50%, -50%) scale(1);
	color: ${p => p.theme.colors.mainBgColor}
`;