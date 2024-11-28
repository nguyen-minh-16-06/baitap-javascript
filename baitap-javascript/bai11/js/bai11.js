<<<<<<< HEAD
let x = 0.5;
let mu = 2;
let mau = 2;
let dau = -1;
let first = x;
let second = first + dau * Math.pow(x, mu) / mau;
let eps = 0.001;

while (Math.abs(second - first) > eps) {
    mu++;
    mau++;
    dau = -dau;
    first = second;
    second = first + dau * Math.pow(x, mu) / mau;
}

=======
let x = 0.5;
let mu = 2;
let mau = 2;
let dau = -1;
let first = x;
let second = first + dau * Math.pow(x, mu) / mau;
let eps = 0.001;

while (Math.abs(second - first) > eps) {
    mu++;
    mau++;
    dau = -dau;
    first = second;
    second = first + dau * Math.pow(x, mu) / mau;
}

>>>>>>> a136eac4daf39212bee3dc9975b9dd2f33de9553
document.write(first)