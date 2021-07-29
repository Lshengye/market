
axios({
    method: 'GET',
    url: '//vueshop.glbuys.com/api/home/public/hotwords?token=1ec949a15fb709370f'
}).then((res) => {
    console.log(res)
    for (let i = 0; i < res.data.data.length; i++) {
        document.querySelector('#hot ul').innerHTML += `<li>${res.data.data[i].title}</li>`
    }

    $('#hot li').click(function () {
        document.querySelector('#lately ul').innerHTML += `<li>${this.innerText}</li>`
        $('#entry').val(this.innerText)
        $('#lately').show()
        // window.location = 'search-result.html';
        window.localStorage.setItem('kword', $('#entry').val())
        window.localStorage.setItem('history',$('#lately ul').html())
    })
    
    if(document.querySelector('#lately ul').innerHTML==''){
        $('#lately').hide()
    }

    $('#lately i').click(function () {
        $('#del').fadeIn(300)
    })
    $('#del .tip span').eq(0).click(function () {
        $('#del').fadeOut(300)
    })
    $('#del .tip span').eq(1).click(function () {
        $('#del').fadeOut(300)
        $('#lately ul').html('')
        $('#lately').hide()
    })
    $('#start').click(function () {
        window.location = 'search-result.html';
        window.localStorage.setItem('kword', $('#entry').val())
    })
})

$('#head i').click(function () {
    window.history.back(-1);
})
