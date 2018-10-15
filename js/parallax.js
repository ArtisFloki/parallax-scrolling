$(document).ready(function(){
    $(window).scroll(function(){
        var valeur_scroll = 
        $(window).scrollTop();
        
        $(".plan5").css("transform","translateY(" + valeur_scroll / 1.2 + "px)");

        $(".plan4").css("transform","translateY(" + valeur_scroll / 1.6 + "px)");

        $(".plan3").css("transform","translateY(" + valeur_scroll / 2.4 + "px)");

        $(".plan1").css("transform","translateY(" + (-valeur_scroll / 5) + "px)");

        $(".parallax_conteneur h1").css("transform","translateY(" + (valeur_scroll / 1.3) + "px)");
    });
});