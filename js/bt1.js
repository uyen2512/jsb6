//BÀI 1
function soNhoNhat(){
    var tong = 0;
    var i = 0;

    while (tong < 10000) {
        i++;
        tong +=i;
    }
    console.log(tong, i)
    document.getElementById("btnSoDuongNhoNhat").innerHTML = i;

}