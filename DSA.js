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
