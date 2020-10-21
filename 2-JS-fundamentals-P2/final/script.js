'use strict';


/**************Function */



/* function logger () {
    console.log(`My name is ${name}`);
} */

// calling / running / invoking fucntion

/* function fruitProcessor (apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
} */

/* const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); */

/*******Function declaration */

/* function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991); */

/*****Function expression */

/* const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
 */
/***Arrow function */
/* const age3 = birthYear => 2037 - birthYear;

console.log(age3(1991));

const cutPieces = function (fruit) { */
    /* if(fruit < 3) {
        return fruit * 4;
    } else {
        return fruit * 2;
    } */

    /* return fruit < 3 ? fruit * 4 : fruit * 2;
} */

/* const fruitProcessor = function (apples, oranges) {
     const applePieces = cutPieces(apples);
     const orangesPieces = cutPieces(oranges);

     const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
     return juice;
}

console.log(fruitProcessor(1, 5)); */

const calcAverage = (a, b, c) => (a + b + c) / 3 ;

console.log(calcAverage(3, 4, 5));

//Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas}) `);

    } else if (avgKoalas <= 2 * avgDolphins){
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins}) `);
    } else {
        console.log('No team wins...');
    }
  }
checkWinner(scoreDolphins, scoreKoalas);
