import React, { Component } from "react";
import { Row, Col } from "antd";
import Util from "../../utils/utils";
import axios from "axios";
import "./index.less";
export default class Header extends Component {
  componentWillMount() {
    this.setState({
      userName: "管理员",
    });
    setInterval(() => {
      let sysTime = Util.formateDate(new Date());
      this.setState({ sysTime });
      if (new Date().getHours() >= 18) {
        this.setState({ isNight: true });
      } else {
        this.setState({ isNight: false });
      }
    }, 1000);
    this.getWeatherAPIData();
  }
  getWeatherAPIData() {
    axios
      .get(
        "https://devapi.qweather.com/v7/weather/now?key=2d760ed5e7154245a37755e6d6902db5&location=101090501"
      )
      .then((res) => {
        let weather = res.data.now.text; //天气信息
        let windDir = res.data.now.windDir; //风向
        let weatherIconCode = res.data.now.icon; //字体图标编码
        this.setState({ weather, weatherIconCode, windDir });
      });
  }
  render() {
    let { menuType } = this.props;
    let { userName, sysTime, weather, weatherIconCode, isNight, windDir } =
      this.state;
    let isNightStyle = isNight ? "night-icon" : "day-icon";
    return (
      <div className="header">
        <Row className="header-top">
          {menuType ? (
            <Col span={6} className="second-logo">
              <a href="/#/admin">
                <img src="/assets/bic-logo.jpg" alt="" />
              </a>
              <span>单车系统</span>
            </Col>
          ) : null}
          <Col span={menuType ? 18 : 24}>
            <span>欢迎，{userName}</span>
            <a href="#" style={{ color: menuType ? "#e50" : null }}>
              退出
            </a>
          </Col>
        </Row>
        {menuType ? null : (
          <Row className="breadcrumb">
            <Col span={4} className="breadcrumb-title">
              首页
            </Col>
            <Col span={20} className="weather">
              <span className="date">{sysTime}</span>
              <i className={`qi-${weatherIconCode} ${isNightStyle}`}></i>
              <span className="weather-detail">{weather}</span>
              <span className="weather-wind">{windDir}</span>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}
