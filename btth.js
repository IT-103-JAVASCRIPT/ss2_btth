let fullName ;
let role ;
let power ;
let balance;
let status ;
let day; 
let error="";
let book ;
let fine ;



while (1) {
    fullName = prompt("Mời bạn nhập vào tên của bạn :");
    if (fullName === null || fullName === "") {
        alert("Vui lòng không bỏ trống tên của mình")

    } else {
        break;

    }
}

while (1) {
    role = prompt("mời nhập vào vai trò của bạn admin, student, guest")
    role=role.toLowerCase();
    if (role != "admin" && role != "student" && role != "guest") {
        alert("Bạn đã nhập sai vai trò! vui lòng nhập lại")

    } else {
        switch (role) {
            case "admin":
                alert("Chào Admin, bạn có toàn quyền hệ thống")
                power=("Chào Admin, bạn có toàn quyền hệ thống");
                break;
            case "student":
                alert("Chào sinh viên, bạn có thể mượn sách")
                power=("Chào sinh viên, bạn có thể mượn sách");
                break;
            case "guest":
                alert("Chào khách, bạn chỉ có thể đọc tại chỗ")
                power=("Chào khách, bạn chỉ có thể đọc tại chỗ")
                break;

            default:
                break;
        }
        break;
    }
    
}

while (1) {
    balance=prompt("nhập vào số dư tài khoản ")
    if (isNaN(balance)===true || balance<0) {
        alert("bạn đã nhập sai số dư ! vui lòng chỉ nhập số lớn hơn hoặc bằng 0")
        
    } else {
        break
    }
    
}

statusbar=prompt("Nhập true nếu đang hoạt động, hoặc để rỗng/nhập khác để coi như bị khóa")
statusbar=statusbar.toLowerCase() ;


while (1) {
    day=prompt("Số ngày quá hạn trả sách ")
    if (isNaN(day)===true || day<0) {
        alert("bạn đã nhập sai số ngày quá hạn ! vui lòng chỉ nhập số lớn hơn hoặc bằng 0")
        
    } else {
        break
    }
    
}

if (fullName!== null && fullName!=="" && (role==="admin" || role==="student") && balance>0 && statusbar==="true") {
    alert("ĐƯỢC PHÉP MƯỢN SÁCH")
    book="ĐƯỢC PHÉP MƯỢN SÁCH";

    
} else {
    if (role!=="admin" && role!=="student") {
        error+=" Lỗi vai trò"
        
    }
    if(statusbar!=="true"){
        error+=" Tài khoản đã bị khoá"
    }
    book="YÊU CẦU MƯỢN SÁCH BỊ TỪ CHỐI VÌ CÁC LÝ DO SAU:" 
        + error 
}

if (day==0 ) {
    alert("Cảm ơn bạn đã trả đúng hạn")
    day="Cảm ơn bạn đã trả sách đúng hạn"
    
} else if (day >= 1 && day <= 5){
    alert("Tiền phạt của bạn là: " + day*5000 + "đ")
    fine = day*5000 + "VNĐ";
    day="Quá hạn " + day + " ngày"
    
}else if (day >= 6 && day <= 10){
    alert("Tiền phạt của bạn là: " + day*10000 + "đ")
    fine = day*10000 + "VNĐ";
    day="Quá hạn " + day + " ngày"
    
}else {
    alert("Tiền phạt của bạn là 200.000đ và TÀI KHOẢN BỊ KHOÁ")
    statusbar="Tài khoản bạn đã bị khoá"
    fine="200000 VNĐ"
    day="Quá hạn " + day + " ngày"
}
if (statusbar==="true") {
    statusbar="Tài khoản bạn đang hoạt động"
}else {
    statusbar="Tài khoản bạn đã bị khoá"
}

console.log(`
    --- HỆ THỐNG MƯỢN TRẢ ---

Người dùng: ${fullName}

Quyền hạn: ${power}

Kết quả mượn: ${book}

Tình trạng trả sách: ${day} 

Tiền phạt: ${fine}

Trạng thái tài khoản : ${statusbar}


    `)



