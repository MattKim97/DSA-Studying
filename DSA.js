var topKFrequent = function (nums, k) {
  // im going to create an empty object
  // create an empty array
  // iterate through nums, and create a placeholder for each element, increaing the value of placeholder by 1 for each instance
  // then I'm going to push the value of the greatest value within the object k times
  // after each push delete the placeholder in object so we can iterate down

  let placeholders = {};

  let results = [];

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (!placeholders[curr]) {
      placeholders[curr] = 1;
    } else {
      placeholders[curr] += 1;
    }
  }

  let arrayPH = Object.entries(placeholders);

  arrayPH.sort((a, b) => b[1] - a[1]);

  // for (let i = 0; i< k; i++){
  //     results.push(arrayPH[0][0])
  //     arrayPH.shift()
  // }

  let element = arrayPH.slice(0, k).map((pair) => {
    return pair[0];
  });

  return element;
};

var isAnagram = function (s, t) {
  sArr = s.split("");
  tArr = t.split("");

  sArr.sort();
  tArr.sort();

  sStr = sArr.join("");
  tStr = tArr.join("");

  if (sStr == tStr) {
    return true;
  } else {
    return false;
  }
};

var productExceptSelf = function (nums) {
  const outputs = [];
  let ph = 1;

  for (let i = 0; i < nums.length; i++) {
    outputs[i] = ph;
    ph *= nums[i];
  }

  ph = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    outputs[i] *= ph;
    ph *= nums[i];
  }

  return outputs;
};

// firstly we will create an array to hold the outputs

// we can assign a variable as 1 inorder hold a placeholder value

// we should iterate through the numbs array foward

//

var moveZeroes = function (nums) {
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
      nums.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    nums.push(0);
  }

  return nums;
};

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let longest = 1;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      count++;
    } else if (nums[i] !== nums[i - 1]) {
      count = 1;
    }

    longest = Math.max(longest, count);
  }

  return longest;
};

var groupAnagrams = function (strs) {
  if (strs.length == 1) {
    return [strs];
  }

  let results = {};

  for (let i = 0; i < strs.length; i++) {
    let curr = strs[i];
    let sortedStr = curr.split("").sort().join("");

    if (!results[sortedStr]) {
      results[sortedStr] = [curr];
    } else {
      results[sortedStr].push(curr);
    }
  }

  return Object.values(results);
};

// if strs.length == 1 return strs
// if strs.length == 0 return nothing
// first make a copy of strs array
// secondly  go through all of strs array compare their ascii values to each other
// thidly  go through the array and then if the values are the same, put them in an array together
// lastly return each strs with index to the original array

var isPalindrome = function (s) {
  if (s === " ") {
    return true;
  }
  noSpecChar = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  reverseNoSpecChar = noSpecChar.split("").reverse().join("");

  console.log(noSpecChar);
  console.log(reverseNoSpecChar);

  if (noSpecChar == reverseNoSpecChar) {
    return true;
  } else {
    return false;
  }
};

//first check to see if the string is empty
// if it is empty return true
// remove all special characters and spaces
// reverse the string
// compare the two strings
// if they are the same return true
// else return false

var maxProfit = function (prices) {
  let profit = 0;

  let current = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (current < prices[i]) {
      if (profit < prices[i] - current) profit = prices[i] - current;
    } else {
      current = prices[i];
    }
  }

  return profit;
};

// set profit to equal zero

// check start of array "set that to current"

// check next element in array, if element is higher, set profit to current minus higher

// if element is lower, set element as new current, and then continue , profit will remain unchanged

// return profit

