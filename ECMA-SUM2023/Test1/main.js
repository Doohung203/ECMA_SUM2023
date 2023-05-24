const product = ["mescedes", "audi", "ford", "lamborghini"];

console.log(product);
const showProduct = () =>{
    if(product == ""){
        console.log("không có sản phẩm để hiển thị")
    }else{
        console.log(product)
    }
}
showProduct()

function addProduct() {
    var productName;
    do {
      productName = prompt("Nhập tên sản phẩm:");
      if (productName.length < 5) {
        console.log("Nhập lại tên sản phẩm ");
      }
    } while (productName.length < 5);
  
    product.push(productName);
    console.log(product);
  }
addProduct()

const removeProduct = () =>{
    const nameProductRemove = prompt("Nhập tên sản phẩm cần xóa");
    const index = product.indexOf(nameProductRemove);
    if(index !== -1){
        product.splice(index, 1);
        console.log(product)   
    }else{
        console.log("Không tìm thấy sản phẩm cần xóa")
    }
}
