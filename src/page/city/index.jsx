import React, { Component } from "react";
import { Card, Form, Select, Button, Table, Modal, Radio, message } from "antd";
import Utils from "../../utils/utils";
import BaseForm from "../../components/BaseForm";

const FormItem = Form.Item;
const Option = Select;
const RadioGroup = Radio.Group;
const columns = [
  {
    title: "城市ID",
    dataIndex: "city_id",
  },
  {
    title: "城市名称",
    dataIndex: "city_name",
  },
  {
    title: "用车模式",
    dataIndex: "mode",
  },
  {
    title: "营运模式",
    dataIndex: "op_mode",
  },
  {
    title: "授权加盟商",
    dataIndex: "franchisee_name",
  },
  {
    title: "城市管理员",
    dataIndex: "city_admins",
    render(nameList) {
      return nameList.map((item) => item).join(",");
    },
  },
  {
    title: "开通时间",
    dataIndex: "open_time",
  },
  {
    title: "操作时间",
    dataIndex: "update_time",
  },
  {
    title: "操作人",
    dataIndex: "sys_user_name",
  },
];
export default class City extends Component {
  state = {
    dataSource: [],
    isShowOpenCity: false,
  };
  formList = [
    {
      type: "SELECT",
      label: "城市",
      field: "city",
      placeholder: "全部",
      width: 90,
      list: [
        { id: "all", name: "全部" },
        { id: "bj", name: "北京市" },
        { id: "sh", name: "上海市" },
        { id: "hz", name: "杭州市" },
        { id: "sz", name: "深圳市" },
      ],
    },
    {
      type:"SELECT",
      label:"用车模式",
      field:"mode",
      placeholder:"全部",
      width:140,
      list:[
        { id: "all", name: "全部" },
        { id: "banMode", name: "禁停区模式" },
        { id: "stopMode", name: "服务器模式" },
      ]
    },
    {
      type:"SELECT",
      label:"营运模式",
      field:"op_mode",
      placeholder:"全部",
      width:90,
      list:[
        { id: "all", name: "全部" },
        { id: "join", name: "加盟" },
        { id: "self", name: "自营" },
      ]
    },
    {
      type: "SELECT",
      label: "加盟授权状态",
      field: "order_status",
      placeholder: "全部",
      width: 120,
      list: [
        { id: "all", name: "全部" },
        { id: "allowed", name: "已授权" },
        { id: "unallowed", name: "结束行程" },
      ],
    },
  ];
  componentDidMount() {
    let myAxios = Utils.myAxios(
      "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/openCity"
    );
    myAxios.then((res) => {
      res.data.list.map((item, index) => {
        item.key = index;
      });
      this.setState({ dataSource: res.data.list });
    });
  }
  handdleOpenCity = () => {
    this.setState({ isShowOpenCity: true });
  };
  handdleOpenCitySubmit = () => {
    let cityInfo = this.refs.openCity.getFieldValue();
    console.log(
      `城市:${cityInfo.city},营运模式:${cityInfo.op_mode},用车模式:${cityInfo.mode}`
    );
    message.success({
      content: "开通成功！",
    });
    this.setState({ isShowOpenCity: false });
  };
  render() {
    let { dataSource, isShowOpenCity } = this.state;
    return (
      <div>
        <Card>
          <BaseForm formList={this.formList} refName="cityForm"/>
        </Card>
        <Card style={{ marginTop: 15 }}>
          <Button type="primary" onClick={this.handdleOpenCity}>
            开通城市
          </Button>
        </Card>
        <Table
          bordered
          columns={columns}
          dataSource={dataSource}
          pagination={{
            pageSize: 10,
          }}
        />
        <Modal
          visible={isShowOpenCity}
          title="开通新城市"
          onCancel={() => {
            this.setState({ isShowOpenCity: false });
          }}
          onOk={this.handdleOpenCitySubmit}
        >
          <Form ref="openCity">
            <FormItem label="选择城市" name="city" style={{ width: "35%" }}>
              <Select placeholder="全部">
                <Option value="all">全部</Option>
                <Option value="bj">北京市</Option>
                <Option value="sh">上海市</Option>
                <Option value="hz">杭州市</Option>
                <Option value="sz">深圳市</Option>
              </Select>
            </FormItem>
            <FormItem label="营运模式" name="op_mode">
              <RadioGroup>
                <Radio value="selfMode">自营</Radio>
                <Radio value="joinMode">加盟</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="用车模式" name="mode">
              <RadioGroup>
                <Radio value="stopMode">指定停车点</Radio>
                <Radio value="banMode">禁停区</Radio>
              </RadioGroup>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}