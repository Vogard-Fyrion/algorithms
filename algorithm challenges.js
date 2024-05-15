const cost1 = 10
const budget1 = 20
// const expected = true

const cost2 = 15
const budget2 = 10
// const expected = false

/**
 * Determines if there is enough budget to make a purchase.
 * @param {Number} cost The cost of the item to be purchased.
 * @param {Number} budget The available budget to spend.
 * @returns {Boolean} true or false
 */
function canAffordToBuy(cost, budget){

}

console.log(canAffordToBuy(cost1, budget1))
console.log(canAffordToBuy(cost2, budget2))

// ============================================================================================================

const costs1 = [10, 5, 2, 2]
const availBudget1 = 20
// const expected = true

const costs2 = [15, 30, 22, 41, 17]
const availBudget2 = 100
// const expected = false

/**
 * Determines if there is enough budget to make the purchases.
 * @param {Number} costs The cost of the items to be purchased.
 * @param {Number} budget The available budget to spend.
 * @returns {Boolean} true or false
 */
function canAffordToBuyTotal(costs, budget){

}

console.log(canAffordToBuyTotal(costs1, availBudget1))
console.log(canAffordToBuyTotal(costs2, availBudget2))

// ============================================================================================================

const twoSumsA1 = 3
const twoSumsB1 = 7
// const expected = 10

const twoSumsA2 = 15
const twoSumsB2 = 85
// const expected = 100

const twoSumsA3 = 53376
const twoSumsB3 = 913457
// const expected = 966833

/**
 * This function adds two given numbers together to find the sum.
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}  the sum of the two given numbers added together.
 */
function addTwoNums(num1, num2){

}

console.log(addTwoNums(twoSumsA1, twoSumsB1))
console.log(addTwoNums(twoSumsA2, twoSumsB2))
console.log(addTwoNums(twoSumsA3, twoSumsB3))

// ============================================================================================================

const combStrA1 = "a"
const combStrB1 = "b"
const combStrC1 = "c"
// const expected = "cab"

const combStrA2 = "gram"
const combStrB2 = "ming"
const combStrC2 = "pro"
// const expected = "programming"

/**
 * Concatenate three given strings together in this order:
 * 3rd string, 1st string, 2nd string.
 * @param {string} str1
 * @param {string} str2
 * @param {string} str3
 * @returns {string} The three given strings combined (concatenated).
 */
function combineStrings(str1, str2, str3){

}

console.log(combineStrings(combStrA1, combStrB1, combStrC1))
console.log(combineStrings(combStrA2, combStrB2, combStrC2))

// ============================================================================================================

const combSmFirstA1 = "pro"
const combSmFirstB1 = "gramming"
// const expected = "programming"

const combSmFirstA2 = "gramming"
const combSmFirstB2 = "pro"
// const expected = "programming"

const combSmFirstA3 = "abc"
const combSmFirstB3 = "def"
// const expected = "abcdef"

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * @param {string} str1
 * @param {string} str2
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(str1, str2){

}

console.log(combineSmallerStringFirst(combSmFirstA1, combSmFirstB1))
console.log(combineSmallerStringFirst(combSmFirstA2, combSmFirstB2))
console.log(combineSmallerStringFirst(combSmFirstA3, combSmFirstB3))

// ============================================================================================================

const repeatStr1 = "Dojo"
const repeatAmount1 = 3
// const expected = "DojoDojoDojo"

const repeatStr2 = "Puppy"
const repeatAmount2 = 7
// const expected = "PuppyPuppyPuppyPuppyPuppyPuppyPuppy"

const repeatStr3 = "Hello"
const repeatAmount3 = 2
// const expected = "HelloHello"

/**
 * Repeats the given string the given amount of times without using the built
 * in .repeat method.
 * @param {string} str The string to be repeated.
 * @param {number} repeatAmount The amount of times to repeat the given string.
 * @returns {string} The given string repeated.
 */
function stringRepeat(str, repeatAmount){

}

console.log(stringRepeat(repeatStr1, repeatAmount1))
console.log(stringRepeat(repeatStr2, repeatAmount2))
console.log(stringRepeat(repeatStr3, repeatAmount3))

// ============================================================================================================

const mpg1 = 28.7
const fuel1 = 12
// const expected = 344.4

const mpg2 = 12.2
const fuel2 = 25
// const expected = 305

const mpg3 = 34.1
const fuel3 = 10
// const expected = 341

/**
 * Calculates how many miles can be driven before running out of gas.
 * @param {number} mpg How many miles the car gets per gallon.
 * @param {number} gallonsInTank How many gallons are in the tank.
 * @returns {number} The amount of miles until empty.
 */
function milesToEmpty(mpg, gallonsInTank){

}

console.log(milesToEmpty(mpg1, fuel1))
console.log(milesToEmpty(mpg2, fuel2))
console.log(milesToEmpty(mpg3, fuel3))

// ============================================================================================================

const totalWordsLen1 = ["Hello", "World"]
// const expected = 10

const totalWordsLen2 = ["Programmers", "are", "cool"]
// const expected = 18

/**
 * Totals the length of all the words in the given array.
 * @param {Array<string>} words
 * @returns {number} The total length of all the given words.
 */
function totalWordsLength(words){

}

console.log(totalWordsLength(totalWordsLen1))
console.log(totalWordsLength(totalWordsLen2))

// ============================================================================================================

const avgWordsLen1 = ["Hello", "World"]
// const expected = 5

const avgWordsLen2 = ["Programmers", "are", "cool!"]
// const expected = 6

/**
 * Finds the average length rounded down of the given words.
 * @param {Array<string>} words
 * @returns {number} The average length of the given words rounded down.
 */
function avgWordLength(words){

}

console.log(avgWordLength(avgWordsLen1))
console.log(avgWordLength(avgWordsLen2))

// ============================================================================================================

const longestWord1 = ["Hello", "World"]
// const expected = "World"

const longestWord2 = ["Programmers", "are", "cool!"]
// const expected = "Programmers"

const longestWord3 = ["Who", "would've", "thought"]
// const expected = "would've"

/**
 * Finds the longest word in the given array of words.
 * @param {Array<string>} words
 * @returns {string} The longest word. If there are multiple words with the same 
 * length, this will be the last word in the array with that length.
 */
function findLongestWord(words){

}

console.log(findLongestWord(longestWord1))
console.log(findLongestWord(longestWord2))
console.log(findLongestWord(longestWord3))

// ============================================================================================================

const start1 = 2
const end1 = 10
// const expected = 54

const start2 = 10
const end2 = 100
// const expected = 5005

/**
 * Calculates the sum of the given range, inclusive.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum(start, end){

}

console.log(inclusiveRangeSum(start1, end1))
console.log(inclusiveRangeSum(start2, end2))

// ============================================================================================================

const arrNum1 = 255
//const expected = [1, 2, 3, ... , 253, 254, 255]

const arrNum2 = 100
//const expected = [1, 2, 3, ... , 98, 99, 100]

/**
 * given a number, return an array of all numbers from 1 to given number
 * @param {Number} num the number to stop at
 * @returns {Array<Numbers>} an array of all numbers from 1 to given number
 */
function get_array(num){

}

console.log(get_array(arrNum1))
console.log(get_array(arrNum2))

// ============================================================================================================

const evenLowSum1 = 1
const evenHighSum1 = 1000
//const expected = 250500

const evenLowSum2 = 15
const evenHighSum2 = 150
//const expected = 5644

/**
 * given two numbers, return the sum of all even numbers between the two numbers
 * @param {Number} low the lower limit of numbers
 * @param {Number} high the upper limit of numbers
 * @returns {Number} the sum of all the even numbers from low number to high number
 */
function sum_even_numbers(low, high){

}

console.log(sum_even_numbers(evenLowSum1, evenHighSum1))
console.log(sum_even_numbers(evenLowSum2, evenHighSum2))

// ============================================================================================================

const oddLowSum1 = 1
const oddHighSum1 = 1000
//const expected = 250000

const oddLowSum2 = 15
const oddHighSum2 = 150
//const expected = 5576

/**
 * given two numbers, return the sum of all odd numbers between the two numbers
 * @param {Number} low the lower limit of numbers
 * @param {Number} high the upper limit of numbers
 * @returns {Number} the sum of all the odd numbers from low number to high number
 */
function sum_odd_numbers(low, high){
    
}

console.log(sum_odd_numbers(oddLowSum1, oddHighSum1))
console.log(sum_odd_numbers(oddLowSum2, oddHighSum2))

// ============================================================================================================

const numArr1 = [0]
//const expected = 0

const numArr2 = [1, 2, 5]
//const expected = 8

const numArr3 = [-5, 2, 5, 12]
//const expected = 14


/**
 * given an array of numbers, return the sum of all the numbers in the array
 * @param {Array<Numbers>} arr an array of numbers
 * @returns {Number} the sum of all the numbers in the array
 */
function iterArr(arr){

}

console.log(iterArr(numArr1))
console.log(iterArr(numArr2))
console.log(iterArr(numArr3))

// ============================================================================================================

const maxArr1 = [0, -2, 8]
//const expected = 8

const maxArr2 = [300, 2, 200, 5]
//const expected = 300

const maxArr3 = [1]
//const expected = 1

/**
 * given an array of numbers, return the highest number value inside the array
 * @param {Array<Numbers>} arr an array of numbers
 * @returns {Number} the highest number inside the given array
 */
function findMax(arr){

}

console.log(findMax(maxArr1))
console.log(findMax(maxArr2))
console.log(findMax(maxArr3))

// ============================================================================================================

const avgArr1 = [0, 0, 0]
//const expected = 0

const avgArr2 = [1, 3, 5, 7, 20]
//const expected = 7.2

const avgArr3 = [-3, 4, 8]
//const expected = 3

/**
 * given an array, return the average of all the numbers inside the array,
 * the average is the sum of all the numbers divided by the length
 * @param {Array<Numbers>} arr an array of numbers
 * @returns {Number} the average of all the numbers in the array
 */
function findAvg(arr){

}

console.log(findAvg(avgArr1))
console.log(findAvg(avgArr2))
console.log(findAvg(avgArr3))

// ============================================================================================================

const oddLow1 = 1
const oddHigh1 = 50
//const expected = [1, 3, 5, ... , 45, 47, 49]

const oddLow2 = 5
const oddHigh2 = 249
//const expected = [5, 7, 9, ... , 245, 247, 249]

/**
 * given two numbers, return an array of all the odd numbers between the two given numbers
 * @param {Number} low the lower limit of numbers
 * @param {Number} high the upper limit of numbers
 * @return {Array<Numbers>} an array of all the odd numbers
 */
function oddNumbers(low, high){

}

console.log(oddNumbers(oddLow1, oddHigh1))
console.log(oddNumbers(oddLow2, oddHigh2))

// ============================================================================================================

const smallest1 = [34, 15, 88, 2];
// const expected = 2

const smallest2 = [34, -345, -1, 100];
// const expected = -345

/**
 * given an array of numbers, return the smallest value in the array
 * @param {Array<Numbers>} arr an array of numbers
 * @returns {Number} the smallest number in the array
 */
function findSmallestInt(arr){

}

console.log(findSmallestInt(smallest1))
console.log(findSmallestInt(smallest2))

// ============================================================================================================

const arrY1 = [1, 2, 5]
const Y1 = 1
//const expected = 2

const arrY2 = [1, 3, 5, 7, 20]
const Y2 = 12
//const expected = 1

const arrY3 = [-1]
const Y3 = 0
//const expected = 0

/**
 * given an array of numbers and a search number, return how many numbers inside 
 * an array are greater than the search number
 * @param {Array<Numbers>} arr an array of numbers
 * @param {Number} Y the search number
 * @returns {Number} the amount of numbers in the array that are greater than the 
 * search number
 */
function greaterY(arr, Y){

}

