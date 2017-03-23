/**
 * Created by Administrator on 2016/12/5.
 */
$(function(){
    navbarScroll($('.navbar-default'),'navbar-shrink');

    /*导航跳转效果插件*/
    $('.nav').singlePageNav({
        //导航条的高度
        offset:70
    });

    /*小屏幕导航点击关闭菜单*/
    $('.navbar-collapse a').click(function(){
        $('.navbar-collapse').collapse('hide');
    });

    //图片放大
    $('#team .img-circle').hover(function(){
        $(this).toggleClass('fangda');
    });

    new WOW().init();
});

//导航条滚动出现
var navbarScroll = function(jq_navbarDefault,navbarShowClass){
    //当滚动多少高度时导航条背景发生改变
    var changeHeight = 200;
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > changeHeight ){
            jq_navbarDefault.addClass(navbarShowClass);
        }
        if(scrollTop == 0){
            jq_navbarDefault.removeClass(navbarShowClass);
        }
    });

    var windowWidth = $(window).width();
    //当屏幕宽度小到多少时导航条背景发生改变
    var changeWidth = 960;
    if(windowWidth < changeWidth){
        jq_navbarDefault.addClass(navbarShowClass);
    }else{
        jq_navbarDefault.removeClass(navbarShowClass);
    }
};


