/**
 * Created by vojx on 2016/12/18.
 */
function Detail(data) {
    this.data = data;
}

Detail.prototype = {
    init: function () {
        this.bindDom();
        this.bindEvent();
    },
    bindDom: function () {
        var str = '';
            str += '<div class="col-md-8 col-md-offset-2 text-center">';
                str += '<h2>{{name}}</h2>';
                str += '<p class="itemIntro text-muted">{{itemIntro}}</p>';
                str += '<img src="{{image}}" class="img-responsive mCenter" alt=""/>';
                str += '{{each des as value i}}';
                str += '<p class="des">';
                str += '{{value}}</p>';
                str += '{{/each}}';
                str += '</p>';
                //str += '<div class="link">';
                //str += '<p>' +this.data.webTitle[0]+ '<a href="">' +this.data.address[0]+ '</a></p>';
                //str += '<p>' +this.data.webTitle[1]+ '<a href="">' +this.data.address[1]+ '</a></p>';
                //str += '</div>';
                str += '<a href="index.html" class="btn btn-primary btn-lg">关闭</a>';
            str += '</div>';

        $('.wrap .row').html($$.artTemplate(str, this.data));
    },
    bindEvent: function () {
        // $('.btn').on('click',function(){
        //    $(Window).history.go(0);
        // })
    }
};


window.onload = function () {
    var json = [
        {
            'name': '爱智汇',
            'itemIntro': '创新企业孵化及众创空间运营商',
            'image': 'images/ishow1.jpg',
            'des': [
                '爱智汇致力于提供早期的创业孵化、创业培训，以及众创空间的运营工作。公司股东有丰富而成熟的项目运作经验，有专业的项目运营团队，愿为各级政府、高校提供优质的创业孵化、创业培训，以及众创空间的运营服务。',
                '爱智汇能够提升企业创新创业能力，共建良好的创新创业环境，为大众创新创业提供全力支持，并将运营的众创空间打造成一片创新创业的热土，为各级政府、高校、社会创造更多价值。'
            ],
            'web': [
                " ",
                " "
            ],
            'address': [
                " ",
                " "
            ]
        },
        {
            'name': '浩智',
            'itemIntro': '重庆股份转让中心推荐会员',
            'image': 'images/ishow2.jpg',
            'des': [
                '重庆浩智企业管理咨询有限公司与重庆股份转让中心（国有，重庆唯一官方合法股份转让中心）建有战略合作关系，是重庆股份转让中心备案的专业推荐机构。浩智将以优异的服务品质和运作效率，为广大创业者和中小企业提供重庆股份转让中心改制及挂牌服务，帮助客户企业快速成长，更好地进入更高层资本市场。',
                '同时，浩智还拥有一群优质的行业专家，不但可以为拟改制挂牌企业提供资源的对接，还能够为这些企业提供具有针对性的行业及资本市场相关咨询服务，从而真正帮助企业发展壮大而不仅仅只是挂牌而已！'
            ],
            'web': ['', ''],
            'address': ['', '']
        },
        {
            'name': '唯智',
            'itemIntro': '上市公司定向增发/并购/PE基金',
            'image': 'images/ishow3.jpg',
            'des': [
                '唯智主要针对成熟企业如中大型企业或上市公司提供服务，涉及领域包括定向增发、市值维护、并购、共同设立基金等。通过上述服务，能够让企业的价值进一步被挖掘、进一步增长，协助企业完成行业整合（包括全球的标的，如美国、香港的并购对象），构建以企业为核心的产业链与生态圈，保证企业有持续的创新能力与竞争力。',
                '我们拥有一流的团队为中大型企业提供上述服务，特别在能源、科技、汽车、文化创意等领域，同时我们还能够为这些企业物色一流的人才与管理者，保证项目的可持续发展，使企业利益最大化。'
            ],
            'web': ['', ''],
            'address': ['', '']
        },
        {
            'name': '车友宝',
            'itemIntro': '汽车生活服务平台',
            'image': 'images/ishow4.jpg',
            'des': [
                '车友宝致力于打造一个为豪华车车主提供一站式用车解决方案和增值服务的控股公司。通过自有投资控股、参股、合作的豪华车服务实体为车主提供服务，同时也为优质的豪华汽车服务实体店铺提供信息技术、管理经验、增值业务，从而将数万计的豪华车主与数十计的优质实体店联系起来。同时，车友宝将运营一个大型的豪华车汽车俱乐部（18 Club）及一个小而精的专业人才社群，为社会、车主、汽车实体店等提供更多价值！',
                ''
            ],
            'web': [
                '车友宝网站：',
                '18Club 网站：'
            ],
            'address': [
                'cheyoubao.net',
                '18club.com.cn'
            ]
        },
        {
            'name': '投一手',
            'itemIntro': '社会化创投平台',
            'image': 'images/ishow5.jpg',
            'des': [
                '投一手”是起源资本投资团队联合互联网团队创立的一家社会化创投平台。“投一手”并不是“股权众筹”，这是一个可以和“股权众筹”们合作的社会化投资平台，“投一手”自身蕴含一些非常独特的地方。',
                '“投一手”一方面希望帮助个人投资者投资好项目，实现财富增值，另一方面也希望为创业项目和创业者提供一个“众帮”平台。投一手是一种可以帮助创业项目对接更多社会资源的互联网化方式，它是一个更加开放的平台，可以为初创公司在早期阶段寻找除了钱之外的更多更重要的成长资源。'
            ],
            'web': ['官方网站：', ''],
            'address': [' tys.vc', '']
        },
        {
            'name': '华生园',
            'itemIntro': '中国知名糕点品牌',
            'image': 'images/ishow6.jpg',
            'des': [
                '2015年10月12日下午，重庆华生园食品股份有限公司（改制前为华生园食品厂、重庆华生园食品有限公司）在重庆股份转让中心“成长板”成功挂牌（股份代码：850888）并同时进行了定向增发。下一步，华生园将根据具体情况登陆更高层次的资本市场。',
                '华生园是中国知名烘培品牌，重庆华生园已经有32年的历史，年产值过亿，店铺数500家左右。华生园总部位于重庆市大渡口区凤祥路123号，占地面积170亩（其中：中央工厂30亩，欧式建筑群20亩，绿化园林120亩）,是西南地片区生产厂地最大、硬件设备最完善、生产条件最好的食品加工与旅游为一体的多元化现代企业之一。'
            ],
            'web': [
                '官方网站：',
                ''
            ],
            'address': [
                'hsy-cn.com',
                ''
            ]
        },
        {
            'name': '18 CLUB',
            'itemIntro': '车主及专业人才俱乐部',
            'image': 'images/ishow7.png',
            'des': [
                '1、对于豪华车主（企业家）俱乐部：我们致力于打造一流的精英俱乐部，前期主要针对豪华车车主与企业家提供服务，同时，让伙伴们一起致力于公益互助和事业成长，大家共创更加丰富多彩、更具个人与社会价值的生活方式。',
                '2、对于智囊团，我们正在打造一个本地的专业人士小型社群，让不同行业专业人士互相碰撞，相信能产生非同寻常的火花。'
            ],
            'webTitle': ['官方网站： ', ''],
            'address': [' 18club.com.cn', '']
        },
        {
            'name': 'UNI 佑壹',
            'itemIntro': '空间设计及文创工作室',
            'image': 'images/ishow8.jpg',
            'des': [
                '佑壹空间设计事务所成立于2010年，位于江北区北滨路金源购物中心5楼“UNI 佑壹”（咖啡+设计工作室），专业为高端私宅、样板房、售楼处、私人会所、写字楼、酒店等提供室内设计与陈设艺术设计及精装工程服务，是重庆最具发展活力的设计装饰机构之一。',
                '佑壹目前已经汇集了30余名行业资深设计师，为客户提供高标准的设计工程作品。设计团队主创设计师曾就职于英国、北京、深圳、上海等地的顶级设计公司，主持设计过 WYNDHAM (温德姆）、CROWN PLAZA（皇冠假日）、SOFITEL（索菲特）等国际知名酒店品牌。佑壹设计团队一贯秉承以客户需求为己任，使团队整体不断的创新与发展，更好地服务于广大客户。'
            ],
            'webTitle': ['', ''],
            'address': ['', '']
        },
        {
            'name': '“好好学习”班',
            'itemIntro': '青年及高校自媒体平台',
            'image': 'images/ishow9.jpg',
            'des': [
                '“好好学习”是一个八卦重庆高校“话题性文娱生活”，挖掘学生“奇思异想”，制造高颜值“创意内容与活动”的综合平台。我们携手志同道合的“学长学姐”&“学弟学妹”，悉心地帮助重庆大学生们更好的“吃喝玩乐”，圆梦牛逼的“天马行空”。',
                '点击这里，可扫二维码关注“好好学习”班微信公众平台。'
            ],
            'webTitle': ['', ''],
            'address': ['', '']
        }
    ];
    var query = $$.querystring();
    var num = query.number;

    var item = new Detail(json[num]);
    item.init();

};
