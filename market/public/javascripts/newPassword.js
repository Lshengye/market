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

var member = JSON.parse(window.localStorage.getItem('member'))//token,会员名,uid
console.log(member)

$('button').click(()=>{
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://vueshop.glbuys.com/api/home/user/modpwd?token=386777c139fd9e2ac5",
        data: {
            uid: member[2],
            pwd:$('#password input').val()
        },
        success: function (data) {
            console.log(data)
        }
    })
})
