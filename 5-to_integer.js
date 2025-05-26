const arguments = process.argv;

if (arguments[2] >= 0) {
  console.log("My number " + arguments[2]);
} else {
  console.log("Not a number");
}
