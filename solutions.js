/* =====================================

                8 Kyu

======================================== */

// // Function 1 - Hello World
// function greet() {
//     return `hello world!`;
// }
// console.log(greet());




// // Convert a Boolean to a String
// function booleanToString(b){
//     return b.toString();
// }

// console.log(booleanToString(true));





// // Convert Boolean Values to Strings 'Yes' or 'No'
// function boolToWord( bool ){
//     return bool ? "Yes" : "No";
// }

// console.log(boolToWord(false));




// // Remove First and Last Character
// function removeChar(str){
//     return str.length < 2 ? '' : str.slice(1, str.length - 1);
// };
// console.log(removeChar('Foo Bar'));




// // String Repeat
// function repeatStr(n, s) {
//     return s.repeat(n);
// }
// console.log(repeatStr(3, 'Hello '));




// // Sum Mixed Array
// function sumMix(x) {
//     return x.reduce((sum, current) => sum + parseInt(current), 0);
// }
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));




// // Convert a number to a String!
// function numberToString(num) {
//     return num.toString();
// }
// console.log(10);




// // You Can't Code Under Pressure #1
// function doubleInteger(i) {
//     return i * 2;
// }
// console.log(doubleInteger(2));




// // Convert a String to a Number!
// const stringToNumber = function(str){
//     return Number(str);
// }
// console.log(stringToNumber('355'));




// // How Good Are You Really?
// function betterThanAverage(classPoints, yourPoints) {
//     let classAvg = classPoints.reduce((sum, current) => sum + current, 0) / classPoints.length;
//     return classAvg < yourPoints ? true : false;
// }
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));




// // Sum of Positive
// function positiveSum(arr) {
//     return arr.filter(num => {
//       return num > 0;
//     }).reduce((sum, current) => sum + current, 0);
// }
// console.log(positiveSum([1,-22,3,4,5]));




// // Are You Playing Banjo?
// function areYouPlayingBanjo(name) {
//     return name.charAt(0) === 'R' || name.charAt(0) === 'r' ? name + ' plays banjo' : name + ' does not play banjo';
// }
// console.log(areYouPlayingBanjo('Ringo'));




// // Multiply
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(10, 3));




// // Even or Odd
// function evenOrOdd(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
// }
// console.log(evenOrOdd(15));




// // Opposite Number
// function opposite(number) {
//     return -number;
// }
// console.log(opposite(10));




// // Reversed Strings
// function solution(str) {
//     return str.split('').reverse().join('');
// }
// console.log(solution('Hello World'));




// // Return Negative
// function makeNegative(num) {
//     return -Math.abs(num);
// }
// console.log(makeNegative(10));




// // Find the Smallest Integer in the Array
// class SmallestIntegerFinder {
//     findSmallestInt(arr) {
//       return Math.min(...arr);
//     }
// }

// const sif = new SmallestIntegerFinder();
// console.log(sif.findSmallestInt([78,3,232,12,8]));




// // Square(n) Sum
// function squareSum(numbers){
//     return numbers.map(num => Math.pow(num, 2)).reduce((sum, current) => sum + current, 0);
// }
// console.log(squareSum([2, 4, 6]));




// // Remove String Spaces
// function noSpace(x){
//     return x.split('').filter(digit => digit !== ' ').join('');
// }
// console.log(noSpace('Removing the spaces from this string.'));




// // Grasshopper Summation
// var summation = function (num) {
//     // Code here
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//       result += i;
//     }
//     return result;
// }
// console.log(summation(8));




// // Counting Sheep...
// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(sheep => sheep).length;
// }
// var array1 = [true,  true,  true,  false, true,  true,  true,];
// console.log(countSheeps(array1));




// // Keep Hydrated!
// function litres(time) {
//     return Math.floor(0.5 * time);
// }
// console.log(litres(12.3));




// // Returning Strings
// function greet(name){
//     return `Hello, ${name} how are you doing today?`;
// }
// console.log(greet('Beto'));




// // Basic Mathematica Operations
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//       case '+':
//         return value1 + value2;
//         break;
//       case '-':
//         return value1 - value2;
//         break;
//       case '*':
//         return value1 * value2;
//         break;
//       case '/':
//         return value1 / value2;
//         break;
//   }
// }
// console.log(basicOp('+', 2, 2));




// // Convert Number to Reversed Array of Digits
// function digitize(n) {
//     return n.toString().split('').reverse().map(num => Number(num));
// }
// console.log(digitize(10));




// // Beginner - Lost Without a Map
// function maps(x){
//     return x.map(num => num * 2);
// }
// console.log(maps([1, 2, 3]));




// // Abbreviate a Two Word Name
// function abbrevName(name){
//     return name.split(' ').map(name => name[0].toUpperCase()).join('.');
// }
// console.log(abbrevName('Beto Guzman'));




// // MakeUpperCase
// function makeUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(makeUpperCase('Some String'));




// // Beginner Series #1 School Paperwork
// function paperwork(n, m) {
//     if (n < 0 || m < 0) return 0;
//     return n * m;
// }
// console.log(paperwork(5, 5));




// // Sum Arrays
// function sum (numbers) {
//     "use strict";
//     return numbers.reduce((sum, current) => sum + current, 0);
// }
// console.log(sum([1, 5.2, 4, 0, -1]));





// // Invert Values
// function invert(array) {
//     return array.map(num => {
//       return num >= 0 ? -Math.abs(num) : Math.abs(num);
//     });
// }
// console.log(invert([-23, 3, 45, -1]));




// // You Only Need One - Beginner
// function check(a, x) {
//     // your code here
//     return a.includes(x) ? true : false;
// }
// console.log(check([101, 45, 75, 105, 99, 107], 107));




// // Find Maximum and Minimum Values of a List
// var min = function(list){
//     return Math.min(...list);
// }

// var max = function(list){
//     return Math.max(...list);
// }
// console.log(min([42, 54, 65, 87, 0]));
// console.log(max([4,6,2,1,9,63,-134,566]));




// // Simple Multiplication
// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9;
// }
// console.log(simpleMultiplication(8));




// // Is He Gonna Survive?
// function hero(bullets, dragons){
//     return (bullets / 2) >= dragons ? true : false;
// }
// console.log(hero(8, 6));




// // Will You Make It?
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft
// };
// console.log(zeroFuel(100, 50, 1));




