/* TASK:

Remove all falsy values from an array. 
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

*/

function bouncer(arr) {
  return arr.filter(function(value){
      return value !== false && value !== "" && !(Number.isNaN(value)) && value !== 
undefined && value !== 0 && value !== null;
    });
}

bouncer([7, "ate", "", false, 9]);
