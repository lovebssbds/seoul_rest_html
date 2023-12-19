$(function(){
    var $roomSls=$(".roomda-sls");
    var $roomSl=$roomSls.children(".roomda-sl")
    var slideLength=$roomSl.length
    var $swidth=$(".roomda-slg").width();
    var $wrapWidth=$swidth*slideLength;
    var slidePosition=0;
    $auto=null;

    function init(){
        $roomSls.css({left:-0})
        $swidth=$(".roomda-slg").width();
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
                slidePosition==slideLength-1
            }else{
                slidePosition--;
            }
        }
        $(".roomda-pbt").click(function(){
            prevPlay();
        })
        function autoPlay(){
            $auto=setInterval(function(){
                nextPlay();
            },8000)
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
    
    $(window).resize(function(){
        init();
    })

})

$(function(){
    var $roomSls=$(".roomdb-sls");
    var $roomSl=$roomSls.children(".roomdb-sl")
    var slideLength=$roomSl.length
    var $swidth=$(".roomdb-slg").width();
    var $wrapWidth=$swidth*slideLength;
    var slidePosition=0;
    $auto=null;

    function init(){
        $roomSls.css({left:-0})
        $swidth=$(".roomdb-slg").width();
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
        $(".roomdb-nbt").click(function(){
            
            nextPlay()
        })
        function prevPlay(){
            if(slidePosition==0){
                slidePosition==slideLength-1
            }else{
                slidePosition--;
            }
        }
        $(".roomdb-pbt").click(function(){
            prevPlay();
        })
        function autoPlay(){
            $auto=setInterval(function(){
                nextPlay();
            },8000)
        }
        autoPlay();
        $roomSls.hover(
            function(){
                clearInterval($auto);
            },
            function(){
                nextPlay();room
            }
        )
    }
    slideEvent();
    
    $(window).resize(function(){
        init();
    })

})

$(function(){
    var $roomSls=$(".roomta-sls");
    var $roomSl=$roomSls.children(".roomta-sl")
    var slideLength=$roomSl.length
    var $swidth=$(".roomta-slg").width();
    var $wrapWidth=$swidth*slideLength;
    var slidePosition=0;
    $auto=null;

    function init(){
        $roomSls.css({left:-0})
        $swidth=$(".roomta-slg").width();
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
        $(".roomta-nbt").click(function(){
            
            nextPlay()
        })
        function prevPlay(){
            if(slidePosition==0){
                slidePosition==slideLength-1
            }else{
                slidePosition--;
            }
        }
        $(".roomta-pbt").click(function(){
            prevPlay();
        })
        function autoPlay(){
            $auto=setInterval(function(){
                nextPlay();
            },8000)
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
    
    $(window).resize(function(){
        init();
    })

})

$(function(){
    var $roomSls=$(".roomtb-sls");
    var $roomSl=$roomSls.children(".roomtb-sl")
    var slideLength=$roomSl.length
    var $swidth=$(".roomtb-slg").width();
    var $wrapWidth=$swidth*slideLength;
    var slidePosition=0;
    $auto=null;

    function init(){
        $roomSls.css({left:-0})
        $swidth=$(".roomtb-slg").width();
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
        $(".roomtb-nbt").click(function(){
            
            nextPlay()
        })
        function prevPlay(){
            if(slidePosition==0){
                slidePosition==slideLength-1
            }else{
                slidePosition--;
            }
        }
        $(".roomtb-pbt").click(function(){
            prevPlay();
        })
        function autoPlay(){
            $auto=setInterval(function(){
                nextPlay();
            },8000)
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
    
    $(window).resize(function(){
        init();
    })

})

$(function(){
    var $roomSls=$(".roomwd-sls");
    var $roomSl=$roomSls.children(".roomwd-sl")
    var slideLength=$roomSl.length
    var $swidth=$(".roomwd-slg").width();
    var $wrapWidth=$swidth*slideLength;
    var slidePosition=0;
    $auto=null;

    function init(){
        $roomSls.css({left:-0})
        $swidth=$(".roomwd-slg").width();
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
        $(".roomwd-nbt").click(function(){
            
            nextPlay()
        })
        function prevPlay(){
            if(slidePosition==0){
                slidePosition==slideLength-1
            }else{
                slidePosition--;
            }
        }
        $(".roomwd-pbt").click(function(){
            prevPlay();
        })
        function autoPlay(){
            $auto=setInterval(function(){
                nextPlay();
            },8000)
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
    
    $(window).resize(function(){
        init();
    })

})