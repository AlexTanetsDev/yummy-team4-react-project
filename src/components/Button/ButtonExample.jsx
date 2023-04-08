// Временно, потом удалим. Пример как переиспользовать кнопки.

// 1) Сначало импорт нужной кнопки из компонента Button:

// import {
//   SearchButtonBlack,
//   SearchButtonGreen,
//   SingInButton,
//   SingInButtonGreen,
//   RegistrationButton,
//   OtherCategoriesButton,
//   SubscribeButtonGreen,
//   SubscribeButtonBlack,
//   SaveChangesButton,
//   SeeAllButton,
//   LogOutButton,
//   CancelButton,
//   AddButton,
//   AddToFavoriteButton,
//   SeeRecipeButtonBlack,
//   SeeRecipeButtonGreen,
//   FavoritesDeleteButton,
//   MyRecipesDeleteButton,
// } from 'components/Button/Button.jsx';

// 2) После добавление в свой компонент с 2 пропсами onClick(коллбэк) children(текст кнопки):

// const YourComponent = () => {
//   return (
//     <>
//       <SearchButtonBlack
//         onClick={() => console.log('I am black search button')}
//         children="Search"
//       />
//       <SearchButtonGreen
//         onClick={() => console.log('I am green search button')}
//         children="Search"
//       />
//       <SingInButton
//         onClick={() => console.log('I am sing in button')}
//         children="Sing in"
//       />
//       <SingInButtonGreen
//         onClick={() => console.log('I am green sing in button')}
//         children="Sing in"
//       />
//       <RegistrationButton
//         onClick={() => console.log('I am registration button')}
//         children="Registration"
//       />
//       <OtherCategoriesButton
//         onClick={() => console.log('I am other categories button')}
//         children="Other categories"
//       />
//       <SubscribeButtonGreen
//         onClick={() => console.log('I am green subscribe button')}
//         children="Subscribe"
//       />
//       <SubscribeButtonBlack
//         onClick={() => console.log('I am black subscribe button')}
//         children="Subscribe"
//       />
//       <SaveChangesButton
//         onClick={() => console.log('I am save changes button')}
//         children="Save changes"
//       />
//       <SeeAllButton
//         onClick={() => console.log('I am see all button')}
//         children="See all"
//       />
//       <LogOutButton
//         onClick={() => console.log('I am log out button')}
//         children="Log out"
//       />
//       <CancelButton
//         onClick={() => console.log('I am cancel button')}
//         children="Cancel"
//       />
//       <AddButton
//         onClick={() => console.log('I am add button')}
//         children="Add"
//       />
//       <AddToFavoriteButton
//         onClick={() => console.log('I am add to favorite button')}
//         children="Add to favorite recipes"
//       />
//       <SeeRecipeButtonBlack
//         onClick={() => console.log('I am black see recipe button')}
//         children="See recipe"
//       />
//       <SeeRecipeButtonGreen
//         onClick={() => console.log('I am green see recipe button')}
//         children="See recipe"
//       />
//       <FavoritesDeleteButton
//         onClick={() => console.log('I am favorites delete button')}
//         children={<Icon />}
//       />
//       <MyRecipesDeleteButton
//         onClick={() => console.log('I am my recipes delete button')}
//         children={<Icon />}
//       />
//     </>
//   );
// };

// export default YourAppComponent;
