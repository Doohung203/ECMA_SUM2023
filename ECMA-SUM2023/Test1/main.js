const product = ["mescedes", "audi" , "ford" , "lamborghini"];

// console.log(product);
// const showProduct = () =>{
//     if(product == ""){
//         console.log("không có sản phẩm để hiển thị")
//     }else{
//         console.log(product)
//     }
// }
// showProduct()

// const addProduct = () =>{
//     const nameProduct = prompt("Nhập tên sản phẩm");
//     // do{
//     //     nameProduct = prompt("Nhập lại tên sản phẩm");
//     // }while(nameProduct.length < 5)
//     if(nameProduct.length < 5){
//         nameProduct = prompt("Nhập lại tên sản phẩm");
//     }else{
//         product.push(nameProduct);
//     }
//    showProduct()
// }
// addProduct()

const removeProduct = () =>{
    const nameProductRemove = prompt("Nhập tên sản phẩm cần xóa");
    if(true){
        nameProductRemove = product.filter(item => item !== product)
        console.log(product);
    }else{
        console.log("Không tìm thấy sản phẩm cần xóa")
    }
}
removeProduct()