//BÀI 4

function tinhTaoThe() {
    var inDiv = "";
    for (var i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            var div = '<div class="mt-2 alert bg-primary">Div chẵn</div>'
            inDiv += div;
        } else if (i % 2 != 0) {
            var div = '<div class="mt-2 alert bg-danger">Div lẻ</div>'
            inDiv += div;
        }
    }
    document.getElementById("taoDiv").innerHTML = inDiv;
}