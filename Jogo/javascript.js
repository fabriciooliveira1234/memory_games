const tabuleiro = document.querySelector("#tabuleiro");
const imagensPok = [
    'chicorita.png', 
    'mew.png', 
    'pikachu.png',
    'cat.png',
    'piplup.png',
    'sharmander.png', 
    'squartle.png',
    'Totodile.png'
];

let cartaPok = "";
 imagensPok.forEach(img => {
  cartaPok += `<div class="jmemoria" data-card="${img}">
    <img class="frente" src="${img}"/>
    <img class="verso" src="verso.png">
  </div>`;
});

tabuleiro.innerHTML = cartaPok + cartaPok;

const carta = document.querySelectorAll(".jmemoria");
let carta1, carta2;
let cartaBloq = false;

function virarCarta() {
  if (cartaBloq) return false;
  
  this.classList.add("vira");

  if (!carta1) {
    carta1 = this;
    return false;
  }

  carta2 = this;

  combinouCarta();
}

function combinouCarta() {
  let combinou = carta1.dataset.card === carta2.dataset.card;

  !combinou ? desvirarCarta() : redefinirCartas(combinou);
}

(function cartasAleatorias(){
  carta.forEach(card => {
      let aleat = Math.floor(Math.random() * 16);
      card.style.order = aleat;
  })
})();

function desvirarCarta() {
  cartaBloq = true;
  setTimeout(() => {
    carta1.classList.remove("vira");
    carta2.classList.remove("vira");

    redefinirCartas();
  }, 1000);
}

function redefinirCartas(combinou = false) {
  if (combinou) {
    carta1.removeEventListener("click", virarCarta);
    carta2.removeEventListener("click", virarCarta);
  }

  carta1 = null;
  carta2 = null;
  cartaBloq = false;
}


//opção de duas escolhas de efeitos
$(document).ready(function(){
  $(".verso").fadeOut(4000, function() {
      $(".frente").img;
  }).fadeIn(4000);
  /*$(".verso").slideUp(4000, function() {
      $(".frente").img;
  }).slideDown(4000);*/
});

carta.forEach(card => card.addEventListener("click", virarCarta));














