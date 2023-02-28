/*!
 * jquery.tableSettings. The jQuery tableSettings plugin
 *
 * Copyright (c) 2016 Tretyakov Andrey
 * andrey.s.tretyakov@outlook.com
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://docs.jquery.com/Plugins/Authoring
 * jQuery authoring guidelines
 *
 * Launch  : November 2016
 * Version : 1.0
 * Released: November 24th, 2016
 *
 */
(function ($)
{
    $.fn.tableSettings = function (e)
    {
        var option = 
            {
                headerFixed : false
            }

        $.extend(option, e);

        return this.each
            (
                function()
                {
                    if(option.headerFixed) /*Фиксированный заголовок*/
                    {
                        alert('hello');
                    }
                }
            );
    };
})(jQuery);