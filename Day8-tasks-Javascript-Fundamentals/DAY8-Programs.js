//1. Check whether a number is positive, negative, or zero

let num = -5;

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// output: Negative number

//2. Check whether a number is even or odd

let num4 = 7;

if (num4 % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

//Output: Odd number

//3. Find the largest of three numbers

let a = 10;
let b = 25;
let c = 15;

if (a >= b && a >= c) {
    console.log("Largest:", a);
} else if (b >= a && b >= c) {
    console.log("Largest:", b);
} else {
    console.log("Largest:", c);
}

//Output: Largest: 25

//4. Check voting eligibility

let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//Output: Eligible to vote

//5. Calculate grade based on marks

let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 35) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

//Output: Grade B

//Part 2: Programs Using Loops
//6. Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Output: 1 2 3 4 5 6 7 8 9 10

//7. Print the multiplication table of a number
let num3 = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${num3} x ${i} = ${num3 * i}`);
}


// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50

//8. Find the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum:", sum);

//Output: Sum: 55

//9. Find the factorial of a number

let num2 = 5;
let factorial = 1;
for (let i = 1; i <= num2; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);

Output: Factorial: 120

//10. Reverse a number

let num1 = 1234;
let reverse = 0;

while (num1 > 0) {
    let digit = num1 % 10;
    reverse = reverse * 10 + digit;
    num1 = Math.floor(num1 / 10);
}
console.log("Reversed number:", reverse);

//Output: Reversed number: 4321

//## 6. Complete Program: Basic Calculator
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

console.log("Addition:", add(20, 10));
console.log("Subtraction:", subtract(20, 10));
console.log("Multiplication:", multiply(20, 10));
console.log("Division:", divide(20, 10));

Output:
Addition: 30
Subtraction: 10
Multiplication: 200
Division: 2

//Perform Array Operations

let numbers = [10, 20, 30, 40];

console.log("Original:", numbers);

numbers.push(50);
console.log("After adding:", numbers);

numbers.pop();
console.log("After removing:", numbers);

console.log("Length:", numbers.length);

console.log("Contains 20:", numbers.includes(20));

console.log("Sum:", numbers.reduce((sum, n) => sum + n, 0));

console.log("Even numbers:", numbers.filter(n => n % 2 === 0));

// Output:
// Original: [10, 20, 30, 40]
// After adding: [10, 20, 30, 40, 50]
// After removing: [10, 20, 30, 40]
// Length: 4
// Contains 20: true
// Sum: 100
// Even numbers: [10, 20, 30, 40]

//## Create and Access Object Properties
let employee = {
    id: 101,
    name: "Rahul",
    department: "IT"
};

// Access properties
console.log("Name:", employee.name);

// Add a property
employee.salary = 30000;

// Update a property
employee.department = "HR";

// Delete a property
delete employee.id;

console.log(employee);

// Output:
// Name: Rahul
// {
//   name: "Rahul",
//   department: "HR",
//   salary: 30000
// }
 
