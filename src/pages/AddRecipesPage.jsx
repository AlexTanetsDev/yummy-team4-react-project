import { useTranslation } from 'react-i18next';

import { AddRecipeForm } from '../components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from '../components/PopularRecipe/PopularRecipe';
import { Container } from '../components/Container/Container';
import { Sections } from '../components/Sections/Sections';
import { FollowUs } from '../components/FollowUs/FollowUs';
import { PageContainer } from 'components/AddRecipeForm/AddRecipeForm.styled';

export const AddRecipePage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Sections title={t('Add recipe')}>
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
