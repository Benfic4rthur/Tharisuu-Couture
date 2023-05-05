function abrirModal(caminhoDaImagem) {
  document.getElementById("imagemModalImg").src = caminhoDaImagem;
  $("#imagemModal").modal("show");
}
const navLink = document.querySelector(".nav-link");
const hoverSound = document.getElementById("hover-sound");

navLink.addEventListener("mouseover", function () {
  hoverSound.play();
});
