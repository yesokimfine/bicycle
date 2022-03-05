import React, { Component } from "react";
import { Checkbox, Form, Input, Select, Button, DatePicker } from "antd";
import Utils from "../../utils/utils";

const FormItem = Form.Item;
export default class FilterForm extends Component {
  handdleFilterSubmit = (refName) => {
    let cityInfo = this.refs[refName].getFieldsValue();
    console.log(cityInfo);
  };
  handleReset=(refName)=>{
    this.refs[refName].resetFields();
  }
  initialFormList = () => {
    let { formList } = this.props;
    const formItemList = [];
    formList.map((item) => {
      let { label, field, placeholder, width, type, list } = item;
      switch (type) {
        case "INPUT":
          const INPUT = (
            <FormItem
              name={field}
              label={label}
              key={field}
            >
              {<Input type="text" placeholder={placeholder} />}
            </FormItem>
          );
          formItemList.push(INPUT);
          break;
        case "SELECT":
          const SELECT = (
            <FormItem
              name={field}
              label={label}
              key={field}
            >
              {
                <Select style={{ width }} placeholder={placeholder}>
                  {Utils.getOptionList(list)}
                </Select>
              }
            </FormItem>
          );
          formItemList.push(SELECT);
          break;
        case "CHECKBOX":
          const CHECKBOX = (
            <FormItem
              name={field}
              label={label}
              key={field}
              valuePropName="checked"
            >
              <Checkbox>{label}</Checkbox>
            </FormItem>
          );
          formItemList.push(CHECKBOX);
          break;
        case "时间查询":
          const dataSelectStart = (
            <FormItem name="order_time_start" label="时间选择">
              <DatePicker showTime placeholder="请选择开始时间" />
            </FormItem>
          );
          const dataSelectEnd = (
            <FormItem name="order_time_end" colon={false} label="~">
              <DatePicker showTime placeholder="请选择结束时间" />
            </FormItem>
          );
          formItemList.push(dataSelectStart);
          formItemList.push(dataSelectEnd);
          break;
        default:
      }
    });
    return formItemList;
  };
  render() {
    const { refName } = this.props;
    return (
      <Form ref={refName} layout="inline">
        {this.initialFormList()}
        <FormItem>
          <Button
            type="primary"
            style={{ margin: "0 20px" }}
            onClick={() => {
              this.handdleFilterSubmit(refName);
            }}
          >
            查询
          </Button>
          <Button onClick={()=>{this.handleReset(refName)}}>重置</Button>
        </FormItem>
      </Form>
    );
  }
}
