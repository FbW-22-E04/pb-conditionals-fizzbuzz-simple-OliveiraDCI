let variable = 30;
if (variable % 3 == 0 && variable % 5 == 0) {
  console.log("FizzBuzz");
} else if (variable % 3 == 0) {
  console.log("Fizz");
} else if (variable % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(variable);
}