var isValid = function (s) {
  const stack = [];
  const bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (bracketPairs.hasOwnProperty(currentBracket)) {
      stack.push(currentBracket);
    } else {
      if (stack.length === 0 || bracketPairs[stack.pop()] !== currentBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

var flipAndInvertImage = function (image) {
  let reversedImage = image.map((arr) => arr.reverse());

  let invertedImage = reversedImage.map((arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr[i] = 1;
      } else {
        arr[i] = 0;
      }
    }
    return arr;
  });

  return invertedImage;
};

/*
First we will reverse the image
map through the image and reverse each array
then we will invert the image
map through the image and then iterate through each array
if the element is 0, set it to 1
if the element is 1, set it to 0


*/

var maxArea = function (height) {
  if (height.length === 0) {
    return 0;
  }

  if (height.length === 2) {
    return Math.min(height[0], height[1]);
  }

  let firstP = 0;

  let secondP = height.length - 1;

  let resheight = Math.min(height[firstP], height[secondP]);

  let area = resheight * (secondP - firstP);

  while (firstP < secondP) {
    if (height[firstP] > height[secondP]) {
      secondP--;
    } else {
      firstP++;
    }

    newHeight = Math.min(height[firstP], height[secondP]);

    newArea = newHeight * (secondP - firstP);

    area = Math.max(area, newArea);
  }

  return area;

  var threeSum = function (nums) {
    if (nums.length === 3) {
      let sum = 0;
      nums.forEach((num) => (sum += num));
      if (sum == 0) {
        return [nums];
      } else {
        return [];
      }
    } else if (nums.length < 3) {
      return [];
    }

    const res = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
        // Skip duplicates
        let left = i + 1;
        let right = nums.length - 1;
        let sum = 0 - nums[i]; // Find the complement to make it zero

        while (left < right) {
          if (nums[left] + nums[right] === sum) {
            res.push([nums[i], nums[left], nums[right]]);
            while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
            while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
            left++;
            right--;
          } else if (nums[left] + nums[right] < sum) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
    return res;
  };
};

var threeSum = function (nums) {
  if (nums.length === 3) {
    let sum = 0;
    nums.forEach((num) => (sum += num));
    if (sum == 0) {
      return [nums];
    } else {
      return [];
    }
  } else if (nums.length < 3) {
    return [];
  }

  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      // Skip duplicates
      let left = i + 1;
      let right = nums.length - 1;
      let sum = 0 - nums[i]; // Find the complement to make it zero

      while (left < right) {
        if (nums[left] + nums[right] === sum) {
          res.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
          while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
          left++;
          right--;
        } else if (nums[left] + nums[right] < sum) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
};

// if the length of the array is 3, check to see if the sum of the array is 0
// if it is return the array
// if not return an empty array
// if the length of the array is less than 3 return an empty array
// sort the array
// iterate through the array
// if the element is not the same as the previous element, set the left pointer to the next element
// set the right pointer to the last element
// find the complement of the element to make it zero
// while the left pointer is less than the right pointer
// if the sum of the left and right pointer is equal to the complement
// push the elements to the results array
// skip duplicates
// increment the left pointer
// decrement the right pointer
// if the sum of the left and right pointer is less than the complement
// increment the left pointer
// else decrement the right pointer

var lengthOfLongestSubstring = function (s) {
  let charIndex = {};
  let maxLength = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in charIndex && charIndex[char] >= start) {
      start = charIndex[char] + 1;
    } else {
      maxLength = Math.max(maxLength, i - start + 1);
    }
    charIndex[char] = i;
  }

  return maxLength;
};

/*
start with create a variable to hold the length 
return math.max of the largest value
return value at the end

create an object to hold each instance of a letter
while iterating through the subvstring, if there is the letter within the object record length
if no letter in object, add to the objhect and then increment length

if you do record the length return math.max of larger value and then restart from there

*/

/* 
 It iterates through the string, maintaining a character index object (charIndex) to keep track of the most recent index where each character appeared. It also maintains the start index, which represents the start of the current substring without repeating characters. When a repeating character is encountered, it updates the start index accordingly. At each step, the maximum length of the non-repeating substring is updated. Finally, it returns the maximum length found.*/

var findDuplicate = function (nums) {
  let tortoise = nums[0];
  let hare = nums[0];

  // Phase 1: Find the intersection point of the two runners
  while (true) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];

    if (tortoise === hare) {
      break;
    }
  }

  // Phase 2: Find the entrance to the cycle
  var findDuplicate = function (nums) {
    let tortoise = nums[0];
    let hare = nums[0];

    // Phase 1: Find the intersection point of the two runners
    while (true) {
      tortoise = nums[tortoise];
      hare = nums[nums[hare]];

      if (tortoise === hare) {
        break;
      }
    }

    // Phase 2: Find the entrance to the cycle
    tortoise = nums[0];
    while (tortoise !== hare) {
      tortoise = nums[tortoise];
      hare = nums[hare];
    }

    return tortoise;
  };
};

