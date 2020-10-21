'use strict';
/**************Variables and data types */
/*var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variable naming rules
 var _3years = 3;
 var johnMark = 'John and Mark';
 var year = 23;
*/

/******Variable mutation and type coercion */

/*var firstName = 'John';
var age = 28;

let job, isMarried; 
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age);

console.log (firstName + ' ' + age + ' year old ' + job + '. Is he married ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert (firstName + ' ' + age + ' year old ' + job + '. Is he married ' + isMarried);

var lastName = prompt ('What is his Name?');
console.log(firstName + ' ' + lastName);*/

/*****
 * Basic operators
 */
/*var year, yearJohn, yearMark, now, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

var yearJohn = now - 28;
var yearMark = now - 33;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//Logical operators
var johnOlder = ageJohn >  ageMark;
console.log(johnOlder);

//type of operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older that John');
let x;
console.log(typeof x);*/








/*let massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn, bmiS;

massMark = 75;
massJohn = 80;

heightMark = 182;
heightJohn = 173;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark);
console.log(bmiJohn);

bmiS = bmiJohn >= bmiMark;

console.log ("Is Mark`s BMI higher than John`s?" + ' ' + bmiS);

var massMark = 78 // kg
var heightMark = 1.69 // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn, BMIMark);

var markHigherBMI = BMIMark > BMIJohn; 

console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI);





var firstName = 'John';
var civilStatus = 'single';


if (civilStatus === 'married') {
    console.log(firstName + ' is married');
 } else {
     console.log (firstName + ' will hopefully marry soon :');
 }

 var isMarried = true ;
     if (isMarried) {
         console.log(firstName + ' is married');
     } else {
         console.log (firstName + ' will hopefully marry soon :');
     }

 var massMark = 78 // kg
 var heightMark = 1.69 // meters

 var massJohn = 92;
 var heightJohn = 1.95;

 var BMIMark = massMark / (heightMark * heightMark);
 var BMIJohn = massJohn / (heightJohn * heightJohn);

 if (BMIMark > BMIJohn) {
     console.log('Mark\'s BMI higher than John\'s?');
 } else {
     console.log('John\'s BMI higher than Mark\'s?');
 }

 var markHigherBMI = BMIMark > BMIJohn; 

 console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI);*/

 /*let firstName = 'John';
 let age = 16;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a man.');
 } else {
    console.log(firstName + ' is a man.');

}

/********
 * The Ternary Operator and Switch Statements
 */

/*let firstName = 'John';
let age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
    let drink = 'beer';
} else {
    let drink = 'juice'
}*/

// Switch statement
/*let job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':        
        console.log(firstName + ' designs beautiful websites.');
        break;
    default: 
        console.log(firstName + ' does something else');
}*/



/*let firstName = 'John';
let age = 16;
age = 55;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

/*****
 * Truthy and Falsy values and equality operators
 * 
 */
//falsy values: underfined, null, 0, '', NaN 
// truthy values: NOT falsy values

/*let height;

height = '23';

if (height || height === 0) {
    console.log ('Variable is defined')
} else {
    console.log ('Variable has NOT been defined')

}

// Equality operators
if (height == '23'){
    console.log ('The == operator does type coercion!');
}

//Coding Challenge 2 Moi variant

/*let JohnsTeam, MikesTeam, averageJohnsTeam, averageMikesTeam, JohnsTeamScores1, JohnsTeamScores2,  JohnsTeamScores3, 
MikesTeamScores1, MikesTeamScores2, MikesTeamScores3;

JohnsTeamScores1 = 89;
JohnsTeamScores2 = 120;
JohnsTeamScores3 = 103;

MikesTeamScores1 = 89;
MikesTeamScores2 = 120;
MikesTeamScores3 = 103;



averageJohnsTeam = (JohnsTeamScores1 + JohnsTeamScores2 + JohnsTeamScores3) / 3;
averageMikesTeam = (MikesTeamScores1 + MikesTeamScores2 + MikesTeamScores3) / 3;

console.log (averageJohnsTeam, averageMikesTeam);

if (averageJohnsTeam < averageMikesTeam ) {
    console.log('Mikes Wins');
} else if (averageJohnsTeam === averageMikesTeam) {
    console.log('Nobody Wins');
} else {
    console.log('John Wins');
}*/

/*var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins ' + scoreMike + ' points');

} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}*/

/*************
 * Function
 * 
 */

/*function calculateAge(birthYear) {
     return 2018 - birthYear;
 }

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }else {
        console.log(firstName + ' is already retired ');
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

/*********
 * Function Statements and Expressions
 */
// Function declaration
/*function whatDoYouDo(job, firstName) {
     
}*/

 // Function expressions
/* var whatDoYouDo = function (job, firstName) {
    switch(job) {
            case 'teacher':
                return firstName + ' teacher kids how to code';
            case 'driver':
                return firstName + ' drives a cab in Lisbon';
            case 'designer':
                return firstName + ' designs beauiful websites';

            default:
                return firstName + ' does something else';
        }
 }

 console.log (whatDoYouDo('teacher', 'John'));
 console.log (whatDoYouDo('designer', 'Mike'));
 console.log (whatDoYouDo(' ', 'Jane'));*/

 /****************
  * Arrays (масиви)
  */

/******
 * Initialize new array
 */
/*var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

/*****
 * Mutate array data
 */

/*names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);


/*****
 * Different data types
 */

/*var john = ['John', 'Smith', 1990, 'designer', false];

 john.push('blue');
 john.unshift('Mr.')
 console.log(john);

 john.pop();
 john.pop();
 john.shift();
 console.log(john);

 console.log(john.indexOf(23));

 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'john IS a designer';

 console.log(isDesigner);*/

 /*******
  * Coding Challenge 3
  */

/* function tipCalculator(bill) {
    let percentage;
    if(bill < 50) {
        percentage = .2;
    } else if ( bill >= 50 && bill < 200){
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

let bills = [124, 48, 268];
let tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

let finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips);
console.log(finalValues); */

/*********
 * Objects and properties
*/

//Object literal
/* let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emely'],
    job: 'teacher',
    isMarried: false
}

console.log(john.firstName);
console.log(john['lastName']);
let x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new Object syntax
let jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane); */

/*********
 * Objects and methods
*/

/* let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1988,
    family: ['Jane', 'Mark', 'Bob', 'Emely'],
    job: 'teacher',
    isMarried: false,
    calcAge: function (birthYear) { 
        this.age = 2018 - this.birthYear;
     }
};

john.calcAge();
console.log(john);*/



/*********
 * Coding challenge 4
 */


/*let john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass /(this.height * this.height);
        return this.bmi;
    }
}



let mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass /(this.height * this.height);
        return this.bmi;
    }
}





if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullname + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullname + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
 */

/*************
 * Loops and iteration
 */

for (let i = 1; i <= 20; i += 2) {
    console.log (i);
}

/* let john = ['John', 'Smith', 1990, 'designer', false];
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);
console.log(john[4]);

for (let i = 0; i < john.length; i++) {
    console.log(john[i]);
} */

//While loop

/* let i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
} */

// continue and break statements
/* let john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (let i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (let i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}


//Looping backwards
for (let i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
} */