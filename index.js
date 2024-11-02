const numbers = [1, 2, 3, 4, 5, 2];
let Output;

const duplicates = numbers.filter(
  (item, index) => numbers.indexOf(item) !== index
);
if (duplicates.length > 0) {
  Output = true;
} else {
  Output = false;
}
console.log(Output);
