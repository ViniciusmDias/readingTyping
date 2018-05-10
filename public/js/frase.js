$("#botaoFrase").click(fraseAleatoria);
$("#botaoFraseId").click(buscaFrase);

function trocaFraseAleatoria(data) {
    
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoDaFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function fraseAleatoria() {
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
            .fail(function () {
            $("#erro").toggle(); //ao falhar mostra a mensagem de erro
            setTimeout(function() {
                $("#erro").toggle();
            }, 1500);
        })
    .always(function () { //sempre escondendo o spinner
        $("#spinner").toggle();
    });
}
function buscaFrase() {
    $("#spinner").toggle();

    var fraseId = $("#fraseId").val();
    var dados = {id : fraseId};
    
    $.get("http://localhost:3000/frases", dados, trocaFrase)
        .fail(function () {
            $("#erro").toggle();
            setTimeout(function () {
                $("#erro").toggle();
            }, 2000);
        })
        .always(function () {
            $("#spinner").toggle();
        });
}

function trocaFrase(data) {
    var frase = $(".frase");
    frase.text(data.texto); 
    atualizaTamanhoDaFrase();
    atualizaTempoInicial(data.tempo);
}