
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    let head = 0;
    let tail = 0;
    let sum = 0;

    let arraySize = nums.length;
    let minimumSize = arraySize + 1;

    while (head < arraySize && minimumSize > 1) {
        sum += nums[head];

        if (sum >= target) {
            while (sum - nums[tail] >= target) {//squeeze out all surplus values.
                sum -= nums[tail++];
            }
            minimumSize = Math.min(minimumSize, head - tail + 1);
            sum -= nums[tail++];//decrease below target.
        }
        head++;
    }

    return minimumSize < arraySize + 1 ? minimumSize : 0;
};
