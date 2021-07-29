function Timer(id) {
    let btn = document.getElementById(id);
    let time = 10;
    // btn.disabled = true;
    btn.onclick = function aa() {
        if (time > 0) {
            btn.disabled = true;
            btn.innerText = '重新获取(' + time + ')';
            time--;
            setTimeout(function () {
                aa();
            }, 1000)
        } else {
            btn.disabled = false;
            time = 10;
            btn.innerText = '获取短信验证码';
        }
    }
    let tele = document.getElementById('tele');
    tele.onfocus = function () {
        tele.onkeyup = function () {
            if (tele.value.length == 11) {
                btn.style.color = '#ff0000';
                btn.disabled = false;
            } else {
                btn.disabled = true;
                btn.style.color = '#666';
            }
        }
    }

}
Timer('btn');