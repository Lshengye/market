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
    btn.disabled=true;
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
    let test=document.getElementById('test');
    test.onfocus = function () {
        tele.onkeyup = function () {
            if (tele.value.length == 11&&test.value!='') {
                btn.style.border = '1px solid red';
                btn.style.backgroundColor = '#fff';
                btn.style.color = '#ff0000';
                btn.disabled = false;
            } else {
                btn.disabled = true;
                btn.style.border = 'none';4
                btn.style.backgroundColor = '#f2f2f2';
                btn.style.color='rgb(87, 87, 87)'
            }
        }
    }

}
Timer('check');

var img=document.getElementsByClassName('img')[0];
img.onclick=function(){
    window.location.reload();
}