console.log(greaterY(arrY1, Y1))
console.log(greaterY(arrY2, Y2))
console.log(greaterY(arrY3, Y3))

// ============================================================================================================

const squareArr1 = [1, 2, 3]
//const expected = [1, 4, 9]

const squareArr2 = [-1, 3, 6]
//const expected = [1, 9, 36]

const squareArr3 = [0]
//const expected = [0]

/**
 * given an array of numbers, return a new array with all the numbers squared in the 
 * same order
 * @param {Array<Numbers>} arr an array of numbers
 * @returns {Array<Numbers>} an array of all the numbers squared
 */
function squareVal(arr){
    
}

console.log(squareVal(squareArr1))
console.log(squareVal(squareArr2))
console.log(squareVal(squareArr3))

// ============================================================================================================

const negArr1 = [1, 2, -3, 3]
//const expected = [1, 2, 0, 3]

const negArr2 = [-1, 3, 6]
//const expected = [0, 3, 6]

const negArr3 = [0]
//const expected = [0]

/**
 * given an array of numbers, return the array with all of the negative values 
 * changed to 0
 * @param {Array<Numbers>} arr an array of numbers
 * @returns {Array<Numbers>} an array with no negative values
 */
function noNeg(arr){

}

console.log(noNeg(negArr1))
console.log(noNeg(negArr2))
console.log(noNeg(negArr3))

// ============================================================================================================

const maxMinAvg1 = [0, 2, 4]
//const expected = [4, 0, 2]

const maxMinAvg2 = [1, 5, 10, -2]
//const expected = [10, -2, 3.5]

const maxMinAvg3 = [0]
//const expected = [0, 0, 0]

/**
 * given an array of numbers, return an array with the maximum, minimum, and average 
 * numbers of the given array
 * @param {Array<Numbers>} arr an array of numbers
 * @returns {Array<Numbers>} an array with the max, min, and avg numbers
 */
function maxMinAvg(arr){

}

console.log(maxMinAvg(maxMinAvg1))
console.log(maxMinAvg(maxMinAvg2))
console.log(maxMinAvg(maxMinAvg3))

// ============================================================================================================

const swapArr1 = [0, 2, 4]
//const expected = [4, 2, 0]

const swapArr2 = [1, 5, 10, -2]
//const expected = [-2, 5, 10, 1]

const swapArr3 = [10, 20]
//const expected = [20, 10]

/**
 * given an array, return an array with the first and last values swapped
 * @param {Array<Numbers>} arr an array of numbers
 * @returns {Array<Numbers>} an array with the first and last values swapped
 */
function swap(arr){

}

console.log(swap(swapArr1))
console.log(swap(swapArr2))
console.log(swap(swapArr3))

// ============================================================================================================

const numToStrArr1 = [-1,-3,2]
const numToStr1 = "Hello"
// const expected = ["Hello", "Hello", 2]

const numToStrArr2 = [0]
const numToStr2 = "World"
// const expected = [0]

const numToStrArr3 = [-2,3,-1]
const numToStr3 = "Algos"
// const expected = ["Algos", 3, "Algos"]

/**
 * given an array of numbers and a string, return an array with all the negative 
 * values changed into the given string
 * @param {Array<Numbers>} arr an array of numbers
 * @param {String} str a string
 * @returns {Array<Any>} an array of numbers and strings
 */
function numToStr(arr, str){

}

console.log(numToStr(numToStrArr1, numToStr1))
console.log(numToStr(numToStrArr2, numToStr2))
console.log(numToStr(numToStrArr3, numToStr3))

// ============================================================================================================

const arrOfItems1 = ["a", "b", "c"]
const searchItem1 = "c"
// const expected = 2

const arrOfItems2 = ["a", "b", "c"]
const searchItem2 = 5
// const expected = -1

const arrOfItems3 = ["c", "a", "b", "c"]
const searchItem3 = "c"
// const expected = 0

const arrOfItems4 = []
const searchItem4 = 5
// const expected = -1

/**
 * Finds the index from the given array where the given item is found.
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} searchItem The item to find.
 * @returns {number} The index of found item, or -1 if not found.
 */
function indexOf(items, searchItem){

}

console.log(indexOf(arrOfItems1, searchItem1))
console.log(indexOf(arrOfItems2, searchItem2))
console.log(indexOf(arrOfItems3, searchItem3))
console.log(indexOf(arrOfItems4, searchItem4))

// ============================================================================================================

const negEven1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2]
// const expected = 3

const negEven2 = []
// const expected = 0

const negEven3 = [-4, -2, -6]
// const expected = 3

/**
 * Counts how many numbers are both even and negative.
 * @param {number} nums
 * @returns {number} The count of even and negative numbers.
 */
function countEvenNegatives(nums){

}

console.log(countEvenNegatives(negEven1))
console.log(countEvenNegatives(negEven2))
console.log(countEvenNegatives(negEven3))

// ============================================================================================================

const slice1 = ["a", "b", "c", "d", "e"]
const startIdx1 = 0
const endIdx1 = 5
// const expected = ["a", "b", "c", "d", "e"]

const slice2 = ["a", "b", "c", "d", "e"]
const startIdx2 = 0
const endIdx2 = 1
// const expected = ["a"]

const slice3 = ["a", "b", "c", "d", "e"]
const startIdx3 = 1
const endIdx3 = 2
// const expected = ["b"]

const slice4 = ["a", "b", "c", "d", "e"]
const startIdx4 = -100
const endIdx4 = 100
// const expected = ["a", "b", "c", "d", "e"]

const slice5 = ["a", "b", "c", "d", "e"]
const startIdx5 = 0
const endIdx5 = 0
// const expected = []

const slice6 = ["a", "b", "c", "d", "e"]
const startIdx6 = 1
const endIdx6 = 1
// const expected = []

/**
 * Returns a slice of given arr from the startIdx(inclusive) to the endIdx(exclusive).
 * @param {Array<any>} items
 * @param {number} startIdx
 * @param {number} endIdx
 * @returns {Array<any>} The slice of the given arr
 */
function slice(items, startIdx, endIdx){

}

console.log(slice(slice1, startIdx1, endIdx1))
console.log(slice(slice2, startIdx2, endIdx2))
console.log(slice(slice3, startIdx3, endIdx3))
console.log(slice(slice4, startIdx4, endIdx4))
console.log(slice(slice5, startIdx5, endIdx5))
console.log(slice(slice6, startIdx6, endIdx6))

// ============================================================================================================

const capString1 = "hello"
// const expected = "Hello"

const capString2 = ""
// const expected = ""

/**
 * Capitalizes the first letter of the given string.
 * @param {string} string The string to capitalize.
 * @returns {string} The given string with the first letter capitalized or an
 * empty string.
 */
function capitalize(string){

}

console.log(capitalize(capString1))
console.log(capitalize(capString2))

// ============================================================================================================

const capStrings1 = ["hello", "world"]
// const expected = ["Hello", "World"]

const capStrings2 = ["coding", "Dojo"]
// const expected = ["Coding", "Dojo"]

/**
 * Capitalizes the first letter of each string in the given array.
 * @param {Array<string>} strings
 * @returns {Array<string>} The same given array with updated items.
 */
function capitalization(strings){

}

console.log(capitalization(capStrings1))
console.log(capitalization(capStrings2))

// ============================================================================================================

const concatArrA1 = ["a", "b"]
const concatArrB1 = [1, 2, 3]
// const expected = ["a", "b", 1, 2, 3]

const concatArrA2 = [1, 2, 3]
const concatArrB2 = ["a", "b"]
// const expected = [1, 2, 3, "a", "b"]

/**
 * Concatenates the given arrays together into order that they are passed in.
 * @param {Array<any>} items1
 * @param {Array<any>} items2
 * @returns {Array<any>} The new arr that is a concatenation of the given arrays.
 */
function concat(items1, items2){

}

console.log(concat(concatArrA1, concatArrB1))
console.log(concat(concatArrA2, concatArrB2))

// ============================================================================================================

const concatSelf1 = ["a", "b", "c"]
// const expected = ["a", "b", "c", "a", "b", "c"]

const concatSelf2 = ["a"]
// const expected = ["a", "a"]

const concatSelf3 = []
// const expected = []

/**
 * Creates a new array that is a concatenation of the given array with itself.
 * @param {Array<any>} items
 * @returns {Array<any>} The resulting concatenation of the given arr with
 * itself.
 */
function concatArrWithSelf(items){

}

console.log(concatArrWithSelf(concatSelf1))
console.log(concatArrWithSelf(concatSelf2))
console.log(concatArrWithSelf(concatSelf3))

// ============================================================================================================

const min1 = [5, 2, 3]
// const expected = 1

const min2 = [5, 4, 2, 2, 3]
// const expected = 2

const min3 = []
// const expected = -1

/**
 * Returns the index of the smallest number from the given array.
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums){
    
}

console.log(indexOfMinVal(min1))
console.log(indexOfMinVal(min2))
console.log(indexOfMinVal(min3))

// ============================================================================================================

const revArr1 = [1, 2, 3]
// const expected = [3, 2, 1]

const revArr2 = ["a", "b"]
// const expected = ["b", "a"]

const revArr3 = ["a"]
// const expected = ["a"]

const revArr4 = []
// const expected = []

/**
 * Reverses the given arr in place without built in methods.
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
function reverseArr(items){

}

console.log(reverseArr(revArr1))
console.log(reverseArr(revArr2))
console.log(reverseArr(revArr3))
console.log(reverseArr(revArr4))

// ============================================================================================================

const unshiftArr1 = [1, 2, 3]
const newItem1 = 0
// const expected = 4

const unshiftArr2 = []
const newItem2 = "a"
// const expected = 1

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {Array<any>} The new array of items.
 */
function unshift(items, newItem){

}

console.log(unshift(unshiftArr1, newItem1))
console.log(unshift(unshiftArr2, newItem2))

// ============================================================================================================

const shiftArr1 = [1, 2, 3]
// const expected = 1

const shiftArr2 = ["a", "b", "c", "d"]
// const expected = "a"

const shiftArr3 = []
// const expected = undefined

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items){

}

console.log(shift(shiftArr1), "||", shiftArr1)
console.log(shift(shiftArr2), "||", shiftArr2)
console.log(shift(shiftArr3), "||", shiftArr3)

// ============================================================================================================

const removeArr1 = ["a", "b", "c", "d", "e"]
const removeIdx1 = 1
// const expected = "b"

const removeArr2 = ["a", "b", "c"]
const removeIdx2 = 3
// const expected = null

const removeArr3 = ["a", "b", "c"]
const removeIdx3 = -3
// const expected = null

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */
function removeAt(items, idx){

}

console.log(removeAt(removeArr1, removeIdx1))
console.log(removeAt(removeArr2, removeIdx2))
console.log(removeAt(removeArr3, removeIdx3))

// ============================================================================================================

const minNums1 = [6, 4, 5, 1, 3, 2]
// const expected = [1, 6, 4, 5, 3, 2]

const minNums2 = [1, 5, 2, 9]
// const expected = [1, 5, 2, 9]

const minNums3 = [5, 1, 0, 2, 3, 0]
// const expected = [0, 5, 1, 2, 3, 0]

/**
 * Moves the smallest number in the given array to the front.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums){

}

console.log(minToFront(minNums1))
console.log(minToFront(minNums2))
console.log(minToFront(minNums3))

// ============================================================================================================

const twoDimArr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const twoDimArr2 = [[1], [2], [3]]
// const expected = [1, 2, 3]

const twoDimArr3 = [[], [], [10, 20]]
// const expected = [10, 20]

/**
 * Flattens a two dimensional array into a new one dimensional array.
 * @param {Array<Array<any>>} twoDimArr An array of arrays of any data type.
 * @returns {Array<any>} The flattened array that should be one dimensional.
 */
function flatten2dArray(twoDimArr){

}

console.log(flatten2dArray(twoDimArr1))
console.log(flatten2dArray(twoDimArr2))
console.log(flatten2dArray(twoDimArr3))

