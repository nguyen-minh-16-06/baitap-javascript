let x = 0.5;
let mu = 1;
let first = 1;
let second = first + Math.pow(x, mu) / factorial(mu);
let eps = 0.001;

while (Math.abs(second - first) > eps) {
    mu++;
    first = second;
    second = first + Math.pow(x, mu) / factorial(mu);
}

document.write(first)

function factorial(n) {
    if (n == 1) return 1
    return n * factorial(n - 1)
}