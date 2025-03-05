//cho người dùng nhập vào ngày sinh và tháng sinh, sau đó in ra cung hoàng đạo theo ngày tháng năm sinh nhập vào

const n = 7; // Số dòng của tam giác

document.write("<pre>");

// Hình a: Tam giác vuông dưới trái
document.write("Hình a:<br>");
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
  document.write("*".repeat(i) + "<br>");
}

// Hình b: Tam giác vuông trên trái
document.write("<br>Hình b:<br>");
for (let i = n; i >= 1; i--) {
  console.log("*".repeat(i));
  document.write("*".repeat(i) + "<br>");
}

// Hình c: Tam giác vuông dưới phải
document.write("<br>Hình c:<br>");
for (let i = 1; i <= n; i++) {
  let line = " ".repeat(n - i) + "*".repeat(i);
  console.log(line);
  document.write(line + "<br>");
}

// Hình d: Tam giác vuông trên phải
document.write("<br>Hình d:<br>");
for (let i = n; i >= 1; i--) {
  let line = " ".repeat(n - i) + "*".repeat(i);
  console.log(line);
  document.write(line + "<br>");
}

document.write("</pre>");
