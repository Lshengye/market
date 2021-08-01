
function Switch(name) {
    var pass = document.getElementById(name);
    var btn = pass.getElementsByClassName('switch')[0];
    var rock = pass.getElementsByTagName('span')[0];
    var inp = pass.getElementsByTagName('input')[0];
    var off = false;
    btn.onclick = function () {
        if (off) {
            btn.style.backgroundColor = 'red';
            rock.style.marginLeft = '4vh';
            rock.style.boxShadow = 'none';
            inp.type = 'text'
        } else {
            btn.style.backgroundColor = '#fff';
            rock.style.marginLeft = '0';
            rock.style.boxShadow = ' 0 .5vh 1vh #a8a8a8';
            inp.type = 'password';
        }
        off = !off;
    }
}
Switch('password');

function Timer(id) {
    let btn = document.getElementById(id);
    let time = 10;
    btn.disabled = true;
    // console.log(tele.value.length)
    btn.onclick = function aa() {
        if (time > 0) {
            btn.disabled = true;
            btn.value = '重新获取(' + time + ')';
            time--;
            setTimeout(function () {
                aa();
            }, 1000)
        } else {
            btn.disabled = false;
            time = 10;
            btn.value = '获取短信验证码';
        }
    }
    let tele = document.getElementById('tele');
    tele.onkeyup = function () {
        if (tele.value.length == 11) {
            btn.style.border = '1px solid red';
            btn.style.backgroundColor = '#fff';
            btn.style.color = '#ff0000';
            btn.disabled = false;
        } else {
            btn.disabled = true;
            btn.style.border = 'none';
            btn.style.backgroundColor = '#f2f2f2';
            btn.style.color = 'rgb(87, 87, 87)'
        }
    }

}
Timer('check');

var img = document.getElementsByClassName('img')[0];
img.onclick = function () {
    window.location.reload();
}


$('#submit').click(() => {
    setTimeout(() => {
        $('.tip').hide();
    },2000);
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://vueshop.glbuys.com/api/home/user/reg?token=1ec949a15fb709370f",
        data: {
            'cellphone': $('#tele').val(),
            'password': $('#password input').val(),
        },
        success: function (data) {
            if (data.code == 302) {
                console.log(data);
                $('.tip').show().html(data.data);
            } else if ($('.code input').val() == '') {
                $('.tip').show().html('请输入手机验证码');
            } else {
                console.log(data);
                $(location).prop('href', 'http://localhost:3000/html/login.html')
            }
        }
    })
    
})






