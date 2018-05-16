
var tempoInicial = $("#tempoDigitacao").text();
var campo = $(".campoDigitacao");

$(function(){
    atualizaTamanhoDaFrase();
    inicializaContadores();
    // inicializaCronometro();
    inicializaMarcadores();
    $("#botaoReiniciar").click(reiniciaJogo);
    atualizaPlacar();
    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });
    $(".tooltip").tooltipster({
        trigger: "custom"
    });
});

$("#botaoPlacar").click(mostraPlacar);

function mostraPlacar() {
    $(".placar").stop().slideToggle(600);
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
function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $("#tempoDigitacao").text(tempo);
}

function inicializaCronometro() { 
    campo.one("focus", function () {
        var tempoRestante = $("#tempoDigitacao").text();
        $("#botaoReiniciar").attr("disabled",true);
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempoDigitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                $("#botaoReiniciar").attr("disabled", false);
                finalizaJogo();
            }
        }, 1000);
    });   
}
function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}
function inicializaMarcadores() {
    campo.on("input", function() {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var digitouCorreto = frase.startsWith(digitado);
        if(digitouCorreto) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}
function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contadorPalavras").text("0");
    $("#contadorCaracteres").text("0");

    $("#tempoDigitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}