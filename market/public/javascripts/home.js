// const { url } = require("koa-router");

function tab(id) {
    var oBtm = document.getElementById(id);
    var oli = oBtm.getElementsByTagName('li');
    var ai = oBtm.getElementsByTagName('i');
    var ocont = document.getElementsByClassName('cont');
    for (var i = 0; i < oli.length; i++) {
        oli[i].index = i;
        oli[i].onclick = function () {
            for (var j = 0; j < oli.length; j++) {
                oli[j].className = '';
                ocont[j].style.display = 'none';
            }
            this.className = 'active';
            ocont[this.index].style.display = 'block';
            if (this.index == 0) {
                ai[0].style.backgroundImage = 'url(../images/common/home2.png)';
                ai[1].style.backgroundImage = 'url(../images/common/cart1.png)';
                ai[2].style.backgroundImage = 'url(../images/common/my1.png)';
            } else if (this.index == 1) {
                ai[0].style.backgroundImage = 'url(../images/common/home1.png)';
                ai[2].style.backgroundImage = 'url(../images/common/my1.png)';
                ai[1].style.backgroundImage = 'url(../images/common/cart2.png)';
            } else {
                ai[0].style.backgroundImage = 'url(../images/common/home1.png)';
                ai[1].style.backgroundImage = 'url(../images/common/cart1.png)';
                ai[2].style.backgroundImage = 'url(../images/common/my2.png)';
            }
        }
    }
}
tab('bottom');

// 顶部
window.onscroll = function () {
    var oTop = document.getElementById("top")
    var getScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (getScrollTop < 200) {
        oTop.className = '';
    } else {
        oTop.className = 'change';
    }

}


axios({
    method: 'GET',
    url: 'http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f'
}).then((res) => {
    var oitem = document.getElementById('item');
    var oi = oitem.getElementsByTagName('i');
    for (var i = 0; i < oi.length; i++) {
        oi[i].style.backgroundImage = 'url(' + res.data.data[i].image + ')';
    }
});

axios({
    method: 'GET',
    url: 'http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f'
}).then((res) => {
    // console.log(res)
    var women = document.getElementById('women');
    var img = women.getElementsByTagName('i');
    for (var i = 0; i < img.length; i++) {
        img[i].style.backgroundImage = 'url(' + res.data.data[0].items[i].image + ')';
    }
    var ospan = women.getElementsByTagName('span');
    ospan[0].innerText = res.data.data[0].items[0].price + '元';
    for (var i = 3; i < ospan.length; i++) {
        ospan[i].innerText = '￥' + res.data.data[0].items[i].price;
    }
    var str = women.getElementsByTagName('strong');
    for (var i = 0; i < str.length; i++) {
        str[i].innerText = res.data.data[0].items[i].title;
    }
    //男装
    var men = document.getElementById('men');
    var mimg = men.getElementsByTagName('i');
    for (var i = 0; i < mimg.length; i++) {
        mimg[i].style.backgroundImage = 'url(' + res.data.data[1].items[i].image + ')';
    }
    var mspan = men.getElementsByTagName('span');
    for (var i = 0; i < mspan.length; i++) {
        mspan[i].innerText = '￥' + res.data.data[1].items[i + 2].price;
    }
    var mstr = men.getElementsByTagName('strong');
    for (var i = 0; i < mstr.length; i++) {
        mstr[i].innerText = res.data.data[1].items[i].title;
    }
    //电脑
    var ele = document.getElementById('electric');
    var eimg = ele.getElementsByTagName('i');
    for (var i = 0; i < eimg.length; i++) {
        eimg[i].style.backgroundImage = 'url(' + res.data.data[2].items[i].image + ')';
    }
    var espan = ele.getElementsByTagName('span');
    espan[0].innerText = res.data.data[2].items[0].price + '元';
    for (var i = 3; i < espan.length; i++) {
        espan[i].innerText = '￥' + res.data.data[2].items[i].price;
    }
    var estr = ele.getElementsByTagName('strong');
    for (var i = 0; i < estr.length; i++) {
        estr[i].innerText = res.data.data[2].items[i].title;
    }
    // console.log(res);
});

