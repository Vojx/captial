/**
 * Created by vojx on 2016/12/6.
 */
function AboutUs(data){
    this.data = data;
    this.config = {
        jqLastLi:$('.last'),
        jqAboutUs:$('#aboutUs')
    }
}
AboutUs.prototype = {
    init:function(){
        this.bindDom();
        this.bindEvent();
    },
    bindDom:function(){
        var str = '';
        str += '<li>';
            str += '<div class="conLine-image">';
                str += '<img src="{{image}}" class="img-responsive img-circle" alt=""/>';
            str += '</div>';
            str += '<div class="conLine-panel">';
                str += '<h4 class="conLine-title">{{name}}</h4>';
                str += '<p class="text-muted">';
                    str += '{{des}}';
                str += '</p>';
            str += '</div>';
        str += '</li>';

        this.config.jqLastLi.before($$.artTemplate(str,this.data))
    },
    bindEvent:function(){
        var that = this;
      //给文字添加不同的动画
      that.config.jqAboutUs
            .find('li')
            .children('.conLine-panel')
            .addClass('wow fadeInRight')
            .parents('li:even')
            .children('.conLine-panel')
            .removeClass('wow fadeInRight')
            .addClass('wow fadeInLeft');


        //this.config.jqAboutUs
        //    .find('li:even')
        //    .children('.conLine-panel')
        //    .addClass('wow fadeInLeft');
        //this.config.jqAboutUs
        //    .find('li:odd')
        //    .children('.conLine-panel')
        //    .addClass('wow fadeInRight')
    }
};