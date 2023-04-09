import { SignInForm } from 'components/SigninForm/SigninForm';
import { NavLink } from 'react-router-dom';

export default function SignIn() {
  return (
    <>
      <SignInForm />
      <NavLink to="/register">Register</NavLink>
    </>
  );
}
