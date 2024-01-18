let imgCopo = document.querySelector(".copao");
let circulo = document.querySelector(".circulo");
let copoVerde = document.querySelector(".copo-verde");
let copoAmarelo = document.querySelector(".copo-amarelo");
let copoRosa = document.querySelector(".copo-rosa");

copoAmarelo.addEventListener("click", () => {
  imgCopo.src = "./img/img2.png";
  circulo.style.background = "#eb7495";
});

copoVerde.addEventListener("click", () => {
  imgCopo.src = "./img/img1.png";
  circulo.style.background = "#017143";
});

copoRosa.addEventListener("click", () => {
  imgCopo.src = "./img/img3.png";
  circulo.style.background = "#eb7495";
});
