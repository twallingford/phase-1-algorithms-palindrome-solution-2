function isPalindrome(word) {
  let frontHalf = 0;
  let backHalf = word.length - 1;

  for(const char in word){
    if(word[frontHalf] != word[backHalf]){
      return false
    }
    frontHalf++;
    backHalf--;
  }
  return true;
}

/* 
For this version, I sort of followed the video, but wanted to challenge myself
to see if I could use the same problem explanation and make it slightly different.
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
  console.log("=>", isPalindrome("tobot"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("shallicomparetheetoasummersday"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mrowlatemymetalworm"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("wasitacaroracatisaw"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("tortilla"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("apples"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eevee"));
}

module.exports = isPalindrome;
