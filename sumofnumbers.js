function sumFor(list) {
  let total = 0;
  for (const number of list) {
    total += number;
  }
  return total;
}

function sumWhile(list) {
  // while loop
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}

function sumRecursion(list) {
  if (list.length > 0) {
    return list[0] + sumRecursion(list.slice(1, list.length));
  }
  return 0;
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

// testing
const list = [1, 2, 3, 4, 5];
console.log(list);
console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
