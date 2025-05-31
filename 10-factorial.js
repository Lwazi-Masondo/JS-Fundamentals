const arguments = process.argv;

let arg = Number(arguments[2]);

function factorial(n) {
  if (isNaN(arg)) {
    return 1;
  }
  if (n === 1) {
    return 1; //this part is improtant so your functions or the recursion knows when to stop running
  }
  return n * factorial(n - 1);
}
console.log(factorial(arg));
