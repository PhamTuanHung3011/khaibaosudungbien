/*
 noinspection JSCheckFunctionSignatures
*/

let bankinh;

while (!bankinh){
    bankinh= prompt("Hay nhap ban kinh hinh tron");
}

let bk=parseInt(bankinh);


let dienTich = ((bk*bk)*Math.PI);
document.write("Dien tich hinh tron la: "+ dienTich);
