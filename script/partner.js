/**
 * Created by vojx on 2016/12/6.
 */
function Partner(data){
    this.data = data;
    this.config = {
        jqRow:$('#partners .row')
    }
}
Partner.prototype = {
    init:function(){
        this.bindDom();
        this.bindEvent();
    },
    bindDom:function(){
        var str = '';
        str += '<div class="col-md-4">';
            str += '<dl class="text-center">';
                str += '<dt class="text-muted">'+this.data.title+'</dt>';
                str += '<dd><a href="">'+this.data.list[0]+'</a></dd>';
                str += '<dd><a href="">'+this.data.list[1]+'</a></dd>';
                str += '<dd><a href="">'+this.data.list[2]+'</a></dd>';
                str += '<dd><a href="">'+this.data.list[3]+'</a></dd>';
                str += '<dd><a href="">'+this.data.list[4]+'</a></dd>';
                str += '<dd><a href="">'+this.data.list[5]+'</a></dd>';
                str += '<dd><a href="">'+this.data.list[6]+'</a></dd>';
                str += '<dd><a href="">'+this.data.list[7]+'</a></dd>';
            str += '</dl>';
        str += '</div>';

        this.config.jqRow.append($$.artTemplate(str,this.data))
    },
    bindEvent:function(){

    }
};