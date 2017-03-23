/**
 * Created by vojx on 2016/12/6.
 */
function ItemShow(data, index) {
    this.index = index;
    this.data = data;
    this.config = {
        jqRow: $('.itemShowRow')
    };
}
ItemShow.prototype = {
    init: function () {
        this.bindBasic();
        this.bindEvents();
    },
    bindBasic: function () {
        var that = this;
        var str = '';
        str += '<div class="col-md-4 col-sm-6">';
            str += '<a href="javascript:;" class="pic">';
                str += '<img src="{{image}}" class="img-responsive" data-index="' + that.index + '"/>';
                str += '<div class="shade">';
                    str += '<p><i class="crux"></i></p>';
                str += '</div>';
            str += '</a>';
            str += '<div class="item-des text-center">';
                str += '<h4>{{name}}</h4>';
                str += '<p class="text-muted">{{title}}</p>';
                str += '<p class="text-muted">{{des}}</p>';
            str += '</div>';
        str += '</div>';

        this.config.jqRow.append($$.artTemplate(str, this.data))
    },
    bindEvents: function () {

        /* 这里走了很多弯路，不应该写在这里面，这里面的内容都是要被循环九次的，所以应该写在外面*/


        //var that = this;
        /*由于这里获得的$('.pic')是一个数组，所以需要用each遍历一下*/
        //that.config.jqPic.each(function(i,element){
        //    $(element).on('mouseenter',function(){
        //        var index = $(this).find('img').attr('alt');
        //        console.log(index);
        //        //window.location = 'detail.html?number=' + index;
        //    })
        //})
        //var itemShowRow = that.config.jqRow;
        //var pic = that.config.jqPic;
        //itemShowRow.on('mouseenter', pic,function(){
        //    var index = $(this).find('.pic img');
        //    console.log(index)
        //})
    }
};



