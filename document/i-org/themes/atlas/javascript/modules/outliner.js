
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
	
	$('.toc').toc();
    }); 








