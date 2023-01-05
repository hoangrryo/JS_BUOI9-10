var nhanVien = [];
var isValid = true;
//lấy data từ local storage
var nhanVienJSON = localStorage.getItem("NHANVIEN");
nhanVien = getDataFromJSON(nhanVienJSON);
renderToTable(nhanVien);


function themNhanVien() {
    var nv = layThongTinTuForm();
    isValid = validateAll(nv, nhanVien);
    if(isValid)
    {
        nhanVien.push(nv);
        addDataToJSON(nhanVien);
        var JSONcontent = localStorage.getItem("NHANVIEN");
        nhanVien = getDataFromJSON(JSONcontent);
        renderToTable(nhanVien);
        alert('thêm thành công');
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
    var isValid = true;
    var nv = layThongTinTuForm();
    var check = -1;
    for (var i=0 ; i<nhanVien.length ; i++)
    {
        if(nhanVien[i].tknv == nv.tknv)
        {
            if(nv.name!=null)
            {
                isValid = kiemTraChu(nv.name);
                if(isValid)
                {
                    nhanVien[i].name = nv.name;
                }
            }
            if(nv.email!=null)
            {
                isValid = kiemTraEmail(nv.email);
                if(isValid)
                {
                    nhanVien[i].email = nv.email;
                }
            }
            if(nv.password!=null)
            {
                isValid = kiemTraMatKhau(nv.password);
                if(isValid)
                {
                    nhanVien[i].password = nv.password;
                }
            }
            if(nv.luongCB!=null)
            {
                isValid = kiemTraLuongCB(nv.luongCB);
                if(isValid)
                {
                    nhanVien[i].luongCB = nv.luongCB;
                }
            }
            if(nv.datepicker!=null)
            {
                isValid = kiemTraNgay(nv.datepicker);
                if(isValid)
                {
                    nhanVien[i].datepicker = nv.datepicker;
                }
            }
            if(nv.chucvu!=null)
            {
                isValid = kiemTraChucVu(nv.chucvu);
                if(isValid)
                {
                    nhanVien[i].chucvu = nv.chucvu;
                }
            }
            if(nv.giolam!=null)
            {
                isValid = kiemTraGioLam(nv.giolam);
                if(isValid)
                {
                    nhanVien[i].giolam = nv.giolam;
                }
            }
            if(nv.datepicker!=null)
            {
                nhanVien[i].datepicker = nv.datepicker;
            }
            check = 1;
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

// function searchNV()
// {
    
//     timLoaiNhanVien()
// }