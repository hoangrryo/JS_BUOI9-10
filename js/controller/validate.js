function kiemTraDoDai(value, idErr , min , max)
{
    var leng = value.length;
    console.log(leng);
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
    console.log(index);
    if(index == -1)
    {
        document.getElementById('tbTKNV').style.display = `none`;
        return isValid = true;
    }
    else
    {
        document.getElementById('tbTKNV').style.display = `block`;
        document.getElementById('tbTKNV').innerHTML = `Nhân viên đã tồn tại`
        return isValid = false;
    }
}