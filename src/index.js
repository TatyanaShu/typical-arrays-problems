
exports.min = function min (array) {
  min=array[0];
  for (let i=0; i< array.length; i++) {
    if(min>array[i]){
      min=array[i]
    }
  }

}

exports.max = function max (array) {
  max=0;
  for (let i=0; i< array.length; i++) {
    if(max<array[i]){
      max=array[i]
    }
  }

  
}

exports.avg = function avg (array) {
  let x;
  for (let i=0; i< array.length; i++) {
    x+=array[i];
  }

}
console.log('hello from Node.js')
