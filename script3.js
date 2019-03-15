var contact = document.getElementById('contact');
var pop_up = document.getElementById('pop_up');
contact.onmouseenter = function pass(contact){
    this.style.filter = "brightness(90%)";
}

contact.onmouseleave = function quitte(contact){
        this.style.filter = "brightness(40%)";
}
pop_up.onload = window.open('_blank', 'Pop_up', 'width=100', 'height = 100')