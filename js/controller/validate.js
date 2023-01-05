function kiemTraDoDai(value, idErr , min , max)
{
    var leng = value.length;
    if(leng >= 4 && leng <=6)
    {
        document.getElementById(idErr).style.display = `block`;
        document.getElementById(idErr).innerHTML = ``;
        return true;
    }
    else
    {
        document.getElementById(idErr).style.display = `block`;
        document.getElementById(idErr).innerHTML = `Tài khoản phải từ ${min} đến ${max} kí tự`;
        return isValid = false;
    }
}

function kiemTraTrung(nv, arrNV)
{
    var index = arrNV.findIndex(function(item){
        return nv.tknv == item.tknv;
    })
    if(index == -1)
    {
        document.getElementById('tbTKNV').style.display = `block`;
        document.getElementById('tbTKNV').innerHTML = ``;
        return true;
    }
    else
    {
        document.getElementById('tbTKNV').style.display = `block`;
        document.getElementById('tbTKNV').innerHTML = `Nhân viên đã tồn tại`;
        return false;
    }
}

function kiemTraSo(value, idErr)
{
    var reg = /^\d+$/;
    var isNumber = reg.test(value);
    if(isNumber)
    {
        return true;
    }
    else
    {
        document.getElementById(idErr).style.display = `block`;
        document.getElementById(idErr).innerText = `Trường này phải là số`;
        return false;
    }
}


function kiemTraEmail(value)
{
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isEmail = reg.test(value);
    if(isEmail)
    {
        document.getElementById('tbEmail').style.display = `none`;
        return true;
    }
    else
    {
        document.getElementById('tbEmail').style.display = `block`;
        document.getElementById('tbEmail').innerHTML = `Email không hợp lệ`;
        return false;
    }
}

function kiemTraChu(value)
{
    var isText = true;
    var reg1 = /[\u0041-\u005A\u0061-\u007A\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]+/;
    var reg2 = /^[^\d!@#$%^&*<>,/?+='"]+$/;
    isText = reg1.test(value) && reg2.test(value);
    if (isText)
    {
        document.getElementById('tbTen').style.display = `none`;
        return true;
    }
    else
    {
        document.getElementById('tbTen').style.display = `block`;
        document.getElementById('tbTen').innerText = `Trường này phải là chữ`;
        return false;
    }
}

function kiemTraMatKhau(value)
{
    const reg = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    var isPassword = reg.test(value);
    if (isPassword)
    {
        document.getElementById('tbMatKhau').style.display = `none`;
        return true;
    }
    else
    {
        document.getElementById('tbMatKhau').style.display = `block`;
        document.getElementById('tbMatKhau').innerText = `Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa và 1 kí tự đặc biệt`;
        return false;
    }
}

function kiemTraLuongCB(value)
{
    if(value >=1000000 && value <=20000000)
    {
        document.getElementById('tbLuongCB').style.display = `none`;
        return true;
    }
    else
    {
        document.getElementById('tbLuongCB').style.display = `block`;
        document.getElementById('tbLuongCB').innerText = `Lương cơ bản phải từ 1.000.000 tới 20.000.000`;
        return false;
    }
}

function kiemTraNgay(value)
{
    var reg = /^(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[13-9]|1[0-2])(\/|-|\.)(?:29|30))\2|(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    var isDate = reg.test(value);
    if(isDate)
    {
        document.getElementById('tbNgay').style.display = `none`;
        return true;
    }
    else
    {
        document.getElementById('tbNgay').style.display = `block`;
        document.getElementById('tbNgay').innerText = `Vui lòng nhập ngày, định dạng mm/dd/yyyy`;
        return false;
    }
}

function kiemTraChucVu(value)
{
    if(value === "Chọn chức vụ")
    {
        document.getElementById('tbChucVu').style.display = `block`;
        document.getElementById('tbChucVu').innerText = `Chưa chọn chức vụ`;
        return false;
    }
    else
    {
        document.getElementById('tbChucVu').style.display = `none`;
        return true;
    }
}

function kiemTraGioLam(value)
{
    if(value >=80 && value <=200)
    {
        document.getElementById('tbGiolam').style.display = `none`;
        return true;
    }
    else
    {
        document.getElementById('tbGiolam').style.display = `block`;
        document.getElementById('tbGiolam').innerText = `Giờ làm phải từ 80 đến 200 giờ`;
        return false;
    }
}

function validateAll(nv, nhanVien)
{
    var isValid = true;
    isValid = kiemTraTrung(nv, nhanVien) && kiemTraDoDai(nv.tknv, 'tbTKNV',4,6) && kiemTraSo(nv.tknv, 'tbTKNV');
    isValid = isValid & kiemTraChu(nv.name);
    isValid =  isValid & kiemTraEmail(nv.email);
    isValid =  isValid & kiemTraMatKhau(nv.password);
    isValid =  isValid & kiemTraLuongCB(nv.luongCB);
    isValid =  isValid & kiemTraNgay(nv.datepicker);
    isValid =  isValid & kiemTraChucVu(nv.chucvu);
    isValid =  isValid & kiemTraGioLam(nv.giolam);
    return isValid;
}