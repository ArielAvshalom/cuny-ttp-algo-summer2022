// Problem Statement #

// We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

const find_missing_numbers = function(nums) {
	missingNumbers = [];
	// TODO: Write your code here
	/* 
		create an array to hold all missing numbers
	 	sort in place using swaps
		since it's from 1 to n we can say that nums[i] = (position of nums[i] - 1) example: nums[0] = 3 , 3 will have to be in position 2, so nums[0] - 1 = 2.
	 	swap when nums[i] !== nums[j]
	 	we only need one number of each position to be in their right position, the duplicates don't matter, so we onl have to loop through the array once. 
		all the positions that are incorrect we should add what should be in there into our missingNumbers array
		we can do that by checking if nums[i] === i + 1, if it's not we add i + 1 into the array.  
	*/

	let i = 0;
	while (i < nums.length) {
		let j = nums[i] - 1;
		if (nums[i] !== nums[j]) {
			[ nums[i], nums[j] ] = [ nums[j], nums[i] ];
		} else {
			i++;
		}
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) {
			missingNumbers.push(i + 1);
		}
	}
	console.log(nums);
	return missingNumbers;
};

console.log(find_missing_numbers([ 2, 3, 1, 8, 2, 3, 5, 1 ]));
console.log(find_missing_numbers([ 2, 4, 1, 2 ]));
console.log(find_missing_numbers([ 2, 3, 2, 1 ]));

// Solution
// -----
// function find_missing_numbers(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     const j = nums[i] - 1;
//     if (nums[i] !== nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i += 1;
//     }
//   }
//   missingNumbers = [];

//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) {
//       missingNumbers.push(i + 1);
//     }
//   }

//   return missingNumbers;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// Ignoring the space required for the output array, the algorithm runs in constant space O(1).
