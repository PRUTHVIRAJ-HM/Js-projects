let content = document.getElementById("pho");
let qrcode =document.getElementById("qrcode");




function genqr(){
    qrcode.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+content.value;
    document.querySelector("#qrcode").classList.add(".cssvalue");
}