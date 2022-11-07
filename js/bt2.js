//BÀI 2

function tinhTong() {
    var soX = Number(document.getElementById("soX").value);
    var soN = Number(document.getElementById("soN").value);
    var tong = 0;
    var luyThua = 1;
    for (var i = 1; i <= soN; i++) {
        luyThua = Math.pow(soX, i);
        tong += luyThua;
    }
    document.getElementById("btnTinhTong").innerHTML = tong;
}