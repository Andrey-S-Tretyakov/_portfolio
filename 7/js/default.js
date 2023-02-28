$(document).ready
(
    function ()
    {
        $('#tabs').tabs();
        $('#form-1').minForm();
        $('#form-2').minForm();
        $('.s4 .icons').find('div.sprite_s4').hover
        (
            function ()
            {
                $('.s4 .description').find('.' + $(this).data('id')).slideToggle();
            }
        );
        /*SLIDER*/
        var jssor_1_options = {
            $AutoPlay: true,
            $SlideDuration: 800,
            $SlideEasing: $Jease$.$OutQuint,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*responsive code begin*/
        /*you can remove responsive code if you don't want the slider scales while window resizing*/
        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                refSize = Math.min(refSize, 1920);
                jssor_1_slider.$ScaleWidth(refSize);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);

        







        /*SLIDE-2*/
        var obj = $('#slider2');
        var slides = obj.children('.slides');
        var speed = 300;
        function Navigation(e) {
            this.previous = e.find('.previous');
            this.next = e.find('.next');
            this.pagination = e.find('.pagination');
        }


        var nav = new Navigation(obj);

        nav.next.click
            (
                function () {
                    var slide = slides.find(':first-child');
                    slides.children().animate
                        (
                            {
                                left: '-' + (slide.width() + 60) + 'px'
                            },
                            speed,
                            function () {
                                slide.appendTo(slides);
                                slides.children().css('left', 'initial');
                            }
                        );
                }
            );
        nav.previous.click
            (
                function () {
                    var slide = slides.find(':last-child');
                    slide.prependTo(slides);
                    slides.children().css('left', '-' + (slide.width() + 60) + 'px').animate
                        (
                            {
                                left: '0px'
                            },
                            speed,
                            function () {
                                slides.children().css('left', 'initial');
                            }
                        );
                }
            );
    }
);