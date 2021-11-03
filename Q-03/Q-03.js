function countInt(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            result += countInt(arr[i]);
        } else {
            if (Number.isInteger(arr[i])) {
                result++;
            }
        }
    }
    return result;
}

let myArr = [[[5], 3], 0, 2, ['foo'], [], [4, [5.1, 6]]];
let result = countInt(myArr);
console.log(result);
