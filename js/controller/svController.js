function layThongTinTuForm(){

    //Lấy thông tin nhân viên nhập từ web
    var _tknv = document.getElementById('tknv').value;
    var _name = document.getElementById('name').value;
    var _email = document.getElementById('email').value;
    var _password = document.getElementById('password').value;
    var _datepicker = document.getElementById('datepicker').value;
    var _luongCB = document.getElementById('luongCB').value*1;
    var _chucvu = document.getElementById('chucvu').value;
    var _gioLam = document.getElementById('gioLam').value*1;

    //Tạo Object và gán những thông tin đã lấy ở trên vào Object nhanVien
    var nv = new classNV(_tknv, _name, _email, _password, _datepicker, _luongCB, _chucvu, _gioLam);
    return nv;
}

function renderToTable(arrNV){
    var itemTr = "";
    arrNV.map(function (item)
    {
        contentTr = `<tr>
                    <td>${item.tknv}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.datepicker}</td>
                    <td>${item.chucvu}</td>
                    <td>${item.tongLuong()}</td>
                    <td>${item.xepLoai()}</td>
                    <td>
					    <button onclick="xoaNhanVien(${item.tknv})" class="px-1 btn-danger">Xóa</button>
				    </td>
                    </tr>`
        itemTr += contentTr 
    })
    document.getElementById('tableDanhSach').innerHTML = itemTr;
}

function addDataToJSON(arr){
    //convert nhanVien to JSON de luu vao local storage
    var nhanVienJSON = JSON.stringify(arr);
    //luu data JSON vao local storage
    localStorage.setItem("NHANVIEN", nhanVienJSON);
}

function getDataFromJSON(nhanvienJSON){
    var dsnv = [];
    if(nhanvienJSON!=null)
    {
        var arrtemp = JSON.parse(nhanvienJSON);
        arrtemp.map(function(item){
            var nv = new classNV(item.tknv, item.name, item.email, item.password, item.datepicker, item.luongCB, item.chucvu, item.giolam);
            dsnv.push(nv);
        })
        return dsnv;
    }
    else
    {
        return dsnv;
    }
}