// // Beginner - Reduce But Gro
// function grow(x){
//     return x.reduce((mult, current) => mult * current);
// }
// console.log(grow([4, 1, 1, 1, 4]));




// // Convert String to Array
// function stringToArray(string){
//     return string.split(' ');
// }
// console.log(stringToArray('I love arrays they are my favorite'));




// // Sentence Smash
// function smash(words) {
//     return words.join(' ');
// };
// console.log(smash(["hello", "amazing", "world"]));



// // Count by X
// function countBy(x, n) {
//     let z = [];
//     for (let i = x; i <= x * n; i += x) {
//       z.push(i);
//     }
//     return z;
// }
// console.log(countBy(2,10));




// // Total Amount of Points
// function points(games) {
//     return games.reduce((sum, [s1, ,s2]) => {
//       if (s1 > s2) {
//         return sum += 3;
//       } else if (s1 === s2) {
//         return sum += 1;
//       } else {
//           return sum += 0;
//       }
//     }, 0);
// }
// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));




// // Count the Monkeys!
// function monkeyCount(n) {
//     const monkeys = [];
//     for (let i = 1; i <= n; i++) {
//         monkeys.push(i);
//     }
//     return monkeys;
// }
// console.log((monkeyCount(10)));




// // Removing Elements
// function removeEveryOther(arr){
//     const final = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 === 0) final.push(arr[i]);
//     }
//     return final;
// }
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));




// // Array Plus Array
// function arrayPlusArray(arr1, arr2) {
//     return arr1.reduce((sum, current) => sum + current, 0) + arr2.reduce((sum, current) => sum + current, 0);
// }
// console.log(arrayPlusArray([1,2,3], [1,2,3]));




// // I Love You, A Little, A Lot, Passionately ... Not At All
// function howMuchILoveYou(nbPetals) {
//     const phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
//     let phraseCurrent = 0;
//     let result = '';
//     for (let i = 0; i < nbPetals; i++) {
//       if (phraseCurrent >= phrase.length) {
//         phraseCurrent = 0;
//       } 
//       result = phrase[phraseCurrent];
//       phraseCurrent++;
//     }
//     return result;
// }
// console.log(howMuchILoveYou(8));




// // Sort and Star
// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
// }
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));




// // Filter Out The Geese
// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     // return an array containing all of the strings in the input array except those that match strings in geese
//     return birds.filter(word => !(geese.includes(word)));
// }
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));




// // If You Can't Sleep, Just Count Sheep!
// var countSheep = function (num){
//     let count = '';
//     for (let i = 1; i <= num; i++) {
//       count += `${i} sheep...`;
//     }
//     return count;
// }
// console.log(countSheep(3));




// // Calculate BMI
// function bmi(weight, height) {
//     const bmiCalculation = weight / Math.pow(height, 2);
    
//     if (bmiCalculation <= 18.5) {
//       return 'Underweight'; 
//     } else if (bmiCalculation <= 25.0) {
//       return 'Normal';
//     } else if (bmiCalculation <= 30.0) {
//       return 'Overweight';
//     } else {
//       return 'Obese';
//     }
// }
// console.log(bmi(80, 1.80));




// // Find Multiples of a Number
// function findMultiples(integer, limit) {
//     //your code here
//     const result = [];
//     for (let i = integer; i <= limit; i += integer) {
//       result.push(i);
//     }
//     return result;
// }
// console.log(findMultiples(5, 25));




// // Well of Ideas - Easy Version
// function well(x){
//     const counts = x.filter(idea => idea === 'good');
//     if (counts.length === 0) {
//       return 'Fail!';
//     } if (counts.length <= 2) {
//       return 'Publish!';
//     } else if (counts.length >= 2) {
//       return "I smell a series!";
//     }
// }
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));




// // Remove Duplicates From List
// function distinct(a) {
//     const result = [];
//     for (let i = 0; i < a.length; i++) {
//       !result.includes(a[i]) ? result.push(a[i]) : '';
//     }
//     return result;
// }
// console.log(distinct([1,1,2]));




// // Rock Paper Scissors
// const rps = (p1, p2) => {
//     if ((p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 === 'scissors')) {
//       return 'Player 1 won!';
//     } else if (p1 === p2) {
//       return 'Draw!';
//     } else {
//       return 'Player 2 won!';
//     }
// };
// console.log(rps('rock', 'scissors'));




// // Merge Two Sorted Arrays Into One
// function mergeArrays(arr1, arr2) {
//     const result = [];
//     arr1.concat(arr2).map(num => {
//       if (!result.includes(num)) result.push(num);
//     });
//     return result.sort((a, b) => a - b);
// }
// console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));




// // Printing Array Elements with Comma Delimeters
// function printArray(array){
//     return array.join(',');
// }
// console.log(printArray(["h","o","l","a"]));




// // A Needle in the Haystack
// function findNeedle(haystack) {
//     return `found the needle at position ${haystack.indexOf('needle')}`;
// }
// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));




// // Count of Positives / Sum of Negatives
// function countPositivesSumNegatives(input) {
//     let positive = 0;
//     let negative = 0;
    
//     if (input === null || input.length === 0) return [];
//     input.forEach(num => num > 0 ? positive += 1 : negative += num);
//     return [positive, negative];
//   }
//   console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));




// // Fake Binary
// function fakeBin(x){
//     return x.split('').map(digit => digit < 5 ? digit = 0 : digit = 1).join('');
// }
// console.log(fakeBin('45385593107843568'));




// // DNA to RNA Conversion
// function DNAtoRNA(dna) {
//     return dna.split('').map(n => n === 'T' ? n = 'U' : n = n).join('');
// }
// console.log(DNAtoRNA('GCAT'));




// // Calculate Average
// function findAverage(array) {
//     return array.length === 0 ? 0 : array.reduce((sum, current) => sum + current, 0) / array.length;
// }
// console.log(findAverage([1,2,3,4]));




// // Opposites Attract
// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2 ? true : false;
// }
// console.log(lovefunc(1,4));




// // Reversed Sequence
// const reverseSeq = n => {
//     const result = [];
//     for (let i = n; i > 0; i--) {
//       result.push(i);
//     }
//     return result;
// };
// console.log(reverseSeq(5));




// // Is The String Uppercase?
// String.prototype.isUpperCase = function() {
//     return this.toString() === this.toUpperCase();
// }
// console.log('hello I am DONALD!'.isUpperCase());




