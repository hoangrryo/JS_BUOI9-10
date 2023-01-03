

var nhanVien = [];
//lấy data từ local storage
var nhanVienJSON = localStorage.getItem("NHANVIEN");
nhanVien = getDataFromJSON(nhanVienJSON);
renderToTable(nhanVien);


function themNhanVien() {
    console.log('nhan vien = ',nhanVien);
    var nv = layThongTinTuForm();
    console.log('nv = ',nv);
    console.log('typeof nhanvien = ',typeof nhanVien);
    nhanVien.push(nv);
    console.log('nhan vien = ',nhanVien);
    addDataToJSON(nhanVien);
    var JSONcontent = localStorage.getItem("NHANVIEN");
    nhanVien = getDataFromJSON(JSONcontent);
    renderToTable(nhanVien);
}

function xoaNhanVien(taikhoanNV){
    var viTri = -1;
    nhanVien.map(function(item)
    {
        if(item.tknv == taikhoanNV)
        {
            viTri = nhanVien.indexOf(item);
            nhanVien.splice(viTri,1);
            addDataToJSON(nhanVien);
            var JSONcontent = localStorage.getItem("NHANVIEN");
            nhanVien = getDataFromJSON(JSONcontent);
            renderToTable(nhanVien);
        }
    })
}