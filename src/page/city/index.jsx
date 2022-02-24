import React, { Component } from "react";
import { Card, Form, Select, Button, Table } from "antd";
import axios from "axios";

const FormItem = Form.Item;
const Option = Select;
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
  };
  componentDidMount() {
    axios
      .get(
        "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/openCity"
      )
      .then((res) => {
        this.setState({ dataSource: res.data.data.list });
      });
  }
  render() {
    let { dataSource } = this.state;
    return (
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card style={{marginTop:15}}>
          <Button type="primary">开通城市</Button>
        </Card>
        <Table
          bordered
          columns={columns}
          dataSource={dataSource}
          pagination={{
            pageSize: 10,
          }}
        />
      </div>
    );
  }
}
class FilterForm extends Component {
  render() {
    return (
      <Form layout="inline">
        <FormItem label="城市" name="city" style={{ width: "12%" }}>
          <Select placeholder="全部">
            <Option value="all">全部</Option>
            <Option value="bj">北京市</Option>
            <Option value="sh">上海市</Option>
            <Option value="hz">杭州市</Option>
            <Option value="sz">深圳市</Option>
          </Select>
        </FormItem>
        <FormItem label="用车模式" name="mode" style={{ width: "17%" }}>
          <Select placeholder="全部">
            <Option value="all">全部</Option>
            <Option value="banMode">禁停区模式</Option>
            <Option value="stopMode">停车点模式</Option>
          </Select>
        </FormItem>
        <FormItem label="营运模式" name="op_mode" style={{ width: "14%" }}>
          <Select placeholder="全部">
            <Option value="all">全部</Option>
            <Option value="joinMode">加盟</Option>
            <Option value="selfMode">自营</Option>
          </Select>
        </FormItem>
        <FormItem
          label="加盟商授权状态"
          name="auth_status"
          style={{ width: "18%" }}
        >
          <Select placeholder="全部">
            <Option value="all">全部</Option>
            <Option value="allowed">已授权</Option>
            <Option value="unallowed">未授权</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" style={{ margin: "0 20px" }}>
            查询
          </Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    );
  }
}
