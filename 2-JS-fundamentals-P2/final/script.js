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

/* const calcAverage = (a, b, c) => (a + b + c) / 3 ;

console.log(calcAverage(3, 4, 5)); */

//Test 1
/* const scoreDolphins = calcAverage(44, 23, 71);
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
checkWinner(scoreDolphins, scoreKoalas); */

/* const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

for(let i = 0 ; i < years.length; i++){
    let age = calcAge(years[i]);
    let ages = [];
    ages.push(age[i])
    console.log(ages);
} */


/* years.forEach(el => {
    const result = el * 3;
    return result
}) */


/* const calcTips = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}; */

/* const calcTips = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


const bills = [125, 555, 44];

const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(totals); */

/* calcAge: function (birthYear) {
    return 2037 - birthYear;
  } */
/* calcAge: function () {
    console.log(this)
    return 2037 - this.birthYear;
} */

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age =  2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} - old ${this.job}, and he has  ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
}; */

/* console.log(jonas.calcAge());
console.log(jonas.age); */
//console.log(jonas['calcAge'](1991));

/* console.log();
console.log(jonas.getSummary()); */

/*************Codding Challenger */

/* const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = Math.floor(this.mass / this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = Math.floor(this.mass / this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
console.log(mark.bmi);
john.calcBMI();
console.log(john.bmi);


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (mark.bmi < john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is lower than ${john.fullName}'s BMI (${john.bmi})`);
} */

for (let i = 0; i < 10; i++){
    console.log(`Lifting weight repetion ${i} 🎾`);
}