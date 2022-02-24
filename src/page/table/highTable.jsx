import React, { Component } from "react";
import { Card, Table } from "antd";
import axios from "axios";
import "./table.less";
export default class HighTable extends Component {
  state = {
    dataSource2: [],
  };
  getUser = () => {
    axios
      .get(
        "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/table/hightTableget.php"
      )
      .then((res) => {
        res.data.data.list.map((item, index) => {
          item.key = index;
        });
        this.setState({
          dataSource2: res.data.data.list,
        });
      });
  };
  getUser2 = () => {
    axios
      .get(
        "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/table/fixedLeft.php"
      )
      .then((res) => {
        res.data.data.list.map((item, index) => {
          item.key = index;
        });
        this.setState({
          dataSource3: res.data.data.list,
        });
      });
  };
  componentDidMount() {
    this.getUser();
    this.getUser2();
  }
  render() {
    const columns2 = [
      {
        title: "id",
        dataIndex: "id",
      },
      {
        title: "用户名",
        dataIndex: "userName",
      },
      {
        title: "性别",
        dataIndex: "gender",
      },
      {
        title: "订阅频道",
        dataIndex: "subContent",
      },
      {
        title: "是否推送",
        dataIndex: "isSub",
      },
      {
        title: "出生日期",
        dataIndex: "birthday",
      },
      {
        title: "现居地址",
        dataIndex: "address",
      },
    ];
    const columns3 = [
      {
        fixed: "left",
        title: "id",
        dataIndex: "id",
      },
      {
        fixed: "left",
        title: "用户名",
        dataIndex: "userName",
      },
      {
        title: "性别",
        dataIndex: "gender",
      },
      {
        title: "订阅频道",
        dataIndex: "subContent",
      },
      {
        title: "测试列1",
        dataIndex: "test",
      },
      {
        title: "测试列2",
        dataIndex: "test",
      },
      {
        title: "测试列3",
        dataIndex: "test",
      },
      {
        title: "测试列4",
        dataIndex: "test",
      },
      {
        title: "测试列5",
        dataIndex: "test",
      },
      {
        title: "测试列6",
        dataIndex: "test",
      },
      {
        title: "测试列7",
        dataIndex: "test",
      },
      {
        title: "测试列8",
        dataIndex: "test",
      },
      {
        fixed: "right",
        title: "出生日期",
        dataIndex: "birthday",
      },
      {
        fixed: "right",
        title: "现居地址",
        dataIndex: "address",
      },
    ];
    let { dataSource2, dataSource3, selectedRowKeys } = this.state;
    const rowCheckSelection = {
      type: "checkbox",
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRowData) => {
        this.setState({
          selectedRowKeys,
          selectedItem: selectedRowData,
        });
      },
    };
    return (
      <div>
        <Card title="头部固定" className="card-wrapper">
          <Table
            columns={columns2}
            rowSelection={rowCheckSelection}
            dataSource={dataSource2}
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Card>
        <Card title="左右固定" className="card-wrapper">
          <Table
            columns={columns3}
            rowSelection={rowCheckSelection}
            dataSource={dataSource3}
            pagination={false}
            scroll={{ x: 1900, y: 500 }}
          />
        </Card>
      </div>
    );
  }
}
