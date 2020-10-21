///////////////////////////////////////
// Lecture: Hoisting

//functions

calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}







//retirement(1990);

const retirement = function (year) {
    console.log(65 - (2016 - year));
}

// variables

console.log(age);
var age = 23;

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);











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

let y = 1;
let x = y = 2;
alert(x);

let a;
let b;
!!(a && b);


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









