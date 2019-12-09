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
})