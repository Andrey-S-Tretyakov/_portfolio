new WOW().init(); /* Библиотека для работы с анимацией */
$(document).ready
(
    function ()
    {

        /*Анимация формы открытия счета*/
        $('#openaccount').click
            (
                function () {
                    var form = $(this).parent('form');
                    form.animate
                        (
                            {
                                left: '-800px',
                                opacity: 0
                            },
                            600
                        );
                    
                    $('.mess').show(500).animate(
                        {
                            opacity: 1
                        },
                        500
                        );

                }
            );
        /*Если браузер Safari*/
        var ua = detect.parse(navigator.userAgent);
        if (ua.browser.family == 'Safari')
        {
            $('.space-effect').remove();
            var size = function()
            {
                $('.description').css('position', 'absolute');
                $('.description').css('padding', '0');
                var center = $('body').width() / 2;
                $('.earth').css('left', (center - 250));
                $('.illumination').css('left', (center - 250));
                $('form').before($('.openaccount .text'));
                $('.openaccount').remove();
                $('.description').find('input').css
                    (
                        {
                            'display': 'block',
                            'opacity': 1
                        }
                    );
                $('.form_4').css
                    (
                        {
                            'display': 'block',
                            'opacity': 1,
                            'top' : 115
                        }
                    );
                $('.form_1').css('top', -30);
                $('.form_2').css('top', 40);
                $('.form_3').css('top', 130);
                $('.mess').css('top', 70);
                /*Убираем анимацию формы*/
                $('input').removeClass('wow');
                $('.form_4').removeClass('wow');
                if (($('body').width()) < 769)
                {
                    $('.earth').css('left', (center - 130));
                    $('.illumination').css('left', (center - 130));
                }
                $('.text').css
                    (
                        {
                            'position': 'relative',
                            'display': 'block',
                            'padding': '20px 0',
                            'width': '100%',
                            'margin' : '0 auto',
                            'top': '-60px',
                            'left': '0px !important',
                            'font-size': '1em',
                            'background-color': '#0b88b6'
                        }
                    );
                if ($('body').width() < 768)
                {
                    $('.text').css
                    (
                        {
                            'max-width': '340px'
                        }
                    );
                }
                else
                {
                    $('.text').css
                    (
                        {
                            'max-width': '550px'
                        }
                    );
                }
            }
            $(window).resize
                (
                    function ()
                    {
                        size();
                    }
                );
            size();
        }
        if (ua.browser.family = 'IE')
        {
            $('.description').css('position', 'absolute');
            $('.description').css('width', '100%');
        }
        $(window).resize
            (
                function () {
                    if ($('body').width() < 768)
                    {
                        $('.space-effect').remove();
                    }
                }
            );
        if ($('body').width() < 768)
        {
            $('.space-effect').remove();
        }



        /* Скролинг на верх страницы */
        $('.upButton').click
            (
                function()
                {
                    $.scrollTo(".header", 500);
                }
            );


        /* Вращение планеты */
        var angle = 0;
        setInterval
            (
                function ()
                {
                    angle += .005;
                    $('.earth').rotate(angle);
                },
                1
            );



    }
);