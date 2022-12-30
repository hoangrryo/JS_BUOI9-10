var nhanVien = [];
//lấy data từ local storage
var nhanVienJSON = localStorage.getItem("NHANVIEN");
nhanVien = getDataFromJSON(nhanVienJSON);
renderToTable(nhanVien);


function themNhanVien() {
    var nv = getDataFromInput();
    nhanVien.push(nv);
    addDataToJSON(nhanVien);
    var JSONcontent = localStorage.getItem("NHANVIEN");
    nhanVien = getDataFromJSON(JSONcontent);
    renderToTable(nhanVien);
}

function xoaNhanVien(taikhoanNV){
    var viTri = -1;
    nhanVien.map(function(item){
        if(item.tknv == taikhoanNV)
        {
            viTri = nhanVien.indexOf(item);
        }
    })
    if (viTri!=-1)
    {
        nhanVien.splice(viTri,1);
        addDataToJSON(nhanVien);
        var JSONcontent = localStorage.getItem("NHANVIEN");
        nhanVien = getDataFromJSON(JSONcontent);
        renderToTable(nhanVien);
    }
}

function capnhatNhanVien(){
     var newNV = getDataFromInput();
     var viTri = -1;
     for (var i=0 ; i < nhanVien.length ; i++)
     {
        var item = nhanVien[i];
        if (item.tknv == newNV.tknv)
        {
            viTri = i;
            break;
        }
     }
     if (viTri!=-1)
     {
        nhanVien[viTri] = newNV
        addDataToJSON(nhanVien);
        var JSONcontent = localStorage.getItem("NHANVIEN");
        getDataFromJSON(JSONcontent);
        renderToTable(nhanVien);
     }
     else
     {
        alert('Nhân viên này chưa có trong hệ thống');
     }
}
