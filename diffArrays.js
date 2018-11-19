/* TASK:
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  let newArr1 = arr1.filter(item => !arr2.includes(item));
  let newArr2 = arr2.filter(item => !arr1.includes(item));
  let filteredArr = newArr1.concat(newArr2);
  return filteredArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
