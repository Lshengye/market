
//选项卡
for(let i=0;i<$('#bottom li').length;i++){
    $('#bottom li').eq(i).click(()=>{
        $('#bottom li').eq(i).addClass('active').siblings().removeClass('active');
    $('#Mark .cont').css('display', 'none')
    $('#Mark .cont').eq(i).css('display', 'block')
    history.pushState('','','?type='+i)
    if (i == 0) {
        $('#bottom i').eq(0).css('backgroundImage', 'url(../images/common/home2.png)');
        $('#bottom i').eq(1).css('backgroundImage', 'url(../images/common/cart1.png)');
        $('#bottom i').eq(2).css('backgroundImage', 'url(../images/common/my1.png)');
    } else if (i == 1) {
        $('#bottom i').eq(0).css('backgroundImage', 'url(../images/common/home1.png)');
        $('#bottom i').eq(2).css('backgroundImage', 'url(../images/common/my1.png)');
        $('#bottom i').eq(1).css('backgroundImage', 'url(../images/common/cart2.png)');
    } else {
        $('#bottom i').eq(0).css('backgroundImage', 'url(../images/common/home1.png)');
        $('#bottom i').eq(1).css('backgroundImage', 'url(../images/common/cart1.png)');
        $('#bottom i').eq(2).css('backgroundImage', 'url(../images/common/my2.png)');
    }
    })
}
$(document).ready(() => {
    let type = location.href;
    console.log(type)
    type = type.split('?')[1].split('=');
    $('#bottom li').eq(type[1]).addClass('active').siblings().removeClass('active');
    $('#Mark .cont').css('display', 'none')
    $('#Mark .cont').eq(type[1]).css('display', 'block')
    if (type[1] == 0) {
        $('#bottom i').eq(0).css('backgroundImage', 'url(../images/common/home2.png)');
        $('#bottom i').eq(1).css('backgroundImage', 'url(../images/common/cart1.png)');
        $('#bottom i').eq(2).css('backgroundImage', 'url(../images/common/my1.png)');
    } else if (type[1] == 1) {
        $('#bottom i').eq(0).css('backgroundImage', 'url(../images/common/home1.png)');
        $('#bottom i').eq(2).css('backgroundImage', 'url(../images/common/my1.png)');
        $('#bottom i').eq(1).css('backgroundImage', 'url(../images/common/cart2.png)');
    } else {
        $('#bottom i').eq(0).css('backgroundImage', 'url(../images/common/home1.png)');
        $('#bottom i').eq(1).css('backgroundImage', 'url(../images/common/cart1.png)');
        $('#bottom i').eq(2).css('backgroundImage', 'url(../images/common/my2.png)');
    }
})


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

//分类导航
axios({
    method: 'GET',
    url: 'http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f'
}).then((res) => {
    for (var i = 0; i < $('#item i').length; i++) {
        $('#item i').eq(i).css('backgroundImage','url(' + res.data.data[i].image + ')');

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

//个人资料
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

//邮费
function Post() {
    for (let i = 0; i < arr.length; i++) {
        let opost = [];
        opost.push(arr.map((v) => {
            return v[6]
        }))
        function sor(val1, val2) {
            if (val1 > val2) {
                return -1;
            } else if (val1 < val2) {
                return 1;
            } else {
                return 0;
            }
        }
        let maxPost = opost[0].sort(sor);
        // console.log(maxPost)
        $('#post').html('￥' + maxPost[0])
    }
    if (!$('#goods ul').hasClass('hav')) {
        $('#post').html('￥' + 0)
    }
}
Post();

//删除
for (let i = 0; i < $('#goods .del').length; i++) {
    $('#goods .del').eq(i).click(function () {
        $('#goods .del').eq(i).parent().parent().remove();
        arr.splice(i, 1)
        window.localStorage.setItem('parameter', JSON.stringify(arr))
        Sum();
        Post();
        console.log(arr)
        if(arr.length!=0){
            $("#bottom .dot").show()
        }else{
            $("#bottom .dot").hide()
        }
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
var off = true;
for (let i = 0; i < $('#goods ul li i').length; i++) {
    $('#goods ul li i').eq(i).click(function () {
        if (off) {//取消
            $('#goods ul li i').eq(i).addClass('bag')
            $('#goods ul').eq(i).removeClass('hav')
            console.log(sum)
            Sum();
            localStorage.setItem('readd', arr.splice(i, 1))
            Post();

            $('#cartfoot .check').css({
                'background': '#fff',
                'border': '1px solid #ccc'
            })

        } else {//选中
            $('#goods ul li i').eq(i).removeClass('bag')
            $('#goods ul').eq(i).addClass('hav')
            console.log(sum)
            Sum();
            console.log(localStorage.getItem('readd'))
            arr.push(localStorage.getItem('readd').split(','))
            Post();
            $('#cartfoot button').css({'backgroundColor':'#ff0000','disabled':'false'})
        }
        if(!$('#goods ul').hasClass('hav')){
            $('#cartfoot button').css({'backgroundColor':'#ccc','disabled':'true'})
        }
        if (!$('#goods ul li i').hasClass('bag')) {
            $('#cartfoot .check').css({
                'background': 'url(../images/home/cart/checkmark.png) no-repeat',
                'background-size': '100% 100%',
                'border': 'none'
            })
        }
        off = !off;
    })
}
//全选
var aff = true;

$('#cartfoot .check').click(function () {

    if (aff) {
        $('#cartfoot .check').css({
            'background': '#fff',
            'border': '1px solid #ccc'
        })
        $('#goods ul li i').addClass('bag')
        $('#goods ul').removeClass('hav');
        $('#cartfoot button').css({'backgroundColor':'#ccc','disabled':'true'})
        $('#post').html('￥' + 0)
        Sum();
    } else {
        $('#cartfoot .check').css({
            'background': 'url(../images/home/cart/checkmark.png) no-repeat',
            'background-size': '100% 100%',
            'border': 'none'
        })
        $('#goods ul li i').removeClass('bag')
        $('#goods ul').addClass('hav');
        $('#cartfoot button').css('backgroundColor', '#ff0000')
        Post();
        Sum();
    }
    aff = !aff;
})

//提示红点
if(arr.length!=0){
    $("#bottom .dot").show()
}

//点击去结算
$('#cartfoot button').click(function () {
    for (let i = 0; i < $('#goods ul').length; i++) {
        if (!$('#goods ul').eq(i).hasClass('hav')) {
            arr.splice(i, 1)
        }
    }
    let psm=[];
    psm.push($('#post').html().split('￥')[1])
    psm.push($('#sum').html().split('￥')[1])
    window.localStorage.setItem('balance',JSON.stringify(arr))//订购商品信息
    window.localStorage.setItem('tatle',psm)//总价和邮费
    window.location='order.html';
    // console.log(arr)
})

//第三页 我的========================================

//跳到收藏
$("#personal .means ul li").eq(4).click(function () {
    window.location = 'collect.html'
})

//跳转到全部订单
var Sorder = document.querySelectorAll('#personal .order span')[1];
Sorder.onclick = function () {
    window.location = 'orderlist.html?type=0';
}

//收货地址
$('#personal .means ul li').eq(1).click(()=>{
    window.location='address_all.html'
})

$('#personal .mylist a').click(function () {
    window.location.href = 'http://localhost:3000/html/orderlist.html?type=' + ($(this).index() + 1);
})

var member=JSON.parse(window.localStorage.getItem('member'))//token,会员名,uid
console.log(member)
$('.person p span').eq(0).html(member[1])








