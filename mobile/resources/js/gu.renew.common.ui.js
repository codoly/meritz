//스코롤 감지
var scrollCheck
$(function () {
	//셀렉트 디자인변경
	$(".select_box select").niceSelect();

	//searchArea foucs event
	$(".search_area").on("focusin", function () {
		$(this).addClass("focus");
	})
	$(".search_area").on("focusout", function () {
		$(this).removeClass("focus");
	})
	//input focusOut 처리
	$(document).on("focusout", ".input_set input", function () {
		var thisValue = $(this).attr("data-value")
		if (thisValue != $(this).val()) {
			$(this).parent().addClass("change")
		} else {
			$(this).parent().removeClass("change")
		}
	})

	//팝업테스트함수
	$(".left_area .logo").click(function () {
		var popUrl = window.location;
		var popOption = "width=1300px, height=920px, resizable=no, location=no, top=0px, left=0px, scrollable=no;"
		window.open(popUrl, "index", popOption);
	});

	//layout sub 좌측 하단 멤버 리스트
	$(document).on("click", ".member_list .list .item .name", function () {
		var target = $(this).closest(".item");
		var targetList = $(this).closest("ul").find("> li");
		if (!target.hasClass("on")) {
			targetList.find(".item").removeClass("on");
			targetList.find(".item .info").slideUp();
			target.addClass("on");
			target.find(".info").slideDown();
		} else {
			target.removeClass("on");
			target.find(".info").slideUp();
		}
	});

})

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function counterStart() {
	$('.count').each(function () {
		if (!$(this).hasClass("active")) {
			$(this).addClass("active")
			var num = $(this).text();
			var start = 0;
			if ($(this).attr("data-value")) {
				num = Number($(this).attr("data-value"));
				start = Number($(this).text().replace(/,/gi, ""));
			}
			$(this).prop('Counter', start).animate({
				Counter: num
			}, {
				duration: 1300,
				easing: 'swing',
				step: function (now) {
					$(this).attr("data-value", Math.ceil(now));
					$(this).text(formatNumber(Math.ceil(now)));
				}
			});
		}
	});
}

//layerpopup
function layerPopBoxOpen(target) {
	$("#" + target).show();
	setTimeout(function () {
		$("#" + target).addClass("open");
	}, 10)

}

function layerPopBoxClose(target) {
	$("#" + target).hide().removeClass("open");
	;
}

//탑버튼 유무
function btnTop(obj) {
	var btnTop = $(".btn_top");
	if ($(obj).height() < $(obj).find(".mCSB_container").height()) {
		btnTop.show();
		btnTop.on("click", function () {
			$(obj).mCustomScrollbar("scrollTo", "0")
		})
	} else {
		btnTop.hide();
	}
}

//레이아웃 바꾸기
function changeLayout(type, file) {
	if (type == 'sub') {
		$(".wrap").removeClass("main").addClass("sub")
		$(".left_area .main_area").removeClass("active");
		$(".left_area .sub_area").addClass("active");
		setTimeout(function () {
			$(".tbody_box").removeClass("load");
			$(".left_area .main_area").removeClass("active");
		}, 10)
	} else {
		$(".wrap").removeClass("sub").addClass("main")
		$(".left_area .main_area").addClass("active");
		$(".left_area .sub_area").removeClass("active");
		setTimeout(function () {
			$(".tbody_box").addClass("load");
			$(".left_area .main_area").addClass("active");
		}, 10)
	}
	// if (file) {
	// 	$.get(file, function (data) {
	// 		var data = $(data);
	// 		loadHtml = $(data).find(".ajax_area");
	// 		//추후 ajax콜 끝난시점
	// 		setTimeout(function () {
	// 			$(".content_area_sub").html(loadHtml);
	// 		}, 300)
	// 	});
	// }
}

//서브메뉴 활성화
function subMenuActive(idx) {
	$(".bottom_fixed_menu_area .bottom_menu").removeClass("on").eq(idx).addClass("on");
}

//서브메뉴 상단 페딩계산산