import React, { Component } from "react";
import { Row, Col } from "antd";
import "./style/common.less";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default class Common extends Component {
  render() {
    return (
      <div>
        <Row className="simple-page">
          <Col span={24}>
            <Header menuType="second" />
          </Col>
        </Row>
        <Row className="content" style={{marginLeft:105}}>
          <Col span={22}>{this.props.children}</Col>
        </Row>
        <Row>
          <Col span={24}>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}
