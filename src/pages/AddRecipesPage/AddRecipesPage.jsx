import { AddRecipeForm } from '../../components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from '../../components/PopularRecipe/PopularRecipe';
import { Container } from '../../components/Container/Container';
import { Sections } from '../../components/Sections/Sections';
import { FollowUs } from '../../components/FollowUs/FollowUs';
import { ContentContainer } from './AddRecipesPage.styled';

export const AddRecipePage = () => {
  return (
    <Container>
      <Sections title="Add recipe">
        <ContentContainer>
          <AddRecipeForm />
          <div>
            <FollowUs />
            <PopularRecipe />
          </div>
        </ContentContainer>
      </Sections>
    </Container>
  );
};

export default AddRecipePage;
