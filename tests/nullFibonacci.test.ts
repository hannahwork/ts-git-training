import { computeFibonacciNumber } from '../src/fibonacci';

describe('Null Fibonacci Test', () => {
    it('Check fibonacci works for null input', () => {
        expect(computeFibonacciNumber(null)).toEqual(1);
    });
})
