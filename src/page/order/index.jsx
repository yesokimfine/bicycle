import React, { Component } from "react";
import { Card, Form, Button, Table, Badge, Modal, message } from "antd";
import Utils from "../../utils/utils";
import FilterForm from "../../components/BaseForm";

const FormItem = Form.Item;
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
      type: "时间查询",
    },
    {
      type: "SELECT",
      label: "订单状态",
      field: "order_status",
      placeholder: "全部",
      width: 100,
      list: [
        { id: "all", name: "全部" },
        { id: "running", name: "进行中" },
        { id: "completed", name: "结束行程" },
      ],
    },
  ];
  componentDidMount() {
    Utils.myAxios(
      "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/order"
    ).then((res) => {
      res.data.list.map((item, index) => (item.key = index));
      this.setState({ dataSource: res.data.list });
    });
  }
  onRowClick = (record, index) => {
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record,
    });
  };
  openOrder = () => {
    let { selectedItem } = this.state;
    if (Object.keys(selectedItem).length === 0) {
      Modal.warning({
        title: "警告",
        content: "当前没有选中任何订单",
      });
      return;
    }
    window.open(`/#/common/detail/order/${selectedItem.bike_id}`, "_blank");
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
          <FilterForm formList={this.formList} refName="f1" />
        </Card>
        <Card style={{ marginTop: 20 }}>
          <Button
            type="primary"
            style={{ margin: "0 25px" }}
            onClick={this.openOrder}
          >
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
              },
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
