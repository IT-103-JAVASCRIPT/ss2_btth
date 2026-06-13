const bookName = prompt("Tên Sách");
const author = prompt("Tên Tác Giả");
let year = prompt("Năm Xuất Bản");

year = Number(year);

let yearNow = new Date().getFullYear();

if (year === yearNow) {
    console.log("Day la sach moi - script.js:10");
} else if (yearNow - year <= 5) {
    console.log("Sach kha moi - script.js:12");
} else {
    console.log("Sach da cu - script.js:14");
}
