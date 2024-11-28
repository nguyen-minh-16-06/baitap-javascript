<<<<<<< HEAD
let x = 0.5;
let mu = 3;
let giaiThua = 3;
let first = x;
let second = first + Math.pow(x, mu) / factorial(giaiThua);
let eps = 0.001;

while (Math.abs(second - first) > eps) {
    mu += 2;
    first = second;
    second = first + Math.pow(x, mu) / factorial(giaiThua);
}

document.write(first);

function factorial(n) {
    if (n == 1) return 1;
    if (n == 3) return 6;
    return n * factorial(n - 2);
=======
let x = 0.5;
let mu = 3;
let giaiThua = 3;
let first = x;
let second = first + Math.pow(x, mu) / factorial(giaiThua);
let eps = 0.001;

while (Math.abs(second - first) > eps) {
    mu += 2;
    first = second;
    second = first + Math.pow(x, mu) / factorial(giaiThua);
}

document.write(first);

function factorial(n) {
    if (n == 1) return 1;
    if (n == 3) return 6;
    return n * factorial(n - 2);
>>>>>>> a136eac4daf39212bee3dc9975b9dd2f33de9553
}