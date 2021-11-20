

// Write a function that takes in a non-empty array of positive integers that are sorted in ascending order. 
// Your function should return a new array of the same length with the squares of the original integers also sorted in ascending order.

// Sample input const myArray = [1, 2, 3, 5, 6, 8, 9] ---- Should return [1, 4, 9, 25, 36, 64, 81]

const squareSquasher = arr => {
    newArr = []
    for(let x of arr){
        let newVal = x*x
        newArr.push(newVal)
    }
    return newArr
}

console.log(squareSquasher([1, 2, 3, 5, 6, 8, 9]))



