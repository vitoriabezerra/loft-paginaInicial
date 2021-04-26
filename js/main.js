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


var cont =0;
document.getElementById("noturno").onclick = function() {
     fun()
     cont++;
};

function fun() {
    if(cont%2 == 0){
    document.getElementsByTagName("body")[0].style.color = "orange";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#1c2128";
    document.getElementsByTagName("header")[0].style.backgroundColor = "#2d333b";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "#2d333b";
    document.getElementsByClassName("house1")[0].style.backgroundColor = "#cdd9e5";
    document.getElementsByClassName("house2")[0].style.backgroundColor = "#cdd9e5";
    }
    else{
        document.getElementsByTagName("body")[0].style.color = null
        document.getElementsByTagName("body")[0].style.backgroundColor = null
        document.getElementsByTagName("header")[0].style.backgroundColor = null
        document.getElementsByTagName("footer")[0].style.backgroundColor = null
        document.getElementsByClassName("house1")[0].style.backgroundColor = null
        document.getElementsByClassName("house2")[0].style.backgroundColor = null
    }
}  

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
