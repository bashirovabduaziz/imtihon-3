// 1

// let sum = 0;
// let arr = [];
// let count = 0;
// while (count < 5) {
//   let num = prompt("Iltimos, son kiriting:");
//   if (!isNaN(num) && num !== null && num !== "") {
//     arr.push(parseInt(num));
//     count++;
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("Arraydagi sonlar yig'indisi:", sum);

//2

// let arr = ["Jazz", "Blues"];

// arr.push("Rock-n-roll");
// console.log(arr);

// let midIndex = Math.floor(arr.length / 2);
// arr[midIndex] = "Classic";
// console.log(arr);

// let firstItem = arr.shift();
// console.log(firstItem); 

// arr.unshift("Rap", "Reggae");
// console.log(arr);

//3

// let salaries = {
//     "Bob": 1700,
//     "John": 6000,
//     "Evelina": 1200
// }

// function sumSalaries(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }
// console.log(sumSalaries(salaries)) 

//4

// function calcSum(arr) {
//     if (!arr || arr.length === 0) {
//       return [];
//     }

//     const evenSum = arr.reduce((acc, curr) => {
//       if (curr % 2 === 0) {
//         return acc + curr;
//       }
//       return acc;
//     }, 0);

//     const oddSum = arr.reduce((acc, curr) => {
//       if (curr % 2 !== 0) {
//         return acc + curr;
//       }
//       return acc;
//     }, 0);

//     return [evenSum, oddSum];
//   }

//   // Test:
//   const arr = [1, 2, 3, 4, 5];
//   console.log(calcSum(arr)); // [6, 9]

//   const emptyArr = [];
//   console.log(calcSum(emptyArr)); // []

//   const nullArr = null;
//   console.log(calcSum(nullArr)); // []

//5

// function findMissingNumbers(arr) {
//     let missingNums = [];
//     for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
//         if (!arr.includes(i)) {
//             missingNums.push(i);
//         }
//     }
//     return missingNums;
// }

// let arr = [-3, -2, 1, 5];
// console.log(findMissingNumbers(arr));