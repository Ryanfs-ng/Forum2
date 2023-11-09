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