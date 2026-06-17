function findFloor(nums, x) {
    const n = nums.length
    let low = 0
    let high = n - 1;
    let ans = -1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] <= x) {
            ans = nums[mid]
            high = mid + 1
        } else {
            high = mid - 1
        }
    }

    return ans;
}


console.log(findFloor([3, 4, 4, 7, 8, 10], 6));
