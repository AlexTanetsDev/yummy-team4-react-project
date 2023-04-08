import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { SeeAllButton } from 'components/Button/Button.jsx';

// axios.defaults.headers.common['Authorization'] =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjOGU1NmY3M2E0YmE5ZDlhNzk4MTYiLCJpYXQiOjE2ODA5MDY4MTYsImV4cCI6MTY4MDk4OTYxNn0.cOeYg8Y4WvI_KfS6fYlFDxSniwl6yVjnNRcKWjTD15U';

const instance = axios.create({
  baseURL: 'https://yummy-team4-nodejs-project.onrender.com/api',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjOGU1NmY3M2E0YmE5ZDlhNzk4MTYiLCJpYXQiOjE2ODA5MDY4MTYsImV4cCI6MTY4MDk4OTYxNn0.cOeYg8Y4WvI_KfS6fYlFDxSniwl6yVjnNRcKWjTD15U',
  },
});

function onHandlCklik() {
  console.log(3);
}

export function PreviewCategories() {
  const [items, setItems] = useState('');
  useEffect(() => {
    instance.get('/recipes/main-page').then(function (response) {
      setItems(response.data);
    });
  }, []);
  console.log(items);
  return (
    <>
      {items.length > 0
        ? items
            .map(item => {
              const { category, recipes } = item;
              return (
                <ul key={category}>
                  <li>{category}</li>
                  <li>
                    {recipes
                      .map(recipe => {
                        const { preview, title } = recipe;
                        return (
                          <ul>
                            <li>
                              <img src={preview} alt="" />
                            </li>
                            <li>{title}</li>
                          </ul>
                        );
                      })
                      .slice(0, 4)}
                  </li>
                  <SeeAllButton onClick={onHandlCklik} children="See all" />
                </ul>
              );
            })
            .slice(0, 4)
        : null}
    </>
  );
}
