import { TitleWrapper, Title } from './SectionTitle.styled';

export const SectionTitle = ({ title }) => {
  return <TitleWrapper>{title && <Title>{title}</Title>}</TitleWrapper>;
};
