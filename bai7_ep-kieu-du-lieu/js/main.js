// Ép kiểu dữ liệu

// Yêu cầu người dùng nhập vào số a
let numberA = prompt("Mời cụ nhập A ạ: ");

// Kiểm tra thử Kiểu dữ liệu của biến numberA là gì
console.log("Kiểu dữ liệu của" , numberA , "là:" , typeof numberA);

/* => Mặc định dữ liệu nhập vào sử dụng hàm prompt() có kiểu string
Đôi khi ta cần thực hiện tính toán với dữ liệu nhập vào từ bàn phím của người dùng
=> Cần ép kiểu trước khi thực hiện tính toán */

// Thực hiện tính toán (nếu chưa ép kiểu)
let numberB = 5;
console.log("Kiểu dữ liệu của" , numberB , "là:" , typeof numberB);

let kq = numberA + numberB;
console.log(`Kết quả A + B = ${kq}`);
console.log(`Kiểu dữ liệu của ${kq} là: ${typeof kq}`);

// Các phép tính khác: 
console.log(`A - B = %s`, numberA - numberB);
console.log(`A * B = %s`, numberA * numberB);
console.log(`A / B = %s`, numberA / numberB);
console.log(`A % B = %s`, numberA % numberB);

// Ép kiểu dữ liệu nhập vào dùng prompt:
// 1. Ép kiểu cho kiểu số nguyên
let numberC = parseInt(prompt("Mời cụ nhập C ạ: "));
// Ví dụ nếu ta ép sang kiểu nguyên nhưng dữ liệu truyền vào 1 số thực thì vẫn là kiểu số nguyên

// 2. Ép kiểu cho kiểu số thực
// let numberC = parseFloat(prompt("Mời cụ nhập ạ: "));
console.log(`Số C là:`, numberC);
console.log(`Kiểu dữ liệu của ${numberC} là: ${typeof numberC}`);
console.log(numberC + numberB);

// 3. Sử dụng hàm Number() để ép kiểu dữ liệu number (Sử dụng cho kiểu thực và nguyên)
let numberD = Number(prompt("Mời cụ nhập D ạ: "));
console.log(`Số D là:`, numberD);
console.log(`Kiểu dữ liệu của ${numberD} là: ${typeof numberD}`);
console.log(numberD + numberB);
