let x = 0.5;
let mu = 1;
let dau = -1;
let first = 1;
let second = first + (dau * x) / 2;
let eps = 0.001;

while (Math.abs(second - first) > eps) {
    mu++;
    dau = -dau;
    first = second;
    second = first + (dau * Math.pow(x, mu) * (2 * mu - 1)) / (2 * mu * (2 * mu - 2));
}

document.write(first);
