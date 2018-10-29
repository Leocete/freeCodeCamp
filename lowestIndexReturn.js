function getIndexToIns(arr, num) {
  arr.push(num);
  arr = arr.sort(function(a,b) {return a-b});
  return arr.indexOf(num);
}
getIndexToIns([10, 20, 30, 40, 50], 35);
