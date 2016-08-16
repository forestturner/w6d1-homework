
const NUMS = [1, 2, 3, 4, 5];
Array.prototype.myUniq = function () {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    if (result.indexof(this[i]) === -1 ){
        result.push(this[i]);
    }
  }
  return result;
};


Array.prototype.myEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
  return this;
};

Array.prototype.myMap = function (func) {
  let mappedArray = [];
  this.myEach((el) => mappedArray.push(func(el)) );
  return mappedArray;
};

Array.prototype.myInject = function(func) {
  let result = this[0];
  this.slice(1).myEach( el => result = func(result, el));
  return result;
};
console.log(NUMS.myInject( (total, item) => total + item ));
console.log(NUMS.myMap( num => num * num ));
NUMS.myEach((num) => {
  console.log(`square of ${num} is ${num * num}`);
});


function bubbleSort(array) {
  let isSorted = false;
  while(!isSorted) {
    isSorted = true;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i+1])
      {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        isSorted = false;
      }
    }
  }
  return array;
}


console.log(bubbleSort([31,312,414,55,555,11,131413,1]));




function fibonacci (n) {
  if (n===0){
    return [];
  }else if(n===1){
    return [0];
  }else if(n===2){
    return [0,1];
  }

  let fibs = fibonacci(n - 1);
  console.log(fibs);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
}


console.log(fibonacci(10));


function merge(left, right) {
  let result = [];
  while(left.length > 0 && right.length > 0) {
    let item =  (left[0] < right[0]) ? left.shift() : right.shift();
    result.push(item);
  }
  return result.concat(left,right);
}



function mergeSort (array) {
  if (array.length < 2) {
    return array;
  } else {
    let half = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0,half));
    let right = mergeSort(array.slice(half));
    return merge(left,right);
  }
}




console.log(mergeSort([31,312,414,55,555,11,131413,1]));







function bsearch (array, target) {
  if (array.length === 0) {
    return null;
  }
  let half = Math.floor(array.length / 2);
  if (array[half] === target){
    return half;
  } else if(array[half] > target) {
    bsearch(array.slice(0,half),target);
  } else {
    let something = bsearch(array.slice(half+1),target);
    return (something === null)? null : something + 1 + half;
  }
}
console.log(bsearch([0,1,2,3,4,5,6],5));
