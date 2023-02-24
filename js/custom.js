$(document).ready(function() {

    /**************************************************
     ******************* When Open Menu  **********************
     ***************************************************/
    $(".openMenu").click(function() {
        $("body").addClass("overflowH");
        $(".menuMobile").fadeIn();
        $(".menuMobile .menuContent").addClass("active");
    });
    $(".menuMobile .menuContent .menuRes li a").click(function() {
        $(this).children('i').toggleClass('rotate');
        $(this).siblings().slideToggle();
    });
    $(".closeX,.BgClose").click(function() {

        $("body").removeClass("overflowH");
        $(".menuMobile").fadeOut();
        $(".menuMobile .menuContent").removeClass("active");

    });
    /**************************************************
     ******************* When Scroll header  **********************
     ***************************************************/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".header").addClass("headerFixed");
        } else {
            $(".header").removeClass("headerFixed");
        }
    });
    /**************************************************
     ******************* Main Slider  **********************
     ***************************************************/
    if ($('#backgroundSlider').length > 0) {
        $("#backgroundSlider").owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            center: true,
            dots: false,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 1,
                },
                1200: {
                    items: 1,

                }
            }
        });
    }
    /**************************************************
     ******************* Clock For Happening  **********************
     ***************************************************/


    $('.clockHappening').each(function() {
        $(this).countdown($(this).attr("data-date"), function(event) {
            $(this).html(event.strftime('<div class="CountDownHappening"><span><b>%D</b> days</span><span><b>%H</b> Hours</span><span><b>%M</b> Min</span><span> <b>%S</b> sec</span> </div>'));
        })
    });
    /**************************************************
     ******************* Slider For Happening  **********************
     ***************************************************/
    if ($('#HappeningSlider').length > 0) {

        $("#HappeningSlider").owlCarousel({
            loop: true,
            margin: 40,
            nav: false,
            autoplay: false,
            center: true,
            dots: false,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            autoWidth: true,
        });
    }
    /**************************************************
     ******************* Slider For Coming **********************
     ***************************************************/
    if ($('#ComingSlider').length > 0) {
        $('#ComingSlider').owlCarousel({
            loop: true,
            margin: 40,
            nav: true,
            center: true,
            autoplay: false,
            dots: false,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                750: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }
    if ($('#SliderResponsive').length > 0) {

        $('#SliderResponsive').owlCarousel({
            loop: true,
            margin: 40,
            nav: true,
            center: true,
            autoplay: false,
            dots: false,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }

        });
    }
    /**************************************************
     ******************* Clock For Coming  **********************
     ***************************************************/
    $('.clockComing').each(function() {
        $(this).countdown($(this).attr("data-date"), function(event) {
            $(this).html(event.strftime('<div class="CountDownComing"><span><b>%D</b> days</span><span><b>%H</b> Hours</span><span><b>%M</b> Min</span><span> <b>%S</b> sec</span> </div>'));
        })
    });
    /**************************************************
     ******************* Slider For Auctions  **********************
     ***************************************************/
    if ($('#Auctions-endedSlider').length > 0) {

        $("#Auctions-endedSlider").owlCarousel({
            loop: true,
            margin: 40,
            autoplay: false,
            center: true,
            dots: false,
            nav: false,
            autoWidth: true,

        });
    }
    /**************************************************
     ******************* Slider For Partners  **********************
     ***************************************************/
    if ($('#partnersSlider').length > 0) {

        $('#partnersSlider').owlCarousel({
            loop: true,
            margin: 40,
            center: true,
            autoplay: true,
            dots: false,
            nav: true,

            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    }
    /**************************************************
     ******************* Select  **********************
     ***************************************************/
    $(".selectStyle .value").click(function() {
        $('.selectStyle .value').removeClass('selected');
        $(".selectStyle .listSelect").not($(this).next()).slideUp();
        $(this).toggleClass("selected");
        $(this).next().slideToggle();
    })

    $('body,html').on('click', function(e) {
        var container = $(".selectStyle .value,.selectStyle i"),
            Sub = $(".selectStyle .listSelect");


        if (!$(e.target).is(container)) {
            $('.selectStyle .value').removeClass('selected');
            Sub.slideUp();
        }

    });

    $(".selectStyle .listSelect span").click(function() {
        var idParnt = $(this).parents(".selectStyle").attr("id");
        $("#" + idParnt + " .value").html($(this).text());
        $("#" + idParnt + " input").val($(this).text());
    });

    /**************************************************
     ******************* Search  **********************
     ***************************************************/

    $(".header .nav .search ul .search-section i").click(function() {
        $(this).siblings().slideToggle();
    });

    /**************************************************
     ******************* Clock For Auctions  **********************
     ***************************************************/
    $('.clockAuctions').each(function() {
        $(this).countdown($(this).attr("data-date"), function(event) {
            $(this).html(event.strftime('<div class="CountDownAuctions"><span><b>%D</b> days</span><span><b>%H</b> Hours</span><span><b>%M</b> Min</span><span> <b>%S</b> sec</span> </div>'));
        })
    });

    /**************************************************
     *******************  Common Questions  **********************
     ***************************************************/

    if ($('#accordion').length > 0) {
        $("#accordion").accordion();
    }

    /**************************************************
     *******************   Tab For Login **********************
     ***************************************************/


    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tab.classList.add('active')
            target.classList.add('active')
        })
    })


    /**************************************************
     *******************  Tap for Construction **********************
     ***************************************************/

    $(".selectWallet .value").click(function() {
        $(".selectWallet .listSelect").not($(this).next()).slideUp();
        $(this).toggleClass("selected");
        $(this).next().slideToggle();
    })

    $('body,html').on('click', function(e) {
        var container = $(".selectWallet .value,.selectWallet i"),
            Sub = $(".selectWallet .listSelect");


        if (!$(e.target).is(container)) {
            Sub.slideUp();
        }

    });

    $(".selectWallet .listSelect span").click(function() {
        var idParnt = $(this).parents(".selectWallet").attr("id");
        $("#" + idParnt + " .value").html($(this).text());
        $("#" + idParnt + " input").val($(this).text());
    });

    /**************************************************
     *******************  Slider For Construction **********************
     ***************************************************/
    if ($('#ImageSlider').length > 0) {

        $('#ImageSlider').owlCarousel({
            loop: true,
            nav: true,
            center: true,
            autoplay: false,
            dots: false,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    if ($('#VideoSlider').length > 0) {

        $('#VideoSlider').owlCarousel({
            loop: true,
            nav: true,
            video: true,
            center: true,
            autoplay: false,
            dots: false,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    if ($('#LiveStreamSlider').length > 0) {

        $('#LiveStreamSlider').owlCarousel({
            loop: true,
            nav: true,
            video: true,
            center: true,
            autoplay: false,
            dots: false,
            navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    /**************************************************
     ******************* Clock for Construction **********************
     ***************************************************/

    $('.clockConstruction').each(function() {
        $(this).countdown($(this).attr("data-date"), function(event) {
            $(this).html(event.strftime('<div class="CountDownAuctions"><span><b>%D</b> days</span><span><b>%H</b> Hours</span><span><b>%M</b> Min</span><span> <b>%S</b> sec</span> </div>'));
        })
    });
    /**************************************************
     ******************* Modal **********************
     ***************************************************/

    if ($('.join_the_auction').length > 0) {
        $('a[data-modal]').on('click', function() {
            $($(this).data('modal')).modal("");
            return false;
        });
        $.modal.defaults = {
            showClose: false,
        };
    }

    if ($('#accordion').length > 0) {
        $("#accordion").accordion();
    }
    if ($('.nav-tabs a').length > 0) {
        $(".nav-tabs a").click(function() {
            $(this).tab('show');
        });
    }
    $(document).ready(function() {
        $('.page li a').click(function(e) {

            $('.page li.active').removeClass('active');

            var $parent = $(this).parent();
            $parent.addClass('active');
            e.preventDefault();
        });
    });

    $('.social-media').on('click', function(e) {
        // $(this).children('ul').toggleClass('flex');
        $(this).children('ul').toggle();
        // $('.social-media-menu').css('display', 'block');
    });
});