// Write a Java program to print all sub-arrays with 0 sum present in a given array of integers. 
// Example: 
// Input : 
// nums1 = { 1, 3, -7, 3, 2, 3, 1, -3, -2, -2 } 
// nums2 = { 1, 2, -3, 4, 5, 6 } 
// nums3= { 1, 2, -2, 3, 4, 5, 6 } 
// Output: 
// Sub-arrays with 0 sum : [1, 3, -7, 3] 
// Sub-arrays with 0 sum : [3, -7, 3, 2, 3, 1, -3, -2] 
// Sub-arrays with 0 sum : [1, 2, -3] 
// Sub-arrays with 0 sum : [2, -2] 

import java.util.*;

class Q15 {
    public static void findZeroSumSubarrays(int[] nums) {
        int n = nums.length;
        boolean found = false;

        for (int start = 0; start < n; start++) {
            int sum = 0;
            for (int end = start; end < n; end++) {
                sum += nums[end];
                if (sum == 0) {
                    System.out.println("Sub-array with 0 sum: " + Arrays.toString(Arrays.copyOfRange(nums, start, end + 1)));
                    found = true;
                }
            }
        }

        if (!found) {
            System.out.println("No sub-array with 0 sum found.");
        }
    }

    public static void main(String[] args) {
        int[] nums1 = {1, 3, -7, 3, 2, 3, 1, -3, -2, -2};
        int[] nums2 = {1, 2, -3, 4, 5, 6};
        int[] nums3 = {1, 2, -2, 3, 4, 5, 6};

        System.out.println("For nums1:");
        findZeroSumSubarrays(nums1);

        System.out.println("\nFor nums2:");
        findZeroSumSubarrays(nums2);

        System.out.println("\nFor nums3:");
        findZeroSumSubarrays(nums3);
    }
}