// ============================================================================================================

const secondLargestNums1 = [2, 3, 1, 4]
// const expected = 3

const secondLargestNums2 = [4, 1, 3, 2]
// const expected = 3

const secondLargestNums3 = [4, 4, 4, 1, 3, 2]
// const expected = 3

const secondLargestNums4 = [3, 1, 4, 2]
// const expected = 3

const secondLargestNums5 = [3, 4, 2, 1]
// const expected = 3

const secondLargestNums6 = [3, 3]
// const expected = null

const secondLargestNums7 = [2]
// const expected = null

const secondLargestNums8 = []
// const expected = null

/**
 * Finds the second largest int from the given array and returns it or null.
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 */
function secondLargest(nums){

}

console.log(secondLargest(secondLargestNums1))
console.log(secondLargest(secondLargestNums2))
console.log(secondLargest(secondLargestNums3))
console.log(secondLargest(secondLargestNums4))
console.log(secondLargest(secondLargestNums5))
console.log(secondLargest(secondLargestNums6))
console.log(secondLargest(secondLargestNums7))
console.log(secondLargest(secondLargestNums8))

// ============================================================================================================

const numbersA1 = [20, 10, 30]
const numbersB1 = [10, 30, 20]
// const expected = [30, 40, 50]

/**
 * Returns a new array that is the sum of the columns of the two given arrays
 * of equal lengths.
 * @param {Array<number>} nums1
 * @param {Array<number>} nums2
 * @returns {Array<number>} The column sums.
 */
function sumArrColumns(nums1, nums2){

}

console.log(sumArrColumns(numbersA1, numbersB1))

// ============================================================================================================

const compareStrA1 = "ABC";
const compareStrB1 = "abc";
// const expected = true;

const compareStrA2 = "ABC";
const compareStrB2 = "abd";
// const expected = false;

const compareStrA3 = "ABC";
const compareStrB3 = "bc";
// const expected = false;

/**
 * Determines whether or not the strings are equal, ignoring case.
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} If the strings are equal or not.
 */
function caseInsensitiveStringCompare(str1, str2){

}

console.log(caseInsensitiveStringCompare(compareStrA1, compareStrB1))
console.log(caseInsensitiveStringCompare(compareStrA2, compareStrB2))
console.log(caseInsensitiveStringCompare(compareStrA3, compareStrB3))

// ============================================================================================================

const sides1 = 6
const sides2 = 20

/**
 * given a number for the amount of sides on a dice, use Math.random and Math.floor to 
 * get a random number for a roll of the dice
 * @param {Number} sides a number for the sides of the dice
 * @returns {Number} the roll of the dice
 */
function dice(sides){

}

let playerRoll = dice(sides1);
console.log(`The player rolled a ${sides1} sided dice and got: ${playerRoll}`);
playerRoll = dice(sides2);
console.log(`The player rolled a ${sides2} sided dice and got: ${playerRoll}`);

// ============================================================================================================

const lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

/**
 * given an array of answers, return a random answer from the array
 * @param {Array<Strings>} arr an array of answers
 * @returns {String} the random answer
 */
function Oracle(arr){

}

console.log(Oracle(lifesAnswers));

// ============================================================================================================

const pokémon = [
    {"id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"]},
    {"id": 5,   "name": "Charmeleon", "types": ["fire"]},
    {"id": 9,   "name": "Blastoise",  "types": ["water"]},
    {"id": 12,  "name": "Butterfree", "types": ["bug", "flying"]},
    {"id": 16,  "name": "Pidgey",     "types": ["normal", "flying"]},
    {"id": 23,  "name": "Ekans",      "types": ["poison"]},
    {"id": 24,  "name": "Arbok",      "types": ["poison"]},
    {"id": 25,  "name": "Pikachu",    "types": ["electric"]},
    {"id": 37,  "name": "Vulpix",     "types": ["fire"]},
    {"id": 52,  "name": "Meowth",     "types": ["normal"]},
    {"id": 63,  "name": "Abra",       "types": ["psychic"]},
    {"id": 67,  "name": "Machamp",    "types": ["fighting"]},
    {"id": 72,  "name": "Tentacool",  "types": ["water", "poison"]},
    {"id": 74,  "name": "Geodude",    "types": ["rock", "ground"]},
    {"id": 87,  "name": "Dewgong",    "types": ["water", "ice"]},
    {"id": 98,  "name": "Krabby",     "types": ["water"]},
    {"id": 115, "name": "Kangaskhan", "types": ["normal"]},
    {"id": 122, "name": "Mr. Mime",   "types": ["psychic"]},
    {"id": 133, "name": "Eevee",      "types": ["normal"]},
    {"id": 144, "name": "Articuno",   "types": ["ice", "flying"]},
    {"id": 145, "name": "Zapdos",     "types": ["electric", "flying"]},
    {"id": 146, "name": "Moltres",    "types": ["fire", "flying"]},
    {"id": 148, "name": "Dragonair",  "types": ["dragon"]}
];

/**
 * given an array of pokemon objects, return an array of all the pokemon's names
 * @param {Array<Objects>} pokemon an array of objects
 * @returns {Array<Strings>} an array of all the pokemon names
 */
function AllPokemonNames(pokemon){

}

console.log(AllPokemonNames(pokémon));

/**
 * given an array of pokemon objects and a string for type, return an array with 
 * only the names and ids of all the pokemon with the given type
 * @param {Array<Objects>} pokemon an array of objects
 * @param {String} type a string
 * @returns {Array<Objects>} an array of objects
 */
function AllNamesAndIdsSpecificType(pokemon, type){

}

console.log(AllNamesAndIdsSpecificType(pokémon, "poison"));

/**
 * given an array of pokemon objects, return an array with only the names of all 
 * the pokemon that only have 1 type
 * @param {Array<Objects>} pokemon an array of objects
 * @returns {Array} an array of all the names of pokemon with only one type
 */
function AllPokemonWithOnlyOneType(pokemon){

}

console.log(AllPokemonWithOnlyOneType(pokémon));

/**
 * given an array of pokemon objects and a string for type, return an array with 
 * only the names, in reverse, of the pokemon with the given type
 * @param {Array<Objects>} pokemon an array of objects
 * @param {String} type a string
 * @returns {Array<Strings>} an array of pokemon names in reverse
 */
function AllPokemonNamesReverse(pokemon, type){

}

console.log(AllPokemonNamesReverse(pokémon, "poison"));

// ============================================================================================================

const arr2d = [ 
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]
];

const search2d1 = 1
// const expected = true

const search2d2 = 5
// const expected = true

const search2d3 = 4
// const expected = false

/**
 * given an array of arrays and a search number, return true if the number is 
 * in any of the arrays, false if not
 * @param {Array<Arrays>} arr an array of arrays
 * @param {Number} value search number
 * @returns {Boolean} true of false
 */
function isPresent2d(arr, value){

}

console.log(isPresent2d(arr2d, search2d1))
console.log(isPresent2d(arr2d, search2d2))
console.log(isPresent2d(arr2d, search2d3))

// ============================================================================================================

const acrStr1 = "object oriented programming";
// const expected = "OOP";

const acrStr2 = "abstraction polymorphism inheritance encapsulation";
// const expected = "APIE";

const acrStr3 = "software development life cycle";
// const expected = "SDLC";

const acrStr4 = " there's no free lunch - gotta pay yer way." ;
// const expected = "TNFL-GPYW";

const acrStr5 = "Live from New York, it's Saturday Night!";
// const expected = "LFNYISN";

// Bonus: ignore extra spaces
const acrStr6 = "  global   information tracker    ";
// const expected = "GIT";

/**
 * given a string, return the string as an uppercase acronym 
 * <<< .split() and .toUppercase() will be useful >>>
 * @param {String} str a string
 * @returns {String} a acronym string
 */
function acronymize(str){

}

console.log(acronymize(acrStr1));
console.log(acronymize(acrStr2));
console.log(acronymize(acrStr3));
console.log(acronymize(acrStr4));
console.log(acronymize(acrStr5));
console.log(acronymize(acrStr6));

// ============================================================================================================

const revStr1 = "creature";
// const expected = "erutaerc";

const revStr2 = "dog";
// const expected = "god";

const revStr3 = "hello";
// const expected = "olleh";

const revStr4 = "";
// const expected = "";

/**
 * given a string, return the string reversed
 * @param {String} str a string
 * @returns {String} the reversed string
 */
function reverseString(str){

}

console.log(reverseString(revStr1));
console.log(reverseString(revStr2));
console.log(reverseString(revStr3));
console.log(reverseString(revStr4));

// ============================================================================================================

const separatorArr1 = [1, 2, 3];
const separator1 = ", ";
// const expected = "1, 2, 3";

const separatorArr2 = [1, 2, 3];
const separator2 = "-";
// const expected = "1-2-3";

const separatorArr3 = [1, 2, 3];
const separator3 = " - ";
// const expected = "1 - 2 - 3";

const separatorArr4 = [1];
const separator4 = ", ";
// const expected = "1";

const separatorArr5 = [];
const separator5 = ", ";
// const expected = "";

/**
 * given an array of numbers and a string for the separator, return a string of 
 * the numbers separated by the given separator
 * @param {Array<Numbers>} arr an array of numbers
 * @param {String} separator a string
 * @returns {String} a string
 */
function join(arr, separator){

}

console.log(join(separatorArr1, separator1));
console.log(join(separatorArr2, separator2));
console.log(join(separatorArr3, separator3));
console.log(join(separatorArr4, separator4));
console.log(join(separatorArr5, separator5));

// ============================================================================================================

const pages1 = [1, 13, 14, 15, 37, 38, 70];
// const expected = "1, 13-15, 37-38, 70";

const pages2 = [5, 6, 7, 8, 9];
// const expected = "5-9";

const pages3 = [1, 2, 3, 7, 9, 15, 16, 17];
// const expected = "1-3, 7, 9, 15-17";

/**
 * given an array of numbers, return a string of numbers with all consecutive 
 * numbers displayed as a range with a "-"
 * @param {Array<Numbers>} pages an array of numbers
 * @returns {String} a string of page numbers
 */
function bookIndex(pages){

}

console.log(bookIndex(pages1))
console.log(bookIndex(pages2))
console.log(bookIndex(pages3))

// ============================================================================================================

const encodeStr1 = "aaaabbcddd";
// const expected = "a4b2c1d3";

const encodeStr2 = "";
// const expected = "";

const encodeStr3 = "a";
// const expected = "a";

const encodeStr4 = "bbcc";
// const expected = "bbcc";

/**
 * given a string with letters repeating, return an encoded string where the 
 * letter is followed by how many times that letter repeated, 
 * if the length of the encoded string is longer than or the same length as the 
 * original string, return the original string
 * @param {String} str a string of repeating letters
 * @returns {string} an encoded string
 */
function encodeStr(str){

}

console.log(encodeStr(encodeStr1))
console.log(encodeStr(encodeStr2))
console.log(encodeStr(encodeStr3))
console.log(encodeStr(encodeStr4))

// ============================================================================================================

const decodeStr1 = "a3b2c1d3";
// const expected = "aaabbcddd";

const decodeStr2 = "a3b2c12d10";
// const expected = "aaabbccccccccccccdddddddddd";

/**
 * given an encoded string, return a string where each letter is repeated the 
 * amount of times
 * of the number that follows it
 * @param {String} str an encoded string
 * @returns {String} a decoded string
 */
function decode(str){

}

console.log(decode(decodeStr1))
console.log(decode(decodeStr2))

// ============================================================================================================

const pal1 = "a x a";
// const expected = true;

const pal2 = "racecar";
// const expected = true;

const pal3 = "Dud";
// const expected = false;

const pal4 = "oho!";
// const expected = false;

/**
 * given a string, return whether or not the string is a palindrome
 * @param {String} str a string
 * @returns {Boolean} true or false
 */
