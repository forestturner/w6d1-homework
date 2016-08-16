
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
console.log(`square of ${num} is ${num * num}`);
