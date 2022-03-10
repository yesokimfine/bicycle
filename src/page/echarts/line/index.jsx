import React, { Component } from "react";
import { Card } from "antd";
import {
  echarts,
  ReactEcharts,
  echartsTheme,
} from "../../../utils/initialEcharts";
import "echarts/lib/chart/line";

export default class Line extends Component {
  componentWillMount() {
    echarts.registerTheme("defaultTheme", echartsTheme);
  }
  option1 = {
    title: {
      text: "用户订单",
    },
    xAxis: {
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: {
      type: "value",
    },
    series: {
      name: "订单量",
      type: "line",
      data: [622, 217, 525, 1069, 421, 1952, 1462],
    },
    tooltip: {
      trigger: "axis",
    },
  };
  option2 = {
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
          type: "line",
          data: [622, 217, 525, 1069, 421, 1952, 1462],
        },
        {
          name: "享当当",
          type: "line",
          data: [1422, 1217, 1025, 1169, 721, 2702, 2002],
        },
    ],
    tooltip:{
        trigger:"axis"
    },
    legend:{
        data:["骑得快","享当当"]
    }
  };
  option3 = {
      title:{
          text:"用户订单"
      },
      xAxis:{
        boundaryGap:false,  //两边是否有留白
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      yAxis:{
          type:"value"
      },
      series:{
          name:"订单量",
          type:"line",
          areaStyle:{},
          data: [622, 217, 525, 1069, 421, 1952, 1462]
      },
      tooltip:{
          trigger:"axis"
      }
  }
  render() {
    return (
      <div>
        <Card title="折线图（一）">
          <ReactEcharts
            option={this.option1}
            theme="defaultTheme"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="折线图（二）">
          <ReactEcharts
            option={this.option2}
            theme="defaultTheme"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="折线图（三）">
          <ReactEcharts
            option={this.option3}
            theme="defaultTheme"
            style={{ height: 500 }}
          />
        </Card>
      </div>
    );
  }
}