//推荐
axios({
    method: 'GET',
    url: 'http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f'
}).then((res) => {
    var recom = document.getElementById('recom');
    var ai = recom.getElementsByTagName('i');
    var op = recom.getElementsByTagName('p');
    var ospan = recom.getElementsByTagName('span');
    for (var i = 0; i < ai.length; i++) {
        op[i + 1].innerHTML = res.data.data[i].title;
        ospan[i + 2].innerHTML = '￥' + res.data.data[i].price;
        ai[i].style.backgroundImage = 'url(' + res.data.data[i].image + ')';
    }
    // console.log(res);
});

var Sorder = document.querySelectorAll('#personal .order span')[1];
Sorder.onclick = function () {
    window.location = 'order.html';
}

var profile = document.getElementById('personal');
var means = profile.getElementsByClassName('means')[0];
var toFile = means.getElementsByTagName('li')[0];
toFile.onclick = function () {
    window.location = 'profile.html';
}

//点击去往详情
axios({
    method: "GET",
    url: 'http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f'
}).then((res) => {
    var More = document.querySelectorAll('.tomore');
    var menMore = document.querySelectorAll('.menmore');
    var eleMore = document.querySelectorAll('.elemore');

    // console.log(res)
    for (var i = 0; i < More.length; i++) {
        More[i].index = i;
        More[i].onclick = function () {
            for (var j = 0; j < More.length; j++) {
                window.location = 'details.html';
            }
            window.localStorage.setItem('flag', res.data.data[0].items[this.index].gid)
        }
    };
    for (var i = 0; i < menMore.length; i++) {
        menMore[i].index = i;
        menMore[i].onclick = function () {
            for (var j = 0; j < menMore.length; j++) {
                window.location = 'details.html';
            }
            window.localStorage.setItem('flag', res.data.data[1].items[this.index].gid)
        }
    }
    for (var i = 0; i < eleMore.length; i++) {
        eleMore[i].index = i;
        eleMore[i].onclick = function () {
            for (var j = 0; j < eleMore.length; j++) {
                window.location = 'details.html';
            }
            window.localStorage.setItem('flag', res.data.data[2].items[this.index].gid)
        }
    }
})
axios({
    method: 'GET',
    url: 'http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f'
}).then((res) => {
    console.log(res)
    var reMore = document.querySelectorAll('.remore');
    for (var i = 0; i < reMore.length; i++) {
        reMore[i].index = i;
        reMore[i].onclick = function () {
            for (var j = 0; j < reMore.length; j++) {
                window.location = 'details.html';
            }
            window.localStorage.setItem('flag', res.data.data[this.index].gid)
        }
    }
})
//点击去往分类
$('#item a').eq(0).click(function () {
    window.localStorage.setItem('cid', '492')
})
$('#item a').eq(1).click(function () {
    window.localStorage.setItem('cid', '493')
})
$('#item a').eq(2).click(function () {
    window.localStorage.setItem('cid', '494')
})
$('#item a').eq(3).click(function () {
    window.localStorage.setItem('cid', '495')
})
$('#top .sear').click(function () {
    window.location = 'search.html'
})

//第二页 购物车========================================
var arr = JSON.parse(window.localStorage.getItem('parameter'))
console.log(arr)
$('#goods').html(arr.map((v) => {
    return `<ul class="hav">
<li><i></i></li>
<li><img src="${v[0]}" alt=""><span class="del">删除</span></li>
<li>
    <p class="title">${v[1]}</p>
    <p>颜色：<span class="color">${v[3]}</span> 尺寸：<span class="size">${v[4]}</span></p>
    <span class="price">${v[2]}</span>
    <p id="count">
        <input class="less" type="button" value="-" />
        <input class="text" type="text" value="${v[5]}" />
        <input class="add" type="button" value="+" />
    </p>
</li>
</ul>`
}))

