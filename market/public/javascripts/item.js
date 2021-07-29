function tab(id) {
    var onav = document.getElementById(id);
    var oul = onav.getElementsByTagName('ul')[0];
    var oli = oul.getElementsByTagName('li');
    var ocont = onav.getElementsByClassName('cont');
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
// tab('nav')

var back = document.getElementsByTagName('i')[0];
back.onclick = function () {
    window.location = 'suit.html';
}

axios.get('http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f ').then((res) => {
    $('.solid_left ul').html(res.data.data.map((v) => {
        return `<li>${v.title}</li>`
    }))

    $('.solid_left ul li').eq(0).addClass('active')
    $('.solid_left ul li').click(function () {
        $('.solid_left ul li').removeClass('active')
        $(this).addClass('active')
        window.localStorage.setItem('cid', res.data.data[$('.solid_left ul li').index(this)].cid);

        //商品分类列表
        var Cid = window.localStorage.getItem('cid');
        console.log(Cid)
        axios.get('http://vueshop.glbuys.com/api/home/category/show?cid=' + Cid + '&token=1ec949a15fb709370f').then((res) => {
            console.log(res);
            if (res.data.data == '没有数据' || res.data.data[0].goods == 'null') {
                document.querySelector('#show').innerHTML = `<div>没有相关商品！</div>`
            } else {
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
    })

    initBScroll("#nav .solid_left");
})


axios.get('http://vueshop.glbuys.com/api/home/category/show?cid=492&token=1ec949a15fb709370f').then((res) => {
    console.log(res);
    if (res.data.data == '没有数据' || res.data.data[0].goods == 'null') {
        document.querySelector('#show').innerHTML = `<div>没有相关商品！</div>`
    } else {
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
    // $('.solid_left ul li').eq(0).addClass('active')
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