// // Remove Exclamation Marks
// function removeExclamationMarks(s) {
//     return s.split('').filter(letter => letter !== '!').join('');
// }
// console.log(removeExclamationMarks('Hello World!!!'));




// // Double Char
// function doubleChar(str) {
//     return str.split('').map(letter => letter += letter).join('');
// }
// console.log(doubleChar('abcd'));




// // Color Ghost
// var Ghost = function() {
//     let colors = ['white', 'yellow', 'purple', 'red'];
//     let random = Math.floor(Math.random() * 4);
//     // your code goes here
//     this.color = colors[random];
// };
// const ghost = new Ghost();
// console.log(ghost.color);




// // Swap Values
// function swapValues(args) {
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
//     return args;
// }
// console.log(swapValues([2,3]));




// // Transportation on Vacation
// function rentalCarCost(d) {
//     // Your solution here
//     let calc = d * 40;
    
//     if (d >= 7) {
//       return calc -= 50;
//     } else if (d >= 3) {
//       return calc -= 20;
//     } else {
//       return calc;
//     }
// }
// console.log(rentalCarCost(3));



// // Area or Perimeter
// const areaOrPerimeter = function(l , w) {
//     // Return your answer
//     return l === w ? l * w : (l + w) * 2;
// };
// console.log(areaOrPerimeter(3, 3));




// // Grasshopper - Personalized Message
// function greet(name, owner) {
//     return name === owner ? 'Hello boss' : 'Hello guest';
// }
// console.log(greet('Greg', 'Danie'));




// // All Star Code Challenge #18
// function strCount(str, letter){  
//     let count = 0;
//     str.split('').forEach(l => {
//       if (l === letter) count++;
//     });
//     return count;
// }
// console.log(strCount('Hello', 'l'));




// // Name Shuffler
// function nameShuffler(str){
//     return str.split(' ').reverse().join(' ');
// }
// console.log(nameShuffler('john McClane'));




// // The Feast of Many Beasts
// function feast(beast, dish) {
//     return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;
// }
// console.log(feast('great blue heron', 'garlic naan'));




// // Correct the Mistakes of the Character Recognition Software
// function correct(string) {
//     return string.split('').map(letter => {
//       if (letter === '5') {
//         return letter = 'S';
//       } else if (letter === '0') {
//         return letter = 'O';
//       } else if (letter === '1') {
//         return letter = 'I';
//       } else {
//         return letter;
//       }
//     }).join('');
// }
// console.log(correct('L0ND0N'));




// // Vowel Remover
// function shortcut(string) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return string.split('').filter(letter => !vowels.includes(letter)).join('');
// }
// console.log(shortcut('how are you today?'));




// // The Wide-Mouthed Frog!
// function mouthSize(animal) {
//     return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
// }
// console.log(mouthSize('toucan'));




// // Reversing Words in a String
// function reverse(string){
//     return string.split(' ').reverse().join(' ');
// }
// console.log(reverse('I am an expert at this'));




// // String Cleaning
// function stringClean(s){
//     return s.replace(/[0-9]/g, '');
// }
// console.log(stringClean('This looks5 great8!'));




// // Exclamation Marks Series #1: Remove an Exclamation Mark From the End of String
// function remove(string) {
//     return string.endsWith('!') ? string.slice(0, string.length - 1) : string;
// }
// console.log(remove('Hello!'));




// // Welcome to the City
// function sayHello( name, city, state ) {
//     return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
// }
// console.log(sayHello(['John', 'Smit'], 'Phoenix', 'Arizona'));




// // Grasshopper - Array Mean
// var findAverage = function (nums) {
//     return nums.reduce((sum, current) => sum + current, 0) / nums.length;
// }
// console.log(findAverage([1, 3, 5, 7]));




// // Simple Comparison
// function add(a, b){
//   return a == b ? true : false;
// }
// console.log(add('11', 11));




// // ES6 String Addition
// function joinStrings(string1, string2){
//    return `${string1} ${string2}`;
// }
// console.log(joinStrings('testing', 'testing'));




// // Remove First and Last Character Part Two
// function array(arr){
//     if (arr === '') return null;
//     const convert = arr.split(',');
//     convert.pop();
//     convert.shift();
//     return convert.join(' ') === '' ? null : convert.join(' ');
// }
// console.log(array('1,2,3,4,5'));




// // Define a Card Suit
// function defineSuit(card) {
//     if (card.endsWith('\u2663')) {
//       return 'clubs';
//     } else if (card.endsWith("\u2660")) {
//       return 'spades';
//     } else if (card.endsWith("\u2665")) {
//       return 'hearts';
//     } else if (card.endsWith("\u2666")) {
//       return 'diamonds';
//     }
// }
// console.log(defineSuit('Q???'));




// // Is There a Vowel in There?
// function isVow(a){
//     return a.map(digit => {
//       if (digit === 97) {
//         return digit = 'a';
//       } else if (digit === 101) {
//         return digit = 'e';
//       } else if (digit === 105) {
//         return digit = 'i';
//       } else if (digit === 111) {
//         return digit = 'o';
//       } else if (digit === 117) {
//         return digit = 'u';
//       } else {
//         return digit;
//       }
//     })
// }
// console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));




// // Template Strings
// var TempleStrings = function(obj, feature) {
//     return `${obj} are ${feature}`
// }
// console.log(TempleStrings('Animals', 'Good'));




// // Name On Billboard
// function billboard(name, price = 30){
//     let cost = 0;
//     for (let i = 0; i < name.length; i++) {
//       cost += price;
//     }
//     return cost;
// }
// console.log(billboard('Warner Vigi', 15)); 





// // UEFA EURO 2016
// function uefaEuro2016(teams, scores){
//     return scores[0] === scores[1] ? 
//       `At match ${teams[0]} - ${teams[1]}, teams played draw.` : 
//       `At match ${teams[0]} - ${teams[1]}, ${scores[0] > scores[1] ? teams[0] : teams[1]} won!`;
// }
// console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));




// // Pick a Set of First Elements
// function first(arr, n = 1) {
//     return arr.slice(0, n);
// }
// console.log(first(['a', 'b', 'c', 'd', 'e'], 2));