function isPalindrome(str){

}

console.log(isPalindrome(pal1));
console.log(isPalindrome(pal2));
console.log(isPalindrome(pal3));
console.log(isPalindrome(pal4));

// ============================================================================================================

const palSubStr1 = "what up, daddy-o?";
// const expected = "dad";

const palSubStr2 = "uh, not much";
// const expected = "u";

const palSubStr3 = "Yikes! my favorite racecar erupted!";
// const expected = "e racecar e";

const palSubStr4 = "a1001x20002y5677765z";
// const expected = "5677765";

const palSubStr5 = "a1001x20002y567765z";
// const expected = "567765";

/**
 * given a string, return the longest substring that is a palindrome
 * @param {String} str a string
 * @returns {String} the longest palindrome in the string
 */
function longestPalindromicSubstring(str){

}

console.log(longestPalindromicSubstring(palSubStr1));
console.log(longestPalindromicSubstring(palSubStr2));
console.log(longestPalindromicSubstring(palSubStr3));
console.log(longestPalindromicSubstring(palSubStr4));
console.log(longestPalindromicSubstring(palSubStr5));

// ============================================================================================================

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
// const expected = {
//     abc: 42,
//     3: "wassup",
//     yo: true,
//     };

/**
 * given two arrays, return an object with the first array as the keys and the 
 * second array as the values
 * @param {Array<Any>} keys an array of keys
 * @param {Array<Any>} values an array of values
 * @returns {Object} object with keys and values
 */
function zipArraysIntoMap(keys, values){

}

console.log(zipArraysIntoMap(keys1, vals1))

// ============================================================================================================

const invertObj1 = {name: "Zaphod", charm: "high", morals: "dicey"};
// const expected = {Zaphod: "name", high: "charm", dicey: "morals"};

/**
 * given an object, return an object with the keys and values swapped
 * @param {Object} obj an object
 * @returns {Object} an object with keys and values swapped
 */
function invertObj(obj){

}

console.log(invertObj(invertObj1))

// ============================================================================================================

const freqArr1 = ["a", "a", "a"];
// const expected = {
//     a: 3,
// };

const freqArr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected = {
//     a: 2,
//     b: 1,
//     c: 3,
//     B: 1,
//     d: 1,
// };

const freqArr3 = [];
// const expected = {};

/**
 * given an array of values, return a frequency table, a frequency table is 
 * a count of how many duplicates 
 * there are for each unique key
 * @param {Array<Any>} arr an array of values
 * @returns {Object} a frequency table
 */
function frequencyTableBuilder(arr){

}

console.log(frequencyTableBuilder(freqArr1))
console.log(frequencyTableBuilder(freqArr2))
console.log(frequencyTableBuilder(freqArr3))

// ============================================================================================================

const pairs1 = [1];
// const expected = [1];

const pairs2 = [5, 4, 5];
// const expected = [4];

const pairs3 = [5, 4, 3, 4, 3, 4, 5];
// const expected = [4];

const pairs4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2, 7];
// const expected = [1, 7];

/**
 * given an array of numbers, return an array of all the numbers that dont have pairs
 * @param {Array<Numbers>} nums an array of numbers
 * @returns {Array<Numbers>} an array of numbers without a pair
 */
function oddOccurrencesInArray(nums){

}

console.log(oddOccurrencesInArray(pairs1))
console.log(oddOccurrencesInArray(pairs2))
console.log(oddOccurrencesInArray(pairs3))
console.log(oddOccurrencesInArray(pairs4))

// ============================================================================================================

const dedupeStr1 = "abcABC";
// const expected = "abcABC";

const dedupeStr2 = "helloo";
// const expected = "helo";

const dedupeStr3 = "wednesday"
// const expected = "wednsay"
// const expectedBonus = "wnesday"

/**
 * given a string, return a string with all of the duplicate letters removed
 * @param {String} str a string
 * @returns {String} a string
 */
function stringDedupe(str){

}

/**
 * given a string, return a string with only the last occurence of each letter
 * @param {String} str a string
 * @returns {String} a string
 */
function stringDedupeBonus(str){

}

console.log(stringDedupe(dedupeStr1))
console.log(stringDedupe(dedupeStr2))
console.log(stringDedupe(dedupeStr3))
// console.log(stringDedupeBonus(dedupeStr3))

// ============================================================================================================

const words1 = "hello";
// const expected = "olleh";

const words2 = "hello world"; 
// const expected = "olleh dlrow";

const words3 = "abc def ghi";
// const expected = "cba fed ihg";

/**
 * given a string of words, return a string with the words reversed without 
 * changing the position of the word in the string
 * @param {String} str a string of words
 * @returns {String} a string with words reversed
 */
function reverseWords(str){

}

console.log(reverseWords(words1))
console.log(reverseWords(words2))
console.log(reverseWords(words3))

// ============================================================================================================

const revWordStr1 = "This is a test";
// const expected = "test a is This";

const revWordStr2 = "hello";
// const expected = "hello";

const revWordStr3 = "   This  is a   test  ";
// const expected = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr){

}

console.log(reverseWordOrder(revWordStr1))
console.log(reverseWordOrder(revWordStr2))
console.log(reverseWordOrder(revWordStr3))

// ============================================================================================================

const parens1 = "Y(3(p)p(3)r)s";
// const expected = true;

const parens2 = "N(0(p)3";
// const expected = false;

const parens3 = "N(0)t ) 0(k";
// const expected = false;

const parens4 = "a(b))(c";
// const expected = false;

/**
 * given a string with parenthesis, return whether the parenthesis are valid of not
 * @param {String} str a string with parenthesis
 * @returns {Boolean} true of false
 */
function parensValid(str){

}

console.log(parensValid(parens1))
console.log(parensValid(parens2))
console.log(parensValid(parens3))
console.log(parensValid(parens4))

// ============================================================================================================

const braces1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const expected = true;

const braces2 = "D(i{a}l[ t]o)n{e";
// const expected = false;

const braces3 = "A(1)s[O (n]0{t) 0}k";
// const expected = false;

/**
 * given a string containing braces, return whether the braces are valid or not
 * @param {String} str a string with braces
 * @returns {Boolean} true or false
 */
function bracesValid(str){

}

console.log(bracesValid(braces1))
console.log(bracesValid(braces2))
console.log(bracesValid(braces3))

// ============================================================================================================

const rotate = "Hello World";

const rotateAmnt1 = 0;
// const expected = "Hello World";

const rotateAmnt2 = 1;
// const expected = "dHello Worl";

const rotateAmnt3 = 2;
// const expected = "ldHello Wor";

const rotateAmnt4 = 4;
// const expected = "orldHello W";

const rotateAmnt5 = 13;
// const expected = "ldHello Wor";

/**
 * given a string and a number, rotate the string 1 letter the amount of 
 * times of the number
 * @param {String} str string to be rotated
 * @param {Number} amnt times to rotate
 * @returns {String} string after rotating
 */
function rotateStr(str, amnt){

}

console.log(rotateStr(rotate, rotateAmnt1))
console.log(rotateStr(rotate, rotateAmnt2))
console.log(rotateStr(rotate, rotateAmnt3))
console.log(rotateStr(rotate, rotateAmnt4))
console.log(rotateStr(rotate, rotateAmnt5))

// ============================================================================================================

const rotateStrA1 = "ABCD";
const rotateStrB1 = "CDAB";
// const expected = true;

const rotateStrA2 = "ABCD";
const rotateStrB2 = "CDBA";
// const expected = false;

const rotateStrA3 = "ABCD"
const rotateStrB3 = "BCDAB"
// const expected = false

/**
 * given two strings, return whether the strings are rotations of each other or not
 * @param {String} s1 first string
 * @param {String} s2 second string
 * @returns {Boolean} true or false
 */
function isRotation(s1, s2){

}

console.log(isRotation(rotateStrA1,rotateStrB1))
console.log(isRotation(rotateStrA2,rotateStrB2))
console.log(isRotation(rotateStrA3,rotateStrB3))

// ============================================================================================================

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
// const expected = [
//     { name: "Peanut Butter", quantity: 70 },
//     { name: "Grain of Rice", quantity: 9001 },
//     { name: "Royal Jelly", quantity: 20 },
// ];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
// const expected = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
// const expected = [{ name: "Peanut Butter", quantity: 20 }];

/**
 * Updates the current inventory based on the new inventory.
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 * @param {Array<Inventory>} currInv An array of inventory objects.
 * @return {Array<Inventory>} The currInv after being updated.
 */
function updateInventory(newInv, currInv){

}

console.log(updateInventory(newInv1, currInv1))
console.log(updateInventory(newInv2, currInv2))
console.log(updateInventory(newInv3, currInv3))

// ============================================================================================================

const trimStr = "   hello world     ";
// const expected = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str){

}

console.log(trim(trimStr))

// ============================================================================================================

const anagramStrA1 = "yes";
const anagramStrB1 = "eys";
// const expected = true;

const anagramStrA2 = "yes";
const anagramStrB2 = "eYs";
// const expected = true;

const anagramStrA3 = "no";
const anagramStrB3 = "noo";
// const expected = false;

const anagramStrA4 = "silent";
const anagramStrB4 = "listen";
// const expected = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2){

}

console.log(isAnagram(anagramStrA1, anagramStrB1))
console.log(isAnagram(anagramStrA2, anagramStrB2))
console.log(isAnagram(anagramStrA3, anagramStrB3))
console.log(isAnagram(anagramStrA4, anagramStrB4))

// ============================================================================================================

const queue1 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1];
// const expected = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
// const expected = true;

const queue3 = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
// const expected = false;

/**
 * given an array of numbers, return whether or not there are six 0's(feet) in 
 * between each set of 1's(people)
 * @param {Array<0|1>} arr a queue
 * @returns {Boolean} true or false
 */
function socialDistancingEnforcer(arr){

}

console.log(socialDistancingEnforcer(queue1))
console.log(socialDistancingEnforcer(queue2))
console.log(socialDistancingEnforcer(queue3))

// ============================================================================================================

const BalArr1 = [-2, 5, 7, 0, 3];
// const expected = 2;

const BalArr2 = [9, 9];
// const expected = -1;

const BalArr3 = [1, 5, 9]
// const expected = -1

const BalArr4 = [10, 99, 2, 2, 2, 1, 1, 1, 1]
// const expected = 1

const BalArr5 = [2, 2, 2, 2, 1, 1, 99, 10]
// const expected = 6

/**
 * create a function takes an array and compares the sum of all the numbers to the left of the index and the
 * sum of all the numbers to the right of the index, if the sums of both sides are equal return which index
 * number it is, if the sums are not equal or there is less than 3 numbers in the array return -1
 * @param {Array<Numbers>} nums an array of numbers
 * @returns {Boolean} true or false
 */
function balanceIndex(nums){

}

console.log(balanceIndex(BalArr1))
console.log(balanceIndex(BalArr2))
console.log(balanceIndex(BalArr3))
console.log(balanceIndex(BalArr4))
console.log(balanceIndex(BalArr5))

// ============================================================================================================

const BinaryNums1 = [1, 3, 5, 6];
const BinarySearchNum1 = 4;
// const expected1 = false;

const BinaryNums2 = [4, 5, 6, 8, 12];
const BinarySearchNum2 = 5;
// const expected2 = true;

const BinaryNums3 = [3, 4, 6, 8, 12];
const BinarySearchNum3 = 3;
// const expected3 = true;

// bonus, how many times does the search num appear?
const BinaryNums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const BinarySearchNum4 = 2;
// const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * @param {Array<number>} sortedNums an array of numbers
 * @param {number} searchNum the number to search for
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum){

}

/**
 * Efficiently determines how many of the given numbers are in the given array.
 * @param {Array<number>} sortedNums an array of numbers
 * @param {number} searchNum the number to search for
 * @returns {number} how many times the number appears in the array
 */
