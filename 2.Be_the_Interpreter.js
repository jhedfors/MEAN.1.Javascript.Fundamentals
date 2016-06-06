

// Problem 1
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}
console.log(first_variable);
// undefined
// Yipee I was first!



//re-arranged
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}
console.log(first_variable);//print 'undefined'
first_variable = "Yipee I was first!";
console.log(first_variable);//print "Yipee I was first!"

// Problem 2
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // NOTE: I'M TRYING TO TRICK YOU HERE!!!!
}
eat();
console.log(food);
// half-chicken
// Chicken

//re-arranged
var food;
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
}
food = "Chicken";
eat();//print 'half-chicken'
console.log(food);//print 'Chicken'

// Problem 3
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

//re-arranged
var new_word;
function lastFunc() {
  new_word = "old";
}
new_word = "NEW!";
console.log(new_word); //print 'NEW!'
