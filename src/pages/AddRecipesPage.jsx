import { AddRecipeForm } from '../components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from '../components/PopularRecipe/PopularRecipe';
import { Container } from '../components/Container/Container';
import { Sections } from '../components/Sections/Sections';
import { FollowUs } from '../components/FollowUs/FollowUs';
import { PageContainer } from 'components/AddRecipeForm/AddRecipeForm.styled';

export const AddRecipePage = () => {
  return (
    <Container>
      <Sections title="Add recipe">
        <PageContainer>
          <AddRecipeForm />
          <div>
            <FollowUs />
            <PopularRecipe />
          </div>
        </PageContainer>
      </Sections>
    </Container>
  );
};

export default AddRecipePage;
