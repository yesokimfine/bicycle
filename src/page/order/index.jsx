import React, { Component } from "react";
import {
  Card,
  Form,
  Select,
  DatePicker,
  Button,
  Table,
  Badge,
  Modal,
  message,
} from "antd";
import axios from "axios";

const FormItem = Form.Item;
const { Option } = Select;
const columns = [
  {
    title: "订单编号",
    dataIndex: "order_id",
  },
  {
    title: "车辆编号",
    dataIndex: "bike_id",
  },
  {
    title: "用户名",
    dataIndex: "user_name",
  },
  {
    title: "手机号",
    dataIndex: "phone_number",
  },
  {
    title: "里程",
    dataIndex: "mileage",
  },
  {
    title: "行程时长",
    dataIndex: "travel_duration",
    render(d) {
      if (d > 60) {
        let hours = Math.floor(d / 60);
        return `${hours}小时${d - hours * 60}分钟`;
      } else {
        return `${d}分钟`;
      }
    },
  },
  {
    title: "剩余电量",
    dataIndex: "soc",
  },
  {
    title: "订单状态",
    dataIndex: "order_status",
    render(s) {
      let config = {
        running: <Badge status="processing" text="进行中" />,
        locking: <Badge status="warning" text="临时锁车" />,
        completed: <Badge status="success" text="行程结束" />,
      };
      return config[s];
    },
  },
  {
    title: "开始时间",
    dataIndex: "start_time",
  },
  {
    title: "结束时间",
    dataIndex: "end_time",
  },
  {
    title: "订单金额",
    dataIndex: "order_spend",
  },
  {
    title: "实付金额",
    dataIndex: "pay_amount",
  },
];
export default class Order extends Component {
  state = {
    selectRowKeys: 0,
    isOrderFinishedShow: false,
    selectedItem: {},
  };
  componentDidMount() {
    axios
      .get(
        "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/order"
      )
      .then((res) => {
        res.data.data.list.map((item, index) => (item.key = index));
        this.setState({ dataSource: res.data.data.list });
      });
  }
  onRowClick = (record, index) => {
    let selectKey = [index]; //选中的哪一行
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record, //选中行的数据
    });
  };
  render() {
    let { selectedRowKeys, dataSource, isOrderFinishedShow, selectedItem } =
      this.state;
    const rowSelection = {
      type: "radio",
      selectedRowKeys,
    };
    return (
      <div>
        <Card>
          <Form layout="inline">
            <FormItem label="城市">
              <Select name="city" placeholder="全部" style={{ width: 90 }}>
                <Option value="all">全部</Option>
                <Option value="bj">北京市</Option>
                <Option value="sh">上海市</Option>
                <Option value="hz">杭州市</Option>
                <Option value="sz">深圳市</Option>
              </Select>
            </FormItem>
            <FormItem name="order_time">
              <DatePicker showTime placeholder="请选择开始时间" />
              <span style={{ margin: "0 15px" }}>~</span>
              <DatePicker showTime placeholder="请选择结束时间" />
            </FormItem>
            <FormItem label="订单状态" name="order_status">
              <Select placeholder="全部" style={{ width: 170 }}>
                <Option value="all">全部</Option>
                <Option value="running">进行中</Option>
                <Option value="locking">临时锁车</Option>
                <Option value="completed">行程结束</Option>
              </Select>
            </FormItem>
            <Button type="primary" style={{ margin: "0 15px" }}>
              查询
            </Button>
            <Button>重置</Button>
          </Form>
        </Card>
        <Card style={{ marginTop: 20 }}>
          <Button type="primary" style={{ margin: "0 25px" }}>
            订单详情
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.setState({ isOrderFinishedShow: true });
            }}
          >
            结束订单
          </Button>
        </Card>
        <Table
          bordered
          columns={columns}
          dataSource={dataSource}
          rowSelection={rowSelection}
          onRow={(record, index) => {
            return {
              onClick: (event) => {
                this.onRowClick(record, index);
              }, // 点击行
            };
          }}
        />
        <Modal
          visible={isOrderFinishedShow}
          title="结束订单"
          onOk={() => {
            message.success({
              content: "订单结束成功",
            });
            this.setState({ isOrderFinishedShow: false });
          }}
          onCancel={() => this.setState({ isOrderFinishedShow: false })}
          okText="确定结束"
          cancelText="取消操作"
        >
          <Form>
            <FormItem label="车辆编号">
              {selectedItem.bike_id ? selectedItem.bike_id : null}
            </FormItem>
            <FormItem label="剩余电量">
              {selectedItem.soc ? selectedItem.soc : null}
            </FormItem>
            <FormItem label="行程开始时间">
              {selectedItem.start_time ? selectedItem.start_time : null}
            </FormItem>
            <FormItem label="当前位置">秦皇岛市海港区</FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
