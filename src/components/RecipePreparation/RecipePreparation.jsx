import { saladSalmon } from 'images';
import { Container } from 'components/Container/Container';
import {
  PreparationTitle,
  PreparationList,
  PreparationListItem,
  Point,
  PreparationText,
} from './RecipePreparation.styled';
export const RecepiePreparation = () => {
  return (
    <Container>
      <PreparationTitle>Recipe Preparation</PreparationTitle>
      <PreparationList>
        <PreparationListItem>
          <Point>1</Point>
          <PreparationText>
            Season the salmon, then rub with oil.
          </PreparationText>
        </PreparationListItem>
        <PreparationListItem>
          <Point>2</Point>
          <PreparationText>
            Season the salmon, then rub with oil. Season the salmon, then rub
            with oil Season the salmon, then rub with oil Season the salmon,
            then rub with oil
          </PreparationText>
        </PreparationListItem>
      </PreparationList>
      <img src={saladSalmon} alt="" />
    </Container>
  );
};
