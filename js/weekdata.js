var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
var option;
option = {
  xAxis: {
	type: 'category',
	data: ['1959', '1969', '1979', '1989', '1999', '2009', '2019']
  },
  yAxis: {
	type: 'value'
  },
  series: [
	{
	  data: [29, 36, 43, 52, 60, 69, 77],
	  type: 'bar',
	  showBackground: true,
	  backgroundStyle: {
		color: 'rgba(180, 180, 180, 0.2)'
	  }
	}
  ]
};

if (option && typeof option === 'object') {
	myChart.setOption(option);
}