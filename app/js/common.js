$(document).ready(function() {

	$('.toggle-mnu').click(function () {
		$(this).toggleClass('on');
		$('.main-mnu').slideToggle();
		return false;
	});

	$('.section_1 .section-content .info-item').equalHeights();
	$('.section_3 .section-content .info-item').equalHeights();
	$('.s1-bottom .info-item').equalHeights();
	$('.s2-item').equalHeights();
	$('.s2-item .img-wrap').equalHeights();

	$('.section_4').waypoint(function (index) {

        $('.section_4 .card').each(function () {
        	var ths = $(this);
        	setInterval(function () {
        		ths.removeClass('card-off').addClass('card-on')
            }, 150*index);
        });
    }, {
		offset: '20%'
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {	//	если в старом браузере, не поддерживается svg в качестве img,
			// то он заменяет svg на png
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
