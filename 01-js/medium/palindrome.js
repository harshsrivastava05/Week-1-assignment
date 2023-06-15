/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function ispalindrom(number){
  const reversed = number.toString().split('').reverse().join('');
  return reversed == number;
}
let number = 454;

if(ispalindrom(number)){
  console.log("string is palindrome.")
}
else {
  console.log("string is not palindrome,")
}