/*Initialization: Initially, both tortoise and hare are set to the first element of the array. The idea is to imagine these pointers moving through the array like runners on a track.

Phase 1 - Finding Intersection Point:

In each iteration of the loop, tortoise moves one step forward (tortoise = nums[tortoise]), while hare moves two steps forward (hare = nums[nums[hare]]).
If there's a duplicate number in the array, eventually tortoise and hare will land on the same number. This is because hare is moving faster and will "lap" the tortoise.
When tortoise and hare meet, it indicates that there's a cycle in the sequence. This is a fundamental property of linked lists and is leveraged here.
Phase 2 - Finding Entrance to Cycle:

Once the intersection point is found, we reset tortoise to the beginning of the array and keep hare at the intersection point.
Then, both tortoise and hare move forward at the same pace (one step at a time). Because the tortoise starts from the beginning of the array and the hare starts from the intersection point, they will eventually meet at the entrance of the cycle.
This is because the distance between the beginning of the array and the entrance of the cycle is the same as the distance between the intersection point and the entrance of the cycle.
Return Duplicate Number:

Once tortoise and hare meet at the entrance to the cycle, the value they both point to will be the duplicate number.*/

var containsDuplicate = function (nums) {
  const visited = {};

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    if (visited[curr]) {
      return true;
    } else {
      visited[curr] = true;
    }
  }
  return false;
};

var mergeAlternately = function (word1, word2) {
  let res = "";
  while (word1.length && word2.length) {
    let letter1 = word1.slice(0, 1);
    let letter2 = word2.slice(0, 1);
    res += letter1;
    res += letter2;
    word1 = word1.slice(1, word1.length);
    word2 = word2.slice(1, word2.length);
  }
  if (word1.length > 0 && word2.length === 0) {
    res += word1;
  }
  if (word2.length > 0 && word1.length === 0) {
    res += word2;
  }
  return res;
};

/*
First we will create a variable to hold the result
then we will iterate through the words while both words have length
we will slice the first letter of each word and add them to the result
then we will reassign the words to the word without the first letter
keep doing this while both have length
if one word has length and the other doesn't, add the remaining word to the result
return the result
*/

var kidsWithCandies = function (candies, extraCandies) {
  let largest = Math.max(...candies);
  let res = [];
  for (let i = 0; i < candies.length; i++) {
    let curr = candies[i];
    curr = curr += extraCandies;
    if (curr >= largest) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
};

// find the max in the array
//create empty array variable to hold results
// for loop iterate through array of candies
// add extacandies to current element in loop, check to see if greater than or equal to max, depending on whether
// it is greater or lesser i will add false or true,
// return the results array

var findMaxAverage = function (nums, k) {
  let maxSum = 0;
  let sum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  maxSum = sum;

  // Slide the window to calculate the sum of subsequent subarrays
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  // Calculate the maximum average
  return maxSum / k;
};

var gcdOfStrings = function (str1, str2) {
  if (str1[0] !== str2[0]) {
    return "";
  }

  let i = 1;
  while (i <= str2.length) {
    let start = str1[0];
    let curr1 = str1[i];
    let curr2 = str2[i];
    if (curr2 === undefined) {
      console.log(str1[i], start);
      if (str1[i] == start) {
        return str1.slice(0, i);
      } else {
        return "";
      }
    }

    if (curr1 && curr2 === start) {
      return str1.slice(0, i);
    }
    if (curr1 === curr2) {
      i++;
    } else {
      return "";
    }
  }
};

// pattern recognition
// first check through each string, check to see if they are similar and that they can reproduce the same pattern
// if a subsection of str1 and str2 are different return an empty string
// then return the smallest pattern that can diveide each string
// doesnt work will figure it out later

var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 2 && flowerbed[0] === 0 && flowerbed[1] === 0) {
    if (n === 1) {
      return true;
    } else return false;
  }
  if (flowerbed.length / 3 < n) {
    return false;
  }
  if (flowerbed[0] == 0 && flowerbed[1] == 0) {
    n--;
  }
  if (n === 0) {
    return true;
  }
  if (
    flowerbed[flowerbed.length - 1] == 0 &&
    flowerbed[flowerbed.length - 2] == 0
  ) {
    n--;
  }
  if (n === 0) {
    return true;
  }
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    n--;
  }
  if (n === 0) {
    return true;
  }
  for (let i = 0; i < flowerbed.length - 2; i++) {
    if (flowerbed[i] == 0) {
      if (flowerbed[i + 1] == 0 && flowerbed[i + 2] == 0) {
        n--;
        i++;
      }
      if (n === 0) {
        return true;
      }
    }
  }
  return n === 0;
};