// // Quarter of the Year
// const quarterOf = (month) => {
//     // Your code here
//     if (month >= 1 && month <= 3) {
//       return 1;
//     } else if (month >= 4 && month <= 6) {
//       return 2;
//     } else if (month >= 7 && month <= 9) {
//       return 3;
//     } else {
//       return 4;
//     }
// }
// console.log(quarterOf(3));




// // 'this' a Problem
// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     this.name = this.firstName + ' ' + this.lastName; 
// }
// const n = new NameMe('John', 'Doe');
// console.log(n.name);




// // Reverse Words
// function reverseWords(str) {
//     return str.split(' ').reverse().join(' ');
// }
// console.log(reverseWords('hello world!'));





// // Do I Get a Bonus?
// function bonusTime(salary, bonus) {
//    return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;
// }
// console.log(bonusTime(10000, true));




// // Short Long Short
// function solution(a, b) {
//     return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
// }
// console.log(solution('13', '200'));




// // Capitalization and Mutability
// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.substring(1);
// }
// console.log(capitalizeWord('word'));




// // Stringy Strings (NEEDS REFACTORING)
// function stringy(size) {
//     if (typeof size !== 'number' || size < 0) return;
//     let finalStringy = '';
//     for (let i = 1; i <= size; i++) {
//         if (i % 2 === 0) {
//             finalStringy += '0';
//         } else {
//             finalStringy += '1';
//         }
//     }  
//     return finalStringy;
// }
// console.log(stringy(6))





// // Dollars and Cents
// function formatMoney(amount){
//     return `$${amount.toFixed(2)}`;
// }
// console.log(formatMoney(39.99));




// // Count Words
// function countWords(str) {
//     return str.replace(/\s/g, ' ').split(' ').filter(item => item !== '').length;
// }
// console.log(countWords('Hello???World '));




// // Crash Override (Refactor)
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache', M: 'Malware'};
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst', S: 'Spy'};

// function aliasGen(first, last){
//     const regEx = /^[a-zA-Z]/;
//     if (regEx.test(first) === false || regEx.test(last) === false) {
//         return 'Your name must start with a letter from A - Z.';
//     }
//     return firstName[`${first[0].toUpperCase()}`] + ' ' + surname[`${last[0].toUpperCase()}`];
// }
// console.log(aliasGen('Malware', 'Spy'));




// // Grade Book
// function getGrade (s1, s2, s3) {
//     const avg = (s1 + s2 + s3) / 3;

//     if (avg >= 90 && avg <= 100) {
//         return 'A';
//     } else if (avg >= 80 && avg < 90) {
//         return 'B';
//     } else if (avg >= 70 && avg < 80) {
//         return 'C';
//     } else if (avg >= 60 && avg < 70) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }
// console.log(getGrade(95,90,93));




// // Get the Mean of an Array
// function getAverage(marks){
//     return Math.floor(marks.reduce((sum, curr) => sum + curr, 0) / marks.length);
// }
// console.log(getAverage([2,2,2,2]));




// // My Head is at the Wrong End!
// function fixTheMeerkat(arr) {
//     return arr.reverse();
// }
// console.log(fixTheMeerkat(['tail', 'body', 'head']));




// // N-th Power
// function index(array, n){
//     return array.length > n ? array[n] ** n : -1;
// }
// console.log(index([1, 3, 10, 100],3));




// // Find Numbers Which Are Divisible by Given Number
// function divisibleBy(numbers, divisor){
//     return numbers.filter(num => num % divisor === 0);
// }
// console.log(divisibleBy([1,2,3,4,5,6], 2));




// // Who is Going to Pay for the Wall?
// function whoIsPaying(name){
//     return name.length <= 2 ? [name] : [name, name.slice(0,2)];
// }
// console.log(whoIsPaying('Mexico'));




// // Alan Partridge II - Apple Turnover
// function apple(x) {
//     return x ** 2 >= 1000 ? `It's hotter than the sun!!` : `Help yourself to a honeycomb Yorkie for the glovebox.`;
// }
// console.log(apple('50'));




// // Safe User Input Part 1 - htmlspecialchars
// function htmlspecialchars(formData) {
//     return formData.replace(/&/g, "&amp;")
//                 .replace(/"/g, "&quot;")
//                 .replace(/</g, "&lt;")
//                 .replace(/>/g, "&gt;");    
// }
// console.log(htmlspecialchars('<h2>Hello World</h2>'))




// // Take an Arrow to the Knee, Functionally
// var ArrowFunc = function(arr) {
//     return arr.map(num => String.fromCharCode(num)).join(''); //Complete this function
// }
// console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]));




// // Get Number From String
// function getNumberFromString(s) {
//     const result = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ' ') {
//             continue;
//         } else if (Number(s[i]) >= 0) {
//             result.push(s[i]);
//         }
//     }
//     return Number(result.join(''));
// }
// console.log(getNumberFromString('this is number: 7'));
// console.log(getNumberFromString('$100 000 000'));




// // Contamination #1 - String
// function contamination(text, char){
//     return text.length === 0 ? '' : [...text].map(letter => letter = char).join('');
// }
// console.log(contamination('abc', ''));
// console.log(contamination('', 'z'));






/* =====================================

                7 Kyu

======================================== */

// // Vowel Count
// function getCount(str) {
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//       str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ?
//         result += 1 : result += 0;
//     } 
//     return result;
// }
// console.log(getCount('abracadabra'));




// // Ones and Zeros
// const binaryArrayToNumber = arr => {
//     return parseInt(arr.join(''), 2);
// };
// console.log(binaryArrayToNumber([0,1,1,0]));




// // Digit*Digit
// function squareDigits(num){
//     return Number(Array.from(String(num)).map(item => Number(item) ** 2).join(''));
// }
// console.log(squareDigits(2112));




// // Highest and Lowest
// function highAndLow(numbers){
//     const convertToNumbers = numbers.split(' ').map(num => Number(num));
//     return `${Math.max(...convertToNumbers)} ${Math.min(...convertToNumbers)}`;
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));




// // Shortest Word
// function findShort(s){
//     return convertToArray = s.split(' ').sort((a, b) => a.length - b.length)[0].length;
// }
// console.log(findShort('bitcoin take over the world maybe who knows perahps'));




// // Get the Middle Character
// function getMiddle(s) {
//   let position = 0;
//   if (s.length % 2 === 1) {
//     position = Math.floor(s.length / 2);
//     return s.slice(position, position + (s.length % 2));
//   } else {
//     position = s.length / 2;
//     return s.slice(position - 1, position + 1)
//   }
// }
// console.log(getMiddle('testing'));




