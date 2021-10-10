let bankinh;

while (!bankinh){
    bankinh = prompt("Hay nhap ban kinh: ");
}

let bank = parseInt(bankinh);

let chuvi = 2 * bank * Math.PI
document.write("Chu vi duong tron la: " + chuvi);