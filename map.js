/**
 * Created by Administrator on 2016/12/9.
 */
  var data =this.state.NewLastName

 var data2 = [
 {name: '益阳桃花伦店'},
 {name: '万达店2'},
 ];

 var geoCoordMap2 = {
 '天马公寓': [112.582279,26.19409,30.222222],
 '万达店2': [111.582279,25.19409,22.33333333333],
 };


 /* var data2 = this.state.NewAllName

 var geoCoordMap2 = this.state.NewAllMoney*/

 var geoCoordMap = {

 '长沙市': [112.982279,28.19409,52],
 '株洲市': [113.451737,27.535806,32],
 '湘潭市': [112.944052,27.82973,20],
 '衡阳市': [112.607693,26.900358,41],
 '邵阳市': [111.46923,27.237842,21],
 '岳阳市': [113.132855,29.37029,32],
 '常德市': [111.691347,29.040225,36],
 '张家界市': [110.479921,29.127401,41],
 '益阳市': [112.355042,28.570066,30],
 '郴州市': [113.032067,25.793589,11],
 '永州市': [111.608019,26.434516,21],
 '怀化市': [109.97824,27.550082,19],
 '娄底市': [112.008497,27.728136,17],
 '湘西市': [109.739735,28.314296,16],

 }

 var convertData2 = function (data2) {
 var res = [];
 for (var i = 0; i < data2.length; i++) {

 var geoCoord = geoCoordMap2[data2[i].name];

 if (geoCoord){
 res.push({
 name: data2[i].name,
 value: geoCoord
 });
 }

 }

 console.log(res)
 return res;
 };



 //根据data得到放射光标效果图。如果起始城市没有值的话，就只显示目的城市
 var convertData1 = function (data) {
 var res = [];
 for (var i = 0; i < data.length; i++) {

 var geoCoord = geoCoordMap[data[i].name];

 if (geoCoord){
 res.push({
 name: data[i].name,
 value: geoCoord
 });
 }

 }

 console.log(res)
 return res;
 };




 $.get('hunan.json', function (chinaJson) {
 echarts.registerMap('hunan', chinaJson);
 var chart5 = echarts.init(document.getElementById('main5'));

 chart5.setOption({
 tooltip: {
 trigger: 'item',
 show: true,
 formatter:/*'{b} : {c} '*/
     function (params) {
       return "地址："+params.name+'<br />'+'月平均销售额：'+ params.value[2]+'元'
     }

 },
 /*
 visualMap: {
 min: 1,
 max: 100,
 splitNumber: 1,
 color: ['black','white'],
 textStyle: {
 color: '#fff'
 }
 },*/

 geo: {
 map: 'hunan',
 label: {
 emphasis: {
 show: false
 }
 },
 itemStyle: {
 normal: {
 areaColor: 'white',
 borderColor: 'white',
 borderType: 'solid',
 borderWidth: 2,
 opacity: 0.1,
 },
 },
 },


 //series就是要绘制的地图的主体。是一个数组，也就是说可以有多个数据进行绘制。这里有两个，一个是两个城市的连线，一个是对两个城市进行高亮显示。其中的type是很重要的参数，主要有饼图、条形图、线、地图等等。具体的可以去参考官网上的配置手册。
 series :
 [
 {
 name: 'city',
 type: 'effectScatter',
 coordinateSystem: 'geo',
 rippleEffect: {
 brushType: 'stroke'
 },
 label: {
 normal: {
 show: true,
 position: 'right',
 formatter: '{b}',
 textStyle: {
 color: '#ffb400',
 fontSize: 13,
 }
 }
 },

 itemStyle: {
 normal: {
 color: '#feda34',
 },

 },

 data: convertData1(data),
 symbolSize: function (val) {
 return val[2] / 3;
 },

 },



 {
 name: 'city',
 type: 'scatter',
 coordinateSystem: 'geo',
 data: convertData2(data2),
 symbolSize: function (val) {
 return val[2] / 400;
 },
 label: {
 normal: {
 show: false,
 position: 'right',
 formatter: '{b}',
 textStyle: {
 color: '#ffb400',
 fontSize: 13,
 }
 }
 },

 itemStyle: {
 normal: {
 color: '#feda34',
 },

 },
 },



 /* {
 mapType: 'hunan',
 type: 'map',
 // 自定义扩展图表类型
 label: {
 emphasis: {
 show: false
 }
 },
 itemStyle: {
 normal: {
 areaColor: 'white',
 borderColor: 'white',
 borderType: 'solid',
 borderWidth: 2,
 opacity: 0.1,
 },
 },

 data:[
 {name: '长沙市', value: 52},
 {name: '株洲市', value: 32},
 {name: '湘潭市', value: 20},
 {name: '邵阳市', value: 21},
 {name: '岳阳市', value: 32},
 {name: '常德市', value: 36},
 {name: '张家界市', value: 41},
 {name: '益阳市', value: 30},
 {name: '郴州市', value: 11},
 {name: '永州市', value: 21},
 {name: '怀化市', value: 19},
 {name: '娄底市', value: 17},
 {name: '湘西土家族苗族自治州', value: 0},
 {name: '衡阳市', value: 0},
 /!*
 '长沙': [112.982279,28.19409,52],
 '株洲': [113.451737,27.535806,32],
 '湘潭': [112.944052,27.82973,20],
 '衡阳': [112.607693,26.900358,41],
 '邵阳': [111.46923,27.237842,21],
 '岳阳': [113.132855,29.37029,32],
 '常德': [111.691347,29.040225,36],
 '张家界': [110.479921,29.127401,41],
 '益阳': [112.355042,28.570066,30],
 '郴州': [113.032067,25.793589,11],
 '永州': [111.608019,26.434516,21],
 '怀化': [109.97824,27.550082,19],
 '娄底': [112.008497,27.728136,17],
 '湘西': [109.739735,28.314296,16],*!/
 ],

 }
 */

 ]
 });



 });
