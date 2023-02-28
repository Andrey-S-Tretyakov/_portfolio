(function ($)
    {
    /*
        Language Bar ver.2.2
        @author Tretyakov Andrey <andrey.tretyakov@instafxgroup.com>
    */
        $.fn.languageBar = function (_host)
        {
            if (_host == null)_host = location.hostname;
            var _selected = new Array(), _list = new Array(), _class = '', _data;
            $(this).children('option').each
                (
                    function () // Forming the array of language versions
                    {
                        _data =
                            {
                                'name': $(this).html(),
                                'value': $(this).val(),
                                'class': $(this).attr('class')
                            }
                        if (_data['class'] != undefined)
                        {
                            _class = 'class="' + _data['class'] + '"';
                        }
                        if ($(this).attr('selected'))
                        {
                            _selected = _data;
                        }
                        else
                        {
                            _list[_list.length] = (_data);
                        }
                    }
                );
            $(this).replaceWith('<section class="language"></section>');
            $('.language').append('<h1 id="selected" lang="' + _selected['value'] + '" ' + _class + '>' + _selected['name'] + '</h1><ul></ul>');
            var h1 = $('.language > h1'), ul = $('.language > ul');
            for (var i = 0; i < _list.length; i++)
            {
                ul.append('<li lang="' + _list[i]['value'] + '" ' + _class + ' onclick="location.href=\'' + _host + '' + _list[i]['value'] + '/\'">' + _list[i]['name'] + '</li>');
            }
            /*Events*/
            h1.click
                (
                    function ()  // Displays a list of language versions
                    {
                        if (ul.css('display') == 'block')
                        {
                            h1.removeClass('rotate');
                        }
                        else
                        {
                            h1.addClass('rotate');
                        }
                        ul.slideToggle(300);
                    }
                );
            $(document).click
                (
                    function (event)  // Closing of the list of language versions
                    {
                        if ($(event.target).closest('.language > ul').length == 0 && $(event.target).attr('id') != 'selected')
                        {
                            h1.removeClass('rotate');
                            ul.slideUp(300);                            
                        }
                    }
                );
        }
    }
)(jQuery);