// // Descending Order
// function descendingOrder(n){
//     return Number(String(n).split('').sort((a, b) => b - a).join(''));
// }
// console.log(descendingOrder(123456789));




// // List Filtering
// function filter_list(l) {
//     return l.filter(num => typeof num === 'number');
// }
// console.log(filter_list([1, 'a', 'b', 0, 15]));




// // Isograms
// function isIsogram(str){
//     const lower = str.toLowerCase();
//     let flag = true;
    
//     for (let i = 0; i < lower.length; i++) {
//       if (lower.slice(i + 1).includes(lower[i])) {
//         flag = false;
//         break;
//       }
//     }
//     return flag;
// }
// console.log(isIsogram('Dermatoglyphics'));




// // Exes and Ohs
// function XO(str) {
//     //code here
//     const objLetters = str.toLowerCase().split('').reduce((obj, curr) => {
//       obj[curr] = (obj[curr] || 0) + 1; 
//       return obj;
//     }, {});
  
//     return objLetters['x'] === objLetters['o'] ? true : false;
// }
// console.log(XO('xxOo'));




// // Jaden Casing Strings
// String.prototype.toJadenCase = function () {
//     return this.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
// };
// console.log('How can mirrors be real if our eyes aren\'t real'.toJadenCase());




// // Complementary DNA
// function DNAStrand(dna){
//     return dna.split('').map(digit => {
//         switch(digit) {
//             case 'A':
//                 return 'T';
//                 break;
//             case 'T':
//                 return 'A';
//                 break;
//             case 'G':
//                 return 'C';
//                 break;
//             case 'C':
//                 return 'G';
//                 break;
//         }
//     }).join('');
// }
// console.log(DNAStrand('ATTGC'));




// // Mumbling
// function accum(s) {
//     return s.toLowerCase().split('').map((letter, index) => letter.repeat(index + 1)).map(word => word[0].toUpperCase() + word.substr(1)).join('-');
// }
// console.log(accum('ZpglnRxqenU'));




// // Sum of Two Lowest Positive Integers
// function sumTwoSmallestNumbers(numbers) {
//     const sorted = numbers.sort((a, b) => a - b);
//     return sorted[0] + sorted[1];
// }

// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));




// // Credit Card Mask
// function maskify(cc) {
//     const masked = cc.slice(0, cc.length - 4).replace(/\w/g, '#');
//     const lastDigits = cc.slice(-4).split('').filter(digit => digit !== '#').join('');
//     return lastDigits.length === 3 ? lastDigits : masked + lastDigits;
// }
// console.log(maskify('4556364607935616'));
// console.log(maskify('##39i'));




// // Friend or Foe
// function friend(friends) {
//     return friends.filter(friend => friend.length === 4);
// }
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));



// // Growth of a Population
// function nbYear(p0, percent, aug, p) {
//     let years = 0;
//     while (p0 < p) {
//         p0 = Math.floor((1 + percent / 100) * p0 + aug);
//         years++;
//     }
//     return years;
// }
// console.log(nbYear(1500000, 2.5, 10000, 2000000));




// // Sum of Odd Numbers
// function rowSumOddNumbers(n) {
//     return n * n * n;
// }
// console.log(rowSumOddNumbers(169));




// // Disemvowel Trolls
// function disemvowel(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('');
// }
// console.log(disemvowel('This website is for losers LOL'));




// // String Ends With?
// function solution(str, ending) {
//     return str.endsWith(ending);
// }
// console.log(solution('abcde', 'cde'));




// // Reverse Words
// function reverseWords(str) {
//     return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));




// // Anagram Detection (USED SORT)
// var isAnagram = function(test, original) {
//     return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('');
// }
// console.log(isAnagram('foefet', 'toffee'));




// // Remove Anchor From URL
// function removeUrlAnchor(url){
//     return url.includes('#') ? url.substring(0,url.indexOf('#')) : url;
// }
// console.log(removeUrlAnchor('www.codewars.com/katas/'));
// console.log(removeUrlAnchor('www.codewars.com#about'));




// // Find the Capitals (REFACTOR)
// var capitals = function (word) {
// 	return word.split('').map((letter, index) => {
//         if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
//             return index;
//         }
//     }).filter(value => value !== undefined);
// };
// console.log(capitals('CodEWaRs'));




// // The Coupon Code
// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//     return enteredCode !== correctCode || Date.parse(currentDate) > Date.parse(expirationDate) ? false : true; 
// }
// console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
// console.log(checkCoupon('123a','123','July 5, 2014','October 1, 2014'));




// // Alternate Capitalization
// function capitalize(s){
//     return [
//         s.split('').map((letter, index) => {
//             return index % 2 === 0 ? letter.toUpperCase() : letter;
//         }).join(''),
//         s.split('').map((letter, index) => {
//             return index % 2 !== 0 ? letter.toUpperCase() : letter;
//         }).join('')
//     ];
// };
// console.log(capitalize('abcdef'));




// // Number of Decimal Digits
// function digits(n) {
//     return n.toString().length;
// }
// console.log(digits(9876543210));




// // Remove Duplicate Words (REFACTOR WITH A SET?)
// function removeDuplicateWords (s) {
//     const unique = [];
//     s.split(' ').filter(word => {
//         if (!unique.includes(word)) unique.push(word);
//     });
//     return unique.join(' ');
// }
// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));




// // Greet Me
// var greet = function(name) {
//     return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
// };
// console.log(greet('riley'));




// // Sort the Gift Code
// function sortGiftCode(code){
//     return code.split('').sort().join('');
// }
// console.log(sortGiftCode('abcdef'));




// // Bumps in the Road
// function bump(x){
//     return x.split('').filter(letter => letter === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';
// }
// console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));




// // Digits Explosion
// function explode(s) {
//     return s.split('').map(num => num.repeat(num)).join('');
// }
// console.log(explode('312'));




// // Switcheroo
// function switcheroo(x) {
//     return x.split('').map(letter => {
//         if (letter === 'a') return letter = 'b';
//         else if (letter === 'b') return letter = 'a';
//         else return letter;
//     }).join('');
// }
// console.log(switcheroo('aaabcccbaaa'));




