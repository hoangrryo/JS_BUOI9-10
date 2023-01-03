var nhanVien = [];
var isValid = true;
//lấy data từ local storage
var nhanVienJSON = localStorage.getItem("NHANVIEN");
nhanVien = getDataFromJSON(nhanVienJSON);
renderToTable(nhanVien);


function themNhanVien() {
    var nv = layThongTinTuForm();
    isValid = kiemTraTrung(nv, nhanVien) && kiemTraDoDai(nv.tknv,'tbTKNV',4,6);
    if(isValid)
    {
        nhanVien.push(nv);
        addDataToJSON(nhanVien);
        var JSONcontent = localStorage.getItem("NHANVIEN");
        nhanVien = getDataFromJSON(JSONcontent);
        renderToTable(nhanVien);
    }
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

function capnhatNhanVien()
{
    var nv = layThongTinTuForm();
    var check = -1;
    for (var i=0 ; i<nhanVien.length ; i++)
    {
        if(nhanVien[i].tknv == nv.tknv)
        {
            nhanVien[i] = nv;
            check = 1;
            alert('Cập nhật thành công');
            break;
        }
    }
    if(check == -1)
    {
        alert('Nhân viên không tồn tại');
    }
    else
    {
    addDataToJSON(nhanVien);
    var JSONcontent = localStorage.getItem("NHANVIEN");
    nhanVien = getDataFromJSON(JSONcontent);
    renderToTable(nhanVien);
    }
}