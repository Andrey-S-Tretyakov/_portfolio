(function ($)
{
    $.fn.styler = function ()
    {
        var input = $(this);
        var checked = input.prop('checked');
        input.hide();
        input.wrap('<div class="checkbox-wrap"></div>');
        input.after('<div class="checkbox" data-checked="' + checked + '"><i class="fa fa-check"></i></div>');

        input.parent().children('.checkbox').click
            (
                function()
                {
                    if(checked == true)
                    {
                        checked = false
                    }
                    else
                    {
                        checked = true;
                    }
                    input.prop('checked', checked);
                    $(this).attr('data-checked', checked);
                }
            );
    };
})(jQuery);