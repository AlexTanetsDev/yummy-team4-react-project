import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { NavLink } from "react-router-dom";

export default function Register() {
	return (
		<>
			<RegisterForm/>
			<NavLink to="/signin">Sign in</NavLink>
		</>
	)
};