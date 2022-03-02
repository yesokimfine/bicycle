import React, { Component } from "react";
import { Card } from "antd";
import axios from "axios";
import "./detail.less";
export default class OrderDetail extends Component {
  state = {
    orderInfo: {},
  };
  componentWillMount() {
    axios
      .get(
        "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/order/detail"
      )
      .then((res) => {
        this.setState({ orderInfo: res.data.result });
        this.renderMap();
        this.drawBikeRoute(res.data.result.position_list);
        this.drawServiceArea(res.data.result.area)
      });
  }
  //绘制地图
  renderMap = () => {
    this.map = new window.BMapGL.Map("orderDetailMap"); // 创建地图实例 ,挂载到指定id位置上
    this.addMapControl(); // 调用地图插件函数
  };

  addMapControl = () => {
    let map = this.map;

    // 添加比例尺控件
    map.addControl(new window.BMapGL.ScaleControl());
    // 添加缩放控件
    map.addControl(new window.BMapGL.ZoomControl());
  };

  //绘制行驶路线
  drawBikeRoute = (positionList) => {
    let startPoint = "";
    let endPoint = "";
    if (positionList.length > 0) {
      let first = positionList[0];
      let last = positionList[positionList.length - 1];
      startPoint = new window.BMapGL.Point(first.lon, first.lat);
      let startIcon = new window.BMapGL.Icon(
        "/assets/start_point.png",
        new window.BMapGL.Size(36, 42),
        {
          imageSize: new window.BMapGL.Size(36, 42),
          anchor: new window.BMapGL.Size(36, 42),
        }
      );
      endPoint = new window.BMapGL.Point(last.lon, last.lat);
      let endIcon = new window.BMapGL.Icon(
        "/assets/end_point.png",
        new window.BMapGL.Size(36, 42),
        {
          imageSize: new window.BMapGL.Size(36, 42),
          anchor: new window.BMapGL.Size(36, 42),
        }
      );
      let startMarker = new window.BMapGL.Marker(startPoint, {
        icon: startIcon,
      });
      let endMarker = new window.BMapGL.Marker(endPoint, { icon: endIcon });
      this.map.addOverlay(startMarker); //添加起始位置
      this.map.addOverlay(endMarker); //添加结束位置

      //绘制行驶路线
      let trackPoint = [];
      positionList.map(item => {
        trackPoint.push(new window.BMapGL.Point(item.lon, item.lat));
      });
      let polyline = new window.BMapGL.Polyline(trackPoint, {
        strokeColor: "#07d",
        strokeWeight: 4,
        strokeOpacity: 0.8,
      });
      this.map.addOverlay(polyline);
      this.map.centerAndZoom(endPoint, 13); // 设置中心点坐标和地图级别,这里以行驶终点为地图终点
    }
  };
  //绘制服务区
  drawServiceArea = (positionList) => {
    let trackPoint = [];
    positionList.map(item => {
      trackPoint.push(new window.BMapGL.Point(item.lon, item.lat));
    });
    let polygon = new window.BMapGL.Polygon(trackPoint, {
      strokeColor: "#CE0000",
      strokeWeight: 6,
      strokeOpacity: 1,
      fillColor: "#ff8605",
      fillOpacity: 0.4,
    });
    this.map.addOverlay(polygon);
  };
  render() {
    let { orderInfo } = this.state;
    return (
      <div>
        <Card>
          <div id="orderDetailMap" className="order-map"></div>
          <div className="detail-items">
            <div className="item-title">基础信息</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">用车模式</div>
                <div className="detail-form-content">{orderInfo.mode}</div>
              </li>
              <li>
                <div className="detail-form-left">订单编号</div>
                <div className="detail-form-content">{orderInfo.order_sn}</div>
              </li>
              <li>
                <div className="detail-form-left">车辆编号</div>
                <div className="detail-form-content">{orderInfo.bike_sn}</div>
              </li>
              <li>
                <div className="detail-form-left">姓名</div>
                <div className="detail-form-content">{orderInfo.user_name}</div>
              </li>
              <li>
                <div className="detail-form-left">手机号码</div>
                <div className="detail-form-content">{orderInfo.mobile}</div>
              </li>
            </ul>
          </div>
          <div className="detail-items">
            <div className="item-title">行驶轨迹</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">行程起点</div>
                <div className="detail-form-content">
                  {orderInfo.start_location}
                </div>
              </li>
              <li>
                <div className="detail-form-left">行程终点</div>
                <div className="detail-form-content">
                  {orderInfo.end_location}
                </div>
              </li>
              <li>
                <div className="detail-form-left">行驶里程</div>
                <div className="detail-form-content">
                  {(orderInfo.distance / 1000).toFixed(1) + "km"}
                </div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    );
  }
}
