document.addEventListener("DOMContentLoaded", function () {
  var openModalBtn = document.getElementById("openModalBtn");
  var closeModalBtn = document.getElementById("closeModalBtn");
  var modal = document.getElementById("myModal");

  // Abrir modal
  openModalBtn.onclick = function () {
    modal.style.display = "block";
  };

  // Fechar modal clicando no botão de fechar
  closeModalBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Fechar modal clicando fora do modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

