import React, { Component } from 'react';
import { Row, Col } from 'antd'
import './style/common.less'
import NavLeft from './components/NavLeft'
import Header from './components/Header';
import Home from './page/home';
import Footer from './components/Footer';
export default class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={20} className="main">
          <Header />
          <Row className="content">
            <Col span={24}>
              <Home />
            </Col>
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
