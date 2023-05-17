//  A string is a palindrome if it is read the same from forward or backward. For example,
//  dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, 
//  madam is also a palindrome. Write a JavaScript function to determine whether
//  a given string is a palindrome

function isParindrome(string){
    let string1=string.trim().toLowerCase()
    return string1===string1.split('').reverse().join('')
}
console.log(isParindrome('Madam'));

// Write a function to check whether two given strings are anagram of each other or not. 
// An anagram of a string is another string that contains the same characters, only the order of characters can be different.
//  For example, “abcd” and “dabc” are an anagram of each other.

function isAnagram(string1, string2) {
    let str1=string1.trim().toLowerCase()
    let str2=string2.trim().toLowerCase()
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}
console.log(isAnagram("abcd","dabc"));

// Write a JavaScript function to check whether a string is blank or not.
function isBlank(string) {
    let str=string.trim()
    return str===''
}
console.log(isBlank('      y'));

// Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"
function protect_email(email) {
    const parts = email.split("@");
    const username = parts[0];
    const domain = parts[1];
    
   
    const hiddenUsername = username.substring(0, 4) + "...";   
 
    return hiddenUsername + "@" + domain;
  }
  console.log(protect_email("robin_singh@example.com"));

//   Write a JavaScript function to reverse words in a given string.
// Test Data :
// ("abc") -> "cba"
// ("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
// (1234) -> "It must be a string."

function reverseWords(str) {
    if (typeof str !== 'string') {
      return "It must be a string.";
    }
  
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
console.log(reverseWords("abc")); // Output: "cba"
console.log(reverseWords("JavaScript Exercises")); // Output: "tpircSavaJ sesicrexE"
console.log(reverseWords(1234)); // Output: "It must be a string."

