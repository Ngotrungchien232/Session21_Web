// viết chương trình tạo một biến mật khẩu. cho người dùng nhập mật khẩu vào xem có đúng hay không và in kết quả ra màn hình

// bước 1: tạo một biến mật khẩu
let password = "123456";

// bước 2: cho người dùng nhập vào mật khẩu mà người dùng muốn
let pass = prompt("nhập mật khẩu của bạn:");

//bước 3: so sánh mật khẩu người dùng nhập và mật khẩu mặc định nếu sai yêu cầu người dùng nhập lại
while (pass != password) {
  pass = prompt("mật khẩu không đúng, nhập lại mật khẩu của bạn:");
}

// bước 4: in kết quả ra màn hình
alert("mật khẩu bạn nhập đã đúng ");
