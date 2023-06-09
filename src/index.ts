// 1. Two Sum 

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

let twoSum = function (nums: number[], target: number): number[] | [] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

// 9. Palindrome Number 

// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x: number): boolean {

    let output = parseFloat(x.toString().split("").reverse().join(""))

    return (output === x) ? true : false

};

// 704. Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function 
// to search target in nums. If target exists, then return its index. Otherwise, return -1.

function search(nums: number[], target: number): number {

    let startIndex: number = 0
    let endIndex: number = nums.length - 1
    let midIndex: number
    while (startIndex <= endIndex) {
        midIndex = Math.floor((startIndex + endIndex) / 2)

        if (nums[midIndex] === target) {
            return midIndex
        } else if (nums[midIndex] < target) {
            startIndex = midIndex + 1
        } else {
            endIndex = midIndex - 1
        }
    }
    return -1

};

let nums = [-1, 0, 3, 5, 9, 12]
let target = 9

console.log(search(nums, target))
/*
Input: 
Output: 4
Explanation: 9 exists in nums and its index is 4
*/