function checklogin(){
    if(document.flogin.n.value==''){
        alert("Bạn chưa nhập Họ tên");
        document.flogin.n.focus();
        return false;
    }
    if(document.flogin.a.value==''){
        alert("Bạn chưa nhập địa chỉ");
        document.flogin.a.focus();
        return false;
    }
    if(document.flogin.e.value==''){
        alert("Bạn chưa nhập email");
        document.flogin.e.focus();
        return false;
    }
    if(document.flogin.p.value==''){
        alert("Bạn chưa nhập password");
        document.flogin.p.focus();
        return false;
    }
    else if(document.flogin.p.value.length != 6){
        alert("Mật khẩu không đúng 6 kí tự");
        document.flogin.p.focus();
        return false;
       
    }
     return true;
}
function checklogin1(){
    if(document.flogin1.e.value==''){
        alert("Bạn chưa nhập email");
        document.flogin1.e.focus();
        return false;
    }
    if(document.flogin1.p.value==''){
        alert("Bạn chưa nhập password");
        document.flogin1.p.focus();
        return false;
    }
    else if(document.flogin1.p.value.length != 6){
        alert("Mật khẩu không đúng 6 kí tự");
        document.flogin1.p.focus();
        return false;
       
    }
     return true;
}
