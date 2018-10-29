function mutation(arr) {
  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      return false;  // found a false value, you can return
    }
  }
  return true  // made it through the loop without finding a false value.

}
mutation(["hello", "hey"]);
