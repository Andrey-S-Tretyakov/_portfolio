/*!
 * jquery.tableStyle. The jQuery tableStyle plugin
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


    $.fn.tableStyle = function(method)
    {
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
        var defaults = 
            {
                headerFixed: false,
                maxContentHeight : 'auto'
            }

        var methods =
            {
                init : function(options)
                {
                    options = $.extend({}, defaults, options);

                    var table = new Object();
                    table.head = new Array();
                    table.body = new Array();

                    if (this.is(':has(thead)'))
                    {
                        this.find('thead > tr').each
                            (
                                function (i)
                                {

                                    table.head[i] = new Array();
                                    $(this).children().each
                                        (
                                            function (j)
                                            {                                   
                                                table.head[i][j] = { 'value': $(this).html(), 'colspan':$(this).attr('colspan'),'rowspan':$(this).attr('rowspan') };                                                
                                            }
                                        );
                                }
                            );
                    }

                    if(this.is(':has(tbody)'))
                    {
                        this.find('tbody > tr').each
                            (
                                function(i)
                                {
                                    table.body[i] = new Array();
                                    $(this).children().each
                                        (
                                            function(j)
                                            {
                                                table.body[i][j] = { 'value': $(this).html(), 'colspan': $(this).attr('colspan'), 'rowspan': $(this).attr('rowspan') };
                                            }
                                        );                                                             
                                }
                            );
                    }
                    else
                    {
                        alert('Container TBODY no exists!');
                    }

                    return this.each(function ()
                    {
                        methods.show(options, $(this), table);
                        //$(window).bind('resize.tableStyle', methods.show);
                    });
                },
                show : function(options, obj, table)
                {
                    if (options.headerFixed)
                    {
                        head = '<table>';
                        for (var i = 0; i < table.head.length; i++)
                        {
                            head += '<tr>';
                            for (var j = 0; j < table.head[i].length; j++)
                            {
                                head += '<th class="col-' + j + '" colspan="' + table.head[i][j]['colspan'] + '" rowspan="' + table.head[i][j]['rowspan'] + '">' + table.head[i][j]['value'] + '</th>';
                            }
                            head += '</tr>';
                        }
                        head += '</table>';
                        body = '<table>';
                        for (var i = 0; i < table.body.length; i++) {
                            body += '<tr>';
                            ; for (var j = 0; j < table.body[i].length; j++) {
                                body += '<td class="col-' + j + '" colspan="' + table.body[i][j]['colspan'] + '" rowspan="' + table.body[i][j]['rowspan'] + '">' + table.body[i][j]['value'] + '</td>';
                            }
                            body += '</tr>';
                        }
                        body += '</table>';
                        // Итоговый вывод
                        obj.html('').prepend('<div class="table fixed"><div class="head" style="margin-right:' + scrollbarWidth() + 'px">' + head + '</div><div class="body" style="max-height:' + options.maxContentHeight + '">' + body + '</div></div>');
                        var width = 100 / j;
                        //$('.table td, .table th').css({ 'width': width+'%', 'min-width': width+'%', 'max-width': width+'%' });
                        
                        //var scrollBar = $('.scrollBar');
                        //var scroll = scrollBar.children('.scroll');

                        
                    }
                },
                //hide : function()
                //{},
                //update : function()
                //{},
                //reposition : function()
                //{}
            };
        if (methods[method])
        {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method)
        {
            return methods.init.apply(this, arguments);
        }
        else
        {
            $.error('Method ' + method + ' no exists for jQuery.tableStyle');
        }   
    };
})(jQuery);