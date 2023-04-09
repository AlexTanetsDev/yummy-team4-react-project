import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-team4-nodejs-project.onrender.com/api';

// const myRecipes = [
//   {
//     _id: 'id-1',
//     title: 'Pad See Ew',
//     description:
//       'A Thai stir-fry dish made with wide rice noodles, soy sauce, oyster sauce, Chinese broccoli, and meat (such as chicken or beef).',
//     instructions:
//       "Mix Sauce in small bowl. Mince garlic into wok with oil. Place over high heat, when hot, add chicken and Chinese broccoli stems, cook until chicken is light golden. Push to the side of the wok, crack egg in and scramble. Don't worry if it sticks to the bottom of the wok - it will char and which adds authentic flavour. Add noodles, Chinese broccoli leaves and sauce. Gently mix together until the noodles are stained dark and leaves are wilted. Serve immediately!",
//     time: '20 min',
//     preview:
//       'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/nl3ks6ugu4uafh8fp4ot.jpg',
//   },
//   {
//     _id: 'id-2',
//     title: 'Chicken Enchilada Casserole',
//     description:
//       'A Mexican-inspired casserole made with shredded chicken, enchilada sauce, tortillas, and cheese.',
//     instructions:
//       "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot. Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes. No water is needed, the chicken will cook in the Enchilada sauce. Make sure you stir occasionally so that it doesn't stick to the bottom. Remove chicken from the pot and shred with two forks. Preheat oven to 375 F degrees. Start layering the casserole. Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish. I used a longer baking dish, so that I can put 2 corn tortillas across. Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce. Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese. Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese. Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top. Serve warm.",
//     time: '60 min',
//     preview:
//       'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/smb2tdq5ltv4usbnvmt2.jpg',
//   },
//   {
//     _id: 'id-3',
//     title: 'Recheado Masala Fish',
//     instructions:
//       "Soak all the spices, ginger, garlic, tamarind pulp and kashmiri chilies except oil in vinegar. Add sugar and salt. Also add turmeric powder. Combine all nicely and marinate for 35-40 mins. Grind the mixture until soft and smooth. Add more vinegar if required but ensure the paste has to be thick so add vinegar accordingly. If the masala paste is thin then it would not stick to the fish. Rinse the fish slit from the center and give some incision from the top. You could see the fish below for clarity. Now stuff the paste into the center and into the incision. Coat the entire fish with this paste. Marinate the fish for 30 mins. Place oil in a shallow pan, once oil is quite hot shallow fry the stuffed mackerels. Fry until golden brown from both sides Serve the recheado mackerels hot with salad, lime wedges, rice and curry. Notes 1. Ensure the masala paste is thick else the result won't be good. 2. If you aren't able to find kashmiri chilies then use bedgi chilies or kashmiri red chili powder. 3. You could use white vinegar or coconut vinegar. 4. Any left over paste could be stored in the fridge for future use. 5. Cinnamon could be avoided as it's a strong spice used generally for meat or chicken.",
//     description:
//       'Various type of tarte au sucre are made. Some are a leavened dough topped with beet sugar or brown sugar, others have a crust containing a homogeneous sugar mixture which is similar to caramel after baking. The French Canadian version of the dessert sometimes uses maple syrup.',
//     time: '105 min',
//     preview:
//       'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/vd9m0varcijmpwhsfo3f.jpg',
//   },
//   {
//     _id: 'id-4',
//     title: 'Spaghetti Bolognese',
//     instructions:
//       'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
//     description:
//       'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
//     time: '30 min',
//     preview:
//       'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg',
//   },
// ];

export const fetchMyrecipes = async () => {
  console.log('проба fetch');
  try {
    const { data } = await axios.get(`/ownRecipes`);
    // const data = myRecipes;
    return data;
  } catch (error) {
    return error.message;
  }
};

export const deleteMyrecipes = async () => {
  try {
    const { data } = await axios.delete(`/ownRecipes`);
    return data;
  } catch (error) {
    return error.message;
  }
};
