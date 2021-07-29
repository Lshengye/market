function tab(id) {
    var onav = document.getElementById(id);
    var ospan=document.getElementsByTagName('span')[0];
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
            ospan.innerHTML=this.innerText;
            ocont[this.index].style.display = 'block';
        }
    }
}
tab('main');
