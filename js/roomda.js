$(function(){
    var $roomSls=$(".roomda-slides");
    var $roomSl=$roomSls.children(".roomda-slide")
    var slideLength=$roomSl.length
    var $swidth=$(".roomda-slide-g").width();
    var $wrapWidth=$swidth*slideLength;
    var slidePosition=0;
    $auto=null;

    function init(){
       $roomSls.css({left:-0})
       $swidth=$(".roomda-slide-g").width();
    }

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
                slidePosition=slideLength-1
            }else{
                slidePosition--;
            }
            slideMove();
        }
        $(".roomda-pbt").click(function(){
            prevPlay();
        })
    }
    slideEvent();

    $(window).resize(function(){
        init();
    })
})
$(function(){
    var $width;
    var x,xpos;
    var drag=false;
    var eleDrag;
    var dragWrapWidth;
    var last_left;
    var $time=0;

    function init(){
        $width=$(window).width();
        drag=false;
        eleDrag=$(".roomda-slides");
        const eleDrag_width=eleDrag.width();
        dragWrapWidth=$(".roomda-slide-g").width();
        eleDrag.css({left:-0})
        last_left=eleDrag.width()-dragWrapWidth;
        console.log("last_left : "+last_left)
        console.log("$time : "+$time)
    }
    init();

    $(window).resize(function(){
        init();
    })

    $(".roomda-slides").on("mousedown touchstart",function(event){
        if(event.type==="touchstart"){
            xpos=event.touches[0].screenX;
        }else{
            xpos=event.pageX;
        }

        drag=true;


        if(event.type==="mousedown"){
            return false;
        }
    })

    $(".roomda-slides").on("mouseup touchend",function(event){
        drag=false;
    })

    $(".roomda-slides").on("mousemove touchmove",function(event){
        if(drag){
            if(event.type==="touchmove"){
                x=parseInt(eleDrag.css("left"))-parseInt(xpos-event.touches[0].screenX)
            }else{
                x=parseInt(eleDrag.css("left"))-parseInt(xpos-event.pageX);
            }

            if(x>0){
                x=0;
                drag=false;
            }else if(x<-last_left){
                x=-last_left;
                drag=false;
            }
            eleDrag.css({left:x});
        }
        if(event.type==="touchmove"){
            xpos=event.touches[0].screenX;
        }else{
            xpos=event.pageX;
        }
        return false;

    })    
})