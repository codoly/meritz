$(function(){
    //셀렉트 디자인변경
    $(".selectBox select").niceSelect();

    //searchArea foucs event
    $(".searchArea").on("focusin", function(){
        $(this).addClass("focus");
    })
    $(".searchArea").on("focusout", function(){
        $(this).removeClass("focus");
    })
    //ie9에서 placeholder처리
    $('input, textarea').placeholder();
    //input focusOut 처리
    $(document).on("focusout",".inputSet input", function(){
        var thisValue = $(this).attr("data-value")
        if(thisValue != $(this).val()){
            $(this).parent().addClass("change")
        }else{
            $(this).parent().removeClass("change")
        }
    })
})