$(function(){
    var $roomSls=$(".roomda-slides");
    var $roomSl=$roomSls.children(".roomda-slide")
    var slideLength=$roomSl.length
    var $swidth=$(".roomda-slide-g").width();
    var $wrapWidth=$swidth*slideLength;
    var slidePosition=0;
    $auto=null;

    function slideEvent(){
        function slideMove(){
            $roomSls.stop().animate({
                left:-$swidth*slidePosition,
            })
            
        }
        function nextPlay(){
            if(slidePosition==slideLength-1){
                slidePosition=0;
            }else{
                slidePosition++;
            }
            slideMove();
        }
        $(".roomda-nbt").click(function(){
            
            nextPlay()
        })
        function prevPlay(){
            if(slidePosition==0){
                slidePosition==slideLength-1
            }else{
                slidePosition--;
            }
        }
        $(".roomda-pbt").click(function(){
            prevPlay();
        })
    }
    slideEvent();
})