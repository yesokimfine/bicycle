// 引入 ECharts 主模块
import * as echarts from 'echarts/lib/echarts';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/markPoint";
import "echarts/lib/component/markLine";

//引入echarts-for-react
import ReactEcharts from 'echarts-for-react';

//主题
import echartsTheme from '../page/echarts/echartTheme';

export {echarts,ReactEcharts,echartsTheme};