// Create a simple for loop that sums all the numbers between x and y. Have it console log the final sum.
// Standalone Function
function SumConsecutiveNums(x,y){
  var sum = 0;
  for(var i = x; i<=y;i++){
    sum+=i;
  }
  console.log(sum);
}
SumConsecutiveNums(3,5);//12
// Anonymous function assigned to variable
var sum = function(x,y) {
  var sum = 0;
  for(var i = x; i<=y;i++){
    sum+=i;
  }
  console.log(sum);
}
sum(3,5)//12

// methods of a "part1" object// ????


var myObject = {
  vals:[3,5],
  SumConsecutiveNums:function(){
    var [x, y] = this.vals;
      var sum = 0;
      for(var i = x; i<=y;i++){
        sum+=i;
      }
      console.log(sum);
    }
  }
myObject.SumConsecutiveNums();

  sum(3,5)//12
// Write a loop that will go through an array, find the minimum value, and then return it
// Standalone Function
var myArr = [1, 5, 90, 25, -3, 0];
function returnMin(arr){
  var min = arr[0];
  for(var i = 1; i< arr.length;i++){
    if(arr[i]<min){
      min = arr[i];
    }
  }
  return min
}
console.log(returnMin(myArr));//-3
// Anonymous function assigned to variable
var myArr = [1, 5, 90, 25, -3, 0];
var returnMin = function(arr){
    var min = arr[0];
    for(var i = 1; i< arr.length;i++){
      if(arr[i]<min){
        min = arr[i];
      }
    }
    return min
}
console.log(returnMin(myArr));//-3


// methods of a "part1" object//???

// Write a loop that will go through an array, find the average of all of the values, and then return it
// Standalone Function
var myArr = [1, 5, 90, 25, -3, 0];
function getAverage(arr){
  var sum = arr[0]
  for(var i = 1; i< arr.length;i++){
    sum+=arr[i]
  }
  return sum/arr.length;
}
console.log(getAverage(myArr));//19.666666666666668

// Anonymous function assigned to variable
var myArr = [1, 5, 90, 25, -3, 0];
var getAverage = function(arr){
  var sum = arr[0]
  for(var i = 1; i< arr.length;i++){
    sum+=arr[i]
  }
  return sum/arr.length;
}
console.log(getAverage(myArr));//19.666666666666668

// methods of a "part1" object


var person = {
  name:'Trey',
  distance_traveled:0,
  say_name: function(){ console.log(this.name)},
  say_something:function(phrase){console.log(this.name+' thinks '+phrase)},
  walk:function(){console.log(this.name +' is walking'); this.distance_traveled+=3;} ,
  run: function(){console.log(this.name +' is running'); this.distance_traveled+=10;},
  crawl:function(){console.log(this.name +' is crawling'); this.distance_traveled+=1;},
  }

person.say_name();
person.say_something('this is awesome')
person.walk();
console.log(person.distance_traveled);
person.run();
console.log(person.distance_traveled);
person.crawl();
console.log(person.distance_traveled);
