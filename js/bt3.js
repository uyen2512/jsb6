//BÀI 3

function tinhGiaiThua() {
    var soGiaiThua = Number(document.getElementById("soGT").value);
    var tongGiaiThua = 1;
    for (var i = 1; i <= soGiaiThua; i++) {
        tongGiaiThua *= i;
    }
    document.getElementById("btnGiaiThua").innerHTML = tongGiaiThua;
}