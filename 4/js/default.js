$(document).ready
(
    function ()
    {
        $(window).scroll
            (
                function () // Changing substrate for transparent blocks
                {
                    
                    var height = $(document).height();
                    if ($('.examples').position().top >= (height/1.5))
                    {
                        $('.substrate').css('background-image', 'url("./img/img30.png")');
                    }
                    else
                    {
                        $('.substrate').css('background-image', 'url("./img/img11.png")');
                    }                   
               }
            );
        $('#da-slider').cslider  // Slider
            (
                {
                     autoplay: true,
                    bgincrement: 10000
                }
            );

/*        $('.moveOn').click // transition to the button to open an account
        (
            function ()
            { 

                $('body, html').animate
                    (
                        {
                            scrollTop: $('.quote').position().top
                        },
                        3000
                    );
            }
        );*/

        $('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
	    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 3000); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
        
        
        var input = $('form').children('section').children('input[type=text]');
        var icon = $('form').children('section').children('img.icon');
        icon.click
            (
                function()
                {
                    $(this).parent().children('input').focus();
                }
            );
        input.focus
            (
                function()
                {
                    $(this).parent().css('border', '1px solid #777');
                }
            );
        input.focusout
            (
                function () {
                    $(this).parent().css('border', '1px solid #aaa');
                }
            );
    }
);