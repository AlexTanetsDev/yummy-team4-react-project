import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Container} from "../Container/Container"
import { Header } from "../Header/Header";
// import { Footer } from './Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Container>
      <Header />
			{/* <nav>
        <Suspense>
        <Outlet />
        </Suspense>
      </nav> */}
      {/* <Footer /> */}
      </Container> 
    </>
  );
};