//first check to see what n is
// then iterate trhough the flowerbed, if curr ele is 0, and curr ele + 1 and curr ele + 2 == 0,
// minus 1 from n
// if n === 0 return true, otherwise return false
// does not work

var findDifference = function (nums1, nums2) {
  let res = [];
  let num1Set = new Set();
  let num2Set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    let curr = nums1[i];
    if (!nums2.includes(curr)) {
      num1Set.add(curr);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    let curr = nums2[i];
    if (!nums1.includes(curr)) {
      num2Set.add(curr);
    }
  }
  let num1arr = [];
  let num2arr = [];
  num1Set.forEach((curr) => num1arr.push(curr));
  num2Set.forEach((curr) => num2arr.push(curr));
  res.push(num1arr, num2arr);
  return res;
};

/*
first create an empty array to hold the results
create two empty sets to hold the unique values
iterate through the first array, if the current element is not in the second array, add it to the first set
iterate through the second array, if the current element is not in the first array, add it to the second set
create two empty arrays to hold the values of the sets
iterate through the first set and add the values to the first array
iterate through the second set and add the values to the second array
push the two arrays to the results array


*/

var isSubsequence = function (s, t) {
  let i = 0;
  for (let j = 0; j < t.length && i < s.length; j++) {
    if (t[j] === s[i]) {
      i++;
    }
  }
  return i === s.length;
};

// iterate through the string, if the current element in the string is equal to the current element in the substring
// increment the substring
// return true if the substring is equal to the string

var uniqueOccurrences = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (!obj[curr]) {
      obj[curr] = 1;
    } else {
      obj[curr]++;
    }
  }
  let values = Object.values(obj);

  let uniqueValues = new Set(values);

  return uniqueValues.size === values.length;
};

// create an empty object to hold the values
// iterate through the array, if the current element is not in the object, add it to the object
// if it is in the object increment the value
// get the values of the object
// create a set to hold the unique values
// return true if the size of the set is equal to the length of the values

var reverseList = function(head) {
  let prev = null
  let current = head
  while (current) {
      const next = current.next;
      current.next = prev;
      prev = current
      current = next
  }
  return prev
};

// create a previous variable to hold the previous node
// create a current variable to hold the head
// iterate through the linked list
// set the next variable to the next node
// set the current next to the previous node
// set the previous node to the current node
// set the current node to the next node
// return the previous node

var guessNumber = function(n) {
  let low = 1; // to check every number between 1 and n
  let high = n;
  
  while (low <= high) { // while low is less than higher, keep running through this logic
      let middle = Math.floor((low + high) / 2); // find the middle of both low and high  
      let res = guess(middle); // guess
      
      if (res === 0) { // if res == 0 we found our number
          return middle; // return
      } else if (res === -1) { // if middle is smaller than number res will return < 1
          high = middle - 1; // assign high to middle -1
      } else { // if middle is greater than numbe res will return < 1
          low = middle + 1; // then re reassign low to middle + 1
      }
  }
  
  // This line should never be reached
  return -1;
};
/*
We maintain two pointers, low and high, which represent the range of numbers we're considering.
We continuously narrow down this range by adjusting low or high based on the result of the guess.
If the guess is correct, we return the current middle value.
If the guess is too high, we adjust high to middle - 1.
If the guess is too low, we adjust low to middle + 1.
*/
var searchBST = function(root, val) {
  if (!root) {
      return null; // If the root is null, the tree is empty
  }
  
  if (root.val === val) {
      return root; // Found the value, return the subtree rooted at this node
  } 
  
  if (val < root.val) {
      return searchBST(root.left, val); // Search in the left subtree
  } else {
      return searchBST(root.right, val); // Search in the right subtree
  }
};

/*
If the root is null, the tree is empty, so return null.
If the value of the current node is equal to the target value, return the current node.
If the target value is less than the current node's value, search the left subtree.
If the target value is greater than the current node's value, search the right subtree.
*/
