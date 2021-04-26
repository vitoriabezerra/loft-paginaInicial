console.log('JS externo funcionou');
console.log(window);

// alert('Seja bem-vind@!');
// let adulto = confirm('Você tem mais de 18 anos?');
// console.log(adulto);


let nomeUsuario = prompt('Qual o seu nome?');
console.log(nomeUsuario);


let elementHeader = document.querySelector('.olaUsuario')
// elementHeader.innerText = `Olá, ${nomeUsuario}`;

elementHeader.innerHTML += `<strong>Olá, ${nomeUsuario}</strong>`;

let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = 'orange';
