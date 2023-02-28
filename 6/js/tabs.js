(function ($) {
    $.fn.tabs = function () {
        var nav = $(this).children('.nav');
        var content = $(this).children('.content');
        nav.children().click
         (
             function () {
                 nav.children().each(function () { $(this).removeAttr('data-checked'); });
                 $(this).attr('data-checked', true);
                 content.children().each(function () { $(this).hide() });
                 content.children('[data-content=' + $(this).attr('data-for') + ']').show();
             }
         );
    };
})(jQuery);