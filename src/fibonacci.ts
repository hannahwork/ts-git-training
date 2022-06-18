export const computeFibonacciNumber = (position: number | null): number => {
    let notNullPosition = position;
    if (notNullPosition === null) {
        notNullPosition = 1;   
    }

    if (position === 0) {
        return 0;
    }
    if (position < 0) {
        return computeNegativeFibonacci(position);
    }

    if (notNullPosition <= 2) {
        return 1;
    }

    let i = 1;
    let j = 1;

    let currentPosition = 2;
    while (currentPosition < notNullPosition) {
        const temp = i;
        i = j;
        j += temp;
        currentPosition++;
    }
    return j;
};

const computeNegativeFibonacci = (position: number): number => {
    if (position >= 0) {
        throw new Error(`Position must be less than zero! Received: ${position}.`);
    }
    const resultIsNegative = position % 2 === 0;
    const absoluteResult = computeFibonacciNumber(-position);
    return resultIsNegative ? absoluteResult * -1 : absoluteResult;
}
