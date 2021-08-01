function Switch(name){
    var pass=document.getElementById(name);
    var btn=pass.getElementsByClassName('switch')[0];
    var rock=pass.getElementsByTagName('span')[0];
    var inp=pass.getElementsByTagName('input')[0];
    var off=false;
    btn.onclick=function(){
        if(off){
            btn.style.backgroundColor='red';
            rock.style.marginLeft='4vh';
            rock.style.boxShadow='none';
            inp.type='text'
        }else{
            btn.style.backgroundColor='#fff';
            rock.style.marginLeft='0';
            rock.style.boxShadow=' 0 .5vh 1vh #a8a8a8';
            inp.type='password';
        }
        off=!off;
    }
}

Switch('password');

var back=document.getElementsByClassName('back')[0];
back.onclick=function(){
    window.history.back();
}

$('#submit').click(()=>{
    setTimeout(() => {
        $('.talk').hide();
    },2000);
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://vueshop.glbuys.com/api/home/user/pwdlogin?token=1ec949a15fb709370f",
        data: {
            'cellphone': $('#tele').val(),
            'password': $('#password input').val(),
        },
        success: function (data) {
            if (data.code == 302) {
                console.log(data);
                $('.talk').show().html(data.data);
            } else if ($('.password input').val() == '') {
                $('.talk').show().html(data.data);
            } else {
                console.log(data);
                let rem=[];
                rem.push(data.data.auth_token)
                rem.push(data.data.nickname)
                rem.push(data.data.uid)
                window.localStorage.setItem('member',JSON.stringify(rem))
                $(location).prop('href', 'http://localhost:3000/html/index.html?type=2')
            }
        }
    })
})