//删除
for (let i = 0; i < $('#goods .del').length; i++) {
    $('#goods .del').eq(i).click(function () {
        $('#goods .del').eq(i).parent().parent().remove();
        arr.splice(i, 1)
        window.localStorage.setItem('parameter', JSON.stringify(arr))
        Sum();
        console.log(arr)
    })

}

// 计算总价
function Sum() {
    var sum = 0;
    for (let i = 0; i < $('#goods .hav').length; i++) {
        let oprice = parseFloat($('#goods .hav .price').eq(i).html().split('￥')[1]) * parseFloat($('#goods .hav #count .text').eq(i).val())
        // console.log(oprice)
        sum = (sum + oprice);
    }
    $('#sum').html('￥' + sum.toFixed(2))
    // console.log(sum.toFixed(2))
}
Sum();

//数量加减
for (let i = 0; i < $('#count .add').length; i++) {
    $('#count .add').eq(i).click(function () {
        let num = Number($('#count .text').eq(i).val());
        $('#count .text').eq(i).val(num + 1);
        Sum();
        if ($('#count .text').eq(i).val() > 1) {
            $('#count .less')[i].disabled = false;
        }
    })
    // }
    // for (let i = 0; i < $('#count .less').length; i++) {
    if ($('#count .text').eq(i).val() == 1) {
        $('#count .less')[i].disabled = true;
    }
    $('#count .less').eq(i).click(function () {
        if ($('#count .text').eq(i).val() < 2) {
            $('#count .less')[i].disabled = true;
        } else {
            let num = Number($('#count .text').eq(i).val());
            $('#count .text').eq(i).val(num - 1);
            Sum();
        }
    })
}

//选中和取消
var off=true;
for (let i = 0; i < $('#goods ul li i').length; i++) {
    $('#goods ul li i').eq(i).click(function () {
        if (off) {
            $('#goods ul li i').eq(i).addClass('bag')
            $('#goods ul').eq(i).removeClass('hav')
            console.log(sum)
            Sum();

            $('#cartfoot .check').css({
                'background': '#fff',
                'border':'1px solid #ccc'
            })
            $('#cartfoot a').css('backgroundColor','#ccc')
        }else{
            $('#goods ul li i').eq(i).removeClass('bag')
            $('#goods ul').eq(i).addClass('hav')
            console.log(sum)
            Sum();

        }
        if(!$('#goods ul li i').hasClass('bag')){
            $('#cartfoot .check').css({
                'background': 'url(../images/home/cart/checkmark.png) no-repeat',
                'background-size': '100% 100%',
                'border':'none'
            })
            $('#cartfoot a').css('backgroundColor','#ff0000')
        }
        off=!off;
    })
}
//全选
var aff=true;

$('#cartfoot .check').click(function(){
    
    if(aff){
        $('#cartfoot .check').css({
            'background': '#fff',
            'border':'1px solid #ccc'
        })
        $('#goods ul li i').addClass('bag')
        $('#goods ul').removeClass('hav');
        $('#cartfoot a').css('backgroundColor','#ccc')
        Sum();
    }else{
        $('#cartfoot .check').css({
            'background': 'url(../images/home/cart/checkmark.png) no-repeat',
            'background-size': '100% 100%',
            'border':'none'
        })
        $('#goods ul li i').removeClass('bag')
        $('#goods ul').addClass('hav');
        $('#cartfoot a').css('backgroundColor','#ff0000')
        Sum();
    }
    aff=!aff;
})

console.log(arr.length)

//第三页 我的========================================
$("#personal .means ul li").eq(4).click(function(){
    window.location='collect.html'
})
var arys=JSON.parse(window.localStorage.getItem('arrey'));
console.log(arys)






