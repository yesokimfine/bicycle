import React, { Component } from 'react';
import { Card, Button, Radio, Divider } from 'antd';
import {
  PlusOutlined, EditOutlined, DeleteOutlined,
  SearchOutlined, DownloadOutlined, CheckOutlined,
  LeftOutlined, RightOutlined
} from '@ant-design/icons'
import './ui.less';
export default class Buttons extends Component {
  state = {
    isLoading: false,
    buttonSize: "middle"
  };
  fakeLoading = () => {
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000)
  };
  changeSize = (e) => {
    this.setState({ buttonSize: e.target.value })
  }
  render() {
    let { isLoading, buttonSize } = this.state;
    return <div>
      <Card title="基础按钮" className="buttons-card">
        <Button type="primary">主按钮</Button>
        <Button>默认按钮</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button danger>危险按钮</Button>
        <Button disabled>不可用</Button>
      </Card>
      <Card title="图形按钮" className="buttons-card">
        <Button icon={<PlusOutlined />}>创建</Button>
        <Button icon={<EditOutlined />}>编辑</Button>
        <Button type="danger" icon={<DeleteOutlined />}>删除</Button>
        <Button type="primary" shape="circle" icon={<SearchOutlined />}></Button>
        <Button icon={<SearchOutlined />}>搜索</Button>
        <Button icon={<DownloadOutlined />}>下载</Button>
      </Card>
      <Card title="Loading按钮" className="buttons-card">
        <Button type="primary" shape="circle" loading={isLoading} icon={<CheckOutlined />}></Button>
        <Button type="primary" loading={isLoading}>确定</Button>
        <Button loading={isLoading} onClick={this.fakeLoading}>点击加载</Button>
      </Card>
      <Card title="按钮组" className="buttons-card">
        <Button.Group>
          <Button icon={<LeftOutlined />} type="primary" style={{ marginRight: "0" }}>返回</Button>
          <Button type="primary">下一页 <RightOutlined /></Button>
        </Button.Group>
      </Card>
      <Card title="按钮尺寸" onChange={this.changeSize} className="buttons-card">
        <p>选择按钮大小:</p>
        <Radio.Group defaultValue="middle" className="buttons-radioG">
          <Radio value="small">小</Radio>
          <Radio value="middle">中</Radio>
          <Radio value="large">大</Radio>
        </Radio.Group>
        <Divider />
        <Button type="primary" size={buttonSize}>确定</Button>
        <Button size={buttonSize}>取消</Button>
        <Button size={buttonSize} danger>删除</Button>
        <Button type="primary" shape="circle" icon={<SearchOutlined />} size={buttonSize}></Button>
      </Card>
    </div>;
  }
}
