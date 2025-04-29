// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106



function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array for optimization
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m: number = nums1.length;
    const n: number = nums2.length;
    let left: number = 0;
    let right: number = m;

    // Total length of both arrays
    const total: number = m + n;

    while (left <= right) {
        // Partition point in nums1
        const partition1: number = Math.floor((left + right) / 2);
        // Partition point in nums2
        const partition2: number = Math.floor((total + 1) / 2) - partition1;

        // Get max of left and min of right for both arrays
        const maxLeft1: number = partition1 === 0 ? Number.NEGATIVE_INFINITY : nums1[partition1 - 1];
        const minRight1: number = partition1 === m ? Number.POSITIVE_INFINITY : nums1[partition1];

        const maxLeft2: number = partition2 === 0 ? Number.NEGATIVE_INFINITY : nums2[partition2 - 1];
        const minRight2: number = partition2 === n ? Number.POSITIVE_INFINITY : nums2[partition2];

        // Check if we found the right partition
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // If total length is odd, median is max of left elements
            if (total % 2 === 1) {
                return Math.max(maxLeft1, maxLeft2);
            }
            // If total length is even, median is average of max of left and min of right
            else {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
            }
        } else if (maxLeft1 > minRight2) {
            // Too many elements from nums1 in lower half
            right = partition1 - 1;
        } else {
            // Too many elements from nums2 in lower half
            left = partition1 + 1;
        }
    }

    throw new Error("Input arrays are not sorted");
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2]));  // Should output 2
console.log(findMedianSortedArrays([1, 3,4,5], [2,5,6]));  // Should output 2.5




