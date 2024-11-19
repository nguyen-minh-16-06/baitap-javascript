let x = 0.5;
let mu = 2;
let giaiThua = 3;
let dau = -1;
let first = 1;
let second = dau * Math.pow(x, mu) / factorial(giaiThua);
let third = first + second;
let eps = 0.001;

while (Math.abs(third - first) > eps) {
    mu += 2;
    dau = -dau;
    first = third;
    second = dau * Math.pow(x, mu) / factorial(giaiThua);
    third = first + second;
}

document.write(first);

function factorial(n) {
    if (n == 1) return 1;
    if (n == 3) return 6;
    return n * factorial(n - 2);
}