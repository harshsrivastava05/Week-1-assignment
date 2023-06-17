/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function anagram(word1,word2){
  if (word1.split('').sort().join('') == word2.split('').sort().join('')){
    return "it is anagram";
  }
  else{
    return "it is not anagram";
  }
}
var ans = anagram("hello","illeh");
console.log(ans); 
