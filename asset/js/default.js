$(function () {
  //셀렉트 디자인변경
  $(".selectBox select").niceSelect();

  //searchArea foucs event
  $(".searchArea").on("focusin", function () {
    $(this).addClass("focus");
  })
  $(".searchArea").on("focusout", function () {
    $(this).removeClass("focus");
  })
  //ie9에서 placeholder처리
  $('input, textarea').placeholder();
  //input focusOut 처리
  $(document).on("focusout", ".inputSet input", function () {
    var thisValue = $(this).attr("data-value")
    if (thisValue != $(this).val()) {
      $(this).parent().addClass("change")
    } else {
      $(this).parent().removeClass("change")
    }
  })

  //팝업테스트함수
  $(".logo").click(function () {
    var popUrl = window.location;
    var popOption = "width=1300px, height=920px, resizable=no, location=no, top=0px, left=0px, scrollable=no;"
    window.open(popUrl, "index", popOption);
  });

  //layout sub 좌측 하단 멤버 리스트
  $(document).on("click", ".memberList .list .item .name", function () {
    var target = $(this).closest(".item");
    var targetList = $(this).closest("ul").find("> li");
    if (!target.hasClass("on")){
      targetList.find(".item").removeClass("on");
      targetList.find(".item .info").slideUp();
      target.addClass("on");
      target.find(".info").slideDown();
    }else{
      target.removeClass("on");
      target.find(".info").slideUp();
    }
  })
})

function counterStart(){
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 1000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
}

//layerpopup
function layerPopBoxOpen(target){
  $("#"+target).show();
  setTimeout(function(){
    $("#"+target).addClass("open");
  },10)

}
function layerPopBoxClose(target){
  $("#"+target).hide().removeClass("open");;
}