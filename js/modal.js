function abrirModal(caminhoDaImagem) {
  document.getElementById("imagemModalImg").src = caminhoDaImagem;
  $("#imagemModal").modal("show");
}
function playHoverSound() {
  var hoverSound = document.getElementById("hover-sound");
  hoverSound.play();
}