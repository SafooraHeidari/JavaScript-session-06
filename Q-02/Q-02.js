const num2power = (n, m) => {
    if (m === 0) return 1;
    else return n * num2power(n,m-1);
}

console.log(num2power(2,3))