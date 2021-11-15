// Program to print the numbers in ascending order//

var numbers = [4, 10, 5, 2, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]//