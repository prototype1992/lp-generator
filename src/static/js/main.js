// vars
var $body = $('html, body');

$(document).ready(function () {
    // magnific
    $('.test-popup-link').magnificPopup({
        type: 'inline',
        preloader: false
    });

    // js-scroll
    $('.js-scroll').on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var offsetBlock = parseInt($(href).offset().top);
        $body.stop().animate({
            scrollTop: offsetBlock
        }, 1000);
    });

    // slick
    $('#js-first-slider').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // отправка
    var form = $('#order-form');

    form.on('submit', function (e) {
        e.preventDefault();

        var formName = $('#order-form__name').val();
        var formPhone = $('#order-form__phone').val();
        var formArticle = $('#order-form__article').val();

        console.log(formName);
        console.log(formPhone);
        console.log(formArticle);

        var lawBlock = $(this).find('.legal-unit');
        var lawBlockCheck = $(this).find('#legal-unit__check').prop('checked');

        if (!lawBlockCheck) {
            lawBlock.addClass('legal-unit--error');
            return false;
        } else {
            console.log('Отправка');
            let queryString = `lead=leomax&pass=leomax&source=PARTNER_LANDING&products=${formArticle}&product=${formArticle}&name=${formName}&phone=${formPhone}`;

            $.ajax({
                type: 'POST',
                url: 'http://leads.tech.leomax.ru/api/order/',
                data: queryString,

                success: function (responce) {
                    console.log(responce);
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });

});
