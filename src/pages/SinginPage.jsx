import { SigninForm } from "components/SigninForm/SigninForm";
import { NavLink } from "react-router-dom";

export default function Signin() {
	return (
		<>
			<SigninForm/>
			<NavLink to="/register">Register</NavLink>
		</>
	)
};