//viết chương trình cho người dùng nhập vào 5 số nguyên, sau đó tính tổng các số lẻ rồi in kết quả ra màn hình

// Bước 1: Khai báo biến để lưu trữ tổng số lẻ
let tongSoLe = 0;

// Bước 2: Yêu cầu người dùng nhập vào 5 số nguyên và tính tổng số lẻ
for (let i = 1; i <= 5; i++) {
  let soNguyen = parseInt(prompt(`Nhập số nguyên ${i}: `));
  if (soNguyen % 2 !== 0) {
    tongSoLe += soNguyen;
  }
}

// Bước 3: In kết quả ra màn hình
alert("Tổng các số lẻ là: " + tongSoLe);
