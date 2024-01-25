// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem
// // - What is temp amplitude? Answer: difference between highest and lowest temp
// // - How to compute max and min temperatures?
// // - What's a sensor error? And what do do?

// // 2) Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min from max (amplitude) and return it

const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
let max = temps[0];
let min = temps[0];
for (let i = 0; i <= temps.length; i++) {
  if (max < temps[i]) max = temps[i];
  if (min > temps[i]) min = temps[i];
}
console.log(max, min);
console.log(temps);
