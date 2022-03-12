import React, { Component } from "react";
import {
  Button,
  Card,
  Table,
  Modal,
  Form,
  Select,
  message,
  Input,
  Tree,
} from "antd";
import { UserAddOutlined, SettingFilled, EyeFilled } from "@ant-design/icons";
import Utils from "../../utils/utils";
import treeConfig from "../../config/menuConfig";

const treeData = [{ title: "平台权限", key: "all", children: [...treeConfig] }];
const FormItem = Form.Item;
const { Option } = Select;
const columns = [
  {
    title: "角色ID",
    dataIndex: "role_id",
  },
  {
    title: "角色名称",
    dataIndex: "role_name",
  },
  {
    title: "创建时间",
    dataIndex: "create_time",
  },
  {
    title: "使用状态",
    dataIndex: "use_status",
  },
  {
    title: "授权时间",
    dataIndex: "authorize_time",
  },
  {
    title: "授权人",
    dataIndex: "authorize_person",
  },
];
const createRoleForm = React.createRef();
export default class Permission extends Component {
  state = {
    modalType: "",
    selectedRowKeys: [],
    selectedItem: {},
    checkedKeys: [],
  };
  componentWillMount() {
    Utils.myAxios(
      "https://mock.apipost.cn/app/mock/project/2784e323-1389-4f85-a288-74cfbbbf595f/roleList"
    ).then((res) => {
      res.result.item_list.map((item, index) => (item.key = index));
      this.setState({ dataSource: res.result.item_list });
    });
  }
  render() {
    let { dataSource, modalType, selectedRowKeys, selectedItem} =
      this.state;
    return (
      <div>
        <Card>
          <Button
            type="primary"
            onClick={() => this.setState({ modalType: "create_role" })}
          >
            <UserAddOutlined />
            创建角色
          </Button>
          <Button
            style={{ margin: "0 30px" }}
            onClick={() => {
              if (Object.keys(selectedItem).length === 0) {
                Modal.warning({ content: "没有记录被选中" });
                return;
              }
              this.setState({ modalType: "set_role" });
            }}
          >
            <SettingFilled />
            设置权限
          </Button>
          <Button onClick={() => this.setState({ modalType: "perm_role" })}>
            <EyeFilled />
            用户授权
          </Button>
        </Card>
        <Table
          columns={columns}
          dataSource={dataSource}
          bordered
          rowSelection={{ type: "radio", selectedRowKeys }}
          onRow={(record, index) => {
            return {
              onClick: () => {
                let selectedRowKeys = [index];
                let selectedItem = record;
                this.setState({ selectedRowKeys, selectedItem });
              },
            };
          }}
        />
        <Modal
          visible={modalType === "create_role"}
          title="创建角色"
          okText="创建"
          cancelText="取消"
          onCancel={() => this.setState({ modalType: "" })}
          onOk={() => {
            this.setState({ modalType: "" });
            message.success({
              content: "创建成功",
            });
          }}
        >
          <Form ref={createRoleForm}>
            <FormItem name="role_name" label="角色名称" initialValue="glry">
              <Select>
                <Option value="glry">管理人员</Option>
                <Option value="kfzy">客服专员</Option>
                <Option value="zwzy">财务专员</Option>
                <Option value="sczy">市场专员</Option>
                <Option value="rlzy">人力专员</Option>
                <Option value="yf">研发</Option>
                <Option value="cs">测试</Option>
                <Option value="xtgly">系统管理员</Option>
              </Select>
            </FormItem>
            <FormItem name="use_status" label="角色状态" initialValue="running">
              <Select>
                <Option value="running">启用</Option>
                <Option value="disabled">停用</Option>
              </Select>
            </FormItem>
          </Form>
        </Modal>
        <Modal
          title="设置权限"
          visible={modalType === "set_role"}
          okText="设置"
          cancelText="取消"
          onCancel={() => this.setState({ modalType: "" })}
          onOk={() => {
            this.setState({ modalType: "" });
            this.setState({setRoleForm:this.refs.setRoleForm.getFieldValue()})
            message.success({
              content: "设置成功",
            });
          }}
        >
          <Form ref="setRoleForm">
            <FormItem
              label="角色名称"
              name="role_name"
              initialValue={selectedItem.role_name}
            >
              <Input disabled />
            </FormItem>
            <FormItem
              name="use_status"
              label="角色状态"
              initialValue={selectedItem.use_status}
            >
              <Select>
                <Option value="running">启用</Option>
                <Option value="disabled">停用</Option>
              </Select>
            </FormItem>
              <Tree
                checkable
                treeData={treeData}
                defaultExpandedKeys={["all"]}
                onCheck={(checkedKeys) => {
                  this.setState({ checkedKeys });
                }}
              />
          </Form>
        </Modal>
      </div>
    );
  }
}
