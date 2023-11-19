// Navbar

function hideIconBar(){
    var iconBar = document.getElementById("iconBar")
    var navegaçao = document.getElementById("navegaçao")
    //esconder a barra
    iconBar.setAttribute("style", "display:none;");
    navegaçao.classList.remove("esconder");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar")
    var navegaçao = document.getElementById("navegaçao")
    iconBar.setAttribute("style", "display:block;");
    navegaçao.classList.add("esconder");

}

// Comentários

function mostrarComentario(){
    var Areacomentario = document.getElementById("area-comentario");
    Areacomentario.setAttribute("style", "display:block;");
}

function mostrarComentarioTopic(){
    var Areacomentario = document.getElementById("area-comentario-topic");
    Areacomentario.setAttribute("style", "display:block;");
}

function mostrarResposta(){
    var Arearesposta = document.getElementById("area-resposta");
    Arearesposta.setAttribute("style", "display:block;");
}

// Barra de pesquisa 

function filtrarConteudo() {
    var termoPesquisa = document.getElementById('search-input').value.toLowerCase();
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        var conteudo = section.textContent.toLowerCase();
        if (conteudo.includes(termoPesquisa)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Barra Select 

function mostrarConteudo() {
    var select = document.getElementById('category-select');
    var categoriaSelecionada = select.options[select.selectedIndex].value;

    // Oculta todos os conteúdos
    var contents = document.querySelectorAll('.category-content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Exibe o conteúdo da categoria selecionada
    if (categoriaSelecionada !== 'selecionar') {
        document.getElementById(categoriaSelecionada).style.display = 'block';
    } else {
        // Se "Selecionar Categoria" for escolhido, oculta todo o conteúdo
        document.getElementById('content').style.display = 'none';
    }
}

