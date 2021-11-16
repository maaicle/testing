const {returnTwo, 
    greeting,
    add,
    multiply,
    divide,
    subtract} = require('./function.js');

const burger = 'burger';

    test("Should return the number 2", () => {
    expect(returnTwo()).toBe(2);
});

test("Should return the name entered", () => {
    expect(greeting('James')).toEqual('Hello, James');
    expect(greeting('Jill')).toEqual('Hello, Jill');
});


describe('Arithmatic Calcs', () => {
    test("Should return the sum of both arguments", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(5, 9)).toEqual(14);
    })
    
    test("Should return the first argument times the second argument", () => {
        expect(multiply(1, 2)).toEqual(2);
        expect(multiply(5, 9)).toEqual(45);
    })
    
    test("Should return the first argument divided by the second argument", () => {
        expect(divide(20, 5)).toEqual(4);
        expect(divide(49, 7)).toEqual(7);
    })
    
    test("Should return the difference of both arguments", () => {
        expect(subtract(1, 2)).toEqual(-1);
        expect(subtract(5, 9)).toEqual(-4);
    })

    // Checking to see what would happen if a different dataype was used.
    test('datatype should return number', () => {
        expect(typeof add('one', 2)).toEqual('number')
    })
    
    test('test a truthy', () => {
        expect(burger).toBeTruthy();
    })

    test('check if variable is not undefined', () => {
        expect(burger).toBeDefined();
    })

})