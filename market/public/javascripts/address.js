$('button').click(()=>{
    let name=$('.add li').eq(0).find('input').val();
    let tele=$('.add li').eq(1).find('input').val();
    let city=$('.add li').eq(2).find('a').html();
    let here=$('.add li').eq(3).find('input').val();
    let p=[name,tele,city,here];
    console.log(p)
    window.localStorage.setItem('place',JSON.stringify(p))
})
$('.back').click(()=>{
    window.history.back();
})