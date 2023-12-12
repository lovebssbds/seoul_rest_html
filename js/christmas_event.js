$(function(){
    var $roomSls=$(".prize-sls");
    var $roomSl=$roomSls.children(".prize-sl")
    var slideLength=$roomSl.length
    var $swidth=$(".prize-sl-g").width();
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
        $(".nbt").click(function(){
            
            nextPlay()
        })
        function prevPlay(){
            if(slidePosition==0){
                slidePosition==slideLength-1
            }else{
                slidePosition--;
            }
        }
        $(".pbt").click(function(){
            prevPlay();
        })
        function autoPlay(){
            $auto=setInterval(function(){
                nextPlay();
            },5000)
        }
        autoPlay();
        $roomSls.hover(
            function(){
                clearInterval($auto);
            },
            function(){
                nextPlay();
            }
        )
    }
    slideEvent();
})