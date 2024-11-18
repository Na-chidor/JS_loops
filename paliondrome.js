function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr ? `${str} is a palindrome.` : `${str} is not a palindrome.`;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man, a plan, a canal: Panama"));
