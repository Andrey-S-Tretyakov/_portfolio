(function ($)
    {
        $.fn.gallery = function (animation)
        {
            var gallery = $(this);
            var timer = animation['timer'];
            if (animation['speed'] != undefined)
            {
                var speed = animation['speed'];
            }
            else
            {
                var speed = 500;
            }
            var i = 0;
            var slides = new Array();

            var nextButton = $(this).find('div.next');
            var previousButton = $(this).find('div.previous');

            $('ul.list').find('img').each
                (
                    function()
                    {
                        slides[slides.length] = ($(this).attr('src'));
                    }
                );




            $('ul.list').replaceWith('<img class="background" src="' + slides[0] + '"><img class="slide" src="' + slides[0] + '">');
            var slide = $(this).children('img.slide');
            var background = $(this).children('img.background');
            var pagination = $(this).children('.pagination');
            /* Добавляем пагинацию */
            for (var a = 0; a < slides.length; a++)
            {
                pagination.append('<li></li>');
            }
            var showPagination = function(i)
            {
                pagination.children('li').removeClass('active');
                pagination.find('li:nth-child(' + (i + 1) + ')').addClass('active');
            }
            showPagination(i);

            pagination.children('li').click
                (
                    function()
                    {
                        show($(this).index())
                    }
                );
            var show = function(i)
            {
                /* Анимация пагинации */
                showPagination(i);
                /* Анимация слайда */
                //background.css('backgroundImage', 'url('+slides[i]+')');
                background.attr('src', slides[i]);
                slide.animate
                    (
                        {
                            opacity: 0
                        },
                        speed,
                        function ()
                        {
                            $(this).attr('src', slides[i]);
                        }
                    ).animate
                    (
                        {
                            opacity: 1
                        },
                        speed
                    );
                
            }
            var animation = true;
            var nextSlide = function()
            {
                if (!animation) return false;
                if (i == (slides.length - 1))
                        {
                            i = 0;
                        }
                        else
                        {
                            i++;
                        }
                        show(i);
            }
            nextButton.click
                (
                    function()
                    {
                        nextSlide();
                    }
                );
            previousButton.click
                (
                    function ()
                    {
                        if (i == 0)
                        {
                            i = slides.length - 1;
                        }
                        else
                        {
                            i--;
                        }
                        show(i);
                    }
                );
            /* Таймер */
            if ((timer != undefined))
            {
                var t = setInterval(nextSlide, timer);
                pagination.children('li').click
                (
                    function()
                    {
                        clearTimeout(t);
                    }
                );
                nextButton.click
                (
                    function()
                    {
                        clearTimeout(t);
                    }
                );
                previousButton.click
                (
                    function()
                    {
                        clearTimeout(t);
                    }
                );                
            } 
            
            
            

    }
}

)(jQuery);