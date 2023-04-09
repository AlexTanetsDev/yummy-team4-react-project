import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Link } from "./RegisterPageWrapper.styled";

export const RegisterPageWrapper = () => {
	return (
		<>
			<RegisterForm/>
			<Link to="/signin">Sign in</Link>
		</>
	)
}