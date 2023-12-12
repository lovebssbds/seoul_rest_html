$(function(){
    $array=[]
    $(".array").each(function(index){
        $array[index]=$(this).attr("placeholder")
        $(this).focus(function(){
            $(this).attr("placeholder","")
        })
        $(this).blur(function(){
            $(this).attr("placeholder",$array[index])
        })
    })

    $("input[name=total]").click(function(){
        if( $(this).is(":checked") ){
            $("input[type=checkbox]").prop("checked",true)
        }else{
            $("input[type=checkbox]").prop("checked",false)
        }
    })


    $(".chk").click(function(){
        var checkLength=$(".chk").length;
        var check=$(".chk input:checked").length;
        if(check==checkLength){
            $("input[name=total]").prop("checked",true)
        }else{
            $("input[name=total]").prop("checked",false)
        }
    })
})