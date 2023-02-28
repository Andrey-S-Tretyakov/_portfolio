// Function for changing attribute values
$.fn.toggleAttr = function (attr, attr1, attr2)
{
    return this.each
    (
        function ()
        {
            var self = $(this);
            if (self.attr(attr) == attr1)
                self.attr(attr, attr2);
            else
                self.attr(attr, attr1);
        }
    );
};
$(document).ready
    (
        function()
        {
            // Checkbox
            $('.checkbox').on
                (
                    'click',
                    function ()
                    {
                        var checkbox = $(this);
                        checkbox.find('input[type=checkbox]').toggleAttr('checked', 'checked', null);
                        checkbox.find('.toggle').toggleClass('checked');
                    }
                );
        }
    );