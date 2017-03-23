/**
 * Created by vojx on 2016/12/6.
 */
function Service(data){
    this.data = data;
    this.config = {
        jqRow:$('.serRow')
    }
}
Service.prototype = {
    init:function(){
        this.bindDom();
        this.bindEvent();
    },
    bindDom:function(){
        var str = '';
        str += '<div class="col-md-4">';
        str += '<span class="s-img">';
        str += '<i class="glyphicon glyphicon-cog"></i>';
        str += '</span>';
        str += '<h4>{{bigTitle}}</h4>';
        str += '<p class="text-muted text-left">';
        str += '<strong>{{smallTitle}}</strong>';
        str += '{{des}}';
        str += '</p>';
        str += '<p class="text-muted text-left">';
        str += '<strong>主要内容</strong>';
        str += '</p>';
        str += '<ul class="text-muted text-left">';
        str += '<li>'+this.data.mainCon[0]+'</li>';
        str += '<li>'+this.data.mainCon[1]+'</li>';
        str += '<li>'+this.data.mainCon[2]+'</li>';
        str += '</ul>';
        str += '</div>';

        this.config.jqRow.append($$.artTemplate(str,this.data))
    },
    bindEvent:function(){

    }
};