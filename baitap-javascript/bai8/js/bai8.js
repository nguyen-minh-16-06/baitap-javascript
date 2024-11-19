let x = 0.5;
let mu = 3;
let first = x;
let second = (1 / 2) * Math.pow(x, mu) / mu;
let third = first + second;
let tangGiam = 1;
let eps = 0.001;

while (Math.abs(third - first) > eps) {
    mu += 2;
    tangGiam = tangGiam * (mu - 2) / (mu - 1);
    first = third;
    second = tangGiam * Math.pow(x, mu) / mu;
    third = first + second;
}

document.write(first);