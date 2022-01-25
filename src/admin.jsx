import React, { Component } from 'react';
import {Row,Col} from 'antd'
import NavLeft from './components/NavLeft'
import Header from './components/Header';
import Footer from './components/Footer';

export default class Admin extends Component {
  render() {
    return (
        <Row>
            <Col span={3}>
                <NavLeft/>
            </Col>
            <Col span={21}>
                <Header/>
                <Row>
                  Content
                </Row>
                <Footer/>
            </Col>
        </Row>
    );
  }
}
