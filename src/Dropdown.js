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

})