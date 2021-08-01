var goods=JSON.parse(window.localStorage.getItem('balance'))//商品信息
var psm=window.localStorage.getItem('tatle').split(',')//邮费和总价
console.log(goods)
console.log(psm)
$('#product').html(goods.map((v)=>{
    return `<ul class="hav">
    <li><img src="${v[0]}" alt=""></li>
    <li>
        <p class="title">${v[1]}</p>
        <p>颜色：<span class="color">${v[3]}</span> 尺码：<span class="size">${v[4]}</span></p>
        <span class="num">x ${v[5]}</span>
        <span class="price">${v[2]}</span>
    </li>
</ul>`
}))
$('.post span').eq(1).html('￥'+psm[0])
$('.total span').eq(1).html('￥'+psm[1])
$('#submit .all-money').html('￥'+(Number(psm[0])+Number(psm[1])))
$('#submit span').eq(1).click(()=>{
    window.location='hasbuy.html'
})