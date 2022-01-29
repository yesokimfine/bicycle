import React, { Component } from 'react';
import { Card, Button } from 'antd';
import {
  PlusOutlined, EditOutlined, DeleteOutlined,
  SearchOutlined, DownloadOutlined, CheckOutlined,
  LeftOutlined, RightOutlined
} from '@ant-design/icons'
import './ui.less';
export default class Buttons extends Component {
  state = {
    isLoading: false
  }
  fakeLoading = () => {
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000)
  }
  render() {
    let { isLoading } = this.state;
    return <div>
      <Card title="基础按钮">
        <Button type="primary">主按钮</Button>
        <Button>默认按钮</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button type="danger">危险按钮</Button>
        <Button disabled>不可用</Button>
      </Card>
      <Card title="图形按钮">
        <Button icon={<PlusOutlined />}>创建</Button>
        <Button icon={<EditOutlined />}>编辑</Button>
        <Button type="danger" icon={<DeleteOutlined />}>删除</Button>
        <Button type="primary" shape="circle" icon={<SearchOutlined />}></Button>
        <Button icon={<SearchOutlined />}>搜索</Button>
        <Button icon={<DownloadOutlined />}>下载</Button>
      </Card>
      <Card title="Loading按钮">
        <Button type="primary" shape="circle" loading={isLoading} icon={<CheckOutlined />}></Button>
        <Button type="primary" loading={isLoading}>确定</Button>
        <Button loading={isLoading} onClick={this.fakeLoading}>点击加载</Button>
      </Card>
      <Card title="按钮组">
        <Button.Group>
          <Button icon={<LeftOutlined />} type="primary">返回</Button>
          <Button icon={<RightOutlined />} type="primary">下一页</Button>
        </Button.Group>
      </Card>
    </div>;
  }
}
