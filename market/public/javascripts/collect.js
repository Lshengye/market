var arys = JSON.parse(window.localStorage.getItem('arrey'));
console.log(arys)
$('#myshow').html(arys.map((v) => {
    return `<ul id="${v[0]}">
    <li><img src="${v[1]}" alt=""><p>${v[2]}</p></li>
    <li>￥<span>${v[3]}</span></li>
    <li>
        <span class="gobuy">购买</span>
        <span class="del">删除</span>
    </li>
</ul>`
}))



//点击删除

for (let i = 0; i < $('#myshow .del').length; i++) {
    $('#myshow .del').eq(i).click(function () {
        arys.splice(i, 1);
        window.localStorage.setItem('arrey', JSON.stringify(arys))
        $('#myshow').load(location.href + '#myshow');
    })
}

$('#del .tip span').eq(0).click(function () {
    $('#del').fadeOut(300)
})

//点击去购买
for (let i = 0; i < $('#myshow .gobuy').length; i++) {
    $('#myshow .gobuy').eq(i).click(function () {
        window.localStorage.setItem("flag", $('#myshow ul').eq(i).attr('id'))
        window.location = 'details.html'
    })
}
