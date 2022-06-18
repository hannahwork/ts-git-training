import { computeFibonacciNumber } from '../src/fibonacci';

describe('Negative Fibonacci Test', () => {
    it('Check negative fibonacci works for small negative numbers', () => {
        const inputs = [-6, -5, -4, -3, -2, -1]
        const expectedOutputs = [-8, 5, -3, 2, -1, 1];
        for (let i = 0; i < expectedOutputs.length; i++) {
            expect(computeFibonacciNumber(inputs[i])).toEqual(expectedOutputs[i]);
        }
    });
})
