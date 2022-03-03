import React, { Component } from "react";
import { Badge, Card, Table } from "antd";
import Utils from "../../utils/utils";
import "./table.less";
export default class HighTable extends Component {
  state = {
    dataSource2: [],
  };
  getUser = () => {
    let myAxios = Utils.myAxios(
      "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/table/hightTableget.php"
    );
    myAxios.then((res) => {
      res.data.list.map((item, index) => {
        item.key = index;
      });
      this.setState({
        dataSource2: res.data.list,
      });
    });
  };
  getUser2 = () => {
    let myAxios = Utils.myAxios(
      "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/table/fixedLeft.php"
    );
    myAxios.then((res) => {
      res.data.list.map((item, index) => {
        item.key = index;
      });
      this.setState({
        dataSource3: res.data.list,
      });
    });
  };
  getUser3 = () => {
    let myAxios = Utils.myAxios(
      "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/table/hightTableSort.php"
    );
    myAxios.then((res) => {
      res.data.list.map((item, index) => {
        item.key = index;
      });
      this.setState({
        dataSource4: res.data.list,
      });
    });
  };
  getUser4 = () => {
    let myAxios = Utils.myAxios(
      "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/table/badgeTable.php"
    );
    myAxios.then((res) => {
      res.data.list.map((item, index) => {
        item.key = index;
      });
      this.setState({
        dataSource5: res.data.list,
      });
    });
  };
  componentDidMount() {
    this.getUser();
    this.getUser2();
    this.getUser3();
    this.getUser4();
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
    const columns4 = [
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
        title: "出生日期",
        dataIndex: "birthday",
      },
      {
        title: "现居地址",
        dataIndex: "address",
      },
      {
        title: "薪资",
        dataIndex: "salary",
        sorter: (a, b) => a.salary - b.salary,
        sorterOrder: "ascend ",
      },
    ];
    const columns5 = [
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
        title: "出生日期",
        dataIndex: "birthday",
      },
      {
        title: "现居地址",
        dataIndex: "address",
      },
      {
        title: "当前状态",
        dataIndex: "status",
        render(s) {
          let config = {
            online: <Badge status="success" text="在线" />,
            offline: <Badge status="default" text="离线" />,
            busy: <Badge status="warning" text="忙碌" />,
          };
          return config[s];
        },
      },
    ];
    let { dataSource2, dataSource3, dataSource4, dataSource5 } = this.state;
    return (
      <div>
        <Card title="头部固定" className="card-wrapper">
          <Table
            columns={columns2}
            dataSource={dataSource2}
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Card>
        <Card title="左右固定" className="card-wrapper">
          <Table
            columns={columns3}
            dataSource={dataSource3}
            pagination={false}
            scroll={{ x: 1900, y: 500 }}
          />
        </Card>
        <Card title="排序" className="card-wrapper">
          <Table
            columns={columns4}
            dataSource={dataSource4}
            pagination={false}
          />
        </Card>
        <Card title="带图标的表格" className="card-wrapper">
          <Table
            columns={columns5}
            dataSource={dataSource5}
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}
