$(function(){
    //일일히 슬라이드 써내려가자....ㅜㅜ.....
    /* var $roomSls=$(".room-sls");
    var $roomSl=$roomSls.children(".room-sl")
    var slideLength=$roomSl.length/$(".room").length
    var $swidth=$(".room-slg").width();
    var $wrapWidth=$swidth*slideLength;
    var slidePosition=0;
    $auto=null;

    function slideEvent(){
        for(i=0;i<$(".room").length;i++)
        function slideMove(){
            $(".room-slg").eq(i).find(".room-sls").stop().animate({
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
        $(".nbt").eq(i).click(function(){
            
            $(".room-slg").eq(i).find(".room-sls").on(nextPlay())
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
    }
    slideEvent(); */
 
 
    var $roomSls=$(".room-sls");
    var $roomSl=$roomSls.children(".room-sl")
    var slideLength=$roomSl.length/$(".room").length
    var $swidth=$(".room-slg").width();
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