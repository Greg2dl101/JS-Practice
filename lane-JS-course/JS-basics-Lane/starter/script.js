/******************************
Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher'
console.log(job);

// Variable naming rules
var _3years = 3;

var johnMark = 'John and Mark';

/******************************
Variable mutation and type coorcion
*/

/*
//Type coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher'
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*///***********************************************************

/* ****************************************************************
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//type of operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*****************************************************************/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' a young man!');
}
else {
  console.log(firstName + ' is a grown man!');
}
*///*********************************************************

/*
var firstName = 'John';
var age = 20;


//ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink;

if (age < 18){
  console.log('juice');
} else {
  console.log('beer');
}
*/

/*
firstName = 'Greg';

var level = 'two';

switch (level) {
  case 'one' :
    console.log(firstName + ' you are on the first level!');
    break;
  case 'two' :
    console.log(firstName + ' you are on the second level!');
    break;
  case 'three' :
    console.log(firstName + ' you are on the third level!');
    break;
  case 'four':
    console.log(firstName + ' you are on the fourth level!');
  default:
    console.log(firstName + ' you are not even on the elevator!');
}
*/
//***************************************************
//Truthy and Falsy values and equality operators

/*
var height;

height = 0;

if (height || height === 0){
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

//Equality operators
if (heigher == '23'){
  console.log();
}
*/

/*
//John's score for each game (3)
var johnScore1 = 89;
var johnScore2 = 120;
var johnScore3 = 103;

//Mike's scores for each game (3)
var mikeScore1 = 116;
var mikeScore2 = 94;
var mikeScore3 = 123;

//Mar's scores for each game (3)
var maryScore1 = 97;
var maryScore2 = 134;
var maryScore3 = 105;

//average score for each team for 3 games
var johnAverage = (johnScore1 + johnScore2 + johnScore3) / 3;
var mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
var maryAverge = (maryScore1 + maryScore2 + maryScore3) / 3;
*/

/*//***********************************************************
var johnScore = (112 + 120 + 103) / 3;
var mikeScore = (116 + 97 + 123) / 3;
var maryScore = (97 + 134 + 105) / 3;

console.log(johnScore, mikeScore, maryScore);

//if/if...else/else statement that prints statements based on highest average score.
if (johnScore > mikeScore && johnScore > maryScore) {
  console.log('With ' + johnScore + ' points, John\'s team wins!');
}
else if (mikeScore > johnScore && mikeScore > maryScore) {
  console.log('With ' + mikeScore + ' points, Mike\'s team wins!');
}
else if (maryScore > johnScore && maryScore > mikeScore) {
  console.log('With ' + maryScore + ' points, Mary\'s team wins!');
}
else {
  console.log('There is a draw!');
}
*///*************************************************************

/*Functions*/
/*
function calculuateAge(birthYear){
  return 2018 - birthYear;
}

var ageJohn = calculuateAge(1990);
var ageMike = calculuateAge(1948);
var ageJane = calculuateAge(1969);

console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
  var age = calculuateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years!');
  }
  else {
    console.log(firstName + ' is retired!');
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1949, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*///********************************************************

//Function statements and expressions

//declaration
//function whatDoYouDo(job, firstName){}

//expression

/*
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code.';
    case 'driver':
      return firstName + ' drives a cab in Lisbon.'
    case 'designer':
      return firstName + ' designs beautiful websites.'
    default:
      return firstName + ' does something else.';

  }
}

console.log(whatDoYouDo('driver', 'John'));
console.log(whatDoYouDo('designer', 'Mary'));

*///***************************************************************************









































































//**********
