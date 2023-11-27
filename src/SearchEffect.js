import $ from 'jquery';

function isMobile() {
    // Verifica a largura da tela
    return window.innerWidth <= 768;
}

$(document).ready(function() {
    
    $(".search").on("click", function(){
        if (isMobile()) {
            // Código a ser executado apenas em dispositivos móveis
            $(".search").css("position", "absolute")
                        .css("top", "-2vw")
                        .css("left", "15vw")
                        .css("width", "80vw")
        } else {
            $(".search").css("transform", "scale(1.1")
                        .css("position", "absolute")
                        .css("top", "0.5vh")
                        .css("left", "22.5vw")
                        .css("width", "72vw")
        }
    })

})

$(document).on('click', function(e) {
    var elementoEspecifico = $('.search');

    // Verifica se o clique ocorreu fora do elemento específico
    if (!elementoEspecifico.is(e.target) && elementoEspecifico.has(e.target).length === 0) {
        $(".search").css("transform", "scale(1")
                    .css("position", "unset")
                    .css("top", "unset")
                    .css("left", "unset")
                    .css("width", "25vw")
    }
});
