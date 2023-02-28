(
    function ($)
    {



        //  Подключаем CSS стили для различных браузеров



        $.fn.select = function () /* Cтилизация формы выбора языка */
        {
            var selected, languages = new Array();
            $(this).children('option').each
                (
                    function()
                    {
                        var array = { 'name': $(this).html(), 'attr': $(this).attr('class') };
                        if ($(this).attr('selected'))
                        {
                            selected = array;
                        }
                        else
                        {
                            languages[languages.length] = (array);
                        }
                    }
                );
            $(this).replaceWith("<div id='language'><div class='selected f24'></div><div class='list'></div></div>");
            var form = $('#language');
            form.children('.selected').append('<div class="flag ' + selected['attr'] + '"></div><span>' + selected['name']+'</span><i class="list"></i></div>');

            for (var i = 0; i < languages.length; i++)
            {
                form.children('.list').append('<a class="f24" href="../' + languages[i]['attr'] + '/index.html"><div class="flag ' + languages[i]['attr'] + '"></div><span>' + languages[i]['name'] + '</span></a>');
            }

            var select = form.children('.list');
            form.children('.selected').click
                (
                    function()
                    {
                        select.slideToggle(300);
                        //rotate(180);
                    }
                ); 
            
            
            $('html').click /* Закрытие всплывающих окон */
                (
                    function (event) {

                        if ($(event.target).parents(select).size() > 7) return;
                        select.slideUp(300);
                    }
                );
            

        }
    }
)(jQuery);


var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function () {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });

    $('#top').click
        (
            function ()
            { 
                $('body, html').animate
                    (
                        {
                        scrollTop: 0
                        },
                        delay
                    );
            }
        );
    $('.get_bonus').click
        (
            function () {
                var pos = $('#open_account').position().top;
                $('body, html').animate
                    (
                        {
                            scrollTop: pos
                        },
                        delay
                    );
            }
        );
    $('#carousel-description').carousel({interval: 2500})


});