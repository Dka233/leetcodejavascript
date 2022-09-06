/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

nums = [3, 2, 4];
target = 6;

function main (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
}

var twoSum = main(nums, target);

console.log(twoSum);

