
exports.min = function min (array) {
  if (!array || array.length==0){return 0}
  else{
    return min=Math.min.apply(null, array)
  }
}

exports.max = function max (array) {
  
  if (!array || array.length==0){return 0}
  else{
    return max=Math.max.apply(null, array)
  }
}

exports.avg = function avg (array) {
  if (!array || array.length==0){return 0}
  else{
    let x=0;
    for (let i=0; i< array.length; i++) {
      x+=array[i];
    }
    return y=x/array.length
  }
}

