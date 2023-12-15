$(function(){
    $(".aboutsr-img").hover(
        function(){
             $(".aboutsr-img picture:nth-child(2)").fadeIn();
        },
        function(){
            $(".aboutsr-img picture:nth-child(2)").fadeOut();
        }
    )
})