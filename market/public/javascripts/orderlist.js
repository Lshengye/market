
for (let i = 0; i < $('#main ul li').length; i++) {
    $('#main ul li').eq(i).click(function () {
        $('#main ul li').eq(i).addClass('active').siblings().removeClass('active')
        $('.header span').html($(this).html())
        $('#main .cont').css('display', 'none')
        $('#main .cont').eq(i).css('display', 'block')
        history.pushState('','','?type='+i)
    })
}

let type = location.href;
console.log(type)
type = type.split('?')[1].split('=');
$('#main ul li').eq(type[1]).addClass('active').siblings().removeClass('active');
$('#main .cont').css('display', 'none')
$('#main .cont').eq(type[1]).css('display', 'block')
$('.header span').html($('.active').html())




