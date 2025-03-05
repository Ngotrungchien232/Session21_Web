// viết chương trình nhập vào 5 số nguyên tiến hành đếm số lượng số chẵn, số lẻ rồi in kết quả ra màn hình

//bước 1: khai báo biển lưu trữ số lượng số lẻ và số chẵn
let demSoChan = 0;
let demSoLe = 0;

// bước 2:yêu cầu người dùng nhập vào 5 số nguyên
for (let i = 1; i <= 5; i++) {
  let soNguyen = +prompt(`Nhập vào 5 số nguyên: `);
  if (soNguyen % 2 == 0) {
    demSoChan++;
  } else {
    demSoLe++;
  }
}

// bước 3: in kết quả ra màn hình 
alert(`Số lượng số chẵn là: ${demSoChan}`);
alert(`Số lượng số lẻ là: ${demSoLe}`);

