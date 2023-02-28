(function () {}).call(this);
$(document).ready
(
    function ()
    {
        /*Кнопка на верх*/
        $('#up').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 1000);
            return false;
        })

        $('.popup-container').hide();
        $('#tabs').tabs();
        $('input[type=checkbox]').each(
            function()
            {
                $(this).styler();
            }
            )
        $('[name="language"]').languageBar(); /* Подключение плагина выбора языковой версии */
        $(window).resize /* Событие изменения размера окна браузера */
            (
                function () {
                    //languagePosition();
                    var width = $(window).width() + scrollbarWidth() - 1;
                    if (width < (768) || width > (1200)) {
                        $('nav, aside').css('left', '0');
                    }
                    else {
                        $('nav, aside').css('left', '-342px');
                        $('nav .links').css('display', 'block');
                    }
                    if (width < (768)) {
                        $('nav .links').css('display', 'none');
                    }
                    $('#nav-icon').removeClass('open');
                    $('.blocked').hide();

                    if ($(window).height() < 825) {
                        $('.specialOffer').addClass('small');
                        $('aside').css('display', 'none');
                    }
                    else {
                        $('.specialOffer').removeClass('small');
                        $('aside').css('display', 'block');
                    }
                    if ($(window).height() < 460) {
                        $('.specialOffer').css('display', 'none');
                    }
                    else {
                        $('.specialOffer').css('display', 'block');
                    }
                }
            );
        /*Навигация*/
        $('body').append('<div class="blocked"></div>');
        $('.blocked').click
            (
                function()
                {
                    $('#nav-icon').removeClass('open');
                }
            );
        $('.nav-toggle, .blocked').click
            (
                function () {

                    if ($(window).width() > (769 - scrollbarWidth()))
                    {

                        if ($('nav').offset().left < 0) {
                            $('nav, aside').animate({ left: '0px' }, 600);
                        }
                        else {
                            $('nav, aside').animate({ left: '-342px' }, 600);
                        }
                    }
                    else {
                        $('nav > .links').slideToggle();
                    }
                    $(this).children('div').toggleClass('open');
                    $('.blocked').slideToggle();
                }
            );
        
        /*Размер полосы прокрутки*/
        function scrollbarWidth() {
            var block = $('<div>').css({ 'height': '50px', 'width': '50px' }),
                indicator = $('<div>').css({ 'height': '200px' });

            $('body').append(block.append(indicator));
            var w1 = $('div', block).innerWidth();
            block.css('overflow-y', 'scroll');
            var w2 = $('div', block).innerWidth();
            $(block).remove();
            return (w1 - w2);
        }
        
        $('.popup-open').click
            (
                function()
                {
                    var id = $(this).attr('data-id');
                    $('#' + id).css('display', 'flex');
                    $('#'+id).show();
                }
            );
        $('.popup-close').click
            (
                function()
                {
                    $('.popup-container').hide();
                }
            );
        /*Table*/

        $('.comparison').find('td').hover
            (
                function () {
                    var i = $(this).attr('class');
                    $('.' + i).css({ 'background-color': 'rgba(255,255,255,1)', 'color': '#000' });
                    $('.' + i).children().css('display', 'block');
                },
                function () {
                    var i = $(this).attr('class');
                    $('.' + i).css({ 'background-color': 'rgba(255,255,255,0)', 'color': '#fff' });
                    $('.' + i).children().css('display', 'none');
                }
            );
        /*Плавный переход к якорю*/
        $('a.anchor').click
            (
                function (event)
                {
                    event.preventDefault();            
                    $('body,html').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
                }
            );
        /*Сравнительная таблица*/
        $('table.comparison').tableStyle
            (
                {
                    headerFixed: true,
                    maxContentHeight : '415px'
                }
            );
    }
    
);
