def kadanes_algorithm(arr):
    if not arr:
        return 0  # Return 0 for an empty array

    max_sum = arr[0]  # Initialize max_sum with the first element of the array
    current_sum = arr[0]  # Initialize current_sum with the first element of the array

    for num in arr[1:]:  # Start from the second element
        # Compare the current element with the sum of the current element and the current sum
        current_sum = max(num, current_sum + num)

        # Update max_sum if the current_sum is greater
        max_sum = max(max_sum, current_sum)

    return max_sum

# Example usage:
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
max_subarray_sum = kadanes_algorithm(arr)
print("Maximum Subarray Sum:", max_subarray_sum)
