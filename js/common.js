// $(선택자).이벤트(처리문(){ }) 이벤트를 사용할 때 기본
// $(선택자).메서드함수(); 처리문이 없음
// jquery를 문서에서 시작하겠다라는 선언
$(document).ready(function(){
    // css메서드 태그에 인라인으로 style을 전달
    $(".m-open").click(function(){
        $(".m-content").stop().addClass("active")
    })
    $(".m-close").click(function(){
        $(".m-content").stop().removeClass("active")
    })

    $(".menu-g>a").click(function(){
        if($(this).parent().find(".m-drop-down").is(":hidden")){
            $(".m-drop-down").slideUp();
            $(this).parent().find(".m-drop-down").stop().slideDown();
            $(".arrow").addClass("fa-angle-right");
            $(".arrow").removeClass("fa-angle-down");
            $(this).find(".arrow").removeClass("fa-angle-right");
            $(this).find(".arrow").addClass("fa-angle-down");
        }else{
            $(this).parent().find(".m-drop-down").stop().slideUp();
            $(this).find(".arrow").removeClass("fa-angle-down");
            $(this).find(".arrow").addClass("fa-angle-right");
        }
    })

    $("#desk-nav").mouseenter(function(){
        $(".drop-down").stop().slideDown();
        $(".full-back").stop().slideDown();
    })
    $("#desk-nav").mouseleave(function(){
        $(".drop-down").stop().slideUp();
        $(".full-back").stop().slideUp();
    })
   /*  $(".first").each(function(index){
    $(this).children("a").mouseenter(function(){
        $(".drop-down").stop().slideDown();
        $(".first>a").removeClass("active");
        $(this).addClass("active");
        $(".full-back").stop().slideDown();
        $(".drop-down").removeClass("active");
        $(".drop-down").eq(index).addClass("active")
        $(".drop-down").eq(3).removeClass("active")
    })
    $("#desk-nav").mouseleave(function(){
        $(".drop-down").stop().slideUp();
        $(".first>a").removeClass("active");
        $(".full-back").stop().slideUp();
    })
    $(this).children(".drop-down").mouseenter(function(){
        $(".first>a").removeClass("active")
        $(this).parent().children("a").addClass("active");
        $(".drop-down").removeClass("active")
        $(this).addClass("active")
        $(".drop-down").eq(3).removeClass("active")
        })
    }) */

    var $iniScroll=$(window).scrollTop();
    var $scrollNow=null;

    $(window).scroll(function(){
        $scrollNow=$(window).scrollTop();
        if($iniScroll<$scrollNow && $(window).width()>=1024){
            $("header").addClass("active");
        }else{
            $("header").removeClass("active");
            if($scrollNow>0){
                $("header").css({"background-color":"white"})
            }else{
                $("header").css({"background-color":"rgba(255,255,255,0.25"})
            }      
        }

        $iniScroll=$scrollNow;
    })
})