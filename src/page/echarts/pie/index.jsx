import React, { Component } from "react";
import { Card } from "antd";
import {
  echarts,
  ReactEcharts,
  echartsTheme,
} from "../../../utils/initialEcharts";
import "echarts/lib/chart/pie";

export default class Pie extends Component {
  componentWillMount() {
    echarts.registerTheme("defaultTheme", echartsTheme);
  }
  option1 = {
    title: {
      text: "用户订单",
      x:"center" //标题水平居中
    },
    legend: {
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      orient:"vertical",  //方向
      top:20,
      right:40
    },
    series: {
      name: "订单量",
      type: "pie",
      data: [
        {
          name: "周一",
          value: 677,
        },
        {
          name: "周二",
          value: 726,
        },
        {
          name: "周三",
          value: 1007,
        },
        {
          name: "周四",
          value: 370,
        },
        {
          name: "周五",
          value: 637,
        },
        {
          name: "周六",
          value: 1670,
        },
        {
          name: "周日",
          value: 1503,
        },
      ],
    },
    tooltip:{
        trigger:"item",
        formatter:"{a}:<br/>{b}:{c}({d}%)"
    }
  };
  option2 = {
    title: {
      text: "用户订单",
      x:"center" //标题水平居中
    },
    legend: {
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      orient:"vertical",  //方向
      top:20,
      right:40
    },
    series: {
      name: "订单量",
      type: "pie",
      radius:["40%","70%"],  //[内圆百分比,外圆百分比]
      data: [
        {
          name: "周一",
          value: 677,
        },
        {
          name: "周二",
          value: 726,
        },
        {
          name: "周三",
          value: 1007,
        },
        {
          name: "周四",
          value: 370,
        },
        {
          name: "周五",
          value: 637,
        },
        {
          name: "周六",
          value: 1670,
        },
        {
          name: "周日",
          value: 1503,
        },
      ],
    },
    tooltip:{
        trigger:"item",
        formatter:"{a}:<br/>{b}:{c}({d}%)"
    }
  };
  option3 = {
    title: {
      text: "用户订单",
      x:"center" //标题水平居中
    },
    legend: {
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      orient:"vertical",  //方向
      top:20,
      right:40
    },
    series: {
      name: "订单量",
      type: "pie",
      data: [
        {
          name: "周一",
          value: 677,
        },
        {
          name: "周二",
          value: 726,
        },
        {
          name: "周三",
          value: 810,
        },
        {
          name: "周四",
          value: 370,
        },
        {
          name: "周五",
          value: 437,
        },
        {
          name: "周六",
          value: 1170,
        },
        {
          name: "周日",
          value: 1003,
        },
      ].sort((a,b)=>a.value-b.value),
    },
    roseType: 'radius',
    tooltip:{
        trigger:"item",
        formatter:"{a}:<br/>{b}:{c}({d}%)"
    }
  };
  render() {
    return (
      <div>
        <Card title="饼图（一）">
          <ReactEcharts
            option={this.option1}
            theme={echartsTheme}
            style={{ height: 500 }}
          />
        </Card>
        <Card title="饼图（二）">
          <ReactEcharts
            option={this.option2}
            theme={echartsTheme}
            style={{ height: 500 }}
          />
        </Card>
        <Card title="饼图（三）">
          <ReactEcharts
            option={this.option3}
            theme={echartsTheme}
            style={{ height: 500 }}
          />
        </Card>
      </div>
    );
  }
}
