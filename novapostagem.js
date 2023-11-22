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

// Tópicos 

function salvarPost() {
  // Obtém os valores do formulário
  var titulo = document.getElementById('titulo').value;
  var conteudo = document.getElementById('conteudo').value;

  var postagem = {
    titulo: titulo,
    conteudo: conteudo
};
  var postagensSalvas = JSON.parse(localStorage.getItem('postagens')) || [];
             // Adiciona a nova postagem ao array de postagens
  postagensSalvas.push(postagem);

              // Salva o array atualizado no localStorage
  localStorage.setItem('postagens', JSON.stringify(postagensSalvas));
  
              // Atualiza a exibição das postagens
  exibirPostagens();
 }

 function exibirPostagens() {
  // Obtém as postagens salvas do localStorage
  var postagensSalvas = JSON.parse(localStorage.getItem('postagens')) || [];

  // Obtém o elemento onde as postagens serão exibidas
  var postagensDiv = document.getElementById('table-row2');

  // Limpa o conteúdo atual
  postagensDiv.innerHTML = '';

  // Itera sobre as postagens e as exibe
  postagensSalvas.forEach(function(postagem) {
      var postagemDiv = document.createElement('div');
      postagemDiv.innerHTML = '<div class="table-row2">' + '<div class="status"><i class="fa fa-fire"></i></div>' + '<div class="assunto-post"> <a href="posts3.html">' + postagem.titulo + '</a><br>' + postagem.conteudo + '<br><span>Começou por <b><a href="#">ProfWeverson</a></b></span></div>' + 
      '<div class="respostas"> 2 respostas <br> 125 Visualizações <i class="fa-solid fa-eye"></i></div>' + '<div class="ultima-resposta"> Oct12 2022<br>Por <b><a href="#">Usuário</a></b></div></div>';
      postagensDiv.appendChild(postagemDiv);
  });
}

exibirPostagens();
// Exibe as postagens ao carregar a página

function criarPostagem(){
  salvarPost();
}

// Postagens

function areaPost() {
  // Obtém os valores do formulário
  var comentario = document.getElementById('comentario').value;

  var postagem = {
    comentario: comentario
};
  var postagensSalvas = JSON.parse(localStorage.getItem('comentarios')) || [];
             // Adiciona a nova postagem ao array de postagens
  postagensSalvas.push(postagem);

              // Salva o array atualizado no localStorage
  localStorage.setItem('comentarios', JSON.stringify(postagensSalvas));
  
              // Atualiza a exibição das postagens
  exibirPost();
 }

 function exibirPost() {
  // Obtém as postagens salvas do localStorage
  var postagensSalvas = JSON.parse(localStorage.getItem('comentarios')) || [];

  // Obtém o elemento onde as postagens serão exibidas
  var postagensDiv = document.getElementById('body');

  // Limpa o conteúdo atual
  postagensDiv.innerHTML = '';

  // Itera sobre as postagens e as exibe
  postagensSalvas.forEach(function(postagem) {
      var postagemDiv = document.createElement('div');
      postagemDiv.innerHTML ='<div id="body2"' + '<div class="autores">' + '<div class="OutroUsuario"><a href="#">ProfWeverson</a></div>' + 
      '<div>Função</div>' + '<img src="https://cdn.pixabay.com/photo/2021/02/08/14/27/yoshi-5994957_1280.png">' + 
      '<div> Posts: <u>45</u></div><hr>' + '</div>' + '<div class="conteudo">' + postagem.comentario + '<br></div>' + '<div class="quebra"> <hr> Username <br><br></div></div></div>' 
      postagensDiv.appendChild(postagemDiv);
  });
}

exibirPost();
// Exibe as postagens ao carregar a página

function criarPost(){
  areaPost();
}