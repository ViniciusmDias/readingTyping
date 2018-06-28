var campo = $(".campoDigitacao");

$(function(){
    atualizaTamanhoDaFrase();
    inicializaContadores();
    inicializaMarcadores();
    scrollTextoPablo();
});

function scrollTextoPablo() {
    $('.campoDigitacao').keyup(function(){

        var text = $('.campoDigitacao').val().length;
        var tamanhoTextoOriginal = $('.frase').text().length;
        console.log(text);
        console.log(tamanhoTextoOriginal);
        
        if (text > 50) {

            $(".texto").animate({
                scrollTop: 50}, 10000);
            $(".campo").animate({
                scrollTop: 50}, 10000);

            text = 0
        }
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