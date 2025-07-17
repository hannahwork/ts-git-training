import { computeFibonacciArray } from '../src/fibonacci';

describe('Array Fibonacci Test', () => {
    it('Check array fibonacci works for small range', () => {
        const startNumber = 3;
        const endNumber = 11;
        const expectedOutputs = [2, 3, 5, 8, 13, 21, 34, 55, 89];
        expect(computeFibonacciArray(startNumber, endNumber)).toEqual(expectedOutputs);
    });
})
