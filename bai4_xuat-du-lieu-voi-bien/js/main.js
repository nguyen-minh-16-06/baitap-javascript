// Cách xuất dữ liệu với biến trong javascript

let soA = 25;
let soB = 5;

// Cách 1:
console.log("Căn bậc hai của " + soA + " là: " + soB);

// Cách 2:
console.log("Căn bậc hai của" , soA , "là:" , soB);

// Cách 3:
console.log(`Căn bậc hai của ${soA} là: ${soB}`);

// Cách 4:
console.log(`Căn bậc hai của %s là: %s`, soA, soB);