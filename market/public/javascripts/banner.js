var mySwiper = new Swiper ('.swiper-container', {
	
    loop: true, // 循环模式选项
    autoplay:true,
    speed:500,
    effect:"slide",//切换方式平移
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        observer:true,
        observeParents:true,
  })   