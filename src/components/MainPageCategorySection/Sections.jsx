import { Section, SectionTitle } from './Sections.styled';

export const Sections = ({ title, children }) => {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Section>
  );
};
