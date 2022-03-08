import React, { Component } from "react";
import { Badge, Button, Card, Table } from "antd";
import Utils from "../../utils/utils";
import {
  PlusOutlined,
  EditOutlined,
  MenuOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import BaseForm from "../../components/BaseForm";

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "员工姓名",
    dataIndex: "user_name",
  },
  {
    title: "性别",
    dataIndex: "user_gender",
  },
  {
    title: "婚否",
    dataIndex: "isMarry",
  },
  {
    title: "当前状态",
    dataIndex: "status",
    render(status) {
      switch (status) {
        case "正在工作":
          return <Badge status="processing" text={status} />;
        case "请假中":
          return <Badge status="warning" text={status} />;
        case "已下班":
          return <Badge status="default" text={status} />;
        default:
      }
    },
  },
  {
    title: "出生日期",
    dataIndex: "birthday",
  },
  {
    title: "联系地址",
    dataIndex: "user_address",
  },
  {
    title: "打卡时间",
    dataIndex: "clock_time",
  },
];
export default class User extends Component {
  state = {
    dataSource: [],
  };
  formList = [
    {
      type: "INPUT",
      label: "员工姓名",
      field: "user_name",
      width: 110,
    },
    {
      type: "INPUT",
      label: "联系电话",
      field: "user_phone",
      width: 110,
    },
    {
      type: "DATEPICK",
      label: "入职时间",
      field: "entry_time",
      placeholder: "全部",
      width: 100,
    },
  ];
  componentWillMount() {
    Utils.myAxios(
      "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/user"
    ).then((res) => {
      res.results.map((item,index) => (item.key = index));
      this.setState({
        dataSource: res.results,
      });
    });
  }
  onRowClick = (record, index) => {
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record,
    });
  };
  render() {
    let { dataSource, selectedRowKeys } = this.state;
    let rowSelection = {
      type: "radio",
      selectedRowKeys
    };
    return (
      <div>
        <Card>
          <BaseForm formList={this.formList} />
        </Card>
        <Card style={{ marginTop: 20 }}>
          <Button type="primary">
            <PlusOutlined />
            新建
          </Button>
          <Button type="primary" style={{ margin: "0 30px" }}>
            <EditOutlined />
            编辑
          </Button>
          <Button danger>
            <DeleteOutlined />
            删除
          </Button>
          <Button style={{ marginLeft: 30 }}>
            <MenuOutlined />
            查看详情
          </Button>
        </Card>
        <Card>
          <Table
            bordered
            columns={columns}
            dataSource={dataSource}
            rowSelection={rowSelection}
            onRow={(record,index) => {
              return {
                onClick: () => {
                  this.onRowClick(record,index);
                }
              };
            }}
          />
        </Card>
      </div>
    );
  }
}
