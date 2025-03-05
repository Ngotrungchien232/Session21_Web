// nhận giá trị từ người dùng
let ngang = parseInt(prompt("Nhập chiều ngang của hình chữ nhật: "));
let doc = parseInt(prompt("Nhập chiều dọc của hình chữ nhật: "));

// Vẽ hình chữ nhật rỗng
document.write("<pre>");
for (let i = 0; i < doc; i++) {
  for (let j = 0; j < ngang; j++) {
    if (i == 0 || i == doc - 1 || j == 0 || j == ngang - 1) {
      document.write("* ");
    } else {
      document.write("  ");
    }
  }
  document.write("<br>");
}
document.write("</pre>");