// // Alphabet War
// function alphabetWar(fight) {
//     let leftCount = fight.split('').map(letter => ['s', 'b', 'p', 'w'].indexOf(letter) + 1).reduce((sum, val) => sum + val, 0);
//     let rightCount = fight.split('').map(letter => ['z', 'd', 'q', 'm'].indexOf(letter) + 1).reduce((sum, val) => sum + val, 0);

//     if (leftCount === rightCount) {
//         return `Let's fight again!`;
//     } else if (leftCount > rightCount) {
//         return `Left side wins!`;
//     } else {
//         return `Right side wins!`;
//     }
// }
// console.log(alphabetWar('wpbszz'));




// // Most Digits (REFACTOR)
// function findLongest(array){
//     let num = '';
//     for (let i = 0; i < array.length; i++) {
//         if (String(array[i]).length > num.length) {
//             num = String(array[i]);
//         }
//     }
//     return Number(num);
// }
// console.log(findLongest([1, 10, 100, 456563, 785633]));




// // Coding Meetup #1 - Higher-Order Functions Series - Count the Number of JS Devs Coming From Europe
// const list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//     { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

// function countDevelopers(list) {
//     return list.filter(obj => obj.continent === 'Europe' && obj.language === 'JavaScript').length;
// }

// console.log(countDevelopers(list1));




// // Filter The Number
// var filterString = function(value) {
//     return Number(value.split('').filter(item => !isNaN(item)).join(''));
// }
// console.log(filterString('db8d1b5149a0371b2b603095d969c1ac'));




// // Stop gninnipS My sdroW!
// function spinWords(string){
//     return string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
// }
// console.log(spinWords('Hey fellow warriors'));




// // Odd or Even?
// function oddOrEven(array) {
//     return array.reduce((sum, current) => sum + current, 0) % 2 === 0 ? 'even' : 'odd';
// }
// console.log(oddOrEven([0, 1, 5]));




// // The Highest Profit Wins!
// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)]; // fix me!
// }
// console.log(minMax([2334454, 5]));




// // Bulding Strings From a Hash
// function solution(pairs) {
//     return Object.keys(pairs).map(key => `${key} = ${pairs[key]}`).join(',');
// }
// console.log(solution({a: 1, b: '2'}))




// // Two to One
// function longest(s1, s2) {
//     const unique = new Set([...s1, ...s2]);
//     return Array.from(unique).sort().join('');
// }
// console.log(longest("aretheyhere", "yestheyarehere"));




// // Nickname Generator
// function nicknameGenerator(name){
//     const vowel = ['a', 'e', 'i', 'o', 'u'];
//     if (name.length <= 3) {
//         return `Error: Name too short`;
//     } else if (vowel.includes(name[2])) {
//         return name.slice(0,4);
//     } else {
//         return name.slice(0,3);
//     }
// }
// console.log(nicknameGenerator('Jimmy'));
// console.log(nicknameGenerator('Sam'));
// console.log(nicknameGenerator('Jeannie'));




// // Testing 1-2-3
// var number = function(array){
//     if (array.length === 0) return [];
//     return array.map((digit, i) => `${i+1}: ${digit}`);
// }
// console.log(number(["a", "b", "c"]));




// // Remove the Minimum
// function removeSmallest(numbers) {
//     const clone = [...numbers];
//     const index = clone.indexOf(Math.min(...clone));
//     clone.splice(index, 1);
//     return clone;
// }
// console.log(removeSmallest([5, 3, 2, 1, 4]));




// // Don't Give Me Five!
// function dontGiveMeFive(start, end) {
//     const finalArr = [];
//     for (let i = start; i <= end; i++) {
//         if (!String(i).includes(5)) finalArr.push(i);
//     }
//     return finalArr;
// }
// console.log(dontGiveMeFive(1, 9));
// console.log(dontGiveMeFive(4, 17));




// // Sort Array by String Length
// function sortByLength(array) {
//     return array.sort((a, b) => a.length - b.length);
// }
// console.log(sortByLength(['Beg', 'Life', 'I', 'To']));




// // Small Enough?
// function smallEnough(a, limit){
//     return Math.max(...a) > limit;
// }
// console.log(smallEnough([66, 101], 200));




// // Two Oldest Ages
// function twoOldestAges(ages) {
//     return ages.sort((a, b) => a - b).slice(-2);
// }
// console.log(twoOldestAges([6,5,83,5,3,18]));




// // No Oddities Here
// function noOdds(values){
//     return values.filter(num => num % 2 === 0);
// }
// console.log(noOdds([0,1,2,3]));




// // Odd-Even String Sort
// function sortMyString(s) {
//     return `${[...s].filter((l, i) => i % 2 === 0).join('')} ${[...s].filter((l, i) => i % 2 !== 0).join('')}`;
// }
// console.log(sortMyString('CodeWars'));




// // Find the Middle Element
// function gimme (triplet) {
//     let middleValue = [...triplet].sort((a,b) => a - b)[1];
//     return triplet.indexOf(middleValue);
// }
// console.log(gimme([2, 3, 1]));




// // Check the Exam
// function checkExam(array1, array2) {
//     let score = array1.map((g, i) => {
//         if (array2[i] === '') {
//             return 0;
//         } else if (g === array2[i]) {
//             return 4;
//         } else {
//             return -1;
//         }
//     }).reduce((sum, curr) => sum + curr, 0);
//     return score < 0 ? 0 : score;
// }
// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))




// // Fizz Buzz
// function fizzbuzz(n) {
//     const finalArr = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             finalArr.push('FizzBuzz');
//         } else if (i % 3 === 0) {
//             finalArr.push('Fizz');
//         } else if (i % 5 === 0) {
//             finalArr.push('Buzz');
//         } else {
//             finalArr.push(i);
//         }
//     }
//     return finalArr;
// }
// console.log(fizzbuzz(10));




// Binary Addition
// function addBinary(a,b) {
//     return (a + b).toString(2);
// }
// console.log(addBinary(5,9));




// // JavaScript Array Filter
// function getEvenNumbers(numbersArray){
//     return numbersArray.filter(num => num % 2 === 0);
// }
// console.log(getEvenNumbers([2,4,5,6]));




// // Flatten and Sort an Array
// "use strict";

// function flattenAndSort(array) {
//   return array.flat().sort((a,b) => a - b);
// }
// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));




