function getEle(id) {
    return document.getElementById(id);
}

function calculator() {
    var tongBill = getEle("billamt").value;
    var dichvu = getEle("serviceQual").value;
    var tienshare = getEle("peopleamt").value;

    // Validation
    if (tongBill === "" || dichvu == 0) {
        alert("Vui lòng nhập giá trị");
        return;
    }
    // Kiểm tra có nhập số người share vào tip hay ko?
    if (tienshare === "" || tienshare <= 1) {
        tienshare = 1;
        getEle("each").style.display = "none";
    } else {
        getEle("each").style.display = "block";
    }
    // tính toán
    var tongTip = (tongBill * dichvu) / tienshare;
    // làm tròn đến thập phân 2 chữ số
    tongTip = Math.round(tongTip * 100) / 100;
    // Đảm bảo lúc nào cũng có 2 chữ số thập phân
    tongTip = tongTip.toFixed(2);
    // Hiện thị vùng div tiền tip
    getEle("totalTip").style.display = "block";
    getEle("tip").innerHTML = tongTip;
}

// ban đầu ẩn đi
getEle("totalTip").style.display = "none";
getEle("each").style.display = "none";

getEle("calculate").onclick = function() {
    calculator();
};