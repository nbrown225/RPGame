const numbers = [1, 2, 3, 4];

// ES6 SYNTAX
const newNumbers = numbers.map((num) => `HELLO x ${num}`);

// NOT ES6 SYNTAX
const newNumbers2 = numbers.map(function(num) {
    return `HEYY x ` + num;
});

console.log(numbers);
console.log(newNumbers);
console.log(newNumbers2);

