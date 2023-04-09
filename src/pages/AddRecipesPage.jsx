// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { AddRecipeForm } from '../components/AddRecipeForm/AddRecipeForm';
import { Container } from '../components/Container/Container';
import {Sections } from "../components/Sections/Sections";

export const AddRecipePage = () => {
  return (
    <Container>
      <Sections title="Add recipe">
        <AddRecipeForm />
      </Sections>
    </Container>
  );
};

export default AddRecipePage;
