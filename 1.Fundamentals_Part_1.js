console.log("1.Create a program that goes through each value in array x, where x is [3,5,'Dojo', 'rocks', 'Michael', 'Sensei']. Have it log each value of the array.")
var x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
for(var i = 0; i < x.length; i++){
  console.log(x[i]);
}
console.log("2.Add a new value in the array x using a push method. New value you should add is 100.");
x.push(100);
for(var i = 0; i < x.length; i++){
  console.log(x[i]);
}
console.log("3.Add a new array to array x. Log x in the console and analyze how x looks now.")
var newArray = ['this', 'is', 'a', 'new','array'];
x.push(newArray);
for(var i = 0; i < x.length; i++){
  console.log(x[i]);
}
console.log("4.Create a simple for loop that sums all the numbers from 1 to 500. Have console log the final sum.")
var sum = 0;
for(var i = 1; i <=500; i++){
  sum+=i;
}
console.log(sum);
console.log("5.Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it")
var arr5 = [1, 5, 90, 25, -3, 0];
var min = arr5[0];
for(var i = 1; i< arr5.length;i++){
  if(arr5[i]<min){
    min = arr5[i];
  }
}
console.log('Min:',min);
console.log("6.Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it")
var arr6 = [1, 5, 90, 25, -3, 0];
var sum = arr6[0]
for(var i = 1; i< arr6.length;i++){
  sum+=arr6[i]
}
console.log('Average:', sum/arr6.length);
