let x = 0.5;
let mu = 3;
let dau = -1;
let first = x;
let second = first + dau * Math.pow(x, mu) / (mu * (mu - 1) * (mu - 2));
let eps = 0.001;

while (Math.abs(second - first) > eps) {
    mu += 2;
    dau = -dau;
    first = second;
    second = first + dau * Math.pow(x, mu) / (mu * (mu - 1) * (mu - 2));
}

document.write(first);