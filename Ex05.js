//Viết chương trình in ra các số nguyên từ 1 đến 100. Nhưng đối với bội số của ba in "Fizz" và đối với bội số của năm in "Buzz". Đối với bội số của cả ba và năm in ra "FizzBuzz".

//sử dụng vòng lặp for để duyệt qua từng phần tử từ 1 đến 100

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
