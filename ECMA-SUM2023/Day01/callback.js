const url = "https://ap.poly.edu.vn/sinh-vien/lich-thi";

const loadScript = (src,callback) => {
    const script = document.createElement('script');
    script.src = src;
    
    script.onload = () => {
        callback()
    }
    document.head.append(script)
}
loadScript(url , (script) => {
    console.log("load succesful", script)
});