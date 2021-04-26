console.log('JS externo funcionou');
console.log(window);

// alert('Seja bem-vind@!');
// let adulto = confirm('Você tem mais de 18 anos?');
// console.log(adulto);


// let nomeUsuario = prompt('Qual o seu nome?');
// console.log(nomeUsuario);


// let elementHeader = document.querySelector('.olaUsuario')
// // elementHeader.innerText = `Olá, ${nomeUsuario}`;

// elementHeader.innerHTML += `<strong>Olá, ${nomeUsuario}</strong>`;

let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = 'orange';

document.getElementById("noturno").onclick = function() {
     fun()
    };
function fun() {
    document.getElementsByTagName("body")[0].style.color = "orange";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#1c2128";
    document.getElementsByTagName("header")[0].style.backgroundColor = "#2d333b";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "#2d333b";
    document.getElementsByClassName("house1")[0].style.backgroundColor = "#cdd9e5";
    document.getElementsByClassName("house2")[0].style.backgroundColor = "#cdd9e5";

    }               
