const arguments = process.argv;

for (let i = 0; i < arguments[2]; i++) {
  if (arguments[2] >= 0) {
    console.log("C is fun");
  }
}
if (arguments[2] === undefined) {
  console.log("Missing number of occurrences");
}
