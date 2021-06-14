let descInf = document.querySelector('.inf');
let deskFrnt = document.querySelector('.frnt');
let deskLow = document.querySelector('.low');


descInf.addEventListener('mouseover', function(){
    this.innerHTML = '';
    let inf = document.createElement('span');
    inf.innerHTML = 'Side-Impact Protaction';
    if(this.innerHTML != ''){
        this.innerHTML = '';
    }
    setTimeout(function(){
        descInf.appendChild(inf);
    }, 300);
    
    console.log('over');
});

descInf.addEventListener('mouseleave', function(){
    this.innerHTML = '';
    let img = document.createElement('img');
    img.src = './img/model-s/plus.svg';  
    descInf.appendChild(img);  
    console.log('leave');
});



deskFrnt.addEventListener('mouseover', function(){
    this.innerHTML = '';
    let frnt = document.createElement('span');
frnt.innerHTML = 'Front-Impact Protection';
    setTimeout(function(){
        deskFrnt.appendChild(frnt);
    }, 300);
    
    console.log('over');
});

deskFrnt.addEventListener('mouseleave', function(){
    this.innerHTML = '';
    let img = document.createElement('img');
    img.src = './img/model-s/plus.svg';  
    deskFrnt.appendChild(img);  
    console.log('leave');
});



deskLow.addEventListener('mouseover', function(){
    this.innerHTML = '';
    let low = document.createElement('span');
    low.innerHTML = 'Very Low Rollover Risk';
    setTimeout(function(){
        deskLow.appendChild(low);
    }, 300);
    
    console.log('over');
});

deskLow.addEventListener('mouseleave', function(){
    this.innerHTML = '';
    let img = document.createElement('img');
    img.src = './img/model-s/plus.svg';  
    deskLow.appendChild(img);  
    console.log('leave');
});