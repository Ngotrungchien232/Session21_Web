// yêu cầu người dùng nhập vào một số bất kì
// in ra n số nguyên tố đầu tiên

// bước 1: cho người dùng nhập vào một số bất kì
let number = +prompt("mời bạn nhập một số ngẫu nhiên từ bàn phím: ");

// bước 2": kiểm tra xem từ 1 đến số number số nguyên tố đầu tiên là số nào
let nguyenTo;
for (let i = 2; i <= number; i++) {
  if (i % 1 == 0 && i % i == 0) {
    nguyenTo = i;
    alert("số nguyên tố đầu tiên là: " + nguyenTo);
  }
}
