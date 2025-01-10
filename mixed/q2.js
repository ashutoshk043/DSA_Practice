
// A palindrome is a word, phrase, number, or sequence of symbols that reads the same forward and backward. For example, "madam" and "racecar" are palindromes.

// How would you check if a string is a palindrome?

let str = 'naman';

let start = 0;
let end = str.length-1

let isPalindrom = false

while(start <= end){
    if(str[start] == str[end]){
        start++
        end--
        }else{
            break;
    }
}

if(start> end){
    isPalindrom = true
}

console.log(isPalindrom, "isPalindrom")



// second method

let str2 = "ashutosh kumar";

let start1= 0;
let end2 = str2.length-1

let isPalindrom2 = true

while(start1 <= end2){
    if(str2[start1] == str2[end2]){
        start1++
        end2--
    }else{
        isPalindrom2= false
        break
    }
}

console.log(isPalindrom2, "isPalindrom2")