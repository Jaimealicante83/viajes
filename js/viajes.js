let ficha1 = document.getElementById('ficha1');
let ficha2 = document.getElementById('ficha2');
let ficha3 = document.getElementById('ficha3');


function cambiarimagen1(){
    ficha1.src = "img/ficha1.jpg";
}

setTimeout(function(){  ficha1.classList.add('mystyle'); ficha1.classList.add('ficha1-foto2')}, 7400);
setTimeout(function(){  ficha2.classList.add('mystyle'); ficha2.classList.add('ficha2-foto2')}, 7400);
setTimeout(function(){  ficha3.classList.add('mystyle'); ficha3.classList.add('ficha3-foto2')}, 7400);

/*setTimeout(function(){  ficha1.classList.remove('mystyle') }, 14000);
setTimeout(function(){  ficha2.classList.remove('mystyle') }, 14000);
setTimeout(function(){  ficha3.classList.remove('mystyle') }, 14000);*/


setTimeout(function(){   ficha1.classList.add('mystyle2'); ficha1.classList.add('ficha1-foto3') }, 15000);
setTimeout(function(){   ficha2.classList.add('mystyle2'); ficha2.classList.add('ficha2-foto3') }, 15000);
setTimeout(function(){   ficha3.classList.add('mystyle2'); ficha3.classList.add('ficha3-foto3') }, 15000);

/*setTimeout(function(){  ficha1.classList.remove('mystyle2') }, 19000);
setTimeout(function(){  ficha2.classList.remove('mystyle2') }, 19000);
setTimeout(function(){  ficha3.classList.remove('mystyle2') }, 19000);*/


