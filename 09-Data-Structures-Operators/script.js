'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

/* const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags); */

/* const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters); */

//Mutating variables

/* let a = 111;

let b = 999;

const obj = { a: 23, b: 7, c: 14 }; */

/* ({ a, b } = obj);
console.log(a, b); */

//Nested objects

/* const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */
/* const arr = [1, 2, 3];

const a = arr[0];

const [x, y, z] = arr; */

/* let [main, , , secondary] = restaurant.categories;

console.log(main, secondary); */

// Change place to two position
/* const temp = main;
main = secondary;
secondary = temp; */

/* [main, secondary] = [secondary, main];

console.log(main, secondary); */

// Receive 2 return value fromm a function
/* const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

const [i, , [k, z]] = nested;

console.log(i, k, z); */

//Default values

/* const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */

/* const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];

console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

console.log(newMenu); */

//Copy array

/* const mainMenuCopy = [...restaurant.mainMenu]; */

//Join 2 arrays

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu); */

//Iterables: arrays, strings, maps, sets. NOT objects

/* const str = 'Jonas';

const letters = [...str, ' ', 'S.'];

console.log(letters);
console.log(...str);
console.log(...str); */

/* const ingredients = [
  prompt('Let`s make pasta! Ingredient 1?'),
  prompt('Let`s make pasta! Ingredient 2?'),
  prompt('Let`s make pasta! Ingredient 3?'),
]; */
/* 
restaurant.orderPasta(...ingredients); */

//Objects

/* const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);
 */

// Spread, because on Right side of =
/* const arr = [1, 2, ...[3, 4]]; */

//ReSt,
/* const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others); */

/* const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
 */
//Object
/* const { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays); */

// 2) Functions

/* const add = function (...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num / numbers.length;
  }
  console.log(sum);
}; */

//add(2, 3);
//add(5, 3, 7, 2);
//add(8, 2, 5, 3, 2, 1, 4);

/* const x = [2, 4, 85];

add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); */

// Use Any data type, return Any data type, short-circuiting

/* console.log('------OR------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); */

/* restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1); */

//const guests2 = restaurant.numGuests || 10;

//console.log(guests2);

/* console.log('------AND------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas'); */

/* console.log('Hello' && 23 && null && 'Jonas'); */

/* restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinash');

console.log(false && null && '' && undefined); */

/* restaurant.numGuests = 0; */
//const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
/* const guestsCorrect = restaurant.numGuests ?? 10;

console.log(guestsCorrect); */

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(menu.entries());

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';

  console.log(`On ${day}, we open at ${open}`);
} */

//Methods
/* 
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'Users array empty');
 */

//Property NAMES
const properties = Object.keys(openingHours);

console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//Property Values

const values = Object.values(openingHours);

console.log(values);

// Entries object

const entries = Object.entries(openingHours);

console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
