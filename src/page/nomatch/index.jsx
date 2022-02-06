import React, { Component } from 'react';
import { Empty } from 'antd';
import './index.less'
export default class NoMatch extends Component {
  render() {
    return <div className="empty-wrapper">
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="没有找到相关页面..."/>
    </div>;
  }
}