// // All Unique (REFACTOR WITH SET)
// function hasUniqueChars(str){
//     return [...str].map(letter => str.indexOf(letter) === str.lastIndexOf(letter)).includes(false) ? false : true;
// }
// console.log(hasUniqueChars('abcdef'));
// console.log(hasUniqueChars("  nAa"));




// // Sum of Minimums!
// function sumOfMinimums(arr) {
//     return arr.map(numArr => Math.min(...numArr)).reduce((sum, curr) => sum + curr, 0);
// }
// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));




// // Row Weights
// function rowWeights(array){
//     return [
//         array.filter((num, index) => index % 2 === 0).reduce((sum, curr) => sum + curr, 0),
//         array.filter((num, index) => index % 2 !== 0).reduce((sum, curr) => sum + curr, 0)
//     ]
// }
// console.log(rowWeights([100,50]));




// // Sorted? Yes? No? How?
// function isSortedAndHow(array) {
//     if (JSON.stringify([...array].sort((a,b) => a - b)) === JSON.stringify(array)) {
//         return 'yes, ascending';
//     } else if (JSON.stringify([...array].sort((a,b) => b - a)) === JSON.stringify(array)) {
//         return 'yes, descending';
//     } else {
//         return 'no';
//     }
// }

// console.log(isSortedAndHow([1, 2]));
// console.log(isSortedAndHow([15, 7, 3, -8]));
// console.log(isSortedAndHow([4, 2, 30]));




// // Sort Arrays - 1
// sortme = function(names){
//     return names.sort();
// }
// console.log(sortme(['one', 'two', 'three']));




// // Head, Tail, Init and Last
// function head(arr) {
//     return [...arr][0];  
// }
  
// function last(arr) {
//     return [...arr][arr.length - 1];
// }
  
// function tail(arr) {
//     return [...arr].slice(1);
// }
  
// function init(arr) {
//     return [...arr].slice(0, arr.length - 1);
// }

// console.log(head([5,1]));
// console.log(last([7,2]));
// console.log(tail([1]));
// console.log(init([1,4,7,9]));




// // Even Number in an Array (NEEDS REFACTORING)
// function evenNumbers(array, number) {
//     return array.filter(num => num % 2 === 0).splice(-number);
// }
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));




// // Shorter Concat (Reverse Longer)
// function shorter_reverse_longer(a,b){
//     return a.length === b.length || a.length > b.length ?
//         `${b}${a.split('').reverse().join('')}${b}` :
//         `${a}${b.split('').reverse().join('')}${a}`;
// }
// console.log(shorter_reverse_longer('hello', 'bau'));
// console.log(shorter_reverse_longer('first', 'abcde'));





// // Substituting Variables Into Strings: Padded Numbers
// function solution(value){
//     return `Value is ${'0'.repeat(5 - String(value).length) + value}`;
// }
// console.log(solution(1204));




// // Flatten
// var flatten = function (array){
//     return array.flat();
// }

// console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]));




// // Parts of a List (REFACTOR BEFORE COMMITING)
// function partlist(arr) {
//     const finalArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i === arr.length - 1) {
//             finalArr.push();
//             break;
//         } else {
//             let rest = arr.slice(i+1);
//             let bef = arr.slice(0, i+1);
//             finalArr.push([bef.join(' '), rest.join(' ')]);
//         }
//     }
//     return finalArr;
// }
// console.log(partlist(["I", "wish", "I", "hadn't", "come"]));




// // Convert an Array of Strings to Array of Numbers
// function toNumberArray(stringarray){
//     return stringarray.map(str => Number(str));
// }
// console.log(toNumberArray(["1.1", "2.2", "3.3"]));




// // Spacify
// function spacify(str) {
//     return str.split('').join(' ');
// }
// console.log(spacify('hello world'));




// Coding Meetup #6 - Higher-Order Functions Series
// Can They Code in the Same Language?
var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

function isSameLanguage(list) {
    let firstVal = list[0].language;
    return list.every(person => person.language === firstVal);
}
console.log(isSameLanguage(list1));












/* =====================================

                6 Kyu

======================================== */

