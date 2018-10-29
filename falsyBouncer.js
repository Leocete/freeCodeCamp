function bouncer(arr) {
  return arr.filter(function(value){
      return value !== false && value !== "" && !(Number.isNaN(value)) && value !== 
undefined && value !== 0 && value !== null;
    });
}

bouncer([7, "ate", "", false, 9]);
