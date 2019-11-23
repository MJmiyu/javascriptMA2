//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
Object.prototype.myFunction = function myFunction() {
  console.log('prototypal inheritance');
};

Array.prototype.myFunction();
// task 2, unclear question so put 2 different solutions

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array
const slicedArray = myArray.slice(5); // sliced from 5th number
console.log(slicedArray);

const filteredArray = myArray.filter((_, idx) => idx !== 4); // 5th number removed from array.
console.log(filteredArray);

// task 3
filteredArray.pop();
console.log(filteredArray);

//task 4

var paragraph =
  'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';
function wordChange(text) {
  text = text.replace('strawberry', 'banana');
  text = text.replace('Strawberry', 'Banana');
  text = text.replace('strawberries', 'bananas');
  text = text.replace('Strawberries', 'Bananas');
  return text;
}

var changedParagraph = wordChange(paragraph);
console.log(changedParagraph);

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var clickArray = ['Liverpool', 'Leeds', 'Chelsea', 'Juventus'];
function buttonClick() {
  clickArray.splice(0, 4, 'Volvo', 'Opel', 'Ferrari', 'Toyota');
  console.log(clickArray);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var peopleArray = [
  {
    name: 'Nano',
    age: 5
  },
  {
    name: 'Joacim',
    age: 29
  },
  {
    name: 'Marthe',
    age: 29
  }
];
var nano = peopleArray.filter(function(obj) {
  return obj.name === 'Nano';
});
console.log(nano[0]);

//7. Create a simple function that logs the date.

function logDate() {
  var date = new Date();
  console.log(date.toString());
}
logDate();
