// Bước 1: Cho người dùng nhập vào 3 biến a, b, c
let a = +prompt("Nhập vào hệ số a: ");
let b = +prompt("Nhập vào hệ số b: ");
let c = +prompt("Nhập vào hệ số c: ");

// Bước 2: Tiến hành giải phương trình bậc hai
if (a === 0) {
  if (b === 0) {
    if (c === 0) {
      alert("phương trình có vô số nghiệm");
    } else {
      alert("phương trình không có nghiệm ");
    }
  } else {
    let x = -c / b;
    console.log("Phương trình có một nghiệm thực: x = " + x);
  }
} else {
  let delta = b * b - 4 * a * c;
  if (delta < 0) {
    console.log("Phương trình không có nghiệm thực.");
  } else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("Phương trình có một nghiệm thực: x = " + x);
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có hai nghiệm thực: x1 = " + x1 + ", x2 = " + x2);
  }
}
