import React, { useEffect, useRef } from 'react';
import { CategoryLists, NavLinks } from './CategoryList.styled';

const CategoryList = ({ categories }) => {
  let ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = e => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <>
      <CategoryLists ref={ref}>
        {categories.length !== 0 &&
          categories.map(category => (
            <li key={category}>
              <NavLinks to={`/categories/${category}`}>{category}</NavLinks>
            </li>
          ))}
      </CategoryLists>
    </>
  );
};

export default CategoryList;
