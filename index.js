function isPalindrome(string) {
  const arrayValue = string.split('');  // turn string into array and split 
  const reverseArrayValue = arrayValue.reverse(); // reverse the order of the split array 
  const reverseString = reverseArrayValue.join('');  // join the reversed array together
  if (string === reverseString) {    // function to test if the string and the reverseString are the same word (palindrome)
    return true
  } else {
    return false
  }
}

const prompt = require("prompt-sync")({sigint:true});
const string = prompt("Please enter a string: ");
console.log(string);
console.log(isPalindrome(string));


/* 
  Add your pseudocode here:
  Write a function that tests whether a string is a palindrome.  function should use an if else statement.   
  if the string is the same string when it gets reversed, then it should return true
  (it is a palindrome)
  
  if the string is a palindrome, then it should return true
  if the string is not a palindrome, then it should return false 


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
