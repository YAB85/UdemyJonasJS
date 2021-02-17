'use strict';

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    //console.log(str);

    function add(a, b) {
      return a + b;
    }
    output = 'New output!';

    console.log(output);
  }
  //console.log(millenial);
  //console.log(add(2, 3));
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
 */
/* console.log(age);
printAge(); */

//Variables
/* console.log(me); */
/* console.log(job);
console.log(year);
 */
/* var me = 'Jonas';
let job = 'teacher';
const year = 1991; */

//Function

/* console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b; */

//Examples
/* console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All product deleted!');
} */

/* var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); */

/* console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = jonas.calcAge;
f(); */

/* const firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    /* const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996);
    }; */

//Solution 2
/*  const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
}; */

/* jonas.greet();
jonas.calcAge(); */

//arguments keyword

/* const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

var addArrow = (a, b) => a + b; */

/* let age = 30;

let oldAge = age;

age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;

friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me); */

/* let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis';

console.log(`${lastName} -> ${oldLastName}`);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = new Object(jessica);

jessica.firstName = 'Liza';

console.log(marriedJessica, jessica);
 */

// Copying objects

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica);

jessicaCopy.lastName = 'Davis';

console.log('Before married', jessica);
console.log('After married', jessicaCopy);
