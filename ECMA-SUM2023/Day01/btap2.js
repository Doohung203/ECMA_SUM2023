const doDai = prompt ("Nhap do dai chuoi");
if (doDai >= 10 && doDai <= 15){
    console.log ("Chuoi tam duoc");
}else if (doDai >= 0 && doDai < 10 ){
    console.log ("Nho qua khong mua");
}else if (doDai < 0 ){
    console.log ("Be qua khong mua");
}else{
    console.log ("chuoi  khung, mua ngay");
}