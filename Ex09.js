// cho người dùng nhập vào một số nguyên bất kì, sau đó kiểm tra xem số đó có phải số nguyên tố hay không
// rồi in kết quả ra màn hình

// bước 1: cho người dùng nhập vào một số nguyên bất kì
let number = +prompt("mời bạn nhập một số nguyên bất kì: ");

// bước 2: kiểm tra xem số đó có phải số nguyên tố hay không
if (number < 2) {
  alert("số " + number + " không phải là số nguyên tố");
} else {
  let count = 0;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      count++;
      break;
    }
  }
  if (count == 0) {
    alert("số " + number + " là số nguyên tố");
  } else {
    alert("số " + number + " không phải là số nguyên tố");
  }
}
