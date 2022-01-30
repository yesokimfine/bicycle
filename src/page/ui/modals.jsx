import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons'
import './ui.less'
export default class Modals extends Component {
  state = {
    isLoading: false,
    mod1: false,
    mod2: false,
    mod3: false,
    mod4: false
  }
  handdleOpen = (modNum) => {
    this.setState({ [modNum]: true })
  }
  handdleSubmit = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000)
  }
  render() {
    let { mod1, mod2, mod3, mod4, isLoading } = this.state;
    return <div>
      <Card title="基础模态框" className="card-wrapper">
        <Button type="primary" onClick={() => this.handdleOpen("mod1")}>打开</Button>
        <Button type="primary" onClick={() => this.handdleOpen("mod2")}>自定义页脚</Button>
        <Button type="primary" onClick={() => this.handdleOpen("mod3")}>距离顶部20px</Button>
        <Button type="primary" onClick={() => this.handdleOpen("mod4")}>水平垂直居中</Button>
      </Card>
      <Modal
        title="标题"
        visible={mod1}
        okText="确定"
        cancelText="取消"
        onCancel={() => this.setState({ mod1: false })}
        onOk={() => this.setState({ mod1: false })}

      >
        <p>Some Contents...</p>
        <p>Some Contents...</p>
        <p>Some Contents...</p>
      </Modal>
      <Modal
        title="标题"
        visible={mod2}
        onCancel={() => this.setState({ mod2: false })}
        onOk={() => this.setState({ mod2: false })}
        footer={[
          <Button type="primary" icon={<UploadOutlined />} loading={isLoading} onClick={this.handdleSubmit}>上传</Button>,
          <Button type="primary" loading={isLoading}>确定</Button>,
          <Button onClick={() => this.setState({ mod2: false })}>取消</Button>,
        ]}
      >
        <p>Some Contents...</p>
        <p>Some Contents...</p>
        <p>Some Contents...</p>
      </Modal>
      <Modal
        style={{ top: "20px" }}
        title="标题"
        visible={mod3}
        okText="确定"
        cancelText="取消"
        onCancel={() => this.setState({ mod3: false })}
        onOk={() => this.setState({ mod3: false })}

      >
        <p>Some Contents...</p>
      </Modal>
      <Modal
        wrapClassName="vertical-center-modal"
        title="标题"
        visible={mod4}
        okText="确定"
        cancelText="取消"
        onCancel={() => this.setState({ mod4: false })}
        onOk={() => this.setState({ mod4: false })}

      >
        <p>Some Contents...</p>
        <p>Some Contents...</p>
      </Modal>
    </div>;
  }
}
