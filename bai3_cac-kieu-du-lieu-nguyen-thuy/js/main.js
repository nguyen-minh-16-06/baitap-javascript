// 1. Kiểu chuỗi: kiểu dữ liệu để lưu trữ chuỗi ký tự

let myString = `abc`;
// let myString = 'abc';
// let myString = "abc";
console.log(myString);
console.log("Kiểu dữ liệu: " + typeof myString);

// 2. Kiểu số: kiểu dữ liệu để lưu trữ số, có thể là số nguyên hoặc số thực

let soNguyen = 10;
let soThuc = 3.14;

console.log(soNguyen);
console.log(soThuc);
console.log("Kiểu dữ liệu: " + typeof soNguyen);
console.log("Số nguyên an toàn tối đa: " + Number.MAX_SAFE_INTEGER);
console.log("Số nguyên an toàn tối thiểu: ", Number.MIN_SAFE_INTEGER);
// Tương đương từ -(2^53 - 1) to 2^53 - 1
console.log("Kiểu dữ liệu: " + typeof soThuc);

// 3. Kiểu logic: chỉ có thể nhận giá trị true hoặc false

let isTrue = true;
let isFalse = false;

console.log(isTrue);
console.log(isFalse);
console.log("Kiểu dữ liệu: " + typeof isTrue);
console.log("Kiểu dữ liệu: " + typeof isFalse);

// 4. Kiểu undefined: biến chưa được gán giá trị sẽ có kiểu dữ liệu là undefined

let undefinedVariable;
console.log("Kiểu dữ liệu: " + typeof undefinedVariable);

// 5. Kiểu null: biến được gán giá trị là null, thường dùng để reset biến, gán giá trị mặc định,...

let connect = null;
console.log("Kiểu dữ liệu: " + typeof connect);
