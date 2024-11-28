let x = 0.5;
let mu = 2;
let giaiThua = 2;
let first = 1;
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
    if (n == 2) return 2;
    if (n == 4) return 24;
    return n * factorial(n - 2);
}