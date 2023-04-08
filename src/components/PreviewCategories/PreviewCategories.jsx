import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useAuth } from '../../hooks';
import axios from 'axios';
import { Sections } from 'components/Sections/Sections';
import { SeeAllButton } from 'components/Button/Button.jsx';

// axios.defaults.headers.common['Authorization'] =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjOGU1NmY3M2E0YmE5ZDlhNzk4MTYiLCJpYXQiOjE2ODA5MDY4MTYsImV4cCI6MTY4MDk4OTYxNn0.cOeYg8Y4WvI_KfS6fYlFDxSniwl6yVjnNRcKWjTD15U';
// 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjOGU1NmY3M2E0YmE5ZDlhNzk4MTYiLCJpYXQiOjE2ODA5NDE3OTksImV4cCI6MTY4MTAyNDU5OX0.R7puNattOS6LksGKc-OmhrSfN95oCp2yHJ1YPfb97D8',

function onHandlCklik() {
  console.log(3);
}

export function PreviewCategories() {
  const [items, setItems] = useState('');
  const token = useSelector(state => state.auth.token);

  const instance = axios.create({
    baseURL: 'https://yummy-team4-nodejs-project.onrender.com/api',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    instance.get('/recipes/main-page').then(function (response) {
      setItems(response.data);
    });
  }, [instance]);

  return (
    <>
      {items.length > 0
        ? items
            .map(item => {
              const { category, recipes } = item;
              return (
                <ul key={category}>
                  <Sections title={category} children>
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
                    <SeeAllButton onClick={onHandlCklik} children="See all" />
                  </Sections>
                </ul>
              );
            })
            .slice(0, 4)
        : null}
    </>
  );
}
