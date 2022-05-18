const randomNumber = require('../lib/random.js');
test('gets random number 1 - 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1); 
    expect(randomNumber()).toBeLessThanOrEqual(10);
});

// FIRST TEST
// const checkIfEqual = require('../lib/random.js');
// test('checks if 10 is = to 10', () => {
//     expect(checkIfEqual(10,10)).toBe(true);
// });