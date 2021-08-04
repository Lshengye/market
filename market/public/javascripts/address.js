$('button').click(() => {
    $('.tip').show()
    $('.tip').fadeIn(0)
    $('.tip').fadeOut(3000)
    if ($('.name').val() == '') {
        $('.tip').html('请输入姓名')
    } else if ($('.phone').val() == '') {
        $('.tip').html('请输入手机号')
    } else if ($('.address').val() == '') {
        $('.tip').html('请输入详细地址')
    } else {
        $('.tip').hide()
        let name = $('.add li').eq(0).find('input').val();
        let tele = $('.add li').eq(1).find('input').val();
        let city = $('.add li').eq(2).find('a').html();
        let here = $('.add li').eq(3).find('input').val();
        let check = Number($('.default').prop('checked'))
        let p = [name, tele, city, here,check];
        let pls;
        if('place' in localStorage){
            try{
                pls=JSON.parse(localStorage.getItem('place'));
            }catch(error){
                pls=localStorage.getItem('place');

            }
        }else{
            pls=[];
        }
        pls.push(p)
        console.log(pls)
        window.localStorage.setItem('place', JSON.stringify(pls))
        window.history.go(-1);
    }
})
$('.back').click(() => {
    window.history.go(-1);
})

//修改
var newplace=JSON.parse(window.localStorage.getItem('newplace'));
console.log(newplace)

$('.name').val(newplace[0])
$('.phone').val(newplace[1])
$('#sel_city').html(newplace[2])
$('.address').val(newplace[3])
if(newplace[4]==1){
    $('.default').prop('checked',true)//选中
}


Number($('.default').prop('checked'))//选中返回 1，否则返回 0
var adr = $('#sel_city').html().split('&nbsp');


