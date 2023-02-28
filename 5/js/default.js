$(document).ready
(
    function ()
    {
        var input = $('form input[type=text]');
        var icon = $('form img.icon');
        input.focus
            (
                function()
                {
                    $(this).parent().css('border', '1px solid #777');
                }
            );
        icon.click
            (
                function()
                {
                    $(this).parent().children('input').focus();
                }
            );
        input.focusout
            (
                function () {
                    $(this).parent().css('border', '1px solid #ccc');
                }
            );
    }
);