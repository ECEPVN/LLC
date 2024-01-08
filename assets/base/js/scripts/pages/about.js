(function () {
    'use strict';
    var item;

    $(".mod-ourpeople .news-tab-1 .item a").click(function () {
        if ($(this).closest(".item").hasClass("active")) {
            $(this).parents(".news-tab-1").removeClass("active");
            $(this).parent().removeClass("active");
        }
        else {
            $(".mod-ourpeople .news-tab-1 .item").removeClass("active");
            $(this).parent().addClass("active");
            $(".mod-ourpeople .news-tab-1").removeClass("active");
            $(this).parents(".news-tab-1").addClass("active");
            var $this = $(this);
            setTimeout(function () {
                try {
                    item = $this.closest('.item').offset().top;
                }
                catch (e) {

                }
                scrolltab(item);
            }, 500)
        }
    });
    $(".news-tab-1 .text-detail .container>a").click(function () {
        $(".mod-ourpeople .news-tab-1 .item").removeClass("active");
        $(".mod-ourpeople .news-tab-1").removeClass("active");
    });
    function checkPeople(value) {
        var links = "";
        var itemdetail = "";
        var links = $('.mod-ourpeople').find('.item');
        var itemdetail = $('.text-detail').find('.contain-detail');
        var html1 = '';
        var ind = 0;
        var k = 0;
        links.each(function (e) {
            if ((e + 1) % value == 0 && e > 0) {
                html1 += '<div class="news-tab-1" role="tablist">';
                html1 += '<div class="row">';
                for (var i = ind; i < ind + value; i++) {
                    if (links[i]) {
                        html1 += '<div class="col-md-2 col-sm-4 col-xs-6">';
                        html1 += '<div class="item">';
                        html1 += $(links[i]).html();
                        html1 += '</div>';
                        html1 += '</div>';
                    }
                }
                html1 += '</div>';
                html1 += '<div class="text-detail">';
                html1 += '<div class="container">';
                html1 += '<a class="close-member" href="javascript:void(0)"><i class="fa fa-close"></i></a>';
                html1 += '<div class="tab-content">';
                for (var i = ind; i < ind + value; i++) {
                    if (links[i]) {
                        html1 += '<div class="contain-detail tab-pane fade" role="tabpanel" id="' + $(itemdetail[i]).attr("id") + '">';
                        html1 += $(itemdetail[i]).html();
                        html1 += '</div>';
                    }
                }
                html1 += '</div>';
                html1 += '</div>';
                html1 += '</div>';
                html1 += '</div>';
                ind = e + 1;
            }
            else {
                if (links.length - e < value + 1 && ind < links.length + 1 && ind + value > links.length && k == 0) {
                    html1 += '<div class="news-tab-1" role="tablist">';
                    html1 += '<div class="row">';
                    for (var i = e; i < e + links.length - e; i++) {
                        if (links[i]) {

                            html1 += '<div class="col-md-2 col-sm-4 col-xs-6">';
                            html1 += '<div class="item">';
                            html1 += $(links[i]).html();
                            html1 += '</div>';
                            html1 += '</div>';
                        }
                    }
                    html1 += '</div>';
                    html1 += '<div class="text-detail">';
                    html1 += '<div class="container">';
                    html1 += '<a class="close-member" href="javascript:void(0)"><img alt="images" src="assets/base/img/content/about/member-close.png"></a>';
                    html1 += '<div class="tab-content">';
                    for (var i = ind; i < e + links.length - ind; i++) {
                        if (links[i]) {
                            html1 += '<div class="contain-detail tab-pane fade" role="tabpanel" id="' + $(itemdetail[i]).attr("id") + '">';
                            html1 += $(itemdetail[i]).html();
                            html1 += '</div>';
                        }
                    }
                    html1 += '</div>';
                    html1 += '</div>';
                    html1 += '</div>';
                    html1 += '</div>';
                    ind = links.length + 1;
                    k = 1;
                }
            }
        });
        $('#accordion').html(html1);
        $(".mod-ourpeople .news-tab-1 .item a").click(function () {
            if ($(this).closest(".item").hasClass("active")) {
                $(this).parents(".news-tab-1").removeClass("active");
                $(this).parent().removeClass("active");
            }
            else {
                $(".mod-ourpeople .news-tab-1 .item").removeClass("active");
                $(this).parent().addClass("active");
                $(".mod-ourpeople .news-tab-1").removeClass("active");
                $(this).parents(".news-tab-1").addClass("active");
                var $this = $(this);
                setTimeout(function () {
                    try {
                        item = $this.closest('.item').offset().top;
                    }
                    catch (e) {

                    }
                    scrolltab(item);
                }, 500)
            }
        });
        $(".news-tab-1 .text-detail .container>a").click(function () {
            $(".mod-ourpeople .news-tab-1 .item").removeClass("active");
            $(".mod-ourpeople .news-tab-1").removeClass("active");
        });
       

    };
    var k = 0;

    var screenX = $(window).width();
    if (screenX < 992 && screenX > 767) {
        checkPeople(3);
    } else {
        if (screenX < 768) {
            checkPeople(2);
        } else {
            //checkPeople(6);
        }
    }
    var resizeTimer;
    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {

            var screenX = $(window).width();
            if (screenX < 992 && screenX > 767) {
                checkPeople(3);
            } else {
                if (screenX < 768) {
                    checkPeople(2);
                } else {
                    checkPeople(6);
                }
            }
        }, 1000);
    })
    function scrolltab(ind) {
        $('body,html').animate({ scrollTop: ind }, 500);
    }
})();