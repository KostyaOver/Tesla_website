let slide = document.querySelector('.slider img');
let right = document.querySelector('#right');
let left = document.querySelector('#left');
let total_price = document.querySelector('.total-price p');
let btnAddAutopilot = document.querySelector('#autopilot');
let btnAddTow = document.querySelector('#tow');
let wheels = document.querySelector('.wheels-description');
let paint = document.querySelector('.color-description');
let interior = document.querySelector('.interior-description');
let seats = document.querySelector('.seats-description');
let i = 0;

//Menue's parameters

let carObj = {
    model: document.querySelector('.title h1').innerHTML,
    type: document.querySelector('.field p').innerHTML,
    type_price: 119990,
    paint: 'white',
    paint_price: 0,
    wheels: 'wheel-1',
    wheels_price: 0,
    interior: 'white',
    interior_price: 0,
    autopilot: 0,
    seats: 'standart',
    seats_price: 0,
    tow: 0,
    total: 119990,
}

let root = function() {
    switch (carObj.model) {
        case 'Model S':
            return './img-config/model-s/';
        case 'Model 3':
            return './img-config/model-3/';
        case 'Model X':
            carObj.seats = '5';
            return './img-config/model-x/';
        case 'Model Y':
            btnAddTow.addEventListener('click', function(event) {
                let self = this;
                btnAdd(event, self);
            });
            return './img-config/model-y/';
    default:
            break;
    }
}();


let images = [];
slide.src = root + carObj.paint + '/wheel-1/0.jpg';

let Checker = {
    setTotal: function() {
        if(String(carObj.total).length == 5) {
            total_price.innerHTML = '<span>$' + String(carObj.total).slice(0, 2) + ',' + String(carObj.total).slice(2) + '</span> Pusrchase price'; 
        } 
        if(String(carObj.total).length == 6) {
            total_price.innerHTML = '<span>$' + String(carObj.total).slice(0, 3) + ',' + String(carObj.total).slice(3) + '</span> Pusrchase price'; 
        }
    },

    updatePrice: function() {
        carObj.total = +carObj.type_price + +carObj.wheels_price + +carObj.paint_price + +carObj.autopilot + +carObj.interior_price + +carObj.seats_price + +carObj.tow;
        this.setTotal();
    },

    addProperty: function(event) {
        let propName = event.target.dataset.prop;
        carObj[propName] = event.target.dataset.value;
        carObj[propName + '_price'] = event.target.dataset.price;
        this.updatePrice();
    },

    setLable: function(prop, tegs, index) {
        switch (prop) {
            case 'type':
                let lables = tegs[index].dataset.alt.split('/'); 
                let list = document.querySelectorAll('.li h2');       
                for(let i = 0 ; i < list.length; i++) {
                    list[i].innerHTML = lables[i];
                };
                break;
            case 'wheels':
                wheels.innerHTML = tegs[index].dataset.alt;
                break;
            case 'paint':
                paint.innerHTML = tegs[index].dataset.alt;
                break;
            case 'interior':
                interior.innerHTML = tegs[index].dataset.alt;
                break;
            case 'seats':
                seats.innerHTML = tegs[index].dataset.alt;
                break;
            default:
                break;
        }
    },
    
    check: function(event) {
        let tar = '.' + event.target.parentElement.className + ' .' + event.target.className;
        let index = event.target.dataset.index;
        let tegs = document.querySelectorAll(tar);
        for(teg of tegs) {
            teg.classList.remove('active');
        }
        tegs[index].classList.add('active');
        let prop = event.target.dataset.prop;
        console.log(prop);
        //prop.innerHTML = event.target.dataset.alt;
        this.setLable(prop, tegs, index)
        event.preventDefault();
    }
}


class Slider {
    changeImg() {
        if(i < 0) {
            i = images.length - 1;
        }
        if(i > images.length - 1) {
            i = 0;
        }
        slide.src = images[i];

        slide.classList.add('animate__fadeIn');  
        setTimeout(() => {slide.classList.remove('animate__fadeIn')}, 1001);      

    }

    right() {
        i++;
        slide.src = '';        
        this.changeImg();
        
    }

    left() {
        i--
        slide.src = '';
        this.changeImg();
    }

    reloadArr() {
        if(carObj.wheels == 'wheel-1') {
            for(let i = 0; i < 4; i++){
                images[i] = root + carObj.paint + '/wheel-1/' + i + '.jpg';
            }
            slide.src = images[i];
        }
    
        if(carObj.wheels == 'wheel-2') {
            for(let i = 0; i < 4; i++){
                images[i] = root + carObj.paint + '/wheel-2/' + i + '.jpg';
            }
            slide.src = images[i];
        }

        images[4] = root + carObj.paint + '/interior/' + carObj.interior + '.jpg';
        if(i == images.length - 1) {
            slide.src = images[4];
        }
    }    
}

let slider = new Slider();

slider.reloadArr();

function func(event) {
    Checker.check(event);
    Checker.addProperty(event);
    slider.reloadArr();
    console.log(carObj);
}

btnAddAutopilot.addEventListener('click', function(event) {
    let self = this;
    btnAdd(event, self);
});

function btnAdd(event, self) {
    let price = 0;
    if(self.id == 'autopilot') {
        price = 10000;
    } else {
        price = 1000;
    }

    if(self.dataset.active) {
        console.log('1')
        self.dataset.active = ''; 
        self.classList.add('active');
        self.innerHTML = 'REMOVE'; 
        
        carObj[self.id] = price;
        Checker.updatePrice();
    } else {
        console.log('2') 
        self.dataset.active = 'active'; 
        self.innerHTML = 'ADD'; 
        self.classList.remove('active');   
        carObj[self.id] = 0;
        Checker.updatePrice();
    }
        event.preventDefault();
        console.log(carObj);
}


right.addEventListener('click', () => {
    slider.right();
    console.log('click_Right');
});
left.addEventListener('click', () => {
    slider.left();
    console.log('click_Left');
});


let order = document.querySelector('#order');
let popup = document.querySelector('.popup');
let closePop = document.querySelector('#close')
let pop_container = document.querySelector('.popup-container');

function autopilot() {
    if(carObj.autopilot == 0) {
        return 'Not included'
    } else {
        return '$' +  String(carObj.autopilot).slice(0, 2) + ',' + String(carObj.autopilot).slice(2);
    }
}

function buildCar() {
    let ul = document.querySelector('.pop-content ul');
    let data = [
        carObj.model + ' ' + carObj.type,
        document.querySelector('.color-description').innerHTML,
        document.querySelector('.wheels-description').innerHTML,
        document.querySelector('.interior-description').innerHTML,
        'Autopilot <span>Included</span>',
        'FullSelf Driving <span>' + autopilot() + '</span>',
    ];

    if(carObj.seats != 'standart') {
        data.push(`Seating Layout <span>${carObj.seats}</span>`);
    }

    data.push('<hr>',
    '<p class="total-price">Purcchaise price ' + '<span>' +document.querySelector('.total-price span').innerHTML + '</span></p>');
    
    ul.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = data[i];
        ul.appendChild(li);
    }    
}


order.addEventListener('click', function() {
    console.log('click')
    buildCar();
    pop_container.classList.remove('animate__fadeOutDown');
    pop_container.classList.add('animate__fadeInUp');
    popup.style.display = 'grid';    
});

closePop.addEventListener('click', function() {
    pop_container.classList.remove('animate__fadeInUp');
    pop_container.classList.add('animate__fadeOutDown');
    setTimeout(() => {popup.style.display = 'none'}, 2000);
});
