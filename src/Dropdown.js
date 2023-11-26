import $ from 'jquery';

$(document).ready(function(){
   
    $(".sub-menu").on('click', function(){

        var submenu = $(this).find('.dropdown');

        if($(this).hasClass('active-menu') === false){
            if(submenu.css('height') === "0px"){
                $(".active-menu").find(".dropdown").css("height", "0px");
                $(".active-menu").find(".arrow").css("transform", "rotate(0deg)");
                $(".active-menu").removeClass('active-menu');
                $(this).addClass('active-menu');
                $(this).find("svg.arrow").css("transform", "rotate(90deg)");
                submenu.css('height', 'auto');
                $(".active-menu div, .active-menu div span").on("click", function() {
                    var $activeMenu = $(".active-menu");
                    var $dropdown = $activeMenu.find(".dropdown");
                    var $arrow = $activeMenu.find(".arrow");
                
                    $dropdown.css("height", "auto");
                    $arrow.css("transform", "rotate(90deg)");
                    
                });
            }else{
                $(this).addClass('active-menu');
                $(this).find("svg.arrow").css("transform", "rotate(90deg)");
                submenu.css('height', 'auto');
                $(".active-menu div, .active-menu div span").on("click", function() {
                    var $activeMenu = $(".active-menu");
                    var $dropdown = $activeMenu.find(".dropdown");
                    var $arrow = $activeMenu.find(".arrow");
                
                    if ($dropdown.css("height") !== "0px") {
                        $dropdown.css("height", "0px");
                        $arrow.css("transform", "rotate(0deg)");
                    } else {
                        $dropdown.css("height", "auto");
                        $arrow.css("transform", "rotate(90deg)");
                    }
                });
            }
        }
    
    });

    $(".sub-menu2").on('click', function(){
        
        var submenu2 = $(this).find('.dropdown2');

        if(submenu2.css('height') === "0px"){
            submenu2.css('height', 'auto');
            $(this).find("svg.arrow2").css("transform", "rotate(90deg)");
        }else{
            submenu2.css('height', '0px');
            $(this).find("svg.arrow2").css("transform", "rotate(0deg)");
        }
    
    });
    
    $(".file-hover").mouseenter(function () {
        console.log(this); 
        $(this).find("span.svg-title").css("opacity","1");
    });
    
    $(".file-hover").mouseleave(function () { 
        $(this).find("span.svg-title").css("opacity","0");
    });

    $("#language").on("click", function(){
        $("#language div").show("fast");
    })

    $("#messages").on("click", function(){
        $("#alert-messages").show("fast");
    })

    $("#notific").on("click", function(){
        $("#alert-notific").show("fast");
    })

    $("#menu-mobile").on("click", function(){
        $("#section-menu-mobile").css("left", "0px");
        $(".close-btn").show("fast");
    })

    $(".close-btn").on("click", function(){
        $("#section-menu-mobile").css("left", "-100%");
        $(".close-btn").hide("fast");
    })

    $("#chat-setting").on("click", function(){
        if($("#chat-setting").hasClass("close-chat-setting")){
            $("#chat-config").hide("fast");
            $("#chat-setting").removeClass("close-chat-setting");
        }else{
            $("#chat-config").show("fast");
            $("#chat-setting").addClass("close-chat-setting");
        }
    })

})

$(document).on('click', function(e) {
    var element1 = $('#language');
    var element2 = $('#messages');
    var element3 = $('#notific');

    // Verifica se o clique ocorreu fora do elemento específico
    if (!element1.is(e.target) && element1.has(e.target).length === 0) {
        $("#language div").hide("fast");
    }

    if (!element2.is(e.target) && element2.has(e.target).length === 0) {
        $("#alert-messages").hide("fast");
    }

    if (!element3.is(e.target) && element3.has(e.target).length === 0) {
        $("#alert-notific").hide("fast");
    }

});