function binarySearchBonus(sortedNums, searchNum){

}

console.log(binarySearch(BinaryNums1, BinarySearchNum1))
console.log(binarySearch(BinaryNums2, BinarySearchNum2))
console.log(binarySearch(BinaryNums3, BinarySearchNum3))
console.log(binarySearchBonus(BinaryNums4, BinarySearchNum4))

// ============================================================================================================

const interArrA1 = [1, 2, 3];
const interArrB1 = ["a", "b", "c"];
// const expected1 = [1, "a", 2, "b", 3, "c"];

const interArrA2 = [1, 3];
const interArrB2 = [2, 4, 6, 8];
// const expected2 = [1, 2, 3, 4, 6, 8];

const interArrA3 = [1, 3, 5, 7];
const interArrB3 = [2, 4];
// const expected3 = [1, 2, 3, 4, 5, 7];

const interArrA4 = [];
const interArrB4 = [42, 0, 6];
// const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * @param {Array<any>} arr1 an array
 * @param {Array<any>} arr2 an array
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2){

}

console.log(interleaveArrays(interArrA1, interArrB1))
console.log(interleaveArrays(interArrA2, interArrB2))
console.log(interleaveArrays(interArrA3, interArrB3))
console.log(interleaveArrays(interArrA4, interArrB4))

// ============================================================================================================

const dedupeNums1 = [1, 1, 1, 1];
// const expected = [1];

const dedupeNums2 = [1, 1, 2, 2, 3, 3];
// const expected = [1, 2, 3];

const dedupeNums3 = [1, 1, 2, 3, 3, 4];
// const expected = [1, 2, 3, 4];

const dedupeNums4 = [1, 1];
// const expected = [1];

/**
 * De-dupes the given sorted array.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums){

}

console.log(dedupeSorted(dedupeNums1))
console.log(dedupeSorted(dedupeNums2))
console.log(dedupeSorted(dedupeNums3))
console.log(dedupeSorted(dedupeNums4))

// ============================================================================================================

const nonRepeat1 = [3, 5, 4, 3, 4, 6, 5];
// const expected = 6;

const nonRepeat2 = [3, 5, 5];
// const expected = 3;

const nonRepeat3 = [3, 3, 5];
// const expected = 5;

const nonRepeat4 = [5];
// const expected = 5;

const nonRepeat5 = [];
// const expected = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 * item at the lowest index that doesn't appear again in the given array.
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 * dupes or null if there is none.
 */
function firstNonRepeated(nums){

}

console.log(firstNonRepeated(nonRepeat1))
console.log(firstNonRepeated(nonRepeat2))
console.log(firstNonRepeated(nonRepeat3))
console.log(firstNonRepeated(nonRepeat4))
console.log(firstNonRepeated(nonRepeat5))

// ============================================================================================================

const cents1 = 25;
// const expected = { quarter: 1 };

const cents2 = 50;
// const expected = { quarter: 2 };

const cents3 = 9;
// const expected = { nickel: 1, penny: 4 };

const cents4 = 99;
// const expected = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 * to reach the given cents amount.
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 * denomination names and the value is the amount of that denomination needed.
 */
function fewestCoinChange(cents){

}

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))

// ============================================================================================================

const missingNums1 = [3, 0, 1];
// const expected = 2;

const missingNums2 = [3, 0, 1, 2];
// const expected = null;

const missingNums3 = [2, -4, 0, -3, -2, 1];
// const expected = -1;

const missingNums4 = [5, 2, 7, 8, 4, 9, 3];
// const expected = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 * which spans from 0 to N where only one int is missing. With this missing
 * int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 * consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {

}

console.log(missingValue(missingNums1))
console.log(missingValue(missingNums2))
console.log(missingValue(missingNums3))
console.log(missingValue(missingNums4))

// ============================================================================================================

const modeNums1 = [];
// const expected = [];

const modeNums2 = [1];
// const expected = [1];

const modeNums3 = [5, 1, 4];
// const expected = [];

const modeNums4 = [5, 1, 4, 1];
// const expected = [1];

const modeNums5 = [5, 1, 4, 1, 5];
// const expected = [5, 1];

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 * value which occurs the most times in the given array.
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums){

}

console.log(mode(modeNums1))
console.log(mode(modeNums2))
console.log(mode(modeNums3))
console.log(mode(modeNums4))
console.log(mode(modeNums5))

// ============================================================================================================

const sumNums = [1, 2, 3];
// const expected1 = 6;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums){

}

console.log(sumArr(sumNums))

// ============================================================================================================

const recursiveNum1 = 5;
// const expected1 = 15;

const recursiveNum2 = 2.5;
// const expected2 = 3;

const recursiveNum3 = -1;
// const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num){

}

console.log(recursiveSigma(recursiveNum1))
console.log(recursiveSigma(recursiveNum2))
console.log(recursiveSigma(recursiveNum3))

// ============================================================================================================

const factorialNum1 = 3;
// const expected = 6;

const factorialNum2 = 6.8;
// const expected = 720;

const factorialNum3 = 0;
// const expected = 1;

/**
 * Recursively multiples 1 to the given int.
 * @param {number} n The int to factorial. Treat negatives as zero and
 * floor decimals.
 * @returns {number} The result of !n.
 */
function factorial(n){

}

console.log(factorial(factorialNum1))
console.log(factorial(factorialNum2))
console.log(factorial(factorialNum3))

// ============================================================================================================

const fiboNum1 = 0;
// const expected = 0;

const fiboNum2 = 1;
// const expected = 1;

const fiboNum3 = 2;
// const expected = 1;

const fiboNum4 = 3;
// const expected = 2;

const fiboNum5 = 4;
// const expected = 3;

const fiboNum6 = 8;
// const expected = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
function fibonacci(num){

}

console.log(fibonacci(fiboNum1))
console.log(fibonacci(fiboNum2))
console.log(fibonacci(fiboNum3))
console.log(fibonacci(fiboNum4))
console.log(fibonacci(fiboNum5))
console.log(fibonacci(fiboNum6))

// ============================================================================================================

const binaryNums1 = [1, 3, 5, 6];
const searchNum1 = 4;
// const expected = false;

const binaryNums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
// const expected = true;

const binaryNums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
// const expected = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum){

}

console.log(binarySearch(binaryNums1, searchNum1))
console.log(binarySearch(binaryNums2, searchNum2))
console.log(binarySearch(binaryNums3, searchNum3))

function recursiveBinarySearch(n, arr){

}

console.log(recursiveBinarySearch(binaryNums1, searchNum1))
console.log(recursiveBinarySearch(binaryNums2, searchNum2))
console.log(recursiveBinarySearch(binaryNums3, searchNum3))

// ============================================================================================================

const recurRevStr1 = "abc";
// const expected = "cba";

const recurRevStr2 = "";
// const expected = "";

/**
 * Recursively reverses a string.
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStrRecursive(str){

}

console.log(reverseStrRecursive(recurRevStr1))
console.log(reverseStrRecursive(recurRevStr2))

// ============================================================================================================

const oneDigitSum1 = 5;
// const expected = 5;

const oneDigitSum2 = 10;
// const expected = 1;

const oneDigitSum3 = 25;
// const expected = 7;

const oneDigitSum4 = 67;
// const expected = 4;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num){

}

console.log(sumToOneDigit(oneDigitSum1))
console.log(sumToOneDigit(oneDigitSum2))
console.log(sumToOneDigit(oneDigitSum3))
console.log(sumToOneDigit(oneDigitSum4))

// ============================================================================================================

const anagram = "lim";
// const expected = ["ilm", "iml", "lim", "lmi", "mil", "mli"];

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function genAnagrams(str){

}

console.log(genAnagrams(anagram))

// ============================================================================================================

const lowMultA1 = 1;
const lowMultB1 = 1;
// const expected = 1;

const lowMultA2 = 5;
const lowMultB2 = 10;
// const expected = 10;

const lowMultA3 = 10;
const lowMultB3 = 5;
// const expected = 10;

const lowMultA4 = 6;
const lowMultB4 = 8;
// const expected = 24;

const lowMultA5 = 15;
const lowMultB5 = 25;
// const expected = 75;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */
function lowestCommonMultiple(a, b){

}

console.log(lowestCommonMultiple(lowMultA1, lowMultB1))
console.log(lowestCommonMultiple(lowMultA2, lowMultB2))
console.log(lowestCommonMultiple(lowMultA3, lowMultB3))
console.log(lowestCommonMultiple(lowMultA4, lowMultB4))
console.log(lowestCommonMultiple(lowMultA5, lowMultB5))

// ============================================================================================================

const socialSpaceGrid = [
    ["Jon2", "Jane2", null, null],
    [null, "Jon1", "Jane1", null],
    ["Jane4", "patient zero", null, "Jon3"],
    ["Jon4", null, "Jane3", null],
];
const patientZeroPoint = { x: 1, y: 2 };
// const expected = ["Jane4", "Jon4", "Jon1", "Jane1", "Jane2", "Jon2"];

/**
 * Add params if needed for recursion
 * Recursively finds all the people who will become infected by being too
 * close to patient zero.
 * @param {Array<Array<string|null>>} grid A 2d array representing a social
 *    space.
 * @param {Object} point The location of patient zero.
 * @param {number} point.x The row index (idx of nested array)
 * @param {number} point.y The column index (idx of item in row).
 * @returns {Array<string|null>} Those that the infection has spread to
 *    due to proximity.
 */
function coronaVirusFloodFill(grid, point){

}

console.log(coronaVirusFloodFill(socialSpaceGrid, patientZeroPoint))

// ============================================================================================================

const expansionStr = "1?0?";
// const expected = ["1000", "1001", "1100", "1101"];

/**
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" or a "1".
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
 */
function binaryStringExpansion(str){

}

console.log(binaryStringExpansion(expansionStr))

// ============================================================================================================

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Concatenates two singly linked lists together.
     * @param {SinglyLinkedList} addList The list to be concatenated.
     * @returns {SinglyLinkedList} The new list.
     */
    concat(addList) {}

    /**
     * Moves the node with the smallest value to the front.
     * @returns {SinglyLinkedList} The new list.
     */
    moveMinToFront() {}

    /**
     * Inserts supplied data into new node at back of list.
     * @param {integer} data The data to be inserted.
     * @returns {SinglyLinkedList} The new list.
     */
    insertAtBack(data) {}

    /**
     * Inserts supplied data into multiple new nodes at back of list
     * in order of data supplied in array.
     * @param {Array<integer>} vals The array of data to be inserted.
     * @returns {SinglyLinkedList} The new list.
     */
    insertAtBackMany(vals) {}

    /**
     * Inserts supplied data into new node at back of list recursively.
     * @param {integer} data The data to be inserted.
     * @param {Node} runner The current node.
     * @returns {SinglyLinkedList} The new list.
     */
    insertAtBackRecursive(data, runner = this.head) {}

    /**
     * The number of nodes in the list.
     * @returns {integer} The length of the list.
     */
    length() {}

    /**
     * Recursively finds the node with the highest value.
     * @param {Node} runner The node for the current level of recursion.
     * @param {Node} maxNode The node with the current max value.
     * @returns {integer|null} Max value of the list.
     */
    recursiveMax(runner = this.head, maxNode = this.head) {}

    /**
     * Acquires the second to last value in the list.
     * @returns {integer|null} The second to last value.
     */
    secondToLast() {}

    /**
     * Removes the node with the supplied value.
     * @param {integer} val The value of the node to be removed.
     * @returns {Node|null} The removed node.
     */
    removeVal(val) {}

    /**
     * Creates a new node in the list with the supplied value in front of the node
     * with the target value.
     * @param {integer} newVal The value to be inserted.
     * @param {integer} targetVal The value of the node to after the new node.
     * @returns {SinglyLinkedList|null} The new list.
     */
    prepend(newVal, targetVal) {}

    /**
     * Removes the last node of the list.
     * @returns {Node|null} The removed node.
     */
    removeBack() {}

    /**
     * Checks if list has the supplied value in it.
     * @param {integer} val The value to search for.
     * @returns {boolean} Whether the list contains the value.
     */
    contains(val) {}

    /**
     * Recursively checks if list has the supplied value in it.
     * @param {integer} val The value to search for.
     * @param {Node} current The current node.
     * @returns {boolean} Whether the list contains the value.
     */
    containsRecursive(val, current = this.head) {}

    /**
     * Inserts a new node at the front of the list.
     * @param {integer} data The value of the new node.
     * @returns {SinglyLinkedList} The new list.
     */
    insertAtFront(data){}

    /**
     * Removes the first node.
     * @returns {Node|null} The removed node.
     */
    removeHead(){}

    /**
     * Gets the average of all the values in the list.
     * @returns {integer} The average of all the values.
     */
    average(){}

    /**
     * Checks if the list is empty.
     * @returns {boolean} Whether the list is empty.
     */
    isEmpty() {}

    /**
     * Reverses this list in-place without using any extra lists.
     * @returns {SinglyLinkedList} The new list.
     */
    reverse() {}

    /**
     * Determines whether the list has a loop in it.
     * @returns {boolean} Whether the list has a loop or not.
     */
    hasLoop() {}

    /**
     * Creates a singly linked list from an array of values.
     * @param {Array<integer>} vals An array of values to seed the list.
     * @returns {SinglyLinkedList} The new list.
     */
    seedFromArr(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    /**
     * Creates an array using the values in the list.
     * @returns {Array} the new array of values.
     */
    toArr() {
        const arr = [];
        let runner = this.head;
        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }
}

