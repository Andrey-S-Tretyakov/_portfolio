$(document).ready
    (
        function()
        {
            
                $.scrollify
                (
                    {
                        section : "section",
                        offset : -210,
                        before : function()
                        {
                            navActive($.scrollify.currentIndex()+1);
                            $('#skin').attr('href', 'css/'+$.scrollify.current().data('style')+'.css');
                        }
                    }
                );
                $("a[href^='#']").click
                (
                    function()
                    {
                        $.scrollify.move($(this).attr("href"));                       
                    }
                );
                function navActive(i)
                {
                    $("a[href^='#']").removeClass('active');
                    $("a[href^='#"+i+"']").addClass('active');
                }

                $('#start-trading').on
                (
                    'click', 
                    function()
                    {
                        $('#slide-1-1').slideToggle();
                        $('#slide-1-2').slideToggle();
                        $('body').css('background-image', 'none');
                        $('.slide-1 canvas').slideToggle();
                    }
                );

                $('#start-trading-2').on
                (
                    'click', 
                    function()
                    {
                        $('#slide-2-1').slideToggle();
                        $('#slide-2-2').slideToggle();
                    }
                );

                $('input').on
                (
                    'focusin', 
                    function()
                    {
                        $(this).parent().find('label').addClass('active');
                    }
                );

                $('input').on
                (
                    'focusout',
                    function()
                    {
                        if (!this.value)
                        {
                            $(this).parent().find('label').removeClass('active');
                        }
                    }
                );

                $('#slider-1').slick
                (
                    {
                        dots : false,
                        fade : true,
                        infinite : true,
                        focusOnSelect : true,
                        speed : 300,
                        slidesToShow : 1,
                        slidesToScroll: 1,
                        asNavFor : '#slider-1-nav',
                        arrows : false,
                        
                    }
                );

                $('#slider-1-nav').slick
                (
                    {
                        slidesToShow : 3,
                        slidesToScroll : 1,
                        asNavFor : '#slider-1',
                        dots : false,
                        prevArrow: '<button class="prevArrow"><span class="sprite"></span></button>',
                        nextArrow: '<button class="nextArrow"><span class="sprite"></span></button>',
                        vertical : true,
                        centerMode : true

                    }
                );

                $('#start-trading-3').on
                (
                    'click', 
                    function()
                    {
                        $('#slide-5-1').slideToggle();
                        $('#slide-5-2').slideToggle();
                    }
                );

                $('.nav_button').click
                (
                    function()
                    {
                        $('nav').toggleClass('active');
                        $('#nav-icon1').toggleClass('open');
                    }
                );
        }
    );