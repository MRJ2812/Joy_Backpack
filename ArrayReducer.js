// Here we recive an array. Set inithial value to 0
// Array reducer function automatically take inithial value and a value from our given array.
// then calculate it (+,-,*,/)
// and total value stored in sum by only one time function call
const arrayReducer = (obj) => {
    const initial = 0;
    const sum = obj.reduce((previousValue, currentValue) =>
        previousValue + currentValue.price,
        initial);
    return sum
}

export { arrayReducer }