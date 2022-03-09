import React, { Component } from "react";
import { Card } from "antd";
import BaseForm from "../../components/BaseForm";
import Utils from "../../utils/utils";

export default class BikeMap extends Component {
  state = {
    total_count: 0,
  };
  formList = [
    {
      type: "SELECT",
      label: "城市",
      field: "city",
      placeholder: "全部",
      width: 90,
      list: [
        { id: "all", name: "全部" },
        { id: "bj", name: "北京市" },
        { id: "sh", name: "上海市" },
        { id: "hz", name: "杭州市" },
        { id: "sz", name: "深圳市" },
      ],
    },
    {
      type: "时间查询",
    },
    {
      type: "SELECT",
      label: "订单状态",
      field: "order_status",
      placeholder: "全部",
      width: 100,
      list: [
        { id: "all", name: "全部" },
        { id: "running", name: "进行中" },
        { id: "completed", name: "结束行程" },
      ],
    },
  ];
  componentWillMount() {
    let myAxios = Utils.myAxios(
      "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/bikeMap"
    );
    myAxios.then((res) => {
      this.setState({ total_count: res.result.total_count });
      this.renderMap(res.result);
      //   this.drawBikeRoute(res.result.position_list);
      //   this.drawServiceArea(res.result.area);
    });
  }
  //绘制地图
  renderMap = (res) => {
    let list = res.route_list;
    this.map = new window.BMapGL.Map("bikelMap", { enableMapClick: false });
    let gps1 = list[0].split(",");
    let startPoint = new window.BMapGL.Point(gps1[0], gps1[1]);
    let gps2 = list[list.length - 1].split(",");
    let endPoint = new window.BMapGL.Point(gps2[0], gps2[1]);

    this.map.centerAndZoom(endPoint, 12);
    // map.clearOverlays();

    //添加起始图标
    let startPointIcon = new window.BMapGL.Icon(
      "/assets/start_point.png",
      new window.BMapGL.Size(36, 42),
      {
        imageSize: new window.BMapGL.Size(36, 42),
        anchor: new window.BMapGL.Size(18, 42),
      }
    );

    let bikeMarkerStart = new window.BMapGL.Marker(startPoint, {
      icon: startPointIcon,
    });
    this.map.addOverlay(bikeMarkerStart);

    let endPointIcon = new window.BMapGL.Icon(
      "/assets/end_point.png",
      new window.BMapGL.Size(36, 42),
      {
        imageSize: new window.BMapGL.Size(36, 42),
        anchor: new window.BMapGL.Size(18, 42),
      }
    );
    let bikeMarkerEnd = new window.BMapGL.Marker(endPoint, {
      icon: endPointIcon,
    });
    this.map.addOverlay(bikeMarkerEnd);

    let routeList = [];
    list.forEach((item) => {
      let p = item.split(",");
      let point = new window.BMapGL.Point(p[0], p[1]);
      routeList.push(point);
    });
    // 行驶路线
    let polyLine = new window.BMapGL.Polyline(routeList, {
      strokeColor: "#07d",
      strokeWeight: 3,
      strokeOpacity: 0.8,
    });
    this.map.addOverlay(polyLine);
    // 服务区路线
    let serviceList = res.service_list;
    let servicePointist = [];
    serviceList.forEach((item) => {
      let point = new window.BMapGL.Point(item.lon, item.lat);
      servicePointist.push(point);
    });
    // 画线
    let polyServiceLine = new window.BMapGL.Polyline(servicePointist, {
      strokeColor: "#ef4136",
      strokeWeight: 5,
      strokeOpacity: 1,
    });
    this.map.addOverlay(polyServiceLine);
    // 添加地图中的自行车
    let bikeList = res.bike_list;
    let bikeIcon = new window.BMapGL.Icon(
      "/assets/bike.jpg",
      new window.BMapGL.Size(36, 42),
      {
        imageSize: new window.BMapGL.Size(36, 42),
        anchor: new window.BMapGL.Size(18, 42),
      }
    );
    bikeList.forEach((item) => {
      let p = item.split(",");
      let point = new window.BMapGL.Point(p[0], p[1]);
      let bikeMarker = new window.BMapGL.Marker(point, { icon: bikeIcon });
      this.map.addOverlay(bikeMarker);
    });
    // 添加地图控件
    this.addMapControl();
  };

  addMapControl = () => {
    let map = this.map;
    // 添加比例尺控件
    map.addControl(new window.BMapGL.ScaleControl());
    // 添加缩放控件
    map.addControl(new window.BMapGL.ZoomControl());
  };
  render() {
    let { total_count } = this.state;
    return (
      <div>
        <Card>
          <BaseForm formList={this.formList} />
        </Card>
        <Card style={{ marginTop: 20 }}>
          <p>共{total_count}辆</p>
          <div id="bikelMap" className="order-map"></div>
        </Card>
      </div>
    );
  }
}
