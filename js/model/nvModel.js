class classNV
{
    constructor(_tknv, _name, _email, _password, _datepicker, _luongCB, _chucvu, _giolam)
    {
        this.tknv = _tknv;
        this.name = _name;
        this.email = _email;
        this.password = _password;
        this.datepicker = _datepicker;
        this.luongCB = _luongCB;
        this.chucvu = _chucvu;
        this.giolam = _giolam;
        this.tongLuong = function()
        {
            if (this.chucvu === "Sếp")
            {
                return(this.luongCB*3);
            }
            else if (this.chucvu === "Trưởng phòng")
            {
                return(this.luongCB*2);
            }
            else if (this.chucvu === "Nhân viên")
            {
                return this.luongCB;
            }
        };
        this.xepLoai = function()
        {
            if (this.giolam > 0 && this.giolam < 160)
            {
                return `Trung Bình`
            }
            if (this.giolam >= 160 && this.giolam < 176)
            {
                return `Khá`
            }
            if (this.giolam >= 176 && this.giolam < 192)
            {
                return `Giỏi`
            }
            if (_giolam >= 192)
            {
                return `Xuất Sắc`
            }
        }
    }
}
