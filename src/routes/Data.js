
/**
 * Created by Administrator on 2016/10/18.
 */
import React ,{map} from 'react';

import { Row, Col,Modal } from 'antd';
 //插件可用
import style from './Data.css';
import echarts from 'echarts';
import $ from 'jquery';
import fetch from 'dva/fetch';
import bmap from 'echarts/extension/bmap/bmap';




var Login = React.createClass({


  getInitialState: function () {
    return {
     visible: false ,
      shop:[0,0,0],
      allshop:[0,0,0,0],
      Jindustry1:[0],
      Jindustry2:[0],
      industry1:[0],
      industry2:[0],
      AddTime:[''],
      shopClass1:['000'],
      shopClass2:['000'],
      shopClass3:['000'],
      StarShop:[],
      Income:[],
      Income0:[],
      Income1:[],
      Income2:[],
      AddShopData:[],
      AddShopCount:[],
      IncomeValue:[],
      NewLastIn0:[],
      NewLastName:[],
      NewAllName:[],
      NewAllMoney:[],
      ShopSmall:[],
      BigShop:[],
      ShopSmall1:[],
      BigShop1:[],
      AllShopCity:[],
      AllBjDATA:[]
    }

  },


  showModal:function () {


    this.setState({
      visible: true,
    });
    this.ModalShow();
  },

  ModalShow:function () {



/*

    var series = [];

    var geoCoordMap = {

      '长沙市': [112.982279,28.19409],
      '长沙市1': [112.940857,28.143640],
    }


    var BJData = [

      [{name:'长沙市'}, {name:'长沙市',value:11111}],
      [{name:'长沙市1'}, {name:'长沙市1',value:11111}],
    ];

    var color = [ '#ffb400'];
    var series = [];
    [['长沙市', BJData],].forEach(function (item, i) {

      series.push(

        {
          name: item[0] + ' Top10',
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            brushType: 'stroke'
          },
          label: {
            normal: {
              show: false,

            }
          },
          symbolSize: function () {

              return 5;


          },
          itemStyle: {
            normal: {
              color: color[i]
            }
          },
          data: item[1].map(function (dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        });
    });


    $.get('./lib/js/changsha.json', function (chinaJson) {
      echarts.registerMap('changsha', chinaJson);
      var chart6 = echarts.init(document.getElementById('main6'));


      chart6.setOption({

        tooltip : {
          trigger: 'item'
        },
        formatter:
          function (params) {

            return "地址："+params.name+'<br />'+'月平均销售额：'+ params.value[2]+'元'
          },

        geo: {
          map: 'changsha',
          roam:true,
          center: [112.97756000000006,28.20035],
          scaleLimit: {
            min: 1,

          },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true,
              textStyle: {
                color: 'black',

              },
            },
          },

          zoom:1.35,
          top: 80,


          itemStyle: {
            normal: {
              areaColor: '#083552',
              borderColor: 'white',
              borderType: 'solid',
              borderWidth: 1,
              opacity: 0.8,
            },
          }

        },
        series: series




      });



    });

*/

   /* var myChart6 = echarts.init(document.getElementById('main6'));
    var option6 = {
      bmap: {
        center: [112.982279,28.19409],
        zoom: 5,
        roam: true,
      },
      series: [{
        type: 'map',
        coordinateSystem: 'bmap'
      }]
    };
    myChart6.setOption(option6);
*/

    var myChart = echarts.init(document.getElementById('main6'));


    var series = [];

    var geoCoordMap = {

      '阳光100店': [112.940857,28.143640],
      '天马公寓': [112.946675,28.168312],
      '中南大学南校区': [112.933778,28.164345],
      '汽车西站': [112.914140,28.203389],
      '玉兰路': [112.909503,28.212473],
      '中海国际店': [112.926098,28.138593],
      '湘浙店': [112.910948,28.213302],
      '麓谷店': [112.892700,28.213023],
      '咸嘉店': [112.921557,28.223004],
      '长丰涉外店': [112.870359,28.203931],
      '钰龙天下店': [112.938125,28.244143],
      '绿地店': [112.953050,28.227942],
      '雷锋店': [112.910948,28.213302],
      '德润园店': [112.954536,28.247457],
      '渔湾市店': [112.931383,28.235243],
      '裕园小区店': [112.901176,28.132984],
      '格林星城店': [112.930339,28.210817],
      '麓谷林语店': [112.873718,28.220873],
      '新民路店': [112.950320,28.191090],
      '中南大学后湖店': [112.939525,28.153750],
      '沁园春店': [112.932146,28.216396],
      '玫瑰园': [112.926757,28.279257],
      '奥克斯': [112.954834,28.224157],
      '河西润泽园店': [112.926697,28.216946],
      '阜埠河店': [112.950652,28.160066],
      '青山镇店': [112.901346,28.234226],
      '三湘店': [113.010569,28.208378],
      '人民医院店': [112.982380,28.189433],
      '大成酒店': [112.982333,28.189500],
      '白沙路': [112.988459,28.189191],
      '杨帆店': [113.036597,28.189555],
      '马王堆店': [113.034011,28.193956],
      '浏阳河畔店': [113.032325,28.206561],
      '向韶村店': [113.000123,28.192060],
      '汽车东站店': [113.057882,28.202024],
      '荷花园店': [113.023876,28.188861],
      '德政园店': [113.021176,28.185544],
      '育英二小店': [113.028024,28.192957],
      '新世纪家园店': [113.032541,28.187096],
      '农大店': [113.093577,28.185709],
      '乔庄巷店': [112.994215,28.193249],
      '龙柏路口店': [113.023667,28.207083],
      '马王堆汽配城': [113.033024,28.199818],
      '马王堆医院店': [113.029133,28.204145],
      '国储街店': [113.010987,28.193633],
      '芙蓉苑店': [113.023002,28.216152],
      '金科佳苑店': [113.039358,28.206413],
      '东塘水电街店': [112.992666,28.170762],
      '林科大': [113.001334,28.135537],
      '铁道学院': [112.991387,28.139704],
      '曙光中路店': [113.002601,28.167658],
      '窑岭': [112.996240,28.186019],
      '王公塘店': [113.003619,28.182890],
      '树木岭': [113.018220,28.154690],
      '上海城店': [113.006673,28.131120],
      '华盛世纪新城店': [113.022404,28.114492],
      '湖南女大店': [113.009926,28.117561],
      '中医附一店': [112.994296,28.155464],
      '红星德思勤店': [113.009663,28.112662],
      '新城新世界店': [113.024956,28.158748],
      '白田小区店': [113.046408,28.069423],
      '三泰店': [112.973760,28.194060],
      '书院路广厦新村': [112.971750,28.144850],
      '五华店': [112.985660,28.162830],
      '莲花小区店': [112.983642,28.140164],
      '十五中学店': [112.985695,28.175230],
      '龙湾国际店': [113.010460,28.052753],
      'V立方店': [112.977160,28.148468],
      '柠檬立都店': [112.982263,28.135048],
      '凤亭店': [112.977799,28.267774],
      '湘江世纪城江湾店': [112.978134,28.256387],
      '湘江世纪城金北店': [112.968134,28.246387],
      '珠江郦城': [112.994320,28.255820],
      '小吴门店': [112.975044,28.204530],
      '通泰街': [112.988367,28.189239],
      '蔡锷路': [112.981342,28.204964],
      '湘雅店': [112.984006,28.213474],
      '北国风光店': [112.987359,28.249640],
      '德雅村店': [113.001809,28.220348],
      '万科城': [112.997375,28.251310],
      '洪西店': [113.046304,28.245702],
      '华夏群芳园店': [112.980970,28.222269],
      '伍家岭店': [112.986400,28.230146],
      '星沙板仓路': [113.077538,28.231720],
      '星沙凤凰城': [113.062553,28.256207],
      '星沙茶叶市场店': [113.109322,28.251348],


    }



    var BJData = [

      [{name:'长沙市'}, {name:'阳光100店',value:'阳光一百国际新城黄鹤村黄鹤生鲜市场旁'}],
      [{name:'长沙市'}, {name:'天马公寓',value:'桔子洲街道天马路天马公寓15号'}],
      [{name:'长沙市'}, {name:'中南大学南校区',value:'麓山南路中南大学本部天福来超市旁'}],
      [{name:'长沙市'}, {name:'汽车西站',value:'汽车西站达美D6区'}],
      [{name:'长沙市'}, {name:'玉兰路',value:'望城坡街道商贸城社区17栋289号'}],
      [{name:'长沙市'}, {name:'中海国际店',value:'云栖路中海国际一期金楠街104号'}],
      [{name:'长沙市'}, {name:'湘浙店',value:'玉兰路汽车气西站地铁口旁'}],
      [{name:'长沙市'}, {name:'麓谷店',value:'麓谷加州阳光西组团8栋110'}],
      [{name:'长沙市'}, {name:'咸嘉店',value:'望岳路173号'}],
      [{name:'长沙市'}, {name:'长丰涉外店',value:'长丰小区五期21栋'}],
      [{name:'长沙市'}, {name:'钰龙天下店',value:'郡辉路长郡双语实验中学旁'}],
      [{name:'长沙市'}, {name:'绿地店',value:'银盆岭街道老鸦冲小区10栋1楼105号'}],
      [{name:'长沙市'}, {name:'雷锋店',value:'枫林三路雷锋镇汽车站旁'}],
      [{name:'长沙市'}, {name:'德润园店',value:'银杉路德润园金麓小区站牌后'}],
      [{name:'长沙市'}, {name:'渔湾市店',value:'湖大渔湾市公交站旁'}],
      [{name:'长沙市'}, {name:'裕园小区店',value:'岳麓区联丰路裕园小区'}],
      [{name:'长沙市'}, {name:'格林星城店',value:'咸嘉湖路格林星城10栋109号'}],
      [{name:'长沙市'}, {name:'麓谷林语店',value:'桐梓坡路麓谷林语'}],
      [{name:'长沙市'}, {name:'新民路店',value:'麓山路137号新民路口'}],
      [{name:'长沙市'}, {name:'中南大学后湖店',value:'桔子洲街道后湖小区21栋1号'}],
      [{name:'长沙市'}, {name:'沁园春店',value:'沁园春御院小区4栋119号'}],
      [{name:'长沙市'}, {name:'玫瑰园',value:'望城区玫瑰园商业街P116门面'}],
      [{name:'长沙市'}, {name:'奥克斯',value:'奥克斯广场（月湖店搬迁）'}],
      [{name:'长沙市'}, {name:'河西润泽园店',value:'咸嘉湖高鑫麓城旁（谷丰南路西200米）'}],
      [{name:'长沙市'}, {name:'阜埠河店',value:'阜埠河天马安置小区82栋'}],
      [{name:'长沙市'}, {name:'青山镇店',value:'青山镇永青路30号（优莱客超市旁）'}],
      [{name:'长沙市'}, {name:'三湘店',value:'湘湖路湘湖渔场金泉小区3栋68号'}],
      [{name:'长沙市'}, {name:'人民医院店',value:'解放西路马王街50号'}],
      [{name:'长沙市'}, {name:'大成酒店',value:'五一大道大成国际大酒店斜对面文运街5号'}],
      [{name:'长沙市'}, {name:'白沙路',value:'白沙路35号东成大酒店对面'}],
      [{name:'长沙市'}, {name:'杨帆店',value:'法院路扬帆小区'}],
      [{name:'长沙市'}, {name:'马王堆店',value:'嘉雨路马王堆海鲜水产市场'}],
      [{name:'长沙市'}, {name:'浏阳河畔店',value:'马王堆浏阳河畔'}],
      [{name:'长沙市'}, {name:'向韶村店',value:'文艺路口东向韶街43号'}],
      [{name:'长沙市'}, {name:'汽车东站店',value:'龟山路汽车东站30米处'}],
      [{name:'长沙市'}, {name:'荷花园店',value:'恒达路103号'}],
      [{name:'长沙市'}, {name:'德政园店',value:'德政街19号'}],
      [{name:'长沙市'}, {name:'育英二小店',value:'东方新城育英二小旁'}],
      [{name:'长沙市'}, {name:'新世纪家园店',value:'法院路104号新世纪家园'}],
      [{name:'长沙市'}, {name:'农大店',value:'生物机电东湖校区大门口'}],
      [{name:'长沙市'}, {name:'乔庄巷店',value:'芙蓉区乔庄巷'}],
      [{name:'长沙市'}, {name:'龙柏路口店',value:'紫薇路311号龙柏路口'}],
      [{name:'长沙市'}, {name:'马王堆汽配城',value:'马王堆汽配城'}],
      [{name:'长沙市'}, {name:'马王堆医院店',value:'古汉路马王堆医院对面'}],
      [{name:'长沙市'}, {name:'国储街店',value:'车站国储街巷口150米'}],
      [{name:'长沙市'}, {name:'芙蓉苑店',value:'火炬三片13栋'}],
      [{name:'长沙市'}, {name:'金科佳苑店',value:'古曲路金科佳苑正门口'}],
      [{name:'长沙市'}, {name:'东塘水电街店',value:'东塘水电街18号'}],
      [{name:'长沙市'}, {name:'林科大',value:'韶山南路林科大橙子街区490-4'}],
      [{name:'长沙市'}, {name:'铁道学院',value:'铁道学院青园路45号'}],
      [{name:'长沙市'}, {name:'曙光中路店',value:'曙光中路447号公交新村公交站'}],
      [{name:'长沙市'}, {name:'窑岭',value:' 人民中路203号'}],
      [{name:'长沙市'}, {name:'王公塘店',value:'雨花区王公塘街'}],
      [{name:'长沙市'}, {name:'树木岭',value:'劳动东路树木岭立交桥公交车站旁'}],
      [{name:'长沙市'}, {name:'上海城店',value:'韶山南路上海城（井坡子站旁）'}],
      [{name:'长沙市'}, {name:'华盛世纪新城店',value:'湘府东路二段308号'}],
      [{name:'长沙市'}, {name:'湖南女大店',value:'井湾子街道红星村社区中意一路183号'}],
      [{name:'长沙市'}, {name:'中医附一店',value:'韶山中路中医附一西门'}],
      [{name:'长沙市'}, {name:'红星德思勤店',value:'红星德思勤A6栋1027'}],
      [{name:'长沙市'}, {name:'新城新世界店',value:'雨花区新城新世界'}],
      [{name:'长沙市'}, {name:'白田小区店',value:'雨花区环保路白田小区29栋4单元'}],
      [{name:'长沙市'}, {name:'三泰店',value:'坡子街街道三泰街17号'}],
      [{name:'长沙市'}, {name:'书院路广厦新村',value:'新开铺路172号富绿新村19栋108号'}],
      [{name:'长沙市'}, {name:'五华店',value:'五华酒店对面黄土岭公交站牌后面'}],
      [{name:'长沙市'}, {name:'莲花小区店',value:'莲花小区店（铁道学院公交站150米） '}],
      [{name:'长沙市'}, {name:'十五中学店',value:'芙蓉中路候家塘北公交站10米'}],
      [{name:'长沙市'}, {name:'龙湾国际店',value:'天心区月党路龙湾国际211号'}],
      [{name:'长沙市'}, {name:'V立方店',value:'赤岭路长沙理工对面V立方'}],
      [{name:'长沙市'}, {name:'柠檬立都店',value:'芙蓉南路申奥美域旁'}],
      [{name:'长沙市'}, {name:'凤亭店',value:'湘江世纪城凤亭路10022号门面'}],
      [{name:'长沙市'}, {name:'湘江世纪城江湾店',value:'湘江北路湘江世纪城咏江苑江湾路'}],
      [{name:'长沙市'}, {name:'湘江世纪城金北店',value:'湘江北路湘江世纪城金北路'}],
      [{name:'长沙市'}, {name:'珠江郦城',value:'渔业路珠江花城扶水岸北门13栋106'}],
      [{name:'长沙市'}, {name:'小吴门店',value:'开福区培元桥12号'}],
      [{name:'长沙市'}, {name:'通泰街',value:'藩城堤街15号'}],
      [{name:'长沙市'}, {name:'蔡锷路',value:'蔡锷北路293号'}],
      [{name:'长沙市'}, {name:'湘雅店',value:'湘雅路55号'}],
      [{name:'长沙市'}, {name:'北国风光店',value:'开福区北国风光2B栋103A'}],
      [{name:'长沙市'}, {name:'德雅村店',value:'四方坪街道德雅路411号'}],
      [{name:'长沙市'}, {name:'万科城',value:'福元西路万科城与英祥春天之间商业街'}],
      [{name:'长沙市'}, {name:'洪西店',value:'开福区恒大雅苑立交桥旁'}],
      [{name:'长沙市'}, {name:'华夏群芳园店',value:'开福区开福寺路华夏群芳园'}],
      [{name:'长沙市'}, {name:'伍家岭店',value:'伍家岭路明珠苑旁君悦香邸对面'}],
      [{name:'长沙市'}, {name:'星沙板仓路',value:'星沙一桥板仓路17号'}],
      [{name:'长沙市'}, {name:'星沙凤凰城',value:'星沙东二路筑梦星园五栋104号'}],
      [{name:'长沙市'}, {name:'星沙茶叶市场店',value:'星沙茶叶大市场（松雅湖小区）'}],

    ];


    var color = ['#ffb400'];
    var series = [];
    [['北京', BJData]].forEach(function (item, i) {
      series.push(

        {

          type: 'effectScatter',
          coordinateSystem: 'bmap',
          symbol: 'pin',
          zlevel: 2,
          rippleEffect: {
            brushType: 'stroke'
          },
          label: {
            normal: {
              show: false,

            }
          },
          symbolSize: function () {
            return 10;
          },
          itemStyle: {
            normal: {
              color: color[i]
            }
          },
          data: item[1].map(function (dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        });
    });

    var option = {


      tooltip : {
        trigger: 'item'
      },
      formatter:
        function (params) {
          return "店名："+params.name+'<br />'+ "地址："+params.value[2]


        },

      bmap: {
        center: [112.982279,28.19409],
        zoom: 12,
        roam: true
      },

      series: series
    };





    myChart.setOption(option);


  },

  handleOk:function (){
    console.log('Clicked OK');
    this.setState({
      visible: false,
    });
  },
  handleCancel:function(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  },

  // 解析数据
  alexData:function (data) {

    if(data[0][0].lastMonthNewStores){
      var monthShop = data[0][0].lastMonthNewStores+"";
      for(var i = 0 ;i<3-monthShop.length;){
        monthShop = '0'+monthShop;
      }
      monthShop = monthShop.split('');
      this.setState({shop: monthShop});
    };

    if(data[0][0].allStoreNumber){
      var AllmonthShop = data[0][0].allStoreNumber+"";
      for(var i = 0 ;i<4-AllmonthShop.length;){
        AllmonthShop = '0'+AllmonthShop;
      }
      AllmonthShop = AllmonthShop.split('');
      this.setState({allshop: AllmonthShop});
    };

    if(data[0][0]){
      this.setState({Jindustry1: data[0][0].jxfStoreLivePer});
      this.setState({Jindustry2: data[0][0].jxfProductGrossProfitPer});
      this.setState({industry1: data[0][0].otherStoreLivePer});
      this.setState({industry2: data[0][0].otherProductGrossProfitPer});
/*
      data[2].jxfStoreLivePer=parseInt(data[2].jxfStoreLivePer.replace("%",''));
      data[2].jxfProductGrossProfitPer=parseInt(data[2].jxfProductGrossProfitPer.replace("%",''))

      data[2].otherStoreLivePer = parseInt(data[2].otherStoreLivePer.replace("%",''))
      data[2].otherProductGrossProfitPer = parseInt(data[2].otherProductGrossProfitPer.replace("%",''))*/


      if(data[0][0].jxfStoreLivePer>data[0][0].otherStoreLivePer){
        this.setState({BigShop:98});
        this.setState({SmallShop:88});
      }else{
        this.setState({SmallShop:98});
        this.setState({BigShop:88})
      }

      if(data[0][0].jxfProductGrossProfitPer>data[0][0].otherProductGrossProfitPer){
        this.setState({BigShop1:98});
        this.setState({SmallShop1:88});
      }else{
        this.setState({SmallShop1:98});
        this.setState({BigShop1:88});


      }
    }

    if(data[0][0]){

      var agencyStore = data[0][0].agencyStore+"";
      var directStore = data[0][0].directStore+"";
      var joinStore = data[0][0].joinStore+"";

      for(var i = 0 ;i<3-agencyStore.length;){
        agencyStore = '0'+agencyStore;
      }
      for(var i = 0 ;i<3-directStore.length;){
        directStore = '0'+directStore;
      }
      for(var i = 0 ;i<3-joinStore.length;){
        joinStore = '0'+joinStore;
      }
      this.setState({shopClass1: agencyStore});
      this.setState({shopClass2: directStore});
      this.setState({shopClass3: joinStore});
    }

    if(data[0][0].time){
      var Time = data[0][0].time
      this.setState({AddTime: Time});
    };

    if(data[1]){
      var allStarShop = data[1]
      this.setState({StarShop: allStarShop});

      for(var i  = 0; i<allStarShop.length;i++){
        var a = allStarShop[i]
        if(i==0){
          a.Wshop=50
          a.color='#103762'
        }else if (i==1){
          a.Wshop=48
          a.color='#2d5592'
        }else if(i==2){
          a.Wshop=46
          a.color='#0068bc'
        }else if(i==3){
          a.Wshop=44
          a.color='#00a0e9'

        }else if(i==4){
          a.Wshop=42
          a.color='#00b7ee'

        }else if(i==5){
          a.Wshop=40
          a.color='#7ecef4'

        }else if(i==6){
          a.Wshop=38
          a.color='#88abda'

        }else if(i==7){
          a.color='#8abdd2'
          a.Wshop=36
        }else if(i==8){
          a.color='#9cd4eb'
          a.Wshop=34
        }else if(i==9){
          a.color='#bfe2f5'
          a.Wshop=32
        }
      }


    }

    if(data[2]){


      var alladdShop = data[2];
      var addShopData=[];
      var addShopCount = []
      if(alladdShop.length>5){
        alladdShop.length=5
      }else{
        alladdShop.length=alladdShop.length
      }
      for(var i = 0;i<alladdShop.length;i++){
        addShopData.push(alladdShop[i].time)
        addShopCount.push(alladdShop[i].storeGrowth)
      }

      this.setState({AddShopData: addShopData});
      console.log(addShopData)
      this.setState({AddShopCount: addShopCount});
    }

    if(data[3]){
      var income = data[3]
      this.setState({Income: income[0]});

    }

    if(data[5]){

      var Lastincome = data[5]

      var AllLastIncomen =[];

      if(Lastincome.length>6){
        Lastincome.length=6
      }else{
        Lastincome.length=Lastincome.length
      }

       for(var i = 0;i<Lastincome.length;i++){
         var newname = Lastincome [i].district;
         var date =  Lastincome [i].count;
         AllLastIncomen.push({value:date,name:newname});
       }
      this.setState({NewLastIn0: AllLastIncomen});
      console.log(AllLastIncomen)



    }


 /*   if(data[8]){
      var AllmapShop = data[8];

      var AllMapMoney = [];
      var AllMapName = []

       for(var i =0;i<AllmapShop.length;i++){
         var MoneyName = AllmapShop[i].storeName
         var Nw = AllmapShop[i].lng;
         var Ej = AllmapShop[i].lat;
         var  money = AllmapShop[i].monthAvgSale;
         AllMapMoney.push({[MoneyName]:[Ej,Nw,money]})

         AllMapName.push({name:MoneyName})
       }

      /!*var json = {};
      for(var i=0;i<AllMapName.length;i++)
      {
        json[i]=AllMapName[i];
      }*!/


      var a ={}

      for(var i = 0;i<AllMapMoney.length;i++){
        $.extend(a,AllMapMoney[i])
      }

      this.setState({NewAllName: AllMapName});
      this.setState({NewAllMoney: a});

    }*/


    if(data[4]){

      var AllShopCtity = [];
      //AllShopCtity = data[7].cityList;
      for(var i=0;i<data[4].length;i++){
        AllShopCtity.push({name:data[4][i].city,date:data[4][i].count,dayM:data[4][i].singleStoreSale,month:data[4][i].monthAvgSale});
      }
      var AllCtiyeMoney = []
      console.log(AllShopCtity)
      this.setState({AllShopCity: AllShopCtity});
    }

    if(data[4]){
      var AllBjData = [];
      for(var i = 0;i<data[4].length;i++){

        AllBjData.push([{name:'长沙市'},{name:data[4][i].city,value:data[4][i].monthAvgSale==0? 1:data[4][i].monthAvgSale}])
      }
      console.log(AllBjData)
      this.setState({AllBjDATA: AllBjData});

    }





    /*    var BJData = [
     [{name:'长沙市'}, {name:'株洲市',value:1125300}],
     [{name:'长沙市'}, {name:'湘潭市',value:595200}],
     [{name:'长沙市'}, {name:'衡阳市',value:607610}],
     [{name:'长沙市'}, {name:'邵阳市',value:793600}],
     [{name:'长沙市'}, {name:'岳阳市',value:1116230}],
     [{name:'长沙市'}, {name:'常德市',value:961010}],
     [{name:'长沙市'}, {name:'张家界市',value:1}],
     [{name:'长沙市'}, {name:'益阳市',value:260400}],
     [{name:'长沙市'}, {name:'郴州市',value:1}],
     [{name:'长沙市'}, {name:'永州市',value:108500}],
     [{name:'长沙市'}, {name:'怀化市',value:72100}],
     [{name:'长沙市'}, {name:'娄底市',value:1}],
     [{name:'长沙市'}, {name:'湘西市',value:1}],
     [{name:'长沙市'}, {name:'长沙市',value:16124530}],
     ];*/


  },



  //后台数据获取
  getAllData:function () {
   /* var url = localStorage.getItem("url");
    var userIf =localStorage.getItem("userinfo");
    var usercode = JSON.parse(userIf).usercode
    url = url+'DBScreen/excel/indexData?usercode='+usercode+'&tempcode=1';*/



   //var url = 'http://192.168.88.239:8080/DBScreen/excel/indexData?usercode=111&tempcode=1' ;
    var url = 'http://120.76.194.221:8080/DBScreen/excel/indexData?usercode=zlj01&tempcode=1'

   /* $.ajax.jsonp({
      "url": url,

      "success": function(data) {
        $("#current-group").text("当前工作组:"+data.result.name);

      },
      "error": function(d,msg) {
        alert("Could not find user "+msg);
      }
    });*/


    fetch(url, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:{

      }

    },this).then(function (res) {

      console.log("fetch request ", JSON.stringify(res.ok));
      if (res.ok) {
        res.json().then(function (json) {


          var allData = json.data;
          this.alexData(allData);
          this.getshop(this);
          console.info(json);

        }.bind(this));
      } else {

      }

    }.bind(this)).catch(function (e) {

      console.log("fetch fail");
    });
  },


  componentDidMount() {
    document.body.style.overlfow='hidden';
    this.getTime()
    //this.getiscoll();

    this.newgetiscoll();
    this.getAllData();
    //alert(document.body.clientHeight)
    //this.erverEle();


  },


  erverEle:function(){


  var docElm = document.documentElement;
//W3C
if (docElm.requestFullscreen) {
  docElm.requestFullscreen();
}
//FireFox
else if (docElm.mozRequestFullScreen) {
  docElm.mozRequestFullScreen();
}
//Chrome等
else if (docElm.webkitRequestFullScreen) {
  docElm.webkitRequestFullScreen();
}
//IE11
else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
}


  },

  //echarts 渲染
  getshop:function (e) {

    var self  = e;

    var myChart = echarts.init(document.getElementById('main'));
    var option = ({

      title:{
        text: this.state.shopClass3,
        textStyle: {
          color: 'white',
          fontSize: 18,
          fontWeight: '300',
        },
        top:'40%',

        bottom: '33.3%',
        left:'33.3%',
        padding: 0,

      },
      tooltip: {
        show:false,
      },
      legend: {
        show:false
      },
      color:
        ['#00cdcd'],
      legendHoverLink: false,
      series: [
        {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:1548}
          ],
          markPoint:{
            symbol: 'rect',
            label: {
              normal: {
                show: false,
                position: 'inside',
                textStyle: {
                  fontSize: '16',
                }
              }
            }
          }
        }
      ]
    });


    myChart.setOption({
      tooltip: {

      },

      series: [

      ]
    });

    myChart.setOption(option);
    window.onresize = myChart.resize



    var myChart1 = echarts.init(document.getElementById('main1'));
    var option1 = ({
      title:{
        text: this.state.shopClass1,
        textStyle: {
          color: 'white',
          fontSize: 18,
          fontWeight: '300',
        },
        top:'40%',

        bottom: '33.3%',
        left:'33.3%',
        padding: 0,

      },
      tooltip: {
        show:false,
      },
      legend: {
        show:false
      },
      color:
        ['#00cdcd'],
      legendHoverLink: false,
      series: [
        {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:1548}
          ],
          markPoint:{
            symbol: 'rect',
            label: {
              normal: {
                show: false,
                position: 'inside',
                textStyle: {
                  fontSize: '16',
                }
              }
            }
          }
        }
      ]
    });


    myChart1.setOption({
      tooltip: {

      },

      series: [

      ]
    });

    myChart1.setOption(option1);
    window.onresize = myChart1.resize



    var myChart2 = echarts.init(document.getElementById('main2'));
    var option2 = ({
      title:{
        text: this.state.shopClass2,
        textStyle: {
          color: 'white',
          fontSize: 18,
          fontWeight: '300',
        },
        top:'40%',

        bottom: '33.3%',
        left:'33.3%',
        padding: 0,

      },
      color:
       ['#00cdcd'],

      tooltip: {
        show:false,
      },
      legend: {
        show:false
      },
      legendHoverLink: false,
      series: [
        {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:1548}
          ],
          markPoint:{
            symbol: 'rect',
            label: {
              normal: {
                show: false,
                position: 'inside',
                textStyle: {
                  fontSize: '16',
                }
              }
            }
          }
        }
      ]
    });


    myChart2.setOption({
      tooltip: {

      },

      series: [

      ]
    });

    myChart2.setOption(option2);
    window.onresize = myChart2.resize



    var myChart3 = echarts.init(document.getElementById('main3'));
    var option3 = ({
      grid:{
        left:'7%',
        right:'7%',
        top:'10px',
        bottom:'40px'
      },
      yAxis : [
        {
          type : 'value',
          axisLine: {
            show: false,
          },
    axisTick: {
      show: false,
    },
          axisLabel: { show: false,},
          splitLine: {show: false,},
        }

      ],

      xAxis: {
        type: 'category',
        boundaryGap: false,
        nameTextStyle:{
          fontSize: 5,
          fontWeight:'lighter'

        },
        axisLine: {
          show: false,
        },
        axisLabel:{
          interval:0,
          textStyle: {
            color:'white',
            fontSize: 1,
            fontWeight:'100'

          },

        },

        axisTick:{
          show:false
        },
        data: this.state.AddShopData
      },

      series: [
        {
          name:'门店增长趋势',
          type:'bar',
          barWidth: '30%',
          label: {
            normal: {

              show: true,
              position: 'top',
              textStyle: {
                color: 'white',
              }
            },

          },
          itemStyle: {
            normal: {
              color:

              function(params) {
                // build a color map as your need.
                var colorList = [
                  '#43f6ff','#43f6ff','#43f6ff','#2c66b1','#214a9b','#214a9b'
              ];
                return colorList[params.dataIndex]
              }
            },

          },
          data:this.state.AddShopCount

        }
      ]


    });


    myChart3.setOption({
      tooltip: {

      },

      series: [

      ]
    });

    myChart3.setOption(option3);
    window.onresize = myChart3.resize


    var myChart4 = echarts.init(document.getElementById('main4'));
    var option4= ({
      title : {

        textStyle: {
          color: 'white',
          fontWeight: 'border',
          fontSize: 8,
        },
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      roseType: true,
      calculable : true,
      series : [

        {
          name:'湖南省分布情况',
          type:'pie',
          radius : [0, 60],
          roseType : 'area',
          label: {
            normal: {
              show: true,
              position: 'outside',
              formatter: "{b} ({d}%)",
            }
            },
          labelLine: {
            normal: {
              length: 2,
              length2: 1.5,

            },


          },
          itemStyle: {
            normal: {
              color:
                function(params) {
                  // build a color map as your need.
                  var colorList = ['#00b0e6','#0090e7','#0077e4','#005cdd','#0043d3','#002fc1'
                  ];
                  return colorList[params.dataIndex]
                }
            },

          },
          data:this.state.NewLastIn0
        }
      ]

    });


    myChart4.setOption({
      tooltip: {

      },

      series: [

      ]
    });

    myChart4.setOption(option4);
    window.onresize = myChart4.resize





    var geoCoordMap = {

      '长沙市': [112.982279,28.19409],
      '岳阳市': [113.132855,29.37029],
      '常德市': [111.691347,29.040225],
      '湘潭市': [112.944052,27.82973],
      '株洲市': [113.451737,27.535806],
      '衡阳市': [112.607693,26.900358],
      '邵阳市': [111.46923,27.237842],
      '怀化市': [109.97824,27.550082],
      '益阳市': [112.355042,28.570066],
      '永州市': [111.608019,26.434516],
      '张家界市': [110.479921,29.127401],
      '郴州市': [113.032067,25.793589],
      '娄底市': [112.008497,27.728136],
      '湘西市': [109.739735,28.314296],

    }


   /* var BJData = [
      [{name:'长沙市'}, {name:'株洲市',value:1125300}],
      [{name:'长沙市'}, {name:'湘潭市',value:595200}],
      [{name:'长沙市'}, {name:'衡阳市',value:607610}],
      [{name:'长沙市'}, {name:'邵阳市',value:793600}],
      [{name:'长沙市'}, {name:'岳阳市',value:1116230}],
      [{name:'长沙市'}, {name:'常德市',value:961010}],
      [{name:'长沙市'}, {name:'张家界市',value:1}],
      [{name:'长沙市'}, {name:'益阳市',value:260400}],
      [{name:'长沙市'}, {name:'郴州市',value:1}],
      [{name:'长沙市'}, {name:'永州市',value:108500}],
      [{name:'长沙市'}, {name:'怀化市',value:72100}],
      [{name:'长沙市'}, {name:'娄底市',value:1}],
      [{name:'长沙市'}, {name:'湘西市',value:1}],
      [{name:'长沙市'}, {name:'长沙市',value:16124530}],
    ];*/

     var BJData = this.state.AllBjDATA

    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord]
          });
        }
      }
      return res;
    };


    var color = [ '#ffb400'];
    var series = [];
    [['长沙市', BJData],].forEach(function (item, i) {
      series.push({
          name: item[0] + ' Top10',
          type: 'lines',
          zlevel: 1,


          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 0,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },

        {
          name: item[0] + ' Top10',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            brushType: 'stroke'
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{b}'
            }
          },
          symbolSize: function (val) {
            if(val[2]>10000000){
              return val[2]/900000;
            } else if(val[2]>1000000){
              return val[2] / 100000;
            }else {
              return val[2] / 100000;
            }

          },
          itemStyle: {
            normal: {
              color: color[i]
            }
          },
          data: item[1].map(function (dataItem) {

            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        });
    });




    $.get('./lib/js/hunan.json', function (chinaJson) {
      echarts.registerMap('hunan', chinaJson);
      var chart5 = echarts.init(document.getElementById('main5'));


      chart5.on('click', function (params) {

        if(params.name=='长沙市'){
          self.showModal();
        }
      });



      chart5.setOption({

        tooltip : {
          trigger: 'item'
        },
        formatter:
          function (params) {

            return "地址："+params.name+'<br />'+'月平均销售额：'+ params.value[2]+'元'
          },

        geo: {
          map: 'hunan',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          zoom:1.15,
          top: 80,

          itemStyle: {
            normal: {
              areaColor: 'white',
              borderColor: 'white',
              borderType: 'solid',
              borderWidth: 2,
              opacity: 0.1,
            },
          }

        },
        series: series




      });



    });


  },


  //滚动
  getiscoll:function (){

    $(function() {
      var $this = $("#dateNewBody");
      var scrollTimer;
      $this.hover(function() {
        clearInterval(scrollTimer);
      }, function() {
        scrollTimer = setInterval(function() {
          scrollNews($this);
        }, 1500);
      }).trigger("mouseleave");
      function scrollNews(obj) {
        var $self = obj.find("ul");
        var lineHeight = $self.find("li:first").height();
        $self.animate({
          "marginTop": -lineHeight + "px"
        }, 600, function() {

          $self.css({
            marginTop: 0
          }).find("li:first").appendTo($self);
        })
      }
    })

  },

  //滚动
  newgetiscoll:function (){

    $(function() {
      var $this = $("#newdateNewBody");
      var scrollTimer;
      $this.hover(function() {
        clearInterval(scrollTimer);
      }, function() {
        scrollTimer = setInterval(function() {
          scrollNews($this);
        }, 1500);
      }).trigger("mouseleave");
      function scrollNews(obj) {
        var $self = obj.find("ul");
        var lineHeight = $self.find("li:first").height();
        $self.animate({
          "marginTop": -lineHeight + "px"
        }, 600, function() {

          $self.css({
            marginTop: 0
          }).find("li:first").appendTo($self);
        })
      }
    })

  },

  //获取时间
  getTime:function () {
    var t = null;
    t = setTimeout(time,1000);//开始执行
    function time()
    {

      clearTimeout(t);//清除定时器
     var dt = new Date();
      var year = dt.getFullYear();
      var month = dt.getMonth()+1
      if(month<10){
        month='0'+month
      }
      var day = dt.getDate()
      if(day<10){
        day='0'+day
      }
      var h=dt.getHours();
      if(h<10){
        h='0'+h
      }
      var m=dt.getMinutes();
      if(m<10){
        m='0'+m
      }
      var s=dt.getSeconds();
      if(s<10){
        s='0'+s
      }
      document.getElementById("timeShow").innerHTML = year+'-'+month +'-'+ day+' '+h+":"+m+":"+s;
      t = setTimeout(time,1000); //设定定时器，循环执行
    }
  },

  render: function() {
    return (


      <div className={style.container}>
        <div className={style.contentio} >
            <img src="./lib/image/bodyhead5.png" className={style.Headbody}/>

            <div className={style.left}>
              <div className={style.dataleft1}>
                <div className={style.dataleftshop}>
                  <span className={style.dataleftshop1}>{this.state.AddTime}新增门店数：</span>
                </div>
                <div className={style.dataleftdate}>
                 <span className={style.dataleftdate1}>{this.state.shop[0]}</span>
                  <span className={style.dataleftdate2}>{this.state.shop[1]}</span>
                  <span className={style.dataleftdate3}>{this.state.shop[2]}</span>
                </div>
              </div>



              <div className={style.dataleft2} >
                <div className={style.dataleft2text}>
                </div>
                <div className={style.datalefthead1}> 行业分析</div>
                 <div className={style.dataNewLeft}>
                   <Row>
                     <Col span={10}  className={style.enddataleftend222}>&nbsp;</Col>
                     <Col  span={7} className={style.enddataleftend111}>佶福祥</Col>
                     <Col  span={7} className={style.enddataleftend111}>其他行业</Col>
                   </Row>
                   <Row>
                     <Col span={10}  className={style.enddataleftend22} >开店存活率</Col>
                     <Col  span={7}  className={style.enddataleftend11} style={{color:'#00cdcd'}}>{this.state.Jindustry1}</Col>
                     <Col  span={7}  className={style.enddataleftend11}>{this.state.industry1}</Col>
                   </Row>
                   <Row>
                     <Col span={10}   className={style.enddataleftend222}>产品毛利率</Col>
                     <Col  span={7}  className={style.enddataleftend111} style={{color:'#00cdcd'}}>{this.state.Jindustry2}</Col>
                     <Col  span={7}   className={style.enddataleftend111}>{this.state.industry2}</Col> </Row>     </div>

                  <img src="./lib/image/dddd99.png" className={style.dataleft2img}/>
              </div>

              <div className={style.dataleft3} >
                <div className={style.dataleft2text}>
                </div>
                <div className={style.datalefthead1}> 明星店铺</div>
                <div className={style.dateNewbody} id="dateNewBody">
                  <ul className={style.dateNewbodyul} >
                  {
                    this.state.StarShop.map(function (newdata) {
                      return(

                        <div   key={newdata.rank}>

                            <li className={style.dateNewbodyli}>
                              <span className={style.dataleftbody12}>NO{newdata.rank} {newdata.storeName}</span>
                              <div className={style.dataleftbody13}  style={{width:newdata.Wshop+'%','marginRight':50-newdata.Wshop+'%',background:'#0068b7'}} ><span className={style.dataleftbody14}>{newdata.storeSale}元/天</span></div>
                            </li>
                        </div>

                      )

                    })
                  }

                  </ul>
                </div>




                <img src="./lib/image/dddd99.png" className={style.dataleft2img}/>
              </div>


              <div className={style.dataleft4}>
                <div className={style.dataleft2text}>
                </div>
                <div className={style.datalefthead1}> 收益预估</div>

                <div className={style.enddataleftbody}>
                  <span className={style.enddataleftbody1}>投资合计：</span><span className={style.enddataleftbody2}>{this.state.Income.totalInvestment}</span><span className={style.enddataleftbody1}> 元起</span>
                </div>

                <div className={style.enddataleftend}>
                  <Row>
                    <Col span={10}  className={style.enddataleftend1}>日营业额</Col>
                    <Col  span={14} className={style.enddataleftend2}>年盈利</Col>
                  </Row>
                  <Row>
                    <Col span={10}  className={style.enddataleftend3}><span className={style.enddatadate}>{this.state.Income.daySale1}</span><span>元</span></Col>
                    <Col  span={14} className={style.enddataleftend4}><span className={style.enddatadate}>{this.state.Income.yearTurnover1}</span><span>元</span></Col>
                  </Row>
                  <Row>
                    <Col span={10}  className={style.enddataleftend3}><span className={style.enddatadate}>{this.state.Income.daySale2}</span><span>元</span></Col>
                    <Col  span={14} className={style.enddataleftend4}><span className={style.enddatadate}>{this.state.Income.yearTurnover2}</span><span>元</span></Col>
                  </Row>
                  <Row>
                    <Col span={10}  className={style.enddataleftend3}><span className={style.enddatadate}>{this.state.Income.daySale3}</span><span>元</span></Col>
                    <Col  span={14} className={style.enddataleftend4}><span className={style.enddatadate}>{this.state.Income.yearTurnover3}</span><span>元</span></Col>
                  </Row>
                </div>


                <div className={style.enddataend1}>
                  <span><span style={{color:'#00b7ee'}}>{this.state.Income.industryData}</span>的门店投资回报周期：</span><span className={style.enddataend2}>{this.state.Income.investmentCycle}</span><span>个月</span>
                </div>
                <img src="./lib/image/dddd99.png" className={style.dataleft2img}/>
              </div>



            </div>

            <div className={style.centen}>
              <div className={style.centenName}>
                <span>佶福祥数据慧眼</span>
              </div>
              <div className={style.centenCookie}>

                <img src="./lib/image/cookie.png" style={{width:.15+'rem'}}/>

              </div>
              <div id="timeShow" className={style.centenCookie1}></div>


              <div  className={style.centenBody}>

                <div id="main5" style={{width: 100+'%', height:100+'%'}}>



                </div>

              </div>

              <div className={style.ALLcentenBodyLast} id="newdateNewBody">

              <div  className={style.centenBodyLast}>
                <div >
                  <ul className={style.centenBodyLast0}>
                    {
                      this.state.AllShopCity.map(function (newdata) {
                        return(
                        <div  key={newdata.name}>
                      <li className={style.centenBodyLast1}>
                        <Row>
                          <Col span={4} >{newdata.name}:</Col>
                          <Col span={4} >门店<span style={{color:'#00cdcd'}}>{newdata.date}</span>家</Col>
                          <Col span={10} >月均销售额<span style={{color:'#00cdcd'}}>{newdata.month}</span>元</Col>
                          <Col span={6} >单店营收<span style={{color:'#00cdcd'}}>{newdata.dayM}</span>元</Col>
                        </Row>
                              </li>
                        </div>
                        )
                      })
                    }
                  </ul>

                </div>
                </div>
              </div>

            </div>
            <div className={style.right}>

              <div className={style.dataright1}>
                <div className={style.datarightshop}>
                  <span className={style.datarightshop1}>在营所有门店数：</span>
                </div>
                <div className={style.datarightdate}>
                  <span className={style.datarightdate1}>{this.state.allshop[0]}</span>
                  <span className={style.datarightdate2}>{this.state.allshop[1]}</span>
                  <span className={style.datarightdate2}>{this.state.allshop[2]}</span>
                  <span className={style.datarightdate3}>{this.state.allshop[3]}</span>
                </div>
              </div>


              <div className={style.dataright2} >
                <div className={style.dataright2text}>
                </div>
                <div className={style.datalefthead1}>门店类型</div>
                <div className={style.datarighttable}>
                  <Row>
                    <Col span={8}  className={style.enddatarightend1}>
                      <div >
                        <div id="main" className={style.dataRightone}></div>
                      </div>
                    </Col>
                    <Col  span={8} className={style.enddatarightend2}>
                      <div >
                        <div id="main1" className={style.dataRightone}></div>
                      </div>
                    </Col>
                    <Col  span={8} className={style.enddatarightend2}>
                      <div >
                        <div id="main2" className={style.dataRightone}></div>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className={style.datarighttable1}>
                  <Row>
                    <Col span={8}  className={style.enddatarightend1}>
                      <span>加盟店</span>
                    </Col>
                    <Col  span={8} className={style.enddatarightend2}>
                      <span>代理店</span>
                    </Col>
                    <Col  span={8} className={style.enddatarightend2}>
                      <span>直营店</span>
                    </Col>
                  </Row>
                </div>

                <img src="./lib/image/dddd99.png" className={style.dataright2img}/>
              </div>



              <div className={style.dataleft3} >
                <div className={style.dataleft2text}>
                </div>
                <div className={style.datalefthead1}>门店增长趋势</div>
                <div  className={style.datarighttable2}>

                    <div id="main3" style={{width: 100+'%', height:100+'%'}}>

                    </div>


                </div>
                <img src="./lib/image/dddd99.png" className={style.dataleft2img}/>

              </div>


              <div className={style.dataleft4}>
                <div className={style.dataleft2text}>
                </div>
                <div className={style.datalefthead1}> 长沙市门店分布情况</div>
                <div className={style.datatablenew}>

                  <div id="main4" style={{width: 100+'%', height:100+'%'}}>

                  </div>

                </div>

                <img src="./lib/image/dddd99.png" className={style.dataleft2img}/>
              </div>

            </div>
          </div>


        <div >
          <Modal  visible={this.state.visible} footer={[]}
                 onOk={this.handleOk} onCancel={this.handleCancel}
          >
            <div id="main6" style={{width: 100+'%', height:400+'px'}}>



            </div>
          </Modal>
        </div>


      </div>




    )
  }

});

export default Login;
