import $ from 'jquery';

$(document).ready(function(){
   
    $(".sub-menu").on('click', function(){

        var submenu = $(this).find('.dropdown');

        if($(this).hasClass('active-menu') == false){
            if(submenu.css('height') === "0px"){
                if($(".active-menu").length !== 0){
                    $(".active-menu").find(".dropdown").css("height", "0px");
                    $(".active-menu").find(".arrow").css("transform", "rotate(0deg)");
                    $(".active-menu").removeClass('active-menu');
                    $(this).addClass('active-menu');
                    $(this).find("svg.arrow").css("transform", "rotate(90deg)");
                    submenu.css('height', 'auto');
                }else{
                    $(this).addClass('active-menu');
                    $(this).find("svg.arrow").css("transform", "rotate(90deg)");
                    submenu.css('height', 'auto');
                }
            }
        }else{
            if($(".active-menu").find(".dropdown").css("height") !== "0px"){
                $(".active-menu").find(".dropdown").css("height", "0px");
                $(".active-menu").find(".arrow").css("transform", "rotate(0deg)");
            }else{
                $(".active-menu").find(".dropdown").css("height", "auto");
                $(".active-menu").find(".arrow").css("transform", "rotate(90deg)");
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

})