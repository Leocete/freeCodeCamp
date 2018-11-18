/* TASK:
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  let newArr = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    newArr.push(i);
  }
  let newSum = newArr.reduce((a,b) => a + b, 0);
  return newSum;
}

sumAll([1, 4]);
