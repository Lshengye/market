var back = document.getElementsByTagName('i')[0];
back.onclick = function () {
    window.location = 'index.html?type=0';
}

//商品渲染
axios.get('http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f ').then((res) => {
    console.log(res)
    $('.solid_left ul').html(res.data.data.map((v) => {
        return `<li id="${v.cid}">${v.title}</li>`
    }))

    $('.solid_left ul li').eq(0).addClass('active')
    for (let i = 0; i < $('.solid_left ul li').length; i++) {
        if ($('.solid_left ul li').eq(i).attr('id') == Cid) {
            $('.solid_left ul li').eq(i).addClass('active').siblings().removeClass('active')
        }

        $('.solid_left ul li').eq(i).click(function () {
            $('.solid_left ul li').removeClass('active')
            $(this).addClass('active')
            window.localStorage.setItem('cid', $(this).attr('id'))

            var Cid = window.localStorage.getItem('cid');
            console.log(Cid)
            axios.get('http://vueshop.glbuys.com/api/home/category/show?cid=' + Cid + '&token=1ec949a15fb709370f').then((res) => {
                console.log(res);
                if (res.data.data == '没有数据' || res.data.data[0].goods == 'null') {
                    document.querySelector('#show').innerHTML = `<div>没有相关商品！</div>`
                } else {
                    $('#show').addClass(Cid)
                    document.querySelector('#show').innerHTML = '';
                    for (let i = 0; i < res.data.data.length; i++) {
                        document.querySelector('#show').innerHTML += `<p>${res.data.data[i].title}</p><ul></ul>`
                        document.querySelectorAll('#show ul')[i].index = i;
                        if (res.data.data[i].goods == null) {

                        } else {
                            for (let j = 0; j < res.data.data[i].goods.length; j++) {
                                document.querySelectorAll('#show ul')[i].innerHTML += `<li id='${res.data.data[i].goods[j].gid}'><img src='${res.data.data[i].goods[j].image}'><span>${res.data.data[i].goods[j].title}</span></li>`
                            }
                        }

                    }
                }

            })
        })

    }

    initBScroll("#nav .solid_left");
})

//商品分类列表初始
var Cid = window.localStorage.getItem('cid');
console.log(Cid)

axios.get('http://vueshop.glbuys.com/api/home/category/show?cid=' + Cid + '&token=1ec949a15fb709370f').then((res) => {
    console.log(res);
    if (res.data.data == '没有数据' || res.data.data[0].goods == 'null') {
        document.querySelector('#show').innerHTML = `<div>没有相关商品！</div>`
    } else {
        $('#show').addClass(Cid)
        document.querySelector('#show').innerHTML = '';
        for (let i = 0; i < res.data.data.length; i++) {
            document.querySelector('#show').innerHTML += `<p>${res.data.data[i].title}</p><ul></ul>`
            document.querySelectorAll('#show ul')[i].index = i;
            if (res.data.data[i].goods == null) {

            } else {
                for (let j = 0; j < res.data.data[i].goods.length; j++) {
                    document.querySelectorAll('#show ul')[i].innerHTML += `<li id='${res.data.data[i].goods[j].gid}'><img src='${res.data.data[i].goods[j].image}'><span>${res.data.data[i].goods[j].title}</span></li>`
                }
            }

        }
    }

    $('#show ul li').click(function () {
        window.location = 'details.html'
        var id = $(this).attr('id')
        // console.log(id)
        window.localStorage.setItem('flag', id)
    })

})

//滚动
function initBScroll(code) {
    var tag = document.querySelector(code);
    var bs = BetterScroll.createBScroll(tag, {
        pullDownRefresh: {
            threshold: 30,
        },
        pullUpLoad: {
            threshold: -30,
        },
        click: true,
    });
    bs.on("pullingDown", () => {
        bs.finishPullDown();
        bs.refresh();
    });
    bs.on("pullingUp", () => {
        bs.finishPullDown();
        bs.refresh();
    });
}