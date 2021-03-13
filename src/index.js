
exports.min = function min (array) {
  min=arr[0];
  for (let i=0; i< array.length; i++) {
    if(min>arr[i]){
      min=arr[i]
    }
  }

}

exports.max = function max (array) {
  max=0;
  for (let i=0; i< array.length; i++) {
    if(max<arr[i]){
      max=arr[i]
    }
  }

  
}

exports.avg = function avg (array) {
  let x;
  for (let i=0; i< array.length; i++) {
    x+=arr[i];
  }

}
