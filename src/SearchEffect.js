import $ from 'jquery';
$(document).ready(function() {
    
    $(".search").on("click", function(){
        $(".search").css("transform", "scale(1.1")
                    .css("position", "absolute")
                    .css("top", "0vw")
                    .css("left", "1.25vw")
                    .css("width", "72vw")
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
