let x = 0.5;
let mu = 2;
let first = -x;
let second = first - Math.pow(x, mu) / mu;
let eps = 0.001;

while (Math.abs(second - first) > eps) {
    mu++;
    first = second;
    second = first - Math.pow(x, mu) / mu;
}

document.write(first);