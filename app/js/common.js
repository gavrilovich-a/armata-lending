$(document).ready(function() {

	$('.toggle-mnu').click(function () {
		$(this).toggleClass('on');
		$('.main-mnu').slideToggle();
		return false;
	});

	$('.main-footer .toggle-mnu').click(function () {
		$('html, body').animate({scrollTop: $(document).height()}, 'slow');
		return false;
    });

    $('.top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    $('.arrow-bottom').click(function () {
        $('html, body').animate({ scrollTop: $('.main-head').height()+120 }, 'slow');
        return false;
    });

    $('.section-head p, .section-head h2').animated('fadeInRight');
    $('.info-item-wrap').animated('zoomIn');
    $('.slider .slide').animated('rollIn');
    $('.homesect.section_8 .forms').animated('fadeInRight');
    $('.homesect.section_8 .p').animated('fadeInLeft');

    $('.section_2').waypoint(function () {
        $('.s2-item-wrap').each(function (index) {
            var ths = $(this);
            setInterval(function () {
                ths.addClass('on')
            }, 200*index);
        });
    }, {
    	offset: '30%'
	});

    $('.section_8').waypoint(function () {
        $('.s8-item').each(function (index) {
            var ths = $(this);
            setInterval(function () {
                ths.addClass('on')
            }, 200*index);
        });
    }, {
    	offset: '30%'
	});

	$('.section_1 .section-content .info-item').equalHeights();
	$('.section_3 .section-content .info-item').equalHeights();
	$('.s1-bottom .info-item').equalHeights();
	$('.s2-item').equalHeights();
	$('.s2-item .img-wrap').equalHeights();

	$('.section_4').waypoint(function () {
        $('.section_4 .card').each(function (index) {

        	var ths = $(this);
        	setInterval(function () {
        		ths.removeClass('card-off').addClass('card-on')
            }, 200*index);
        });
    }, {
		offset: '20%'
	});

    $('.section_5').waypoint(function (dir) {

        if (dir === 'down') {

            $('.section_5 .tc-item').each(function (index) {
                var ths = $(this);
                setTimeout(function () {
                    var myAnimation = new DrawFillSVG({
                        elementId: 'tc-svg-' + index
                    });
                    ths.children('.tc-content').addClass('tc-content-on');
                }, 500*index);
            });
        }

        this.destroy();

    }, {
        offset: '20%'
    });

    $('.slider').owlCarousel({
        items: 1,
        nav: true,
        navText: '',
        loop: true,
        fluidSpeed: 600,
        autoplaySpeed: 600,
        navSpeed: 600,
        dotsSpeed: 600,
        dragEndSpeed: 600
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
			return $(this).attr("src").replace(".svg", ".png")
		})
	}

	$('.homesect .section-bottom .buttons').click(function () {
        $('#callback h4').html($(this).text());
        $('#callback input[name=formname]').val($(this).text());
    }).magnificPopup({
        type: 'inline',
        mainClass: 'mfp-forms'
    });

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$(".forms").trigger("reset");
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
