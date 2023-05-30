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

isPalindrome(123)
