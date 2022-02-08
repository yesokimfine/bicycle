import React, { Component } from 'react';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined, EditOutlined } from '@ant-design/icons'
import './form.less'
const FormItem = Form.Item;
const InputPassword = Input.Password;
export default class Log extends Component {
    render() {
        return <div>
            <Card title="登录-内联表单" className="card-wrapper">
                <Form layout="inline" autoComplete="off">
                    <FormItem>
                        <Input placeholder="用户名" prefix={<UserOutlined />} />
                    </FormItem>
                    <FormItem>
                        <InputPassword placeholder="密码" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                    </FormItem>
                    <FormItem>
                        <Button type="primary">登录</Button>
                    </FormItem>
                </Form>
            </Card>
            <Card title="表单数据双向绑定" className="card-wrapper">
                <p ref="p1">当前输入：</p>
                <Form className="hor-form" ref="form1" autoComplete="off">
                    <FormItem name="userName">
                        <Input placeholder="用户名" suffix={<EditOutlined />}
                            onChange={() => {
                                this.refs.p1.innerText = "当前输入：" + this.refs.form1.getFieldValue().userName;
                            }}
                        />
                    </FormItem>
                </Form>
            </Card>
            <Card title="登录-水平表单" className="card-wrapper">
                <Form className="hor-form" autoComplete="off">
                    <FormItem>
                        <Input placeholder="用户名" suffix={<UserOutlined />} />
                    </FormItem>
                    <FormItem>
                        <InputPassword placeholder="密码" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                    </FormItem>
                    <FormItem 
                    name="remeber"
                    valuePropName="checked"
                    initialValue={true}
                    >
                        <Checkbox>记住密码</Checkbox>
                        <a href="#" style={{float:"right"}}>忘记密码</a>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>;
    }
}