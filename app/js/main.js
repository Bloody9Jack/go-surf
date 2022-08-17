$(function() {
    $('.header__slider').slick({
        Infinity: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<img class="slider-arrow first-arrows slider__arrow-right" src="images/arrow-right.svg" alt="">',
        prevArrow: '<img class="slider-arrow first-arrows slider__arrow-left" src="images/arrow-left.svg" alt="">',
        asNavFor: '.slider-dotshead',
    });
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',

    });
    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: '<img class="slider-arrow slider__arrow-right" src="images/arrow-right.svg" alt="">',
        prevArrow: '<img class="slider-arrow slider__arrow-left" src="images/arrow-left.svg" alt="">',
    })
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.serf-slider',
        focusOnSelect: true,
    });
    $('.holder__slider').slick({
        Infinity: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<img class="slider-arrow slider__arrow-right" src="images/arrow-right.svg" alt="">',
        prevArrow: '<img class="slider-arrow slider__arrow-left" src="images/arrow-left.svg" alt="">',
    });
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });
    $('.surfboard-box__circle').on('click', function() {
        $(this).toggleClass('active')
    });
    $('.shop__slider').slick({
        Infinity: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<img class="slider-arrow slider__arrow-right" src="images/arrow-right.svg" alt="">',
        prevArrow: '<img class="slider-arrow slider__arrow-left" src="images/arrow-left.svg" alt="">',
    });
});