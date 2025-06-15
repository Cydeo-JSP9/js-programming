
let num;

num = 10;

console.log(num);

num = "JavaScript";

console.log(num);

/*
int num;
*/

const PI = 3.14;

console.log(PI);


console.log("------------------------------------");

let actualResult = "100.5";

let expectedResult = 100.5;

console.log(actualResult === expectedResult); // === -> does not ignore the data type

console.log(actualResult == expectedResult); // == -> ignores the data type


console.log("------------------------------------");

let browser = "cydeo";

if( browser === "chrome"){
    console.log("Selecting Chrome Browser");
}else if(browser === "firefox"){
    console.log("Selecting Firefox Browser");
}else if(browser === "safari"){
    console.log("Selecting Safari Browser");
}else{
    console.log("Invalid Browser Selected");
}

console.log("------------------------------------");

switch (browser.toLowerCase()) {
    case "chrome":
        console.log("Selecting Chrome Browser");
        break;
    case "firefox":
        console.log("Selecting Firefox Browser");
        break;
    case "safari":
        console.log("Selecting Safari Browser");
        break;
    default:
        console.log("Invalid Browser Selected");
}

console.log("------------------------------------");

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("------------------------------------");

let str = "JAVASCRIPT";

for(let each of str){
    console.log(each);
}

console.log("------------------------------------");

let s = "1234abcde56789fghijklmn";

s = s.replace(/\d/g, '');

console.log(s);


console.log("------------------------------------");

let expectedTitle = "Self Enrollment Portal";

let actualTitle = "self enrollment portal";

console.log(expectedTitle === actualTitle);

console.log(expectedTitle.toLowerCase() === actualTitle.toLowerCase());


console.log(`The expected Title is ${expectedTitle}, and the actual Title is ${actualTitle}.`);


console.log("------------------------------------");


function wordBreak(s, wordDict, memo = {}) {
    if (s in memo) return memo[s];
    if (s === "") return true;

    for (let word of wordDict) {
        if (s.indexOf(word) === 0) {
            const suffix = s.slice(word.length);
            if (wordBreak(suffix, wordDict, memo)) {
                memo[s] = true;
                return true;
            }
        }
    }
    memo[s] = false;
    return false;
}

// Example usage:
const dict = new Set(["i", "like", "sam", "sung", "samsung", "mobile", "ice", "cream", "icecream", "man", "go", "mango"]);
const input1 = "ilike";
const input2 = "ilikesamsung";

console.log(wordBreak(input1, dict) ? "Yes" : "No");     // Output: Yes
console.log(wordBreak(input2, dict) ? "Yes" : "No");     // Output: Yes


console.log("------------------------------------");

function countDistinctSubstrings(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let seen = new Set();
        for (let j = i; j < str.length; j++) {
            if (seen.has(str[j])) break;
            seen.add(str[j]);
            count++;
        }
    }
    return count;
}


console.log(countDistinctSubstrings("gffg")); // Output: 6
console.log(countDistinctSubstrings("gfg"));  // Output: 5

console.log("------------------------------------");

let elements = [10, 20, 30, 40, 50];

console.log(elements);

// use for of loop to access each elements of the array.
for(let element of elements){
    console.log(element);
}

console.log("------------------------------------");

// use for loop to print teh elments of the array in reversed order.
for(let i = elements.length - 1; i >= 0; i--){
    console.log(elements[i]);
}

console.log("------------------------------------");

/*
Create a function that can reverse a string.
    the function takes an argument and returns the reversed string.
*/

function reverseString(str) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}


// come back at 12:40 PM EST
