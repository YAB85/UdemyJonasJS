'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

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
};

/* const arr = [1, 2, 3];

const a = arr[0];

const [x, y, z] = arr; */

let [main, , , secondary] = restaurant.categories;

console.log(main, secondary);

// Change place to two position
/* const temp = main;
main = secondary;
secondary = temp; */

[main, secondary] = [secondary, main];

console.log(main, secondary);

// Receive 2 return value fromm a function
const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

const [i, , [k, z]] = nested;

console.log(i, k, z);

//Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