// // Who Likes It?
// function likes(names) {
//     if (names.length === 0) {
//         return `no one likes this`;
//     } else if (names.length === 1) {
//         return `${names[0]} likes this`;
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} likes this`;
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     } else {
//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }
// }




// // Create Phone Number (REFACTOR)
// function createPhoneNumber(numbers){
//     return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));




// // Array.diff
// function arrayDiff(a, b) {
//     return a.filter(num => !b.includes(num));
// }
// console.log(arrayDiff([1,2,3], [1,2]));




// // Duplicate Encoder
// function duplicateEncode(word){
//     return word.toLowerCase().split('').map(letter => word.indexOf(letter) === word.lastIndexOf(letter) ? '(' : ')').join('')
// }




// // Take a Ten Minute Walk
// function isValidWalk(walk) {
//     let startingVert = 0;
//     let startingHori = 0;
//     for (let i = 0; i < walk.length; i++) {
//         if (walk[i] === 'n') startingVert += 1;
//         else if (walk[i] === 's') startingVert -= 1;
//         else if (walk[i] === 'w') startingHori += 1;
//         else if (walk[i] === 'e') startingHori -= 1;
//     }
//     return walk.length === 10 && startingVert === 0 && startingHori === 0;
// }
// console.log(isValidWalk(['n', 's']))




// // Find the Unique Number (REFACTOR - MAKE IT FASTER?)
// function findUniq(arr) {
//     return +arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
// }
// console.log(findUniq([ 1,0,0 ]));




// // Sort the Odd
// function sortArray(array) {
//     let oddNums = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
//     let finalArr = [];
//     let i = 0;

//     array.forEach(num => {
//         if (num % 2 === 0) {
//             finalArr.push(num);
//         } else {
//             finalArr.push(oddNums[i]);
//             i++;
//         }
//     })
//     return finalArr;
// }
// console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]));




// // Which Are In?
// function inArray(array1,array2){
//     return array1.filter(word => {
//         if (array2.join(' ').includes(word)) {
//             return word;
//         }
//     }).sort();
// }
// console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]));




// // Mexican Wave
// function wave(str){
//     let waveArr = [];
    
//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i];
//         if (letter === ' ') {
//             continue;
//         } else {
//             waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
//         }
//     }
//     return waveArr;
// }
// console.log(wave('hello'))




// // Counting Duplicates (REFACTOR FOR NEXT DAY)
// function duplicateCount(text){
//     return Object.entries(text.toLowerCase().split('').reduce((obj, curr) => {
//         obj[curr] = obj[curr] + 1 || 1;
//         return obj;
//     }, {})).filter(([key, value]) => value > 1).length;
// }
// console.log(duplicateCount('aabbcde'));




// // Data Reverse
// function dataReverse(data) {
//     const newArr = [];
//     const copy = [...data];
//     for (let i = 0; i < copy.length / 8; i++) {
//         newArr.push(data.splice(0, 8));
//     }

//     return newArr.reverse().flat();
// }
// console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));




// // Array Helpers
// Array.prototype.square = function() {
//     return this.map(num => num ** 2);
// }

// Array.prototype.cube = function() {
//     return this.map(num => num ** 3);
// }

// Array.prototype.average = function() {
//     return this.reduce((sum, curr) => sum + curr, 0) / this.length;
// }

// Array.prototype.sum = function() {
//     return this.reduce((sum, curr) => sum + curr, 0);
// }

// Array.prototype.even = function() {
//     return this.filter(num => num % 2 === 0);
// }

// Array.prototype.odd = function() {
//     return this.filter(num => num % 2 !== 0);
// }




// // Highest Rank Number in an Array
// function highestRank(arr) {
//     const reducedAndSorted = Object.entries(arr.reduce((obj, curr) => {
//         obj[curr] = obj[curr] + 1 || 1;
//         return obj;
//     }, {})).sort(([,a], [,b]) => a - b);
//     return +reducedAndSorted[reducedAndSorted.length - 1][0];
// }
// console.log(highestRank([12,10,8,12,7,6,4,10,12,10]));




// // The Vowel Code
// const vowels = ['a', 'e', 'i', 'o', 'u'];

// function encode(string) {
//     return string.split('').map(letter => vowels.includes(letter) ? vowels.indexOf(letter) + 1 : letter).join('');
// }
  
// function decode(string) {
//     return string.split('').map(letter => isNaN(letter) ? letter : vowels[+letter - 1]).join('');
// }

// console.log(encode('hello'));
// console.log(decode('h2ll4'));




// // CamelCase Method
// String.prototype.camelCase=function(){
//     if (this.length === 0) return '';
//     return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('');
// }

// console.log(''.camelCase());




// // Pair of Glovez
// function numberOfPairs(gloves) {
//     return Object.values(gloves.reduce((obj, curr) => {
//         obj[curr] = obj[curr] + 1 || 1;
//         return obj;
//     }, {})).map(val => val % 2 !== 0 ? val - (val % 2) : val).reduce((sum, curr) => sum + curr, 0) / 2;
// }
// console.log(numberOfPairs([
//     'Silver',  'Blue',    'Green',   'Olive',   'Maroon',  'Silver',
//     'Lime',    'Gray',    'White',   'White',   'Lime',    'Silver',
//     'White',   'Purple',  'Fuchsia', 'Fuchsia', 'Navy',    'Green',
//     'Yellow',  'Aqua',    'Teal',    'Navy',    'White',   'Blue',
//     'Purple',  'Yellow',  'White',   'Navy',    'Blue',    'Fuchsia',
//     'Gray',    'Black',   'Lime',    'Green',   'Gray',    'Gray',
//     'Maroon',  'Gray',    'Navy',    'Navy',    'Maroon',  'Aqua',
//     'Black',   'Yellow',  'Silver',  'Green',   'Silver',  'Purple',
//     'Fuchsia', 'Teal',    'Teal',    'Yellow',  'Fuchsia', 'Aqua',
//     'Silver',  'Aqua',    'Green',   'Olive',   'Silver',  'Red',
//     'Olive',   'Fuchsia', 'Maroon',  'Gray',    'Gray',    'Lime',
//     'Aqua',    'Maroon',  'Yellow',  'Red',     'Silver',  'Fuchsia',
//     'Gray',    'White',   'Fuchsia', 'Black',   'Green',   'Fuchsia',
//     'Teal',    'Green',   'Fuchsia', 'Yellow',  'White',   'Yellow',
//     'Lime',    'Aqua',    'Red',     'Green',   'Purple',  'White',
//     'Yellow',  'Black',   'White',   'Lime',    'Lime'
//   ]));




// // Prefill an Array
// function prefill(n, v) {
//     if (parseInt(n) !== Math.abs(n)) {
//         throw new TypeError(`${n} is invalid`);
//     }

//     return Number(n) ? Array(n).fill(v) : [];
// }

// console.log(prefill(3,1));
// console.log(prefill(2, 'abc'));
// console.log(prefill(3, prefill(2, '2d')));
// // console.log(prefill('xyz', 1));
// console.log(prefill(Infinity, 1));




// // Run-Length Encoding
// let runLengthEncoding = function(str) {
//     if (str.length === 0) return [];

//     let finalArr = [];
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++;
//         } else {
//             count++;
//             finalArr.push([count, str[i]]);
//             count = 0;
//         }
//     }
//     return finalArr;
// }
// console.log(runLengthEncoding('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'));




// // Replace With Alphabet Position
// function alphabetPosition(text) {
//     const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
//     return text
//         .toLowerCase()
//         .split('')
//         .filter(letter => alphabet.includes(letter))
//         .map(letter => alphabet.indexOf(letter) + 1).join(' ');
// }
// console.log(alphabetPosition('The sunset sets at twelve o\' clock'));




// // Is Integer Array?
// function isIntArray(arr) {
//     if (!Array.isArray(arr)) return false;

//     for (let i = 0; i < arr.length; i++) {
//         if (Math.floor(arr[i]) !== arr[i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(isIntArray([]));
// console.log(isIntArray([1, 2, 3, 4]));
// console.log(isIntArray([null]));




// // Give me a Diamond!
// function diamond(n){
//     if (n <= 0 || n % 2 === 0) return null;
//     let str = '';

//     for (let i = 0; i < n; i++) {
//         let len = Math.abs((n - 2 * i - 1) / 2);
//         str += ' '.repeat(len);
//         str += '*'.repeat(n - 2 * len);
//         str += '\n';
//     }
//     return str;
// }
// console.log(diamond(3))







/* =====================================

                5 Kyu

======================================== */














/* =====================================

                4 Kyu

======================================== */














/* =====================================

                3 Kyu

======================================== */














/* =====================================

                2 Kyu

======================================== */















/* =====================================

                1 Kyu

======================================== */


