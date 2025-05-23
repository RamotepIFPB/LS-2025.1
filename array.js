function sum(array) {
  var sum = 0;
  for (let value of array) {
      sum = sum + value;
  }
  return sum;

}

function sumOdds(array) {
  var sum = 0;
  for (let value of array) {
      if (value % 2 != 0) {
          sum = sum + value;
      }
  }
  return sum;
}

function product(array) {
  var total = 1;
  for (let value of array) {
      total = total * value;
  }
  return total;

}

var array = [1, 2, 3];
console.log(sum(array));

array = [2, 2, 2];
console.log(sum(array));

array = [1, 2, 3, 4, 5, 6];
console.log(sum(array));

array = [1, 2, 3];
console.log(sumOdds(array));

array = [2, 2, 2];
console.log(sumOdds(array));

array = [1, 2, 3, 4, 5, 6];
console.log(sumOdds(array));

array = [1, 2, 3];
console.log(product(array));

array = [2, 2, 2];
console.log(product(array));

array = [1, 2, 3, 4, 5, 6];
console.log(product(array));
