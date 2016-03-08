function intersection(array1, array2) {
  if(array1 && array2 && array1[0] && array2[0]) {
    return array1.filter(function(arr) {
      return array2.indexOf(arr) >= 0
    })
  } else {
    return "Please enter arrays for both arguments";
  }
}