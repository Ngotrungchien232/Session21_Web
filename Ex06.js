// viết chương trình nhập vào một số nguyên bất kì. Sau đó in ra tất cả các ước của nó

// bước 1: cho người dùng nhập vào một số nguyên bất kì
let number = +prompt("mời bận nhập một số nguyên bất kì từ bàn phím: ");

// bước 2: duyệt qua từng phần tử từ 1 đến chính số mà người dùng nhập vào
for (let i = 1; i <= number; i++) {
  // bước 3 kiểm tra xem đâu là ước của số mà người dùng nhập vào
  if (number % i == 0) {
    // bước 4: in tất cả các ước của số đó ra màn hình
    alert("ước của số là: " + i);
  }
}
