import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';
import { CheckOutlined,StarOutlined } from '@ant-design/icons'
export default class Notification extends Component {
    state = {
        isSubscribe: false
    }
    openNotification = () => {
        let { isSubscribe } = this.state;
        if (isSubscribe) {
            notification.info({
                message: "取消成功",
                description: "您已成功取消订阅，我们将对内容继续进行优化，期待您的再次订阅"
            });
            this.setState({isSubscribe:false})
        } else {
            notification.success({
                message: "订阅成功！",
                description: "感谢您的订阅，系统将于每月5日将订阅消息发送到您的邮箱,届时请您注意查收"
            });
            this.setState({isSubscribe:true})
        }
    }
    render() {
        let { isSubscribe } = this.state;
        let iconStyle = isSubscribe?<CheckOutlined />:<StarOutlined />;
        return <div>
            <Card title="通知提醒" className="card-wrapper">
                <Button type={isSubscribe?"default":"primary"} icon={iconStyle} onClick={this.openNotification}>{isSubscribe?"已订阅":"订阅"}</Button>
            </Card>
        </div>;
    }
}
