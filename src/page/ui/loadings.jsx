import React, { Component } from 'react';
import { Card, Spin, Alert, Switch } from 'antd';
import { LoadingOutlined, DollarCircleOutlined } from '@ant-design/icons'

export default class Loadings extends Component {
    state = {
        isSping: false
    }
    render() {
        let { isSping } = this.state;
        return <div>
            <Card title="Spin用法" className="card-wrapper">
                <Spin size="small" />
                <Spin style={{ margin: "0 20px" }} />
                <Spin size="large" />
            </Card>
            <Card title="自定义Spin图标" className="card-wrapper">
                <Spin indicator={<LoadingOutlined />} />
                <Spin indicator={<DollarCircleOutlined spin={true} />} style={{ margin: "0 20px" }} />
            </Card>
            <Card title="内容遮罩" className="card-wrapper">
                <Spin spinning={isSping} tip="加载中...">
                    <Alert
                        message="Alert Info"
                        description={[
                            <p>Info Description Info Description Info Description Info Description</p>,
                            <p>Some contents...</p>,
                            <p>Some contents...</p>
                         ]
                        }
                        type="info"
                        style={{marginBottom:20}}
                    />
                </Spin>
                <Switch 
                checkedChildren="开启"
                unCheckedChildren="关闭"
                onChange={()=>{this.setState({isSping:!isSping})}}
                />
            </Card>
        </div>;
    }
}
