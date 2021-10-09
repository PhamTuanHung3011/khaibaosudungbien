let diemvatly;
let diemhoa;
let diemsinh;

while (!diemvatly || !diemhoa || !diemsinh ){
    diemvatly = prompt("Hãy nhập điểm Vật Lý của bạn");
    diemhoa = prompt("Hãy nhập điểm Hóa Học của bạn");
    diemsinh = prompt("Hãy nhập điểm Sinh Học của bạn");
}


let vatly= parseInt(diemvatly);
let hoa = parseInt(diemhoa);
let sinh = parseInt(diemsinh);

       let diemtrungbinh = (vatly + hoa + sinh)/3;
       let tongdiem = (vatly + hoa + sinh);
       document.write("Điểm vật lý của bạn là: "+ vatly+ "<br/>");
       document.write("Điểm hóa của bạn là: "+ hoa+ "<br/>");
       document.write("Điểm sinh học của bạn là: "+ sinh+ "<br/>");
       document.write("Điểm trung bình 3 môn của bạn là: "+ diemtrungbinh+ "<br/>");
       document.write("Tổng điểm 3 môn của bạn là: " + tongdiem+ "<br/>");

