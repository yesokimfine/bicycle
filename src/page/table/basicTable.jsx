import React, { Component } from "react";
import { Card, Table, Switch, Button ,modal } from "antd";
import axios from "axios";
import "./table.less";
export default class BasicTable extends Component {
  state = {
    hasBorder: false,
    hasPage: false,
    dataSource2: [],
  };
  getUser = () => {
    axios
      .get(
        "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/get.php"
      )
      .then((res) => {
        res.data.data.list.map((item, index) => {
          item.key = index;
        });
        this.setState({ dataSource2: res.data.data.list });
      });
  };
  componentDidMount() {
    let dataSource = [
      {
        id: 1,
        userName: "元飞瑶",
        gender: "女",
        subContent: "体育",
        isSub: "是",
        birthday: "1991-06-17",
      },
      {
        id: 2,
        userName: "韩松",
        gender: "男",
        subContent: "综艺",
        isSub: "是",
        birthday: "1997-10-22",
      },
      {
        id: 3,
        userName: "字彗云",
        gender: "男",
        subContent: "小说",
        isSub: "是",
        birthday: "1995-04-06",
      },
      {
        id: 4,
        userName: "乐谷雪",
        gender: "女",
        subContent: "手绘",
        isSub: "是",
        birthday: "1999-11-19",
      },
    ];
    dataSource.map((item, index) => {
      item.key = index;
    });
    this.setState({ dataSource });
    this.getUser();
  }
  onRowClick = (record,index) => {
    let selectKey = [index]; //选中的哪一行
    this.setState({
        selectedRowKeys:selectKey,
        selectedItem:record  //选中行的数据
    })
  };
  render() {
    const columns = [
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
    ];
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
    let { dataSource, hasBorder, hasPage, dataSource2, selectedRowKeys,selectedItem} = this.state;
    const rowSelection = {
      type: "radio",
      selectedRowKeys
    };
    const rowCheckSelection = {
        type:"checkbox",
        selectedRowKeys,
        onChange:(selectedRowKeys,selectedRowData)=>{
            this.setState({
                selectedRowKeys,
                selectedItem:selectedRowData
            })
        }
    }
    return (
      <div>
        <Card title="基础表格" className="card-wrapper">
          <Switch
            checkedChildren="有边框"
            unCheckedChildren="无边框"
            onChange={() => {
              this.setState({ hasBorder: !hasBorder });
            }}
          />
          <Switch
            checkedChildren="有分页"
            unCheckedChildren="无分页"
            onChange={() => {
              this.setState({ hasPage: !hasPage });
            }}
          />
          <Table
            bordered={hasBorder}
            columns={columns}
            dataSource={dataSource}
            pagination={hasPage}
            style={{ marginTop: 20 }}
          />
        </Card>
        <Card title="动态渲染表格" className="card-wrapper">
          <Button type="primary" onClick={this.getUser}>
            再次获取
          </Button>
          <Table
            columns={columns2}
            dataSource={dataSource2}
            style={{ marginTop: 20 }}
          />
        </Card>
        <Card title="添加单选按钮" className="card-wrapper">
          <Table
            columns={columns2}
            rowSelection={rowSelection}
            dataSource={dataSource2}
            onRow={(record, index) => {
              return {
                onClick: (event) => {
                  this.onRowClick(record, index);
                }, // 点击行
              };
            }}
          />
        </Card>
        <Card title="添加复选框" className="card-wrapper">
          <Button type="primary"
            onClick={()=>{
                let ids = selectedItem.map(item=>{
                    return `第${item.id}行`;
                })
                modal.info({
                    content:"当前选中"+ids
                })
            }}
          >查看</Button>
          <Table
            columns={columns2}
            rowSelection={rowCheckSelection}
            dataSource={dataSource2}
            style={{marginTop:20}}
          />
        </Card>
      </div>
    );
  }
}
