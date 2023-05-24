const  tenNv = prompt ("mời nhập tên nhân viên");
const mucLuong = 0
if(mucLuong <= 0 ){
    console.log("Lương không được nhỏ hơn 0");
}else{
    console.log("Tên nhân viên :" + tenNv);
    let tongLuong = 0;
    for(i = 0; i < 12; i++){
        tongLuong += mucLuong;
    }
    console.log("Tổng lương 12 tháng: " +tongLuong);

    if(tongLuong > 0 && tongLuong <= 100){
        console.log("Bạn nghèo vậy");
    }else if(tongLuong >= 100 && tongLuong <= 200){
        console.log ("Cũng đủ sống rồi đấy");
    }else if (tongLuong > 200 && tongLuong < 400){
        console.log ("Ghê thế ông ơi");
    }else{
        console.log ("Ông giàu vãi");
    }
}