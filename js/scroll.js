$(function(){

    //데스크탑 헤더 스크롤다운때 감추기
   

    //높이변수를 여러개 만들어서 효과를 넣어보자 일괄로 하면 조정이 어려움
    //스크롤효과 시작
    $(window).scroll(function(){
        
        if($(this).scrollTop()+($(window).height()*0.8)>$(".event-banner").offset().top){
            $(".event-banner").addClass("active");
        }else{
            $(".event-banner").removeClass("active");
        }
        if($(this).scrollTop()+($(window).height()*0.95)>$(".line2").offset().top){
            $(".line1, .line2").addClass("active");
        }else{
            $(".line1, .line2").removeClass("active");
        }
    })
 

    //스크롤다운하면 다음페이지로 내려가는 듯한 효과
    
    $(".scroll-down").click(function(){
        $("html,body").animate({scrollTop:$(".event-banner").offset().top-30},800)
    })


        // 슬라이드 효과
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
            eleDrag=$(".room-sl-g");
            const eleDrag_width=eleDrag.width();
            dragWrapWidth=$(".room-sl-wrap").width();
            eleDrag.css({left:-0})
            last_left=eleDrag.width()-dragWrapWidth;
            console.log("last_left : "+last_left)
            console.log("$time : "+$time)
        }
        init();
    
        $(window).resize(function(){
            init();
        })
    
        $(".room-sl-g").on("mousedown touchstart",function(event){
            if(event.type==="touchstart"){
                xpos=event.touches[0].screenX;
            }else{
                xpos=event.pageX;
            }
    
            drag=true;
    
            timeCount=setInterval(function(){ $time++; console.log("$time : "+$time)},10)
    
            if(event.type==="mousedown"){
                return false;
            }
        })
    
        $(".room-sl-g").on("mouseup touchend",function(event){
    
            drag=false;
    
            clearInterval(timeCount);
    
            if($time>10){
                $("a").click(function(e){ e.preventDefault(); })
            }else{
                $("a").click(function(){
                    var $href=$(this).attr("href");
                    window.open($href,"_self");
                })
            }
    
            $time=0;
        })
    
        $(".room-sl-g").on("mousemove touchmove",function(event){
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
    
        //sights slide
        function timer(){
            setInterval(function(){slide()},2000);                        
          }
          timer();
        function slide(){
          $(".the-sights-img-g").animate({left:-$(".the-sights").width()-10},1000,function(){
            $(this).css({"left":0});
            $(".the-sights:first").clone().appendTo($(".the-sights-img-g"));
            $(this).find(".the-sights:first").remove();
          });   
        } 

})