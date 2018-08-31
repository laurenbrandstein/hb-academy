// Big O
// O(1): constant time: no growth in access time, regardless of N
// O(log(n)): logarithmic time: decreasing rate of growth
// O(n): linear time: growth in access time proportionate to N
// O(n log(n)): second traversal is faster than the first; common example is Divide and Conquer
// O(n^2): exponential time: no bueno
// O(n!): n factorial: OMG NO

// linked list:
//
// access: linear time
// insert: linear time
// delete: linear time
// search: linear time
//
// pros:
// 1. when you don't know the final size of your list

// native array: contiguous block of memory in the stack with fixed size
//
// access: constant time
// insert: linear time
// delete: linear time
// search:
//     * unsorted: linear time
//     * sorted: log time
//
// pros:
// 1. quick (constant time) access: you know where it starts and ends
//    and how large each unit of memory is, so you can just multiply
//    that to find your desired element
//
// cons:
// 1. if you were wrong on the final size of your array and misallocated the memory,
//    you have to re-allocate a whole new block
