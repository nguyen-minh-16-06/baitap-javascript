<<<<<<< HEAD
let x = 0.5;
let mu = 3;
let mau = 3;
let first = x;
let second = 2 * (first + Math.pow(x, mu) / mau);
let eps = 0.001;

while (Math.abs(second - (2 * first)) > eps) {
    mu += 2;
    mau += 2;
    first = first + Math.pow(x, mu) / mau;
    second = 2 * first;
}

=======
let x = 0.5;
let mu = 3;
let mau = 3;
let first = x;
let second = 2 * (first + Math.pow(x, mu) / mau);
let eps = 0.001;

while (Math.abs(second - (2 * first)) > eps) {
    mu += 2;
    mau += 2;
    first = first + Math.pow(x, mu) / mau;
    second = 2 * first;
}

>>>>>>> a136eac4daf39212bee3dc9975b9dd2f33de9553
document.write(second);