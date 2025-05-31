const arguments = process.argv;

for (let i = 0; i < arguments[2]; i++) {
  if (arguments[2] >= 0) {
    console.log("X".repeat(arguments[2]));
  }
}
if (arguments[2] === undefined || isNaN(arguments[2])) {
  console.log("Missing size");
}
