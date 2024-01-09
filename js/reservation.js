$(function(){
    function bodyHeight(){
        $('section').css({
            height:$(window).height()*0.7,
            width:$(window).width()
        })
    }
   bodyHeight();

   $(window).resize(function(){
    bodyHeight();
   })
})