var campo = $(".campoDigitacao");

$(function(){
    atualizaTamanhoDaFrase();
    inicializaContadores();
    inicializaMarcadores();
    // scrollTexto();
    scrollTextoPablo();

});

function scrollTexto() {
    $(".scroll").click(function() {
        console.log("Fui clicado");
        $(".texto").animate({ scrollTop: $(".texto").prop("scrollHeight")/2}, 10000);
    });
}

function scrollTextoPablo() {

    $('.campoDigitacao').keyup(function(){

        var text = $('.campoDigitacao').val().length;

        if(text > 40){

           $(".texto").animate({ scrollTop: 50}, 10000);
           text = 0;
        }
    });    
    var divHeight = document.getElementById('textoPrincipal').offsetHeight;
    var lineHeight = document.getElementsByClassName('textoPrincipal')[0].style.lineHeight = 1;
    var linesdiv = divHeight / lineHeight;

    var text = $("#myTextArea").val();
    var lines = text.split("\r");
    var count = lines.length;


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