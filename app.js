const number = 6415;

function palidromeCheck(number) {
  let reversed = Number(number.toString().split("").reverse().join(""));
  return reversed;
}

function theClosest(number) {
  if (number === palidromeCheck(number)) {
    console.log("Your number is already a Palindrome number");
  } else {
    numUp = number + 1;
    numDown = number - 1;
    let x = 0;
    do {
      if (palidromeCheck(numUp) === numUp) {
        console.log(`The closest Palindrome number is: ${numUp}`);
        x = 1;
      } else if (palidromeCheck(numDown) === numDown) {
        console.log(`The closest Palindrome number is: ${numDown}`);
        x = 1;
      } else {
        numUp = numUp + 1;
        numDown = numDown - 1;
      }
    } while (x == 0);
  }
}

// console.log(palidromeCheck(number));
// console.log(typeof palidromeCheck(number));
theClosest(number);
