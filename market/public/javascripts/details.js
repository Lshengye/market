function tab(id) {
    var onav = document.getElementById(id);
    var oul = onav.getElementsByTagName('ol')[0];
    var oli = oul.getElementsByTagName('li');
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
        }
    }
}
tab('head'); // 顶部选项卡

//接收数据并渲染
var flag = window.localStorage.getItem("flag");
console.log(flag)
axios({
    method: 'GET',
    url: 'http://vueshop.glbuys.com/api/home/goods/info?gid=' + flag + '&type=details&token=1ec949a15fb709370f'
}).then((res) => {
    // console.log(res)
    for (var i = 0; i < res.data.data.images.length; i++) {
        document.querySelector('.swiper-wrapper').innerHTML += `
        <div class="swiper-slide"><img src="${res.data.data.images[i]}"></div>`;
    }
    window.localStorage.setItem('img', res.data.data.images[0]);//传给购物车 126行

    $('#message .title').html(res.data.data.title)
    $('#message .price').html('￥' + res.data.data.price)
    $('#message .num span').eq(0).html('快递：' + res.data.data.freight + '元')
    $('#message .num span').eq(1).html('月销量' + res.data.data.sales + '件')
    $('#minute').html(res.data.data.bodys)
    $('#tocart .main .title p').before(`<img src="${res.data.data.images[0]}">`)
    $('#tocart .main .title p').html(`<p><span>${res.data.data.title}</span><span>￥${res.data.data.price}</span></p>`)
    $('#tocart .main .title span').eq(2).html('商品编码：' + flag)

    //点击收藏
    $('#bottom span').eq(0).click(function(){
        let img=res.data.data.images[0];
        let til=res.data.data.title;
        let pri=res.data.data.price;
        let ary=[img,til,pri]
        let arys;
        if('parameter' in localStorage){
            try{
                arys=JSON.parse(localStorage.getItem('parameter'));
            }catch(error){
                arys=localStorage.getItem('parameter');

            }
        }else{
            arys=[];
        }
        arys.push(ary)
        window.localStorage.setItem('arrey',JSON.stringify(arys))
    })

})

//评价
axios({
    method: 'GET',
    url: 'http://vueshop.glbuys.com/api/home/reviews/index?gid=' + flag + '&token=1ec949a15fb709370f'
}).then((res) => {
    console.log(res)
    if (res.data.data == "没有数据") {
        $('#assess p span').html(0);
        document.querySelector('.assess_list').innerHTML = `<div class="notalk">暂无评价！</div>`;
        $('#assess button').hide();
        $('#more_assess p span').html(0);
        document.querySelector('#more_assess div').innerHTML = `<div class="notalk">暂无评价！</div>`;
    } else {
        for (var i = 0; i < res.data.data.length; i++) {
            document.querySelector('.assess_list').innerHTML += `<ul>
            <li><img src='${res.data.data[i].head}'>
            ${res.data.data[i].nickname}</li>
            <li>${res.data.data[i].content}</li>
            <li><span>${res.data.data[i].times}</span></li>
            </ul>`;
        }
        //评价人数
        $('#assess p span').html(res.data.pageinfo.total)
        $('#more_assess p span').html(res.data.pageinfo.total)
        //评价内容
        for (var i = 0; i < res.data.data.length; i++) {
            document.querySelector('#more_assess div').innerHTML += `<ul>
            <li><img src='${res.data.data[i].head}'>
            ${res.data.data[i].nickname}</li>
            <li>${res.data.data[i].content}</li>
            <li><span>${res.data.data[i].times}</span></li>
            </ul>`;
        }
    }
})

axios({
    method: 'GET',
    url: 'http://vueshop.glbuys.com/api/home/goods/info?gid=' + flag + '&type=spec&token=1ec949a15fb709370f'
}).then((res) => {
    console.log(res)
    for (let i = 0; i < res.data.data[0].values.length; i++) {
        document.querySelector('.color').innerHTML += `<span>${res.data.data[0].values[i].value}</span>`
    }
    if (res.data.data[1] == null) {
        document.querySelector('.size').style.display = 'none';
        document.querySelectorAll('.select p')[1].style.display = 'none';
    } else {
        for (let i = 0; i < res.data.data[1].values.length; i++) {
            document.querySelector('.size').innerHTML += `<span>${res.data.data[1].values[i].value}</span>`
        }
    }

    //选择尺寸和颜色
    function Change(name) {
        for (let i = 0; i < $(name).length; i++) {
            $(name).eq(i).click(function () {
                for (let j = 0; j < $(name).length; j++) {
                    $(name).removeClass('change')
                }
                $(this).addClass('change')
            })
        }
    }
    Change('.color span')
    Change('.size span')

    // 添加到购物车
    $('#tocart .define').click(function () {
        $('#head span i').show()
        $('#tocart .fine').fadeIn(200, function () {
            $(this).css('display', 'block')
        })
            .delay(1000)
        $('#tocart .fine').fadeOut(1000, function () {
            $(this).css('display', 'none')
        })
        if (!$('.color span').hasClass('change')) {
            $('.fine').html('请选择颜色')
        } else if (!$('.size span').hasClass('change') && res.data.data.length > 1) {
            $('.fine').html('请选择尺寸')
        } else {
            $('.fine').html('已加入购物车')
            let m = window.localStorage.getItem('img');
            let t = $('#message .title').html();
            let p = $('#message .price').html();
            let c = $('#tocart .main .select .color .change').html();
            let s = $('#tocart .main .select .size .change').html();
            let n = $('#num .text').val();
            let arrs;
            
            if('parameter' in localStorage){
                try{
                    arrs=JSON.parse(localStorage.getItem('parameter'));
                }catch(error){
                    arrs=localStorage.getItem('parameter');
                }
            }else{
                arrs=[];
            }
            var arr = [m, t, p, c, s, n];
            arrs.push(arr);
            console.log(typeof arrs)
            window.localStorage.setItem('parameter', JSON.stringify(arrs));
            console.log(arrs)
        }
    })
})

//购物遮罩层
$('#bottom span').eq(1).click(function () {
    $('#tocart').fadeIn(500, function () {
        $(this).css('display', 'block')
    })
    $('#tocart .main').animate(
        { 'bottom': '-40vh' },
        400
    )
})
$('#no').click(function () {
    $('#tocart').fadeOut(500, function () {
        $(this).css('display', 'none')
    })
    $('#tocart .main').animate(
        { 'bottom': '-110vh' },
        400
    )
})

$('#head .back').click(function () {
    window.history.back();
})

// 计算数量
function Num(box) {
    let obox = document.querySelector(box);
    let less = obox.querySelectorAll('input')[0];
    let add = obox.querySelectorAll('input')[2];
    let num = obox.querySelectorAll('input')[1];
    less.disabled = true;
    less.onclick = function () {
        num.value--
        if (num.value == 1) {
            less.disabled = true;
        }
    }
    add.onclick = function () {
        num.value++;
        if (num.value > 1) {
            less.disabled = false;
        }
    }
}
Num('#num');