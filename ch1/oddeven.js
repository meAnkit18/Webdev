// // Arrow function that returns 'Even' or 'Odd' for an integer
// const evenOdd = n => {
//     if (typeof n !== 'number' || !Number.isInteger(n)) return 'Not an integer';
//     return (n % 2 === 0) ? 'Even' : 'Odd';
// };

// // Example usage
// console.log(evenOdd(2)); // Even
// console.log(evenOdd(3)); // Odd
// console.log(evenOdd(-4)); // Even

// // Process an array of numbers
// const nums = [1, 2, 3, 4, 10, 15];
// console.log('\nArray results:');
// nums.forEach(n => console.log(`${n}: ${evenOdd(n)}`));

// // If a command-line argument is provided, check and print that too
// if (require.main === module && process.argv[2]) {
//     const arg = Number(process.argv[2]);
//     console.log(`\nCLI arg: ${process.argv[2]} -> ${evenOdd(arg)}`);
// }

let arr = 7;
let v = (arr %2 ==0)? "Even":"Odd";
console.log(v);

