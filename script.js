function btnToggle(){
    var nav = document.querySelector('nav');

    if(nav.style.display=='flex'){
        nav.style.display = 'none';
    }
    else{
        nav.style.display = 'flex';
    }
}
