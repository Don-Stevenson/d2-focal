function average(list) {
  let sum = 0;
  for (let num of list) {
    sum += num;
  }
  return average = sum / list.length;
}
console.log(average([2, 6, 4]));
