import { RegisterForm } from "components/RegisterForm/RegisterForm";
// import { Link } from "./RegisterPageWrapper.styled";
import { Container } from "components/Container/Container";

export const RegisterPageWrapper = () => {
	return (
		<Container>
			<RegisterForm/>
			{/* <Link to="/signin">Sign in</Link> */}
		</Container>
	)
}