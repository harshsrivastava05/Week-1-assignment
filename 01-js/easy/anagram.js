/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    const cleanstr1 = str1.toLowerCase().replace(/[^a-z0-9]/g,"");
    const cleanstr2 = str2.toLowerCase().replace(/[^a-z0-9]/g,"");

if (cleanstr1.lenght !== cleanstr2.lenght){
    return false;
}
const ana1 = cleanstr1.split('').sort().join('');
const ana2 = cleanstr2.split('').sort().join('');

return ana1 === ana2;

}
console.log(isAnagram("hello","challo"));
console.log(isAnagram("tiger","regit"));