const emptyList = new SinglyLinkedList();
const singleNodeList = new SinglyLinkedList().seedFromArr([1]);
const biNodeList = new SinglyLinkedList().seedFromArr([1, 2]);
const firstThreeList = new SinglyLinkedList().seedFromArr([1, 2, 3]);
const secondThreeList = new SinglyLinkedList().seedFromArr([4, 5, 6]);
const unorderedList = new SinglyLinkedList().seedFromArr([-5, -10, 4, -3, 6, 1, -7, -2,]);
const perfectLoopList = new SinglyLinkedList().seedFromArr([1, 2, 3, 4]);
perfectLoopList.head.next.next.next = perfectLoopList.head;

const loopList = new SinglyLinkedList().seedFromArr([1, 2, 3, 4]);
loopList.head.next.next.next = loopList.head.next;

const sortedDupeList = new SinglyLinkedList().seedFromArr([1, 1, 1, 2, 3, 3, 4, 5, 5,]);

// ============================================================================================================

class Stack {
    constructor() {
        this.items = [];
        this.minInt = null;
    }

    /**
     * Adds the item to the top of the stack.
     * @param {any} item The item to be added.
     * @returns {integer} The count of items in the stack.
     */
    push(item) {}

    /**
     * Removes the item from the top of the stack.
     * @returns {any} The removed item.
     */
    pop() {}

    /**
     * Shows the item at the top of the stack.
     * @returns {any} The item at the top of the stack.
     */
    peek() {}

    /**
     * Checks if there are any items in the stack.
     * @returns {boolean} Whether the stack is empty.
     */
    isEmpty() {}

    /**
     * Checks how many items are in the stack.
     * @returns {integer} The amount of items.
     */
    size() {}

    /**
     * Shows the smallest integer in the stack if there are any.
     * @returns {integer|null} The removed item.
     */
    MinInt() {}
}

const stackArr = new Stack();

// ============================================================================================================

class LinkedListStack {
    constructor() {
        this.head = null;
    }

    /**
     * Adds the item to the top of the stack.
     * @param {any} item The item to be added.
     * @returns {integer} The count of items in the stack.
     */
    push(item) {}

    /**
     * Removes the item from the top of the stack.
     * @returns {any} The removed item.
     */
    pop() {}

    /**
     * Shows the item at the top of the stack.
     * @returns {any} The item at the top of the stack.
     */
    peek() {}

    /**
     * Checks if there are any items in the stack.
     * @returns {boolean} Whether the stack is empty.
     */
    isEmpty() {}

    /**
     * Checks how many items are in the stack.
     * @returns {integer} The amount of items.
     */
    size() {}

    /**
     * Shows the smallest integer in the stack if there are any.
     * @returns {integer|null} The removed item.
     */
    MinInt() {}
}

// ============================================================================================================

class Queue {
    constructor(items = []) {
        this.items = items;
    }

    /**
     * Adds an item into the queue.
     * @param {integer} item Item to be added to the queue.
     * @returns {integer} The length of the queue.
     */
    enqueue(item){}

    /**
     * Removes an item from the queue.
     * @returns {integer|null} The removed item.
     */
    dequeue(){}

    /**
     * Checks if the queue is empty.
     * @returns {boolean} Whether the queue is empty.
     */
    isEmpty(){}

    /**
     * Shows the size of the queue.
     * @returns {integer|null} The size of the queue.
     */
    size(){}

    /**
     * Shows the first item in the queue.
     * @returns {integer|null} The first item.
     */
    front(){}

    /**
     * Checks if two queues are identical.
     * @param {Queue} q2 The queue to be compared.
     * @returns {boolean} Whether the two queues are the same.
     */
    compareQueues(q2) {}

    /**
     * Checks if the queue is a palindrome.
     * @returns {boolean} Whether the queue is a palindrome.
     */
    isPalindrome() {}
    
    /**
     * Checks if the first half values equal the back half values.
     * @returns {boolean} Whether the first half equals the back half.
     */
    isSumOfHalvesEqual() {}
}

const queueArr = new Queue([1, 2, 3, 2, 3]);

// ============================================================================================================

class LinkedListQueue {
    constructor() {
        this.head = null;
    }

    /**
     * Adds an item into the queue.
     * @param {integer} item Item to be added to the queue.
     * @returns {integer} The length of the queue.
     */
    enqueue(item){}

    /**
     * Removes an item from the queue.
     * @returns {integer|null} The removed item.
     */
    dequeue(){}

    /**
     * Checks if the queue is empty.
     * @returns {boolean} Whether the queue is empty.
     */
    isEmpty(){}

    /**
     * Shows the size of the queue.
     * @returns {integer|null} The size of the queue.
     */
    size(){}

    /**
     * Shows the first item in the queue.
     * @returns {integer|null} The first item.
     */
    front(){}
}

// ============================================================================================================

class TwoStackQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    /**
     * Adds a new item to the back of the queue.
     * @param {any} item To be added.
     * @returns {number} The new number of items in the queue.
     */
    enqueue(item) {}

    /**
     * Removes the next item in the line / queue.
     * @returns {any} The removed item.
     */
    dequeue() {}
}

const twoStacks = new TwoStackQueue();

// ============================================================================================================

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new item to the back of the queue.
     * @param {any} item To be added.
     * @param {number} priority The priority of the new item. (lower number is higher priority, default is 5)
     * @returns {number} The new number of items in the queue.
     */
    enqueue(item, priority = 5) {}

    /**
     * Removes the next item in the line / queue.
     * @returns {any} The removed item.
     */
    dequeue() {}

    /**
     * Checks if the queue is empty.
     * @returns {boolean} Whether the queue is empty.
     */
    isEmpty(){}

    /**
     * Shows the size of the queue.
     * @returns {integer|null} The size of the queue.
     */
    size(){}

}

let priorityQueue = new PriorityQueue()

// ============================================================================================================

class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }

    /**
     * Determines if this tree is empty.
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {}

    /**
     * Retrieves the smallest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {}

    /**
     * Retrieves the smallest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {}

    /**
     * Retrieves the largest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {}

    /**
     * Retrieves the largest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {}

    /**
   * Determines if this tree contains the given searchVal.
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
    contains(searchVal) {}

    /**
     * Determines if this tree contains the given searchVal.
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {}

    /**
     * Calculates the range (max - min) from the given startNode.
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) {}

    /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
    insert(newVal) {}

    /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */
    insertRecursive(newVal, curr = this.root) {}

    /**
   * Recursively finds the sum of all the data in the tree.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {Integer} Sum of the data in the tree.
   */
    sumRecursive(curr = this.root){}

    /**
     * DFS Preorder: (CurrNode, Left, Right)
     * Converts this BST into an array following Depth First Search preorder.
     * Example on the fullTree var:
     * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPreorder(node = this.root, vals = []) {}

    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrInorder(node = this.root, vals = []) {}

    /**
     * DFS Postorder (Left, Right, CurrNode)
     * Converts this BST into an array following Depth First Search postorder.
     * Example on the fullTree var:
     * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPostorder(node = this.root, vals = []) {}

    /**
     * BFS order: horizontal rows top-down left-to-right.
     * Converts this BST into an array following Breadth First Search order.
     * Example on the fullTree var:
     * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
     * @param {Node} current The current node during the traversal of this tree.
     * @returns {Array<number>} The data of all nodes in BFS order.
     */
    toArrLevelorder(current = this.root) {}

    /**
     * Recursively counts the total number of nodes in this tree.
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root, count = 0) {}

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }
        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);
        console.log(
            ' '.repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );
        this.print(node.left, spaceCnt);
        }
    }
    const emptyTree = new BinarySearchTree();
    const oneNodeTree = new BinarySearchTree();
    oneNodeTree.root = new BSTNode(10);
    
    const twoLevelTree = new BinarySearchTree();
    twoLevelTree.root = new BSTNode(10);
    twoLevelTree.root.left = new BSTNode(5);
    twoLevelTree.root.right = new BSTNode(15);

    /* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
  /***************** Uncomment after insert method is created. ****************/
    // const fullTree = new BinarySearchTree();
    // fullTree
    //     .insert(25)
    //     .insert(15)
    //     .insert(10)
    //     .insert(22)
    //     .insert(4)
    //     .insert(12)
    //     .insert(18)
    //     .insert(24)
    //     .insert(50)
    //     .insert(35)
    //     .insert(70)
    //     .insert(31)
    //     .insert(44)
    //     .insert(66)
    //     .insert(90);

// ============================================================================================================

/* 
Make double linked list classes and create these methods:
isEmpty
insertAtFront
insertAtBack
insertAfter - given a target value and new value, inserts new node after target value
insertBefore - given a target value and new value, inserts new node before target value
*/
class DoubleNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.back = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Checks if list is empty.
     * @returns {boolean} Whether the list is empty.
     */
    isEmpty(){}

    /**
     * Inserts the data at the front of the list, replacing the head.
     * @param {integer} data The data being inserted
     * @returns {DoublyLinkedList} The new list.
     */
    insertAtFront(data){}

    /**
     * Inserts the data at the back of the list.
     * @param {integer} data The data being inserted
     * @returns {DoublyLinkedList} The new list.
     */
    insertAtBack(data){}

    /**
     * Creates an array with the data in the list, in the order of the list.
     * @returns {Array<integer>} The array of list data.
     */
    toArr() {}

    /**
     * Inserts the data after the selected value in the list.
     * @param {integer} data The data to be inserted.
     * @param {integer} value The value for the data to be inserted behind in the list.
     * @returns {DoublyLinkedList} The new list.
     */
    insertAfter(data, value){}

    /**
     * Inserts the data before the selected value in the list.
     * @param {integer} data The data to be inserted.
     * @param {integer} value The value for the data to be inserted in front of in the list.
     * @returns {DoublyLinkedList} The new list.
     */
    insertBefore(data, value){}
}

const doubleList = new DoublyLinkedList();

// ============================================================================================================

