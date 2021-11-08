
public class Solution {

    public int minSubArrayLen(int target, int[] nums) {

        int head = 0;
        int tail = 0;
        int sum = 0;

        int arraySize = nums.length;
        int minimumSize = arraySize + 1;

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
    }
}
