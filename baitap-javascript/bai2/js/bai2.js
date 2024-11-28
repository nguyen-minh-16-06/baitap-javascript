<<<<<<< HEAD
var x = 0.5;
var mu = 1;
var dau = -1;
var fisrt = 1;
var second = first + dau * (mu + 1) * (mu + 2) * Math.pow(x, mu) / 2;
var eps = 0.001;

while (Math.abs(second - first) > eps) {
    mu++;
    dau = -dau;
    first = second;
    second = first + dau * (mu + 1) * (mu + 2) * Math.pow(x, mu) / 2;
}

=======
var x = 0.5;
var mu = 1;
var dau = -1;
var fisrt = 1;
var second = first + dau * (mu + 1) * (mu + 2) * Math.pow(x, mu) / 2;
var eps = 0.001;

while (Math.abs(second - first) > eps) {
    mu++;
    dau = -dau;
    first = second;
    second = first + dau * (mu + 1) * (mu + 2) * Math.pow(x, mu) / 2;
}

>>>>>>> a136eac4daf39212bee3dc9975b9dd2f33de9553
document.write(first);