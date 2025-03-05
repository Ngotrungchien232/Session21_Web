//Viết chương trình yêu cầu người dùng nhập vào số tiền gửi ngân hàng ban đầu, lãi suất tháng và số tháng gửi.
//Tính số tiền lãi và tiền nhận được sau thời gian gửi biết tính lãi theo lãi nhập gốc

// bước 1: cho người dùng  nhập vào số tiền gửi ngân hàng ban đầu
let money;
while (true) {
  money = +prompt("Nhập số tiền gửi ngân hàng ban đầu: ");
  if (!isNaN(money) && money > 0) {
    break;
  } else {
    alert("Vui lòng nhập số tiền hợp lệ!");
  }
}

// bước 2: cho người dùng nhập vào lãi suất hàng tháng
let laiSuat;
while (true) {
  laiSuat = +prompt("Nhập lãi suất hàng tháng: ");
  if (!isNaN(laiSuat) && laiSuat >= 0) {
    break;
  } else {
    alert("Vui lòng nhập lãi suất hợp lệ!");
  }
}

// bước 3: cho người dùng nhập vào số tháng mà người dùng muốn gửi
let thang;
while (true) {
  thang = +prompt("số tháng mà bạn muốn gửi vào ngân hàng là: ");
  if (!isNaN(thang) && thang > 0) {
    break;
  } else {
    alert("Vui lòng nhập số tháng hợp lệ!");
  }
}

// bước 4: tính số tiền lãi mà người dùng nhận được
let tienLai = (money * laiSuat * thang) / 100;

// bước 5: tính số tiền nhận được sau thời gian gửi
let tienNhan = money + tienLai;

//bước 6: in kết quả ra màn hình
alert("số tiền lãi nhận được là: " + tienLai);
alert("số tiền nhận được sau thời gian gửi là: " + tienNhan);
