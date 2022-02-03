import React, { Component } from 'react';
import { Card, Button, message } from 'antd';

export default class Message extends Component {
    showMessage = (type) => {
        message[type](`This is "${type}" message`)
    }
    render() {
        return <div>
            <Card title="全局提示框">
                <Button onClick={() => this.showMessage("info")}>Info</Button>
                <Button onClick={() => this.showMessage("success")} style={{ margin: "0 20px" }}>Success</Button>
                <Button onClick={() => this.showMessage("warning")}>Warning</Button>
                <Button onClick={() => this.showMessage("error")} style={{ margin: "0 20px" }}>Error</Button>
                <Button onClick={() => this.showMessage("loading")}>Loading</Button>
            </Card>
        </div>;
    }
}
