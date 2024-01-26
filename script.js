// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// // const x = 24;
// // console.log(x);
// // const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // // 1) Understanding the problem
// // // - What is temp amplitude? Answer: difference between highest and lowest temp
// // // - How to compute max and min temperatures?
// // // - What's a sensor error? And what do do?

// // // 2) Breaking up into sub-problems
// // // - How to ignore errors?
// // // - Find max value in temp array
// // // - Find min value in temp array
// // // - Subtract min from max (amplitude) and return it

// const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let max = temps[0];
// let min = temps[0];
// for (let i = 0; i <= temps.length; i++) {
//   //   if (typeof temps[i] !== "Number") continue;

//   if (max < temps[i]) max = temps[i];
//   if (min > temps[i]) min = temps[i];
// }
// const amplitude = max - min;
// console.log(amplitude);
// console.log(max, min);
// console.log(temps);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (i = 0; i < arr.length; i++) {
    str += `${arr[i]}*c in ${i + 1} days.. `;
  }
  console.log("... " + str);
};
printForecast(data1);
