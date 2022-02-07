import React, { Component } from 'react';
import { Card, Form, Input, Radio, InputNumber, Select, Switch, DatePicker, TimePicker, Upload, message, Modal, Button } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined, PlusOutlined } from '@ant-design/icons'
import moment from 'moment'
import './form.less';
import { profNames, channelNames } from '../../config/formLoginConfig'
import Checkbox from 'antd/lib/checkbox/Checkbox';

const FormItem = Form.Item;
const InputPassword = Input.Password;
const RadioGroup = Radio.Group;
const { Option } = Select;
const TextArea = Input.TextArea;
export default class FormRegister extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        isSub: true,
        fileList: []
    }
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('仅支持上传JPG/PNG文件!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('图片大小不能超过2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await this.getBase64(file.originFileObj);
        }
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    faceImg: imageUrl,
                    loading: false,
                }),
            );
        }
    };
    handleChange = ({ fileList }) => this.setState({ fileList });
    handleCancel = () => this.setState({ previewVisible: false });
    submitForm=()=>{
        let userInfo = this.refs.form1.getFieldValue();
        console.log(JSON.stringify(userInfo));
        
    }
    render() {
        let { isSub, previewTitle, previewImage, fileList, previewVisible } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 8
            }
        }
        const offsetLayout={
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return <div>
            <Card title="注册表单">
                <Form autoComplete="off" ref="form1">
                    <FormItem
                        name="userName"
                        label="用户名"
                        rules={[
                            {
                                required: true,
                                message: "用户名不能为空"
                            }
                        ]}
                        {...formItemLayout}
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        name="userPwd"
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: "密码不能为空"
                            }
                        ]}
                        {...formItemLayout}
                    >
                        <InputPassword
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </FormItem>
                    <FormItem
                        name="gender"
                        label="性别"
                        {...formItemLayout}
                        initialValue="male"
                    >
                        <RadioGroup>
                            <Radio value="male">男</Radio>
                            <Radio value="female">女</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem
                        name="age"
                        label="年龄"
                        {...formItemLayout}
                        initialValue={18}
                    >
                        <InputNumber />
                    </FormItem>
                    <FormItem
                        name="prof"
                        label="工作职业"
                        {...formItemLayout}
                        initialValue="qita"
                    >
                        <Select>
                            {
                                profNames.map(value =>
                                    <Option value={value.value}>{value.name}</Option>
                                )
                            }
                        </Select>
                    </FormItem>
                    <FormItem
                        name="channel"
                        label="订阅频道"
                        {...formItemLayout}
                        initialValue={["dsj", "zy", "lx"]}
                    >
                        <Select mode="multiple">
                            {
                                channelNames.map(value =>
                                    <Option value={value.value}>{value.name}</Option>
                                )
                            }
                        </Select>
                    </FormItem>
                    <FormItem
                        name="isSub"
                        label="是否推送"
                        valuePropName="checked"
                        initialValue={true}
                        {...formItemLayout}
                    >
                        <Switch onChange={() =>
                            this.setState({ isSub: !isSub })
                        }
                        />
                    </FormItem>
                    {
                        isSub ? <FormItem
                            name="subTime"
                            label="推送时间"
                            {...formItemLayout}
                        >
                            <TimePicker />
                        </FormItem> : null
                    }
                    <FormItem
                        name="birth"
                        label="出生日期"
                        initialValue={moment("2022-01-01")}
                        {...formItemLayout}
                    >
                        <DatePicker />
                    </FormItem>
                    <FormItem
                        name="address"
                        label="详细地址"
                        {...formItemLayout}
                    >
                        <TextArea
                            autoSize={{
                                minRows: 3,
                                maxRows: 5
                            }}
                        />
                    </FormItem>
                    <FormItem
                        name="userFace"
                        label="头像"
                        {...formItemLayout}
                    >
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                            beforeUpload={this.beforeUpload}
                        >
                            {
                                fileList.length >= 8 ? null :
                                    <div>
                                        <PlusOutlined />
                                        <div style={{ marginTop: 8, fontSize: 14 }}>上传头像</div>
                                    </div>
                            }
                        </Upload>
                        <Modal
                            visible={previewVisible}
                            title={previewTitle}
                            footer={null}
                            onCancel={this.handleCancel}
                        >
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </FormItem>
                    <FormItem
                        name="isAgree"
                        {...offsetLayout}
                    >
                        <Checkbox>
                        我已阅读并同意
                        <a href="#">用户隐私协议</a>
                        </Checkbox>
                    </FormItem>
                    <FormItem {...offsetLayout}>
                        <Button type="primary" style={{width:100}} onClick={this.submitForm}>注册</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>;
    }
}
