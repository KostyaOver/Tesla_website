let sideBar = document.querySelector('#sideBar');
let menu = document.querySelector('#menu');

function menuOpen() {    
    sideBar.classList.toggle('sideHide');    
    sideBar.classList.toggle('animate__fadeInLeft');
    sideBar.classList.toggle('animate__fadeOutLeft'); 
    console.log('open');
}

function menuClose() {    
    sideBar.classList.remove('animate__fadeInLeft');
    sideBar.classList.add('animate__fadeOutLeft');
    setTimeout(() => {sideBar.classList.toggle('sideHide')}, 2000);    
    console.log('closed');  
}

let value = 'close';

menu.addEventListener('click', function(){
    if(value == 'close') {
        menuOpen();
        menu.src = './img-main/close.svg';
        value = 'open';
    } else if (value == 'open') {
        menuClose();
        menu.src = './img-main/burger-menu-white.png';
        value = 'close';
    }
})