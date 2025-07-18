function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // calculate the corresponding index from the end of the string
    const endIndex = word.length - 1 - startIndex;

    // compare the letters at the start and end index
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, it's not a palindrome
      return false;
    }
  }

  // if we reach the middle and all letters matched, it's a palindrome
  return true;
}

/* 
  Pseudocode:
  - Loop from the beginning of the word to the middle
  - Compare the character at each index from the start to the corresponding character from the end
  - If any pair does not match, return false
  - If all characters match, return true
*/

/*
  Explanation:
  A palindrome reads the same forward and backward. To check for this, 
  we compare the first character with the last, the second with the second-last, and so on. 
  If we find any mismatch during this comparison, we return false. 
  If we reach the middle without mismatches, we return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
}

module.exports = isPalindrome;
