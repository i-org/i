/**
 * created by orz@mad4a.me with pirated webstorm
 * 根据 h2 来获得文内大纲
 */

$(function() {
    var dict = {};
    $('h2').each(function (idx) {
        var title = $(this).text();
        var id = 'head_' + idx;
        dict[title] = id;

/*        $(this).append('<a name="' + id + '"></a>'); */
$(this).html('<a name="' + id + '"></a>' + $(this).html()  );
    });

    var outline_ul = $('<ul></ul>');
    $.each(dict, function (idx, val) {
        outline_ul.append($('<li></li>')
                             .html('<a href="#' + val + '">' + idx + '</a>'));
    });
    $('.post').append($('<nav class="outline"></nav>')
                      .css('top', $('.right-middle-hook').position().top - 1)
                         .html(outline_ul));

    /**
     * 位置设定
     * |<------------------------------w------------------------------>|
     * |       -----------     -----------------     -----------       |
     * |<--l-->|   nav   |<-d->|               |<-d->| outline |<--x-->|
     * |       |<---n--->|     |<------c------>|     |<---a--->|       |
     * |       -----------     |               |     -----------       |
     * |<----------m---------->|               |                       |
     * |                       -----------------                       |
     * -----------------------------------------------------------------
     * (w - c) / 2 = d + a + x
     *   => x = (w - c) / 2 - (a + d), where
     *     w = $(window).width(),
     *     c = $('#container').width(),
     *     a = $('h2outline').width(),
     *
     * m = l + n + d
     *   => d = m - (l + n), where
     *     m = $('#container').position().left,
     *     l = $('#real_nav').position().left,
     *     n = $('#real_nav').width()
     */
    // var main = $('.post'),
    //     outline = $('.outline'),
    //     nav_hook  = $('.right-middle-hook');

    // var m = main.position().left,
    //     l = nav_hook.position().left,
    //     n = nav_hook.width(),
    //     d = m - (l + n) + 184.8;

    // $(window).resize(function () {
    //     var w = $(window).width(),
    //         c = main.width(),
    //         a = outline.width();
    //     outline.css('right',
    //                   (w - c) / 2 - (a + d));
    // });

    // $(window).resize();

});

    $(document).ready(function(){
        $('.site-action').hide();
        $('.right-bottom-hook').click(function(){
	    $('.site-action').slideToggle();
	    $(this).toggleClass("active");
        });
        //$('#gf-right-top-menu').tabs({
        //	event: 'mouseover'
        //但此处需要固定高度和添加滚动条的设定
        //});

        // 右中的菜单
        $('.outline').hide();
        $('.right-middle-hook').click(function(){
	    $('.outline').slideToggle();
	    $(this).toggleClass("active");
        });
        
        //此部分为左侧底部的操作菜单
        $('.site-nav').hide();
        //为了兼容鼠标和触控，鼠标用悬浮弹出，触控用点击？
        $('.left-bottom-hook').click(function(){
            $(this).toggleClass("active");

            $('.site-nav').slideToggle(function(){
	        setTimeout(function(){
                    $(this).slideUp("slow");
                },5000);
            });
            
        });
        //触控设定
        
        //实现左侧底部的按钮浮动
        //设定图标的动画：鼠标移动到上面之后的模糊放大旋转，点击之后四散？
    }); 