/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
        /**
         * 0th index not used, so null is a placeholder. Not using 0th index makes
         * calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * @returns {?number} Null if empty.
     */
    top() {}

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * @param {number} num The num to add.
     */
    insert(num) {}

    /**
     * Extracts the min num from the heap and then re-orders the heap to
     * maintain order so the next min is ready to be extracted.
     * 1. Save the first node to a temp var.
     * 2. Pop last node off and set idx1 equal to the popped value.
     * 3. Iteratively swap the old last node that is now at idx1 with it's
     *    smallest child IF the smallest child is smaller than it.
     * @returns {?number} The min number or null if empty.
     */
    extract() {}

    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }

        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

        console.log(
            ' '.repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );

        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
}

const heap = new MinHeap();

// ============================================================================================================

const bubbleSortNumsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bubbleSortNumsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const bubbleSortNumsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Given an unsorted array, sort the array using bubble sort.
 * i.e. keep swapping the largest value and put it at the end.
 * @param {Array} nums The array to be sorted.
 * @returns {Array<integer>} The sorted array.
 */
function bubbleSort(nums) {}

console.log(bubbleSort(bubbleSortNumsRandomOrder));
console.log(bubbleSort(bubbleSortNumsOrdered));
console.log(bubbleSort(bubbleSortNumsReversed));

// ============================================================================================================

const selectionSortNumsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectionSortNumsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const selectionSortNumsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Given an unsorted array, sort the array using selection sort.
 * i.e. repeatedly find the largest value and put it at the end.
 * @param {Array} nums The array to be sorted.
 * @returns {Array<integer>} The sorted array.
 */
function selectionSort(nums) {}

console.log(selectionSort(selectionSortNumsRandomOrder))
console.log(selectionSort(selectionSortNumsReversed))
console.log(selectionSort(selectionSortNumsOrdered))

// ============================================================================================================

const insertionSortNumsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const insertionSortNumsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const insertionSortNumsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Given an unsorted array, sort the array using insertion sort.
 * i.e. sort the first element. When it goes the a new element, move the element to the right position.
 * @param {Array} nums The array to be sorted.
 * @returns {Array<integer>} The sorted array.
 */
function insertionSort(nums) {}

console.log(insertionSort(insertionSortNumsOrdered))
console.log(insertionSort(insertionSortNumsRandomOrder))
console.log(insertionSort(insertionSortNumsReversed))

// * step1: [9, 2, 5, 6, 4]; (9 is sorted)
// * step2: [2, 9, 5, 6, 4]; ([2,9] is sorted)
// * step3: [2, 5, 9, 6, 4]; ([2,5,9] is sorted)
// * 5 is smaller than 9, so we move 5 to the correct position.
// * step4: [2, 5, 6, 9, 4]; ([2,5,6,9] is sorted) 
// * step5: [2, 4, 5, 6, 9]; ([2,4,5,6,9] is sorted) 

// ============================================================================================================

const mergeSortA1 = [];
const mergeSortB1 = [];
// const expected = [];

const mergeSortA2 = [5];
const mergeSortB2 = [2];
// const expected = [2, 5];

const mergeSortA3 = [2, 3, 4, 7];
const mergeSortB3 = [5];
// const expected = [2, 3, 4, 5, 7];

const mergeSortA4 = [1, 2, 4, 6, 9];
const mergeSortB4 = [3, 7, 8, 10, 11, 12];
// const expected = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];

/**
 * Given two sorted arrays, merge both arrays into one sorted array with all the integers.
 * @param {Array} arr1 The first array to be merged and sorted.
 * @param {Array} arr2 The second array to be merged and sorted.
 * @returns {Array<integer>} The sorted array.
 */
function mergeSort(arr1, arr2) {}

console.log(mergeSort(mergeSortA1, mergeSortB1));
console.log(mergeSort(mergeSortA2, mergeSortB2));
console.log(mergeSort(mergeSortA3, mergeSortB3));
console.log(mergeSort(mergeSortA4, mergeSortB4));

// ============================================================================================================

const orderedIntersectionNumsA1 = [0, 1, 2, 2, 2, 7];
const orderedIntersectionNumsB1 = [2, 2, 6, 6, 7];
// const expected = [2, 7];

const orderedIntersectionNumsA2 = [0, 1, 2, 2, 2, 7];
const orderedIntersectionNumsB2 = [2, 2];
// const expected = [2];

const orderedIntersectionNumsA3 = [0, 1, 2, 2, 2, 7];
const orderedIntersectionNumsB3 = [10];
// const expected = [];

/**
 * Given two sorted arrays of different lengths.
 * Search both arrays for any values that are in both arrays.
 * @param {Array} sortedA The first array to be searched.
 * @param {Array} sortedB The second array to be searched.
 * @returns {Array<integer>} The array of values in both arrays.
 */
function orderedIntersection(sortedA, sortedB) {
    let newArr = []
    let i = 0;
    let j = 0;
    while(i < sortedA.length && j < sortedB.length){
        if(sortedA[i] === sortedB[j]){
            if(!newArr.includes(sortedA[i])){
                newArr.push(sortedA[i]);
            }
            i++
            j++
        }
        else if(sortedA[i] < sortedB[j]){
            i++
        }
        else if(sortedA[i] > sortedB[j]){
            j++
        }
    }
    return newArr
}

console.log(orderedIntersection(orderedIntersectionNumsA1, orderedIntersectionNumsB1))
console.log(orderedIntersection(orderedIntersectionNumsA2, orderedIntersectionNumsB2))
console.log(orderedIntersection(orderedIntersectionNumsA3, orderedIntersectionNumsB3))

// ============================================================================================================

const orderedMultisetUnionNumsA1 = [1, 2, 2, 2, 7];
const orderedMultisetUnionNumsB1 = [2, 2, 6, 6, 7];
// const expected = [1, 2, 2, 2, 6, 6, 7];

const orderedMultisetUnionNumsA2 = [1, 2, 2, 2, 7, 10, 15, 20];
const orderedMultisetUnionNumsB2 = [2, 2, 6, 6, 7];
// const expected = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];

/**
 * Given two sorted arrays of different lengths.
 * Return a sorted array with the most occurences of the values from both arrays.
 * @param {Array} sortedA The first array to be searched.
 * @param {Array} sortedB The second array to be searched.
 * @returns {Array<integer>} The array of values from both arrays.
 */
function orderedMultisetUnion(sortedA, sortedB) {}

console.log(orderedMultisetUnion(orderedMultisetUnionNumsA1, orderedMultisetUnionNumsB1))
console.log(orderedMultisetUnion(orderedMultisetUnionNumsA2, orderedMultisetUnionNumsB2))

// ============================================================================================================

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
    ];
// const expected = 2;

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    ];
// const expected = 0;

/**
 * Given a square matrix (2D array) of integers.
 * Calculate the absolute difference between the sum of its diagonals.
 * @param {Array<Array<integer>>} sqrMatrix The 2D array.
 * @returns {integer} The difference of the diagonal sums.
 */
function diagonalDifference(sqrMatrix) {}

console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))

// ============================================================================================================

const twoSumNums1 = [2, 11, 7, 15];
const twoSumTargetSum1 = 9;
// const expected = [0, 2];

const twoSumNums2 = [10, 3, 2, 5, 4, -1];
const twoSumTargetSum2 = 6;
// const expected = [2, 4];

const twoSumNums3 = [3, 8, 4, 1, 9, -2, 0];
const twoSumTargetSum3 = 6;
// const expected = [1, 5];

/**
 * Given an unsorted array and a target sum.
 * Find if there is a possible combination of values in the array to equal the target sum.
 * @param {Array<integer>} nums The array of integers.
 * @returns {Array<integer>} The indexes of the values that equal the target sum.
 */
function twoSum(nums, targetSum) {}

console.log(twoSum(twoSumNums1, twoSumTargetSum1))
console.log(twoSum(twoSumNums2, twoSumTargetSum2))
console.log(twoSum(twoSumNums3, twoSumTargetSum3))

// ============================================================================================================

const kNums1 = [1, 2, 1, 2, 3, 1];
const k1 = 2;
// const expected = [1, 2];

const kNums2 = [3, 2, 0, 2, 0, 0];
const k2 = 1;
// const expected = [0];

const kNums3 = [1, 2, 3, 2, 1, 3];
const k3 = 3;
// const expected = [1, 2, 3];

/**
 * Given an unsorted array and k.
 * Find the k amount of integers that are most frequent in the array.
 * @param {Array<integer>} nums The array of integers.
 * @param {integer} k The amount of most frequent values to find.
 * @returns {Array<integer>} The values that were most frequent, length = k.
 */
function kMostFrequent(nums, k) {}

console.log(kMostFrequent(kNums1, k1))
console.log(kMostFrequent(kNums2, k2))
console.log(kMostFrequent(kNums3, k3))

// ============================================================================================================

const riverLevels1 = [15, 17, 30];
// const expected = 15;

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
// const expected = 20;

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
// const expected = 11;

const riverLevels4 = [1, 5];
// const expected = 4;

const riverLevels5 = [5, 1];
// const expected = -1;

const riverLevels6 = [9, 7, 7, 7];
// const expected = -1;

const riverLevels7 = [42];
// const expected = -1;

/**
 * Given an unsorted array of water levels.
 * Find the largest single rise in water levels during that day.
 * @param {Array<integer>} waterLevels The array of water levels.
 * @returns {integer} The largest single rise in water level, -1 if no rise.
 */
function measureWaterLevels(waterLevels) {}

console.log(measureWaterLevels(riverLevels1))
console.log(measureWaterLevels(riverLevels2))
console.log(measureWaterLevels(riverLevels3))
console.log(measureWaterLevels(riverLevels4))
console.log(measureWaterLevels(riverLevels5))
console.log(measureWaterLevels(riverLevels6))
console.log(measureWaterLevels(riverLevels7))

/**
 * Given an unsorted array of water levels.
 * Find the difference from the lowest water level to the highest water level during that day.
 * @param {Array<integer>} waterLevels The array of water levels.
 * @returns {integer} The change in water level, -1 if no rise.
 */
function measureWaterLevels2(waterLevels) {}

console.log(measureWaterLevels2(riverLevels1))
console.log(measureWaterLevels2(riverLevels2))
console.log(measureWaterLevels2(riverLevels3))
console.log(measureWaterLevels2(riverLevels4))
console.log(measureWaterLevels2(riverLevels5))
console.log(measureWaterLevels2(riverLevels6))
console.log(measureWaterLevels2(riverLevels7))

// ============================================================================================================

const users = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
// const expected = [
//   { firstName: "Bob", lastName: "Bobbert", age: 31 },
//   { firstName: "Bob", lastName: "White", age: 31 },
// ];

const searchCriteria2 = {
    lastName: "Smith",
};
// const expected = [
//   { firstName: "John", lastName: "Smith", age: 25 },
//   { firstName: "Bob", lastName: "Smith", age: 27 },
// ];

/**
 * Given an array of objects and a search criteria object.
 * Find all the objects in the array that have all of the items in the search criteria.
 * @param {object} criteria The search criteria.
 * @param {Array<object>} collection The array of objects.
 * @returns {Array<object>} An array of all the objects that match the search criteria.
 */
function findObjects(criteria, collection) {}

console.log(findObjects(searchCriteria1, users))
console.log(findObjects(searchCriteria2, users))

// ============================================================================================================

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
// const expected = {
//     id: 3,
//     name: "student3",
//     isLateToday: true,
//     lateCount: 0,
//     redBeltStatus: true,
// };

const id2 = 1;
const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
};
// const expected = {
//     id: 1,
//     name: "student1",
//     isLateToday: true,
//     lateCount: 16,
//     redBeltStatus: false,
// };

const id3 = 5;
const updateData3 = {};
// const expected = null;

/**
 * Given an id, an array of objects and an object of values to be updated.
 * Find the object in the array whose id matches the given id and update only the existing
 * keys in the object with the updated values.
 * @param {integer} id The id of the object to be updated
 * @param {object} updatedVals The values to be updated to.
 * @param {Array<object>} collection The array of objects.
 * @returns {object | null} The object with updated values or null if no object matches id.
 */
function findByIdAndUpdate(id, updatedVals, collection) {}

console.log(findByIdAndUpdate(id1, updateData1, students))
console.log(findByIdAndUpdate(id2, updateData2, students))
console.log(findByIdAndUpdate(id3, updateData3, students))

// ============================================================================================================

const filterByKeyPeople = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Doe"},
    {firstName: "Eddy", lastName: "Lee"},
    {firstName: "John", lastName: "Fawn"},
    {firstName: "Edward", lastName: "Kim"}
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
// const expected = [
//     {firstName: "John", lastName: "Doe"},
//     {firstName: "John", lastName: "Fawn"},
// ];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
// const expected = [];

const searchFor3 = "Do";
const searchBy3 = "lastName";
// const expected = [
//     {firstName: "John", lastName: "Doe"},
//     {firstName: "Jane", lastName: "Doe"},
// ];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes"; 
// const expected = [
//     {firstName: "John", lastName: "Doe"},
//     {firstName: "Jane", lastName: "Doe"},
//     {firstName: "Eddy", lastName: "Lee"},
// ];

/**
 * Given an array of objects, search each object by key for a value that starts with the
 * provided term.
 * @param {Array<object>} items The objects being searched.
 * @param {String} searchFor The term used to check each value.
 * @param {String} searchBy The key to search.
 * @returns {Array<object>} An array of every object that matches the search conditions.
 */
function filterByKeyStartsWith(items, searchFor, searchBy) {
    let newArr = []
    for(element of items){
        let valid = true
        for(let i = 0; i < searchFor.length; i++){
            if(element[searchBy][i] !== searchFor[i]){
                valid = false
            }
        }
        valid && newArr.push(element)
    }
    return newArr
}
console.log(filterByKeyStartsWith(filterByKeyPeople, searchFor1, searchBy1))
console.log(filterByKeyStartsWith(filterByKeyPeople, "username", searchBy1))
console.log(filterByKeyStartsWith(filterByKeyPeople, searchFor2, searchBy2))
console.log(filterByKeyStartsWith(filterByKeyPeople, searchFor3, searchBy3))

/**
 * Given an array of objects, filter the given items based on the search criteria using different
 * search methods.
 * 
 * Search methods are; includes, startsWith, endsWith
 * @param {Array<object>} items The objects being searched.
 * @param {String} searchFor The term used to check each value.
 * @param {String} searchBy The key to search.
 * @param {String} searchMethod The method which to search by.
 * @returns {Array<object>} An array of every object that matches the search conditions.
 */
function filterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
    let newArr = []
    if(searchMethod === "startsWith"){
        for(element of items){
            if(element[searchBy].toLowerCase().startsWith(searchFor.toLowerCase())){
                newArr.push(element)
            }
        }
    }
    else if(searchMethod === "endsWith"){
        for(element of items){
            if(element[searchBy].toLowerCase().endsWith(searchFor.toLowerCase())){
                newArr.push(element)
            }
        }
    }
    else if(searchMethod === "includes"){
        for(element of items){
            if(element[searchBy].toLowerCase().includes(searchFor.toLowerCase())){
                newArr.push(element)
            }
        }
    }
    return newArr
}

console.log(filterByKey(filterByKeyPeople, searchFor4, searchBy4))
console.log(filterByKey(filterByKeyPeople, searchFor4, searchBy4, "endsWith"))
console.log(filterByKey(filterByKeyPeople, searchFor4, searchBy4, searchMethod4))

// ============================================================================================================

const santasNaughtyListStudents = [
    {
    firstName: "Jane",
    lastName: "Doe",
    habits: ["doesn't wash dishes", "falls asleep in lecture", "shows up early"],
    },
    {
    firstName: "John",
    lastName: "Smith",
    habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
    firstName: "Arya",
    lastName: "Stark",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
    firstName: "Jon",
    lastName: "Snow",
    habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
// const expected = ["Jane Doe", "Arya Stark"];

const badHabit2 = "shows up late";
// const expected = ["John Smith", "Arya Stark"];

const badHabit3 = "typo";
// const expected = [];

/**
 * Given an array of objects, use the provided bad habit to find which people have 
 * that habit.
 * @param {Array<object>} persons The people whose habits are being checked.
 * @param {String} badHabit The bad habit being searched for.
 * @returns {Array<string>} An array of the names of everyone with the bad habit.
 */
function santasNaughtyList(persons, badHabit) {

}

console.log(santasNaughtyList(santasNaughtyListStudents, badHabit1))
console.log(santasNaughtyList(santasNaughtyListStudents, badHabit2))
console.log(santasNaughtyList(santasNaughtyListStudents, badHabit3))

/**
 * Given an array of objects, use the provided bad habit to functionally find which people have 
 * that habit.
 * @param {Array<object>} persons The people whose habits are being checked.
 * @param {String} badHabit The bad habit being searched for.
 * @returns {Array<string>} An array of the names of everyone with the bad habit.
 */
function santasNaughtyListFunctional(persons, badHabit) {
    
}
console.log(santasNaughtyListFunctional(santasNaughtyListStudents, badHabit1))
console.log(santasNaughtyListFunctional(santasNaughtyListStudents, badHabit2))
console.log(santasNaughtyListFunctional(santasNaughtyListStudents, badHabit3))

// ============================================================================================================

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];
// const expected = ["Person One", "Person Three"];

/**
 * Given an array of objects, find the people who are at risk of contracting Covid.
 * A person is at risk if:
 * 1. not practicing social distancing.
 * 2. have a friend who is not practicing social distancing.
 * @param {Array<object>} persons The people who are being checked.
 * @returns {Array<string>} An array of the names of people at risk.
 */
function coronaVirusAtRisk(persons) {
    
}

/**
 * Given an array of objects, functionally find the people who are at risk of contracting Covid.
 * A person is at risk if:
 * 1. not practicing social distancing.
 * 2. have a friend who is not practicing social distancing.
 * @param {Array<object>} persons The people who are being checked.
 * @returns {Array<string>} An array of the names of people at risk.
 */
function coronaVirusAtRiskFunctional(persons) {}

console.log(coronaVirusAtRisk(people))

// ============================================================================================================

const canBecomePal1 = "";
// expected = false;

const canBecomePal2 = "a";
// expected = true;

const canBecomePal3 = "ddaa";
// expected = true;

const canBecomePal4 = "dda";
// expected = true;

const canBecomePal5 = "aaadd";
// expected = true;

const canBecomePal6 = "abc";
// expected = false;


/**
 * Given an unordered string, determine if it is possible to make a palindrome out of
 * the string's characters.
 * @param {String} str The string to check for palindrome.
 * @returns {Boolean} Whether the characters in the string can become a palindrome.
 */
function canStringBecomePalindrome(str) {
    
}

console.log(canStringBecomePalindrome(canBecomePal1))
console.log(canStringBecomePalindrome(canBecomePal2))
console.log(canStringBecomePalindrome(canBecomePal3))
console.log(canStringBecomePalindrome(canBecomePal4))
console.log(canStringBecomePalindrome(canBecomePal5))
console.log(canStringBecomePalindrome(canBecomePal6))

// ============================================================================================================

const dropNums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
    return elem > 5;
};
// expected = [6, 9, 15];

const dropNums2 = [1, 4, 3, 6, 9, 15];
const callback2 = (elem) => {
    return elem > 3;
};
// expected = [4, 3, 6, 9, 15];

const dropNums3 = [1, 4, 3, 6, 9, 15];
const callback3 = (elem) => false;
// expected = [];

/**
 * Given an unordered array of integers, remove every element in the array starting from index 0 
 * until the callback function returns true when passed the iterated element.
 * 
 * Return an empty array if callback never returns true.
 * @param {Array<integer>} arr An unordered array of integers.
 * @param {Function} callbackFunc The callback function.
 * @returns {Array<any>} The remaining values in the array if the callback function returns true.
 */
function dropIt(arr, callbackFunc) {
    
}
console.log(dropIt(dropNums1, callback1))
console.log(dropIt(dropNums2, callback2))
console.log(dropIt(dropNums3, callback3))

// ============================================================================================================

const S1 = "ab#c";
const T1 = "ad#c";
// const expected = true;

const S2 = "ab##";
const T2 = "c#d#";
// const expected = true;

const S3 = "a##c";
const T3 = "#a#c";
// const expected = true;

const S4 = "a#c";
const T4 = "b";
// const expected = false;

/**
 * Given two strings containing only lowercase letters and "#" characters, 
 * return if they are equal when both are typed into empty text editors.
 * "#" character means a backspace
 * @param {String} S The first string.
 * @param {String} T The second string.
 * @returns {Boolean} Whether the strings are equal after processing the backspaces.
 */
function backspaceStringCompare(S, T) {
    
}

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))

// ============================================================================================================

const rehashStr1 = "b70a164c32a20c10";
// const expected = "a184b70c42";

/**
 * Given an incorrectly hashed string of letters with count occurences 
 * return a correctly hashed string with the letters alphabetized.
 * @param {String} s The incorrectly hashed string.
 * @returns {String} The correctly hashed string.
 */
function rehash(s) {
    
}

console.log(rehash(rehashStr1))

// ============================================================================================================

const longestSubStr1 = "abcabcbb";
// const expected = 3;

const longestSubStr2 = "bbbbb";
// const expected = 1;

const longestSubStr3 = "pwwkew";
// const expected = 3;

const longestSubStr4 = "dvadf"; 
// const expected = 4;

/**
 * Given a string, find the length of the longest substring without 
 * repeating characters.
 * @param {String} str The string to find a substring.
 * @returns {Integer} The length of the longest possible substring.
 */
function lengthOfLongestSubString(str) {
    
}

console.log(lengthOfLongestSubString(longestSubStr1))
console.log(lengthOfLongestSubString(longestSubStr2))
console.log(lengthOfLongestSubString(longestSubStr3))
console.log(lengthOfLongestSubString(longestSubStr4))

// ============================================================================================================

const canBuildStrA1 = "Hello World";
const canBuildStrB1 = "lloeh wordl"; 
// const expected = true;

const canBuildStrA2 = "Hey"; 
const canBuildStrB2 = "hello"; 
// const expected = false;

const canBuildStrA3 = "hello"; 
const canBuildStrB3 = "helo"; 
// const expected = false;

const canBuildStrA4 = "hello"; 
const canBuildStrB4 = "lllheo";
// const expected = true;

const canBuildStrA5 = "hello";
const canBuildStrB5 = "heloxyz";
// const expected = false;

/**
 * Given two strings, determine if the first string can be built from the 
 * letters of the second string.
 * @param {String} s1 The first string.
 * @param {String} s2 The second string.
 * @returns {Boolean} Whether the first string can be built from the second string.
 */
function canBuildS1FromS2(s1, s2) {
    
}
console.log(canBuildS1FromS2(canBuildStrA1, canBuildStrB1))
console.log(canBuildS1FromS2(canBuildStrA2, canBuildStrB2))
console.log(canBuildS1FromS2(canBuildStrA3, canBuildStrB3))
console.log(canBuildS1FromS2(canBuildStrA4, canBuildStrB4))
console.log(canBuildS1FromS2(canBuildStrA5, canBuildStrB5))

// ============================================================================================================

const battlefield = [
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

/**
 * Given a battlefield with equal sides determine if the ship placements are valid according to the rules 
 * of the game.
 * 
 * Rules:
 *      There are four sizes of ships; 4 ships of size 1, 3 ships of size 2, 2 ships of size 3, 1 ship of size 4
 *      Ships are not allowed to be within 1 space of eachother
 *      Every ship must be on the battlefield
 *      There must only be the allowed ships on the battlefield
 *      0's are empty spaces and 1's are ships
 * @param {Array<array<integer>>} field The battlefield.
 * @returns {Boolean} Whether the placement of ships is valid.
 */
function validateBattlefield(field) {
    
}

console.log(validateBattlefield(battlefield));

// ============================================================================================================