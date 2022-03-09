import React, { Component } from "react";
import { Card } from "antd";
//加载柱形图
import "echarts/lib/chart/bar";
//按需加载
import { echarts, ReactEcharts ,echartsTheme } from "../../../utils/initialEcharts";
export default class Bar extends Component {
  componentWillMount() {
    //注册主题
    // echarts.registerTheme("defaultTheme", echartTheme);
    echarts.registerTheme("defaultTheme", echartsTheme);
  }
  option1 = {
    title: {
      //标题
      text: "用户订单",
    },
    xAxis: {
      //x轴
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: {
      //y轴
      type: "value",
    },
    series: [
      {
        name: "订单量",
        type: "bar", //图表类型
        data: [622, 217, 525, 1069, 421, 1952, 1462],
      },
    ],
    tooltip: {
      trigger: "axis",
    }
  };
  options2 = {
    title: {
      text: "用户订单",
    },
    xAxis: {
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "骑得快",
        type: "bar",
        data: [622, 217, 525, 1069, 421, 1952, 1462],
      },
      {
        name: "享当当",
        type: "bar",
        data: [1422, 1217, 1025, 1169, 721, 2702, 2002],
      },
      {
        name: "罗哈自营",
        type: "bar",
        data: [877, 407, 229, 619, 221, 1557, 816],
      }
    ],
    tooltip: {
      trigger: "axis",
    },
    legend:{
      data:["骑得快","享当当","罗哈自营"]
    }
  };
  render() {
    return (
      <div>
        <Card title="柱形图（一）">
          <ReactEcharts
            option={this.option1}
            theme="defaultTheme"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="柱状图（二）">
          <ReactEcharts
            option={this.options2}
            theme="defaultTheme"
            style={{ height: 500 }}
          />
        </Card>
      </div>
    );
  }
}
