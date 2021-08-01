$('#change').click(function () {
    $('#select').fadeIn(500, function () {
        $(this).css('display', 'block')
    })
    $('#select .list').animate(
        { 'bottom': 0 },
        400
    )
})

$('#select').click(function (event) {
    $('#select').fadeOut(500, function () {
        $(this).css('display', 'none')
    })

    $('#select .list').animate(
        { 'bottom': '-34vh' },
        400
    )
    event.stopPropagation();
})

$('.list p').eq(1).click(function () {
    $('#change').val('男');
    $('#change').css('color', '#000');
})
$('.list p').eq(2).click(function () {
    $('#change').val('女');
    $('#change').css('color', '#000');
})
$('.header span').eq(1).click(function () {
    if ($('#change').val()=='请选择性别'||$('#change').val()=='') {
        $('#tip').show()
        $('#tip').fadeOut(3000, function () {
            $(this).css('display', 'none')
        })
    }else{
        $('#tip').html('保存成功')
        $('#tip').show()
        $('#tip').fadeOut(2000, function () {
            $(this).css('display', 'none')
        })
    }
})

var member=JSON.parse(window.localStorage.getItem('member'))
$('.name p input').val(member[1])

