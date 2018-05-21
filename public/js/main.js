var campo = $(".campoDigitacao");

$(function(){
    atualizaTamanhoDaFrase();
    inicializaContadores();
    inicializaMarcadores();
    scrollTexto();
});

function scrollTexto() {
    $(".scroll").click(function() {
        console.log("Fui clicado");
        $(".texto").animate({ scrollTop: $(".texto").prop("scrollHeight")/2}, 10000);
    });
}

function atualizaTamanhoDaFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanhoFrase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {    
    campo.on("input", function() {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contadorPalavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.replace(/\s+/g, '').length;    
        $("#contadorCaracteres").text(qtdCaracteres);
    });
}
function inicializaMarcadores() {
    campo.on("input", function() {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var digitouCorreto = frase.startsWith(digitado);
        if(digitouCorreto) {
            campo.addClass("bordaVerde");
            campo.removeClass("bordaVermelha");
        } else {
            campo.addClass("bordaVermelha");
            campo.removeClass("bordaVerde");
        }
    });
}