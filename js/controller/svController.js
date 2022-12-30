function getDataFromInput(){

    //Lấy thông tin nhân viên nhập từ web
    var _tknv = document.getElementById('tknv').value;
    var _name = document.getElementById('name').value;
    var _email = document.getElementById('email').value;
    var _password = document.getElementById('password').value;
    var _datepicker = document.getElementById('datepicker').value;
    var _luongCB = document.getElementById('luongCB').value*1;
    var _chucvu = document.getElementById('chucvu').value;
    var _gioLam = document.getElementById('gioLam').value*1;

    //Tạo object nv
    var nv =
    {
    tknv: _tknv,
    name: _name,
    email: _email,
    password: _password,
    datepicker: _datepicker,
    luongCB: _luongCB,
    chucvu: _chucvu,
    giolam: _gioLam,
    }

    //Trả về object nv
    return nv;
}

function createDataTable(arr){
    
    
}

function renderToTable(arrNV){
    var itemTr = "";
    arrNV.map(function(item){
        var contentTr = `<tr>
                    <td>${item.tknv}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.datepicker}</td>
                    <td>${item.chucvu}</td>
                    <td>${item.giolam}</td>
                    <td>
                        <button onclick="xoaNhanVien('${item.tknv}')" class="px-1 btn-danger">Xóa</button>
                    </td>
                    </tr>`;
        itemTr += contentTr;
    });
    document.getElementById('tableDanhSach').innerHTML = itemTr;
}

function addDataToJSON(arr){
    //convert nhanVien to JSON de luu vao local storage
    var nhanVienJSON = JSON.stringify(arr);
    //luu data JSON vao local storage
    localStorage.setItem("NHANVIEN", nhanVienJSON);
}

function getDataFromJSON(nhanvienJSON){
    if(nhanvienJSON!=null)
    {
        var temp = JSON.parse(nhanvienJSON);
    }
    return temp;
}
