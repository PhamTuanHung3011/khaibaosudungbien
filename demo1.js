// Hàm xử lý khi thẻ select thay đổi giá trị được chọn
// obj là tham số truyền vào và cũng chính là thẻ select
function genderChanged(obj)
{
    var message = document.getElementById('show_message');
    var value = obj.value;
    if (value === ''){
        message.innerHTML = "Bạn chưa chọn giới tính";
    }
    else if (value === 'nam'){
        message.innerHTML = "Bạn đã chọn giới tính nam";
    }
    else if (value === 'nu'){
        message.innerHTML = "Bạn đã chọn giới tính nữ";
    }
}