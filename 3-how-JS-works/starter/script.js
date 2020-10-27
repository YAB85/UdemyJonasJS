'use strict';

///////////////////////////////////////
// Lecture: Hoisting

//functions

/* calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
} */

//retirement(1990);

/* const retirement = function (year) {
    console.log(65 - (2016 - year));
}
 */
// variables

/* onsole.log(age);
var age = 23;

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
 */

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/* var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}
function third() {
    var d = 'John';
    //console.log(c);
    console.log(d+a);
} */

/* let y = 1;
let x = y = 2;
alert(x);

let a;
let b;
!!(a && b); */

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

/* const x = '23';

if (x === 23) console.log(true);

const calcAge = birthYear => 2037 - birthYear;

if (x == 23) {
  console.log(true);
} */

/*********** Problem*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//BU //1.Udrestanding the problem
/****
 * -What is the temp amlitude? Answer: different between highest and lowest temp
 * -How to compute max and min temperatures?
 * What`s a sensor error? Awhat to do?
 */

/***TODO; //2.Breaking up into sub-problems
/**
 * -How to ignore errors?
 * -Find max value in temp array
 * -Find min value in temp array
 * -Subtract min from max (amplitude) and return it
 *
 */

/* const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); */

/****TODO; //Problem 2:
//Fucntion should now receive 2 arrays of temps

//1. Understanding the problem
//Just merge two arrays

//2.Breaking up into sub-problems
/**
 * - Merge 2 arrays
 */

/* const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 6], [9, 0, 5]);
console.log(amplitudeNew);
 */

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: +prompt('Degrees celsius:'),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin()); */
console.log('Hello');

/* const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}°C in ${i + 1} days`);
  }
}; */
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log('...' + str);
};

const temp = [17, 21, 23];
const temp1 = [12, 5, -5, 0, 4];

console.log(printForecast(temp));
console.log(printForecast(temp1));
