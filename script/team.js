/**
 * Created by vojx on 2016/12/6.
 */
function Team(data){
    this.data = data;
    this.config = {
        jqRow:$(".teamRow")
    }
}
Team.prototype = {
    init:function(){
        this.bindBasic();
        this.bindEvent();
    },
    bindBasic:function(){
        var str = '';
        str += '<div class="col-sm-4">';
            str += '<div class="character text-center">';
                str += '<img src="{{image}}" class="img-responsive img-circle" alt=""/>';
                str += '<h4>{{name}}</h4>';
                str += '<p class="text-muted">{{position}}</p>';
                str += '<p class="text-left">{{des}}</p>';
            str += '</div>';
        str += '</div>';

        this.config.jqRow.append($$.artTemplate(str,this.data))
    },
    bindEvent:function(){

    }
};