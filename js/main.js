var donGia_1 = 0;
var donGia_2 = 0;
var donGia_3 = 0;
var tienCho = 0;
function layLoaiXe(){
    var loaiXe = "";
    var grabCar = document.getElementById("grabCar").checked;
    var grabSUV = document.getElementById("grabSUV").checked;
    var grabBlack = document.getElementById("grabBlack").checked;
    if(grabCar == true){
        loaiXe = "grabCar";
    } else if (grabSUV == true){
        loaiXe = "grabSUV";
    } else if (grabBlack == true){
        loaiXe = "grabBlack";
    } else if (grabCar == false && grabSUV == false &&  grabBlack == false) {
        alert("Vui long chon loai xe");
    }
    return loaiXe;
}

function layDonGia(loaiXe){
    if(loaiXe == "grabCar"){
        donGia_1 = 8000;
        donGia_2 = 12000;
        donGia_3 = 10000;
        tienCho = 2000;
    }else if (loaiXe == "grabSUV"){
        donGia_1 = 9000;
        donGia_2 = 14000;
        donGia_3 = 12000;
        tienCho = 3000;
    }else if (loaiXe == "grabBlack"){
        donGia_1 = 10000;
        donGia_2 = 16000;
        donGia_3 = 14000;
        tienCho = 4000;
    }
    return donGia_1,donGia_2,donGia_3,tienCho;
}

function tinhTien(typeCar,soKM,time){
    var tongTien = 0;
    if(typeCar == "grabCar") {    
        donGia_1 = 8000;
        donGia_2 = 12000;
        donGia_3 = 10000;
        if(soKM <= 1){
            tongTien = soKM*donGia_1 + time*2000;
        }else if(soKM > 1 && soKM <=20){
            tongTien = donGia_1 + (soKM-1)*donGia_2 + time*2000;
        }else if(soKM >20){
            tongTien = donGia_1 + 19*donGia_2 + (soKM - 20)*donGia_3 + time*2000;
        }
        
    }
    if(typeCar == "grabSUV") {
        donGia_1 = 9000;
        donGia_2 = 14000;
        donGia_3 = 12000;
        if(soKM <= 1){
            tongTien = soKM*donGia_1 + time*3000;
        }else if(soKM > 1 && soKM <=20){
            tongTien = donGia_1 + (soKM-1)*donGia_2 + time*3000;
        }else if(soKM >20){
            tongTien = donGia_1 + 19*donGia_2 + (soKM - 20)*donGia_3 + time*3000;
        }donGia_2
        
    }
    if(typeCar == "grabBlack") {
        donGia_1 = 10000;
        donGia_2 = 16000;
        donGia_3 = 14000;
        if(soKM <= 1){
            tongTien = soKM*donGia_1 + time*4000;
        }else if(soKM > 1 && soKM <=20){
            tongTien = donGia_1 + (soKM-1)*donGia_2 + time*4000;
        }else if(soKM >20){
            tongTien = donGia_1 + 19*donGia_2 + (soKM - 20)*donGia_3 + time*4000;
        }
        
    }
    return tongTien;
}

document.getElementById("btnTinhTien").addEventListener("click",function(){
    var soKM = document.getElementById("soKM").value*1;
    var tgCho = document.getElementById("thoiGianCho").value*1;
    if(soKM == "" || tgCho == "") {
        alert("Vui long nhap so KM || thoi gian cho");
    }
    var loaiXe = layLoaiXe();
    var tongTien = tinhTien(loaiXe,soKM,tgCho);

    document.getElementById("divThanhTien").style.display = "block";
    var spanTien = document.getElementById("xuatTien");
    spanTien.innerHTML = tongTien;
});

document.getElementById("btnHoaDon").onclick = function() {
    var soKM = document.getElementById("soKM").value*1;
    var tgCho = document.getElementById("thoiGianCho").value*1;
    if(soKM == "" || tgCho == "") {
        alert("Vui long nhap so KM || thoi gian cho");
    }
    var loaiXe = layLoaiXe();
    layDonGia(loaiXe);
    var tongTien = tinhTien(loaiXe,soKM,tgCho);

    var td = document.getElementsByTagName("td");
    td[0].innerHTML = loaiXe;
    td[1].innerHTML = 1 + "km";
    td[2].innerHTML = donGia_1;
    td[3].innerHTML = donGia_1;
    if (soKM == 1) {
      td[4].innerHTML = "";
      td[5].innerHTML = "";
      td[6].innerHTML = "";
      td[7].innerHTML = "";
      td[8].innerHTML = "";
      td[9].innerHTML = "";
      td[10].innerHTML = "";
      td[11].innerHTML = "";
    }
    if (soKM > 1 && soKM <= 20) {
      td[4].innerHTML = loaiXe;
      td[5].innerHTML = soKM - 1 + "km";
      td[6].innerHTML = donGia_2;
      td[7].innerHTML = donGia_2 * (soKM - 1);
      td[8].innerHTML = "";
      td[9].innerHTML = "";
      td[10].innerHTML = "";
      td[11].innerHTML = "";
    }
    if (soKM > 20) {
      td[4].innerHTML = loaiXe;
      td[5].innerHTML = 19 + "km";
      td[6].innerHTML = donGia_2;
      td[7].innerHTML = donGia_2 * 19;
      td[8].innerHTML = loaiXe;
      td[9].innerHTML = soKM - 20 + "km";
      td[10].innerHTML = donGia_3;
      td[11].innerHTML = donGia_3 * (soKM - 20);
    }
    td[12].innerHTML = "Thời gian chờ";
    td[13].innerHTML = tgCho + "phút";
    td[14].innerHTML = tienCho;
    td[15].innerHTML = tienCho * tgCho;
    td[16].innerHTML = "Total";
    td[19].innerHTML = tongTien;
    document.getElementById("xuatTien").innerHTML = tongTien;
  }


