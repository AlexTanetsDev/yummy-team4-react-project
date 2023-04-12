import { Section, SectionTitle } from './Sections.styled';

export const Sections = ({ id, title, children }) => {
  return (
    <Section key={id}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Section>
  );
};
