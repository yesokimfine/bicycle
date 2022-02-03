import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Util from '../../utils/utils';
import axios from 'axios'
import './index.less';
export default class Header extends Component {
  componentWillMount() {
    this.setState({
      userName: "管理员"
    });
    setInterval(() => {
      let sysTime = Util.formateDate(new Date());
      this.setState({ sysTime })
    }, 1000);
    this.getWeatherAPIData();
  }
  getWeatherAPIData(){
    axios.get("https://devapi.qweather.com/v7/weather/now?key=2d760ed5e7154245a37755e6d6902db5&location=101090501")
    .then(res=>{
       let weather = res.data.now.text;  //天气信息
       let weatherIconCode = res.data.now.icon;  //字体图标编码
       this.setState({weather,weatherIconCode})
    })
  }
  render() {
    let { userName, sysTime,weather,weatherIconCode} = this.state;
    return <div className="header">
      <Row className="header-top">
        <Col span={24}>
          <span>欢迎，{userName}</span>
          <a href="#">退出</a>
        </Col>
      </Row>
      <Row className="breadcrumb">
        <Col span={4} className="breadcrumb-title">
          首页
        </Col>
        <Col span={20} className="weather">
          <span className="date">{sysTime}</span>
          <i className={"qi-"+weatherIconCode}></i>
          <span className="weather-detail">{weather}</span>
        </Col>
      </Row>
    </div>;
  }
}
