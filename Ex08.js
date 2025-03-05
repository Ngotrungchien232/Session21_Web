// Duyệt qua tất cả các số có 3 chữ số
for (let i = 100; i <= 999; i++) {
  // Chuyển số sang chuỗi để lấy từng chữ số
  let str = i.toString();

  // Tính tổng lập phương của các chữ số
  let sum =
    Math.pow(parseInt(str[0]), 3) +
    Math.pow(parseInt(str[1]), 3) +
    Math.pow(parseInt(str[2]), 3);

  // Kiểm tra xem tổng lập phương có bằng số ban đầu không
  if (sum === i) {
    // Nếu có, in ra số Armstrong
    console.log(i);
  }
}
