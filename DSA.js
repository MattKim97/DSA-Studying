var topKFrequent = function(nums, k) {
    // im going to create an empty object
    // create an empty array
    // iterate through nums, and create a placeholder for each element, increaing the value of placeholder by 1 for each instance
    // then I'm going to push the value of the greatest value within the object k times
    // after each push delete the placeholder in object so we can iterate down

    let placeholders = {}

    let results = []

    for (let i = 0; i<nums.length; i++){
        let curr = nums[i]
        if (!placeholders[curr]){
            placeholders[curr] = 1
        } else {
            placeholders[curr] += 1
        }
    } 

    let arrayPH = Object.entries(placeholders)


    arrayPH.sort((a,b)=> b[1] - a[1])

    // for (let i = 0; i< k; i++){
    //     results.push(arrayPH[0][0])
    //     arrayPH.shift()
    // }

    let element = arrayPH.slice(0,k).map(pair => {
        return pair[0]
    })





return element

};


var isAnagram = function(s, t) {

    sArr = s.split("")
    tArr = t.split("")

    sArr.sort()
    tArr.sort()

    sStr =sArr.join("")
    tStr =tArr.join("")


    if (sStr == tStr){
        return true
    } else {
        return false
    }
    
};

var productExceptSelf = function(nums) {

    const outputs = [];
    let ph = 1

    for (let i = 0; i < nums.length; i++){
        outputs[i] = ph
        ph *= nums[i]
    }

    ph = 1

    for (let i = nums.length -1; i>=0; i--){
        outputs[i] *= ph
        ph *= nums[i]
    }

    return outputs
    
};

// firstly we will create an array to hold the outputs

// we can assign a variable as 1 inorder hold a placeholder value

// we should iterate through the numbs array foward 

//


var moveZeroes = function(nums) {
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

var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);
    let longest = 1;
    let count = 1

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


var groupAnagrams = function(strs) {
    if (strs.length == 1){
        return [strs]
    }

    let results = {}

    for (let i = 0 ; i < strs.length; i++){
        let curr = strs[i]
        let sortedStr = curr.split("").sort().join("")

        if(!results[sortedStr]){
            results[sortedStr] = [curr]
        } else {
            results[sortedStr].push(curr)
        }
    }


return Object.values(results)
};


// if strs.length == 1 return strs
// if strs.length == 0 return nothing
// first make a copy of strs array
// secondly  go through all of strs array compare their ascii values to each other 
// thidly  go through the array and then if the values are the same, put them in an array together
// lastly return each strs with index to the original array


var isPalindrome = function(s) {
    if (s === " "){
        return true
    }
   noSpecChar = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
   reverseNoSpecChar = noSpecChar.split("").reverse().join("")

   console.log(noSpecChar)
    console.log(reverseNoSpecChar)

   if (noSpecChar == reverseNoSpecChar){
       return true
   } else {
       return false
   }
};

//first check to see if the string is empty
// if it is empty return true
// remove all special characters and spaces
// reverse the string
// compare the two strings
// if they are the same return true
// else return false
