(
    function ($)
    {
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



            form.children('.selected').append('<div class="flag ' + selected['attr'] + '"></div><span>' + selected['name']+'</span><div class="arrow"></div>');

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