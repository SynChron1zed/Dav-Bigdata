/**
 * Created by Administrator on 2017/1/11.
 */

/**
 * Created by Administrator on 2016/10/18.
 */
import React ,{map} from 'react';

import { Row, Col } from 'antd';
//插件可用
import style from './Sztjdata.css';
import echarts from 'echarts';
import $ from 'jquery';
import fetch from 'dva/fetch';

/*var ratio = $(window).width()/(window.screen.width||$('body').width());
$('body').css({
  background: 'url(/lib/image/dataendjpg.jpg) no-repeat top',
  width: '1366px',
  height: '768px',
  transform: "scale("+ratio+")",
  transformOrigin: "left top",

});*/



var Login = React.createClass({


  getInitialState: function () {
    return {


      AllcpiRatio:[],
      AllppiRatio:[],
      AllRatioDate:[],
      AllInvestmentVolume:[],
      AllInvestmentVolumedate:[],
      AllInvestmentVolumedateshow:[],
      AlltotalIncome:[],
      AlltotalIncomedate:[],
      AlltotalIncomedateshow:[],
      AllincreaseValue:[],
      AllincreaseSpeed:[],
      Allincreasedate:[],
      SAllincreaseValue:[],
      SAllincreaseSpeed:[],
      SAllincreasedate:[],
      Allcost:[],
      Allincome:[],
      Allcostdate:[],
      Allcityprice:[],
      Allcountryprice:[],
      Alltrade:[],
      Alltrade1:[],
      Alltrade2:[],
      AllgrossProduct:[],
      AllgrossProduct1:[],
      AllgrossProduct2:[],
      AllgrossProduct3:[],
      AllgrossProduct4:[],
      AllgrossProduct5:[],
      AllProduct:[],
      AllProduct1:[]



    }




  },

  // 解析数据


  SalexData:function (data) {

    if(data[0]){
      var wj = data[0];
      var allcpiRatio = [];
      var allppiRatio = [];
      var allRatioDate = [];
      for(var i  = 0;i<wj.length;i++){
        if(wj[i].cpiRatio==0){
          allcpiRatio.push(wj[i].cpiRatio);
        }else{
          allcpiRatio.push(wj[i].cpiRatio.replace(/%/g,""));
        }

        if(wj[i].ppiRatio==0){
          allppiRatio.push(wj[i].ppiRatio);
        }else{
          allppiRatio.push(wj[i].ppiRatio.replace(/%/g,""));
        }


        allRatioDate.push(wj[i].month.replace(/月/g,""));


      }
      this.setState({AllcpiRatio: allcpiRatio});
      this.setState({AllppiRatio: allppiRatio});
      this.setState({AllRatioDate: allRatioDate});





    };


    if(data[1]){

      var tz = data[1];
      var AllinvestmentVolume = [];
      var AllinvestmentVolumedate = [];
      var AllinvestmentVolumedateShow = [];
      for(var i = 0;i<tz.length;i++){
        AllinvestmentVolume.push(tz[i].investmentVolume);
        AllinvestmentVolumedate.push(tz[i].month.replace(/月/g,""));
      }
      this.setState({AllInvestmentVolume:  AllinvestmentVolume});
      this.setState({AllInvestmentVolumedate:  AllinvestmentVolumedate});

      Array.prototype.max = function() {
        return Math.max.apply({},this)

      };

      for (var i = 0; i < AllinvestmentVolume.length; i++) {
        AllinvestmentVolumedateShow.push(parseInt(AllinvestmentVolume.max()/100)*100 +300);

      }
      this.setState({ AllInvestmentVolumedateshow:  AllinvestmentVolumedateShow});
      //console.log(AllinvestmentVolumedateShow)


    };

    if(data[3]){

      var cz = data[3];
      var totalIncome = [];
      var totalIncomedate = [];
      var totalIncomedateshow = [];

      for(var i = 0;i<cz.length;i++){
        totalIncome.push(cz[i].totalIncome)
        totalIncomedate.push(cz[i].month.replace(/月/g,""))
      }
      this.setState({AlltotalIncome:  totalIncome});
      this.setState({AlltotalIncomedate:  totalIncomedate});

      console.log(this.state.AlltotalIncome)
      console.log(this.state.AlltotalIncomedate)

      Array.prototype.max = function() {
        return Math.max.apply({},this)
      };

      for (var i = 0; i < totalIncome.length; i++) {
        totalIncomedateshow.push(parseInt(totalIncome.max()/100)*100 +300);

      }
      this.setState({ AlltotalIncomedateshow:  totalIncomedateshow});
      console.log(this.state.AlltotalIncomedateshow)

    }


    if(data[2]){
      var gm= data[2];
      var increaseValue = [];
      var increaseSpeed = [];
      var increasedate = [];

      for(var i = 0 ;i<gm.length;i++){
        increaseValue.push(gm[i].increaseValue);

        if(gm[i].increaseSpeed==0){
          increaseSpeed.push(gm[i].increaseSpeed);
        }else{
          increaseSpeed.push(gm[i].increaseSpeed.replace(/%/g,""));
        }

        increasedate.push(gm[i].year);
      }
      this.setState({ AllincreaseValue:increaseValue});
      this.setState({ AllincreaseSpeed:increaseSpeed});
      this.setState({ Allincreasedate:increasedate});

    }

    if(data[4]){
      var Sgm= data[4];
      var SincreaseValue = [];
      var SincreaseSpeed = [];
      var Sincreasedate = [];

      for(var i = 0 ;i<Sgm.length;i++){
        SincreaseValue.push(Sgm[i].grossProduct);

        if(Sgm[i].SincreaseSpeed==0){
          SincreaseSpeed.push(Sgm[i].increaseSpeed);
        }else{
          SincreaseSpeed.push(Sgm[i].increaseSpeed.replace(/%/g,""));
        }

        Sincreasedate.push(Sgm[i].year.replace(/年/g,""));
      }
      this.setState({ SAllincreaseValue:SincreaseValue});
      this.setState({ SAllincreaseSpeed:SincreaseSpeed});
      this.setState({ SAllincreasedate:Sincreasedate});


    }

    if(data[5]){
      var ggcz = data[5];
      var ggincome = [];
      var ggcost = [];
      var ggcostdate = [];

      for(var i = 0 ;i<ggcz.length;i++){
        ggincome.push(ggcz[i].income);
        ggcost.push(ggcz[i].cost);
        ggcostdate .push(ggcz[i].year.replace(/年/g,""));
      }
      this.setState({Allcost:ggcost});
      this.setState({Allincome:ggincome});
      this.setState({Allcostdate:ggcostdate});


    }

    if(data[6]){
      var my = data[6]
      this.setState({Alltrade:my[0]});
      this.setState({Alltrade1:my[1]});
      this.setState({Alltrade2:my[2]});
    }

    if(data[7]){
      var zp = data[7];
      this.setState({Allcityprice:zp[0]});
      this.setState({Allcountryprice:zp[1]});

    }

    if(data[8]){
      var cente = data[8];
      this.setState({AllgrossProduct:cente[0]});
      this.setState({AllgrossProduct1:cente[1]});
      this.setState({AllgrossProduct2:cente[2]});
      this.setState({AllgrossProduct3:cente[3]});
      this.setState({AllgrossProduct4:cente[4]});
      this.setState({AllgrossProduct5:cente[5]});
    }

    if(data[9]){
      var lastsr = data[9];
      this.setState({ AllProduct:lastsr});
      this.setState({ AllProduct1:lastsr[0]});


    }


  },
  newData:function () {
    debugger;
    $(document).ready(function(){


      var ratio = $(window).width()/(window.screen.width||$('body').width());

     alert(ratio)


      $('body').css({
        transform: "scale("+ratio+")",
        transformOrigin: "left top",
        width: '1366px',

        height: '768px',

      });
      $(window).resize(function() {

        var ratio = $(window).width()/(window.screen.width||$('body').width());


        $('body').css({
          transform: "scale("+ratio+")",
          transformOrigin: "left top",
          width: '1366px',
          height: '768px',


        });
      });

    });
  },

  //后台数据获取

  SgetAllData:function () {
   /* var url = localStorage.getItem("url");
    url = url+'DBScreen/excel/indexData?usercode=111&tempcode=1';*/

    // var url = 'http://192.168.88.239:8080/DBScreen/excel/indexData?usercode=111&tempcode=1' ;
    var url = 'http://120.76.194.221:8080/DBScreen/excel/indexData?usercode=sztj01&tempcode=2'


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
          this.SalexData(allData);
          this.getshop();
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
    this.getiscoll();
    this.newgetiscoll();
    //this.getAllData();
    //alert(document.body.clientHeight)
    //this.erverEle();
   this.newData()




    this.SgetAllData();

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
  getshop:function () {
    var myChart = echarts.init(document.getElementById('Smain1'));
    var option = ({

      grid: {
        top: '20%',
        left: '2%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },

      xAxis : [
        {
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {

            textStyle: {
              color: '#9e9e9e',

              fontWeight: 'lighter',
            },
          },
          type : 'category',
          boundaryGap : false,
          data : this.state.AllRatioDate,
        }
      ],
      yAxis : [
        {
          name: '%',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#9e9e9e',
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: '0',
            textStyle: {
              color: '#9e9e9e',

              fontWeight: 'lighter',
            },
          },
          type : 'value'
        }
      ],
      series : [
        {
          name:'CPI',
          type:'line',

          areaStyle: {normal: {}},
          data:this.state.AllcpiRatio,
          areaStyle: {
            normal: {
              color: '#0f62b9',
            },
          },
          itemStyle: {
            normal: {
              borderWidth: 0,
              opacity:0,

            },
            emphasis: {},
          },
          lineStyle: {
            normal: {

              opacity: 0,
            },
          },
        },
        {
          name:'PPI',
          type:'line',
          areaStyle: {normal: {}},
          areaStyle: {
            normal: {
              color: '#0f95e3',
            },
          },
          data:this.state.AllppiRatio,
          itemStyle: {
            normal: {
              borderWidth: 0,
              opacity:0,

            },
            emphasis: {},
          },
          lineStyle: {
            normal: {

              opacity: 0,
            },
          },

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


    var myChart1 = echarts.init(document.getElementById('Smain2'));
    var option1 = ({

      tooltip: {
        show: false,},

      grid: {
        top: '11%',
        left: '2%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        data: this.state.AllInvestmentVolumedate,
        axisLabel: {
          textStyle: {
            color: '#9e9e9e',

            fontWeight: 'lighter',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,

          lineStyle: {
            color: '#113561',
            width: 1,
          },
        },
        z: 10
      },
      yAxis: {
        splitLine: {
          show: false,
        },
        name: '亿',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#9e9e9e',

        },
        splitNumber: 4,
        nameGap: 1,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#113561',
            width: 1,
          },
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#9e9e9e',
            fontWeight: 'lighter',
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        { // For shadow

          type: 'bar',
          itemStyle: {
            normal: {color: '#113561'}
          },
          barWidth:'7',
          barGap:'-100%',
          barCategoryGap:'70%',
          data: this.state.AllInvestmentVolumedateshow,
          animation: false,
          label: {
            normal: {
              show: false,

            },

          },
          legendHoverLink: false,

        },

        {
          barWidth:'7',
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#0f95e3'
            },
            emphasis: {
              color:'#2378f7'
            }
          },
          data: this.state.AllInvestmentVolume
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



    var myChart2 = echarts.init(document.getElementById('Smain4'));
    var option2 = ({
      tooltip: {
        show: false,},

      grid: {
        top: '11%',
        left: '2%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        data: this.state.AlltotalIncomedate,
        axisLabel: {
          textStyle: {
            color: '#9e9e9e',

            fontWeight: 'lighter',
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,

          lineStyle: {
            color: '#113561',
            width: 1,
          },
        },
        z: 10
      },
      yAxis: {
        splitLine: {
          show: false,
        },
        name: '亿',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#9e9e9e',

        },
        splitNumber: 4,
        nameGap: 1,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#113561',
            width: 1,
          },
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#9e9e9e',
            fontWeight: 'lighter',
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        { // For shadow

          type: 'bar',
          itemStyle: {
            normal: {color: '#113561'}
          },
          barWidth:'7',
          barGap:'-100%',
          barCategoryGap:'70%',
          data: this.state.AlltotalIncomedateshow,
          animation: false,
          label: {
            normal: {
              show: false,

            },

          },
          legendHoverLink: false,

        },

        {
          barWidth:'7',
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#0f95e3'
            },
            emphasis: {
              color:'#2378f7'
            }
          },
          data: this.state.AlltotalIncome

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



    var myChart3 = echarts.init(document.getElementById('Smain3'));
    var option3 = ({
      tooltip: {
        trigger: 'axis'
      },

      grid: {
        top: '20%',
        left: '2%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },

      xAxis: {

        type: 'category',
        data: this.state.Allincreasedate,
        axisTick:{
          show:false
        },
        axisLabel:{
          interval:0
        },
        axisLine:{
          lineStyle:{
            color:'#113561'
          }
        },
        axisLabel: {
          textStyle: {
            color: '#9e9e9e',
            fontWeight: 'lighter',
          }
        }

      },


      yAxis: [
        {
          type: 'value',
          name: '亿',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#9e9e9e',
          },

          axisTick:{
            show:false
          },
          splitLine:{
            show:false
          },
          axisLine:{
            lineStyle:{
              color:'#113561'
            }
          },
          axisLabel: {
            formatter: '{value}'
          },
          axisLabel: {
            textStyle: {
              color: '#9e9e9e',
              fontWeight: 'lighter',
            }
          }
        },


        {
          type: 'value',

          min: 0,
          splitLine:{
            show:false
          },
          axisLine:{
            lineStyle:{
              color:'#113561'
            }
          },
          axisTick:{
            show:false
          },
          axisLabel: {
            formatter: '{value}'
          },
          axisLabel: {
          textStyle: {
            color: '#9e9e9e',
            fontWeight: 'lighter',
          }
        }
        }
      ],
      series: [
        {
          name:'增加值',
          type:'bar',
          data:this.state.AllincreaseValue,
          itemStyle:{
            normal:{
              color:'#0f95e3'

            }
          },
          barWidth:'7',
          barGap:'-100%',
          barCategoryGap:'80%',
        },
        {
          name:'增速',
          type:'line',
          symbol:'circle',
          symbolSize:10,
          yAxisIndex: 1,
          data:this.state.AllincreaseSpeed,
          lineStyle:{
            normal:{
              color:'#113561'
            }
          },
          itemStyle:{
            normal:{
              color:'white'
            }
          },
          symbol:'circle',
          symbolSize:8
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


    var myChart4 = echarts.init(document.getElementById('Smain5'));
    var option4 = ({
      tooltip: {
        trigger: 'axis'
      },

      grid: {
        top: '20%',
        left: '2%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },

      xAxis: {

        type: 'category',
        data: this.state.SAllincreasedate,
        axisTick:{
          show:false
        },
        axisLabel:{
          interval:0
        },
        axisLine:{
          lineStyle:{
            color:'#113561'
          }
        },
        axisLabel: {
          textStyle: {
            color: '#9e9e9e',
            fontWeight: 'lighter',
          }
        }

      },


      yAxis: [
        {
          type: 'value',
          name: '亿',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#9e9e9e',
          },

          axisTick:{
            show:false
          },
          splitLine:{
            show:false
          },
          axisLine:{
            lineStyle:{
              color:'#113561'
            }
          },
          axisLabel: {
            formatter: '{value}'
          },
          axisLabel: {
            textStyle: {
              color: '#9e9e9e',
              fontWeight: 'lighter',
            }
          }
        },


        {
          type: 'value',

          min: 0,
          splitLine:{
            show:false
          },
          axisLine:{
            lineStyle:{
              color:'#113561'
            }
          },
          axisTick:{
            show:false
          },
          axisLabel: {
            formatter: '{value}'
          },
          axisLabel: {
            textStyle: {
              color: '#9e9e9e',
              fontWeight: 'lighter',
            }
          }
        }
      ],
      series: [
        {
          name:'增加值',
          type:'bar',
          data:this.state.SAllincreaseValue,
          itemStyle:{
            normal:{
              color:'#0f95e3'

            }
          },
          barWidth:'7',
          barGap:'-100%',
          barCategoryGap:'80%',
        },
        {
          name:'增速',
          type:'line',
          symbol:'circle',
          symbolSize:10,
          yAxisIndex: 1,
          data:this.state.SAllincreaseSpeed,
          lineStyle:{
            normal:{
              color:'#113561'
            }
          },
          itemStyle:{
            normal:{
              color:'white'
            }
          },
          symbol:'circle',
          symbolSize:8
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



    var myChart5 = echarts.init(document.getElementById('Smain6'));
    var option5 = ({
      tooltip: {
        trigger: 'axis'
      },

      grid: {
        top: '20%',
        left: '2%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },

      xAxis: {

        type: 'category',
        data: this.state.Allcostdate,
        axisTick:{
          show:false
        },
        axisLabel:{
          interval:0
        },
        axisLine:{
          lineStyle:{
            color:'#113561'
          }
        },
        axisLabel: {
          textStyle: {
            color: '#9e9e9e',
            fontWeight: 'lighter',
          }
        }

      },


      yAxis: [
        {
          type: 'value',
          name: '亿',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#9e9e9e',
          },

          axisTick:{
            show:false
          },
          splitLine:{
            show:false
          },
          axisLine:{
            lineStyle:{
              color:'#113561'
            }
          },
          axisLabel: {
            formatter: '{value}'
          },
          axisLabel: {
            textStyle: {
              color: '#9e9e9e',
              fontWeight: 'lighter',
            }
          }
        },


      ],
      series: [
        {
          name:'收入',
          type:'bar',
          stack: 'two',
          data:this.state.Allincome,
          itemStyle:{
            normal:{
              color:'#0f95e3'

            }
          },
          barWidth:'20',
          barGap:'-100%',
          barCategoryGap:'80%',
        },

        {
          name:'支出',
          type:'bar',
          data:this.state.Allcost,
          stack: 'two',
          itemStyle:{
            normal:{
              color:'#ff9319'

            }
          },
          barWidth:'20',
          barGap:'-100%',
          barCategoryGap:'80%',
        },
    ]


    });


    myChart5.setOption({
      tooltip: {

      },

      series: [

      ]
    });

    myChart5.setOption(option5);
    window.onresize = myChart5.resize

    var myChart6 = echarts.init(document.getElementById('Smain8'));
    var option6 = ({

      title: {
        text: '',
      },
      color:
        ['#0f95e3','#113561'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      series: [
        {
          name:'支配收入',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:11, name:'城镇居民'},
            {value:89, name:''},

          ]
        }
      ]

    });



    myChart6.setOption({
      tooltip: {

      },

      series: [

      ]
    });

    myChart6.setOption(option6);
    window.onresize = myChart6.resize


    var myChart7 = echarts.init(document.getElementById('Smain9'));
    var option7 = ({

      title: {
        text: '',
      },
      color:
        ['#ff9319','#113561'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      series: [
        {
          name:'支配收入',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:9.9, name:'农村居民'},
            {value:90.1, name:''},

          ]
        }
      ]

    });


    myChart7.setOption({
      tooltip: {

      },

      series: [

      ]
    });

    myChart7.setOption(option7);
    window.onresize = myChart7.resize


    var geoCoordMap = {

      '长沙市': [112.982279,28.19409],
      '株洲市': [113.451737,27.535806],
      '湘潭市': [112.944052,27.82973],
      '衡阳市': [112.607693,26.900358],
      '邵阳市': [111.46923,27.237842],
      '岳阳市': [113.132855,29.37029],
      '常德市': [111.691347,29.040225],
      '张家界市': [110.479921,29.127401],
      '益阳市': [112.355042,28.570066],
      '郴州市': [113.032067,25.793589],
      '永州市': [111.608019,26.434516],
      '怀化市': [109.97824,27.550082],
      '娄底市': [112.008497,27.728136],
      '湘西市': [109.739735,28.314296],

    }

    var BJData = [
      [{name:'长沙市'}, {name:'株洲市',value:9060}],
      [{name:'长沙市'}, {name:'湘潭市',value:8921}],
      [{name:'长沙市'}, {name:'衡阳市',value:9121}],
      [{name:'长沙市'}, {name:'邵阳市',value:1579}],
      [{name:'长沙市'}, {name:'岳阳市',value:1609}],
      [{name:'长沙市'}, {name:'常德市',value:1790}],
      [{name:'长沙市'}, {name:'张家界市',value:1034}],
      [{name:'长沙市'}, {name:'益阳市',value:890}],
      [{name:'长沙市'}, {name:'郴州市',value:689}],
      [{name:'长沙市'}, {name:'永州市',value:908}],
      [{name:'长沙市'}, {name:'怀化市',value:760}],
      [{name:'长沙市'}, {name:'娄底市',value:380}],
      [{name:'长沙市'}, {name:'湘西市',value:93.32}],
      [{name:'长沙市'}, {name:'长沙市',value:50250}],
    ];



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
            if(val[2]>50000){
              return val[2]/2000;
            } else {
              return val[2] /700
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

      chart5.setOption({


        tooltip : {
          trigger: 'item'
        },
        formatter:
          function (params) {
            return "地址："+params.name+'<br />'+'生成总值：'+ params.value[2]+'亿'
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


          <div className={style.left}>
            <div className={style.dataleft1}>
              <div className={style.dataleft2text}>
              </div>
              <div className={style.datalefthead1}> 物价指数</div>


              <img src="./lib/image/zjtj12.png" className={style.dataleftheadImg}/>
              <div  className={style.Sdatarighttable2}>

                <div id="Smain1" style={{width: 100+'%', height:100+'%'}}>

                </div>


              </div>

              <img src="./lib/image/zjtj02.png" className={style.Sdataleft2img}/>
              <img src="./lib/image/zjtj01.png" className={style.dataleft2img}/>
            </div>

            <div className={style.dataleft2} >
              <div className={style.dataleft2text}>
              </div>
              <div className={style.datalefthead1}> 固定资产投资</div>

              <div  className={style.Sdatarighttable2}>

                <div id="Smain2" style={{width: 100+'%', height:100+'%'}}>

                </div>


              </div>

              <img src="./lib/image/zjtj02.png" className={style.Sdataleft2img}/>
              <img src="./lib/image/zjtj01.png" className={style.dataleft2img}/>
            </div>

            <div className={style.dataleft3} >
              <div className={style.dataleft2text}>
              </div>
              <div className={style.datalefthead1}> 规模以上工业</div>

              <img src="./lib/image/zjtj13.png" className={style.dataleftheadImg}/>
              <div  className={style.Sdatarighttable2}>

                <div id="Smain3" style={{width: 100+'%', height:100+'%'}}>

                </div>


              </div>


              <img src="./lib/image/zjtj02.png" className={style.Sdataleft2img}/>
              <img src="./lib/image/zjtj01.png" className={style.dataleft2img}/>
            </div>


            <div className={style.dataleft4}>
              <div className={style.dataleft2text}>
              </div>
              <div className={style.datalefthead1}>财政总收入</div>
              <div  className={style.Sdatarighttable2}>

                <div id="Smain4" style={{width: 100+'%', height:100+'%'}}>

                </div>


              </div>
              <img src="./lib/image/zjtj02.png" className={style.Sdataleft2img}/>
              <img src="./lib/image/zjtj01.png" className={style.dataleft2img}/>
            </div>



          </div>

          <div className={style.centen}>
            <img src="./lib/image/zjtj07.png" style={{width:100+'%',position:'absolute'}} />

            <div className={style.centenName}>
              <span>数治通鉴</span>
            </div>
            <div className={style.centenCookie}>
              <img src="./lib/image/cookie.png" style={{width:.15+'rem'}}/>
            </div>
            <div id="timeShow" className={style.centenCookie1}></div>

            <div className={style.sztjCentenOne1}>
              <Row>
                <Col  span={5}>
                  <span className={style.sztjCentenText1}>生产总值</span>
                  <img src="./lib/image/zjtj08.png" className={style.szthCentenOne2}/></Col>
                <Col  span={5}></Col>
                <Col  span={5}></Col>
                <Col  span={4}></Col>
                <Col  span={5}>
                  <span className={style.sztjCentenText1}>新增就业人数</span>
                  <img src="./lib/image/zjtj08.png" className={style.szthCentenOne2}/></Col>
              </Row>



            </div>
            <div className={style.sztjCentenTwo1}>
              <Row>
                <Col  span={5}>
                  <span className={style.sztjCentenText11}><span className={style.sztjCentenText2}>{this.state.AllgrossProduct.price}</span> <span style={{color:'#ff9319'}}>亿元</span></span>
                  <img src="./lib/image/zjtj09.png" className={style.szthCentenOne22}/></Col>
                <Col  span={5}></Col>
                <Col  span={5}></Col>
                <Col  span={4}></Col>
                <Col  span={5}>
                  <span className={style.sztjCentenText11}><span className={style.sztjCentenText2}>{this.state.AllgrossProduct4.price}</span></span>
                  <img src="./lib/image/zjtj09.png" className={style.szthCentenOne22}/></Col>
              </Row>


            </div>

            <div className={style.sztjCentenTwo2}>
              <Row>
                <Col  span={5}>
                  <span className={style.sztjCentenText111}>一产</span>
                  <img src="./lib/image/zjtj10.png" className={style.szthCentenOne222}/></Col>
                <Col  span={5}>
                  <span className={style.sztjCentenText111}>二产</span>
                  <img src="./lib/image/zjtj10.png" className={style.szthCentenOne222}/>
              </Col>
                <Col  span={5}>
                  <span className={style.sztjCentenText111}>三产</span>
                  <img src="./lib/image/zjtj10.png" className={style.szthCentenOne222}/>
              </Col>
                <Col  span={4}></Col>
                <Col  span={5}>
                  <span className={style.sztjCentenText111}>失业率</span>
                  <img src="./lib/image/zjtj10.png" className={style.szthCentenOne222}/></Col>
              </Row>


            </div>



            <div className={style.sztjCentenTwo1}>
              <Row>
                <Col  span={5}>
                  <span className={style.sztjCentenText1111}><span className={style.sztjCentenText2222}>{this.state.AllgrossProduct1.price}</span> <span >亿元</span></span>
                  <img src="./lib/image/zjtj09.png" className={style.szthCentenOne2222}/></Col>
                <Col  span={5}>  <span className={style.sztjCentenText1111}><span className={style.sztjCentenText2222}>{this.state.AllgrossProduct2.price}</span> <span>亿元</span></span>
                  <img src="./lib/image/zjtj09.png" className={style.szthCentenOne2222}/></Col>

                <Col  span={5}>  <span className={style.sztjCentenText1111}><span className={style.sztjCentenText2222}>{this.state.AllgrossProduct3.price}</span> <span>亿元</span></span>
                  <img src="./lib/image/zjtj09.png" className={style.szthCentenOne2222}/></Col>

                <Col  span={4}></Col>
                <Col  span={5}>
                  <span className={style.sztjCentenText11}><span className={style.sztjCentenText2222}>{this.state.AllgrossProduct5.price}</span></span>
                  <img src="./lib/image/zjtj09.png" className={style.szthCentenOne2222}/></Col>
              </Row>



            </div>

            <div  className={style.centenBody}>

              <div id="main5" style={{width: 100+'%', height:100+'%'}}>



              </div>

            </div>

            <div className={style.ALLcentenBodyLast}>
              <div className={style.sztjCentenLast1}>


              </div >

              <div className={style.sztjCentenLast}>
                <span>湖南省生产总值共{this.state.AllProduct1.grossProduct}元</span>
              </div>

              <div  id="newdateNewBody">
              <div  className={style.centenBodyLast}>
                <div >
                  <ul className={style.centenBodyLast0}>
                    {
                      this.state.AllProduct.map(function (newdata) {
                        return(
                          <div  key={newdata.grossProduct}>
                            <li className={style.centenBodyLast1}>
                              <Row>
                                <Col span={24} >{newdata.province}共{newdata.grossProduct}亿</Col>

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

          </div>
          <div className={style.right}>


            <div className={style.dataleft1}>
              <div className={style.dataleft2text}>
              </div>
              <div className={style.datalefthead1}>生成总值</div>
              <img src="./lib/image/zjtj14.png" className={style.dataleftheadImg}/>
              <div  className={style.Sdatarighttable2}>

                <div id="Smain5" style={{width: 100+'%', height:100+'%'}}>

                </div>


              </div>

              <img src="./lib/image/zjtj02.png" className={style.Sdataleft2img}/>
              <img src="./lib/image/zjtj01.png" className={style.dataleft2img}/>
            </div>


            <div className={style.dataleft2} >
              <div className={style.dataleft2text}>
              </div>
              <div className={style.datalefthead1}> 公共财政预算收入支出</div>
              <img src="./lib/image/zjtj15.png" className={style.dataleftheadImg}/>
              <div  className={style.Sdatarighttable2}>

                <div id="Smain6" style={{width: 100+'%', height:100+'%'}}>

                </div>


              </div>

              <img src="./lib/image/zjtj02.png" className={style.Sdataleft2img}/>
              <img src="./lib/image/zjtj01.png" className={style.dataleft2img}/>
            </div>

            <div className={style.dataleft3} >
              <div className={style.dataleft2text}>
              </div>
              <div className={style.datalefthead1}> 贸易</div>

              <div  className={style.Sdatarighttable2}>

                <div   className={style.sztjRightR1}>
                     <Row>
                       <Col className={style.sztjRight3} span={8}>消费品零售金额</Col>
                       <Col className={style.sztjRight3}  span={8}>网络销售总额</Col>
                       <Col className={style.sztjRight3}  span={8}>网络消费总额</Col>
                     </Row>
                </div>


                <div   className={style.sztjRightR2} >
                  <Row>
                    <Col className={style.sztjRight3} span={8}>
                      <span className={style.sztjRightText}><span className={style.sztjRightText1}>{this.state.Alltrade.price}</span>亿元</span>
                      <img src="./lib/image/zjtj03.png" className={style.sztjRight3Img}/>
                    </Col>
                    <Col className={style.sztjRight3}  span={8}>
                      <span className={style.sztjRightText}><span className={style.sztjRightText1}>{this.state.Alltrade1.price}</span>亿元</span>
                      <img src="./lib/image/zjtj04.png" className={style.sztjRight3Img}/>
                    </Col>
                    <Col className={style.sztjRight3}  span={8}>
                      <span className={style.sztjRightText}><span className={style.sztjRightText1}>{this.state.Alltrade2.price}</span>亿元</span>
                      <img src="./lib/image/zjtj04.png" className={style.sztjRight3Img}/>
                    </Col>
                  </Row>
                </div>



                <div  className={style.sztjRightR3}  >
                  <Row>
                    <Col className={style.sztjRight3} span={8}>
                      <span className={style.sztjRightText}><span className={style.sztjRightText1}>+{this.state.Alltrade.costPer}</span></span>
                      <img src="./lib/image/zjtj05.png" className={style.sztjRight3Img}/>
                    </Col>
                    <Col className={style.sztjRight3}  span={8}>
                      <span className={style.sztjRightText}><span className={style.sztjRightText1}>+{this.state.Alltrade1.costPer}</span></span>
                      <img src="./lib/image/zjtj06.png" className={style.sztjRight3Img}/>
                    </Col>
                    <Col className={style.sztjRight3}  span={8}>
                      <span className={style.sztjRightText}><span className={style.sztjRightText1}>+{this.state.Alltrade2.costPer}</span></span>
                      <img src="./lib/image/zjtj06.png" className={style.sztjRight3Img}/>
                    </Col>
                  </Row>
                </div>


              </div>


              <img src="./lib/image/zjtj02.png" className={style.Sdataleft2img}/>
              <img src="./lib/image/zjtj01.png" className={style.dataleft2img}/>
            </div>


            <div className={style.dataleft4}>
              <div className={style.dataleft2text}>
              </div>
              <div className={style.datalefthead1}>居民人均可支配收入</div>
              <div  className={style.Sdatarighttable2}>


                <div  className={style.Sdtatable} style={{width: 50+'%', height:100+'%'}}>
                  <div className={style.sztjdataCity}><span>城镇居民人均可支配输入</span></div>
                  <div id="Smain8"  style={{width:100+'%', height:70+'%'}}>
                  </div>

                  <div className={style.sztjdataCity1}>

                    <span className={style.sztjdataCity2}>34665</span>元</div>
                </div>


                <div  className={style.Sdtatable1} style={{width: 50+'%', height:100+'%'}}>
                  <div className={style.sztjdataCity}><span>农村居民人均可支配输入</span></div>
                  <div id="Smain9" style={{width: 100+'%', height:70+'%'}}>

                  </div>
                  <div className={style.sztjdataCity1}><span className={style.sztjdataCity2}>12342</span>元</div>

                </div>


              </div>
              <img src="./lib/image/zjtj02.png" className={style.Sdataleft2img}/>
              <img src="./lib/image/zjtj01.png" className={style.dataleft2img}/>
            </div>

          </div>
        </div>
      </div>


    )
  }

});

export default Login;
