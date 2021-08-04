// 选项卡
for (let i = 0; i < $('#main ul li').length; i++) {
    $('#main ul li').eq(i).click(function () {
        $('#main ul li').eq(i).addClass('active').siblings().removeClass('active')
        $('.header span').html($(this).html())
        $('#main .cont').css('display', 'none')
        $('#main .cont').eq(i).css('display', 'block')
        history.pushState('', '', '?type=' + i)
    })
}

let type = location.href;
console.log(type)
type = type.split('?')[1].split('=');
$('#main ul li').eq(type[1]).addClass('active').siblings().removeClass('active');
$('#main .cont').css('display', 'none')
$('#main .cont').eq(type[1]).css('display', 'block')
$('.header span').html($('.active').html())

// 订单渲染
var msg = JSON.parse(window.localStorage.getItem('mesg'));
var total = window.localStorage.getItem('total');
var ordernum = window.localStorage.getItem('number');
console.log(msg)
console.log(total)
console.log(ordernum)
function Show() {
    $('#products').html(`<div class="product">
    <p><span>订单编号：${ordernum}</span><span class="name">待付款</span></p>
    <div class="list"></div>
    <div><span>实付金额：${total}</span>
        <p><span class="cancel">取消订单</span><span class="pay">去付款</span></p>
    </div>
</div>`)
    $('.product .list').html(msg.map((v) => {
        return `<ul><li><img src="${v[0]}" alt=""></li>
        <li>${v[1]}</li>
        <li>x ${v[5]}</li></ul>`
    }))

}
Show()

//待付款
$('#waitpay').html(`<div class="product">
    <p><span>订单编号：${ordernum}</span><span>待付款</span></p>
    <div class="list"></div>
    <div><span>实付金额：${total}</span>
        <p><span class="cancel">取消订单</span><span class="pay">去付款</span></p>
    </div>
</div>`)
$('.product .list').html(msg.map((v) => {
    return `<ul><li><img src="${v[0]}" alt=""></li>
        <li>${v[1]}</li>
        <li>x ${v[5]}</li></ul>`
}))

//点击付款
for (let i = 0; i < $('#products .pay').length; i++) {
    $('#products .pay').eq(i).click(() => {
        $('#products .cancel').eq(i).css('display', 'none');
        $('#products .pay').eq(i).html('已收货');
        $('#products .name').eq(i).html('已收货')
        $('#waitpay .product').eq(i).remove()
        //评价渲染
        $('#evaluate').html(`<div class="product">
        <p><span>订单编号：${ordernum}</span><span>已收货</span></p>
        <div class="list"></div>
        <div>
            <span>评价</span>
        </div>
    </div>`)
        $('.product .list').html(msg.map((v) => {
            return `<ul><li><img src="${v[0]}" alt=""></li>
            <li>${v[1]}</li>
            <li>x ${v[5]}</li></ul>`
        }))
    })

    $('#waitpay .pay').eq(i).click(() => {
        $('#products .cancel').eq(i).css('display', 'none');
        $('#products .pay').eq(i).html('已收货');
        $('#products .name').eq(i).html('已收货')
        $('#waitpay .product').eq(i).remove()
        //评价渲染
        $('#evaluate').html(`<div class="product">
        <p><span>订单编号：${ordernum}</span><span>已收货</span></p>
        <div class="list"></div>
        <div>
            <span>评价</span>
        </div>
    </div>`)
        $('.product .list').html(msg.map((v) => {
            return `<ul><li><img src="${v[0]}" alt=""></li>
            <li>${v[1]}</li>
            <li>x ${v[5]}</li></ul>`
        }))
    })
}
for (let i = 0; i < $('#products .list').length; i++) {
    if($('#products .list').eq(i).html()==''){
        $('.product').eq(i).hide()
        $('#waitpay .product').eq(i).hide()
    }
}

//删除订单
for (let i = 0; i < $('#products .cancel').length; i++) {
    $('#products .cancel').eq(i).click(() => {
        $('.product').eq(i).remove()
        $('#waitpay .product').eq(i).remove()
        msg = []
        window.localStorage.setItem('mesg', JSON.stringify(msg))
        total = '';
        ordernum = '';
        window.localStorage.setItem('total', total)
        window.localStorage.setItem('number', ordernum)
    })
}





