import React from 'react'
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  formateDate(time) {
    return `${time.getFullYear()}-${
      time.getMonth() + 1 > 9
        ? time.getMonth() + 1
        : "0" + (time.getMonth() + 1)
    }-${
      time.getDate() > 9 ? time.getDate() : "0" + time.getDate()
    } ${time.getHours()}:${
      time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes()
    }:${time.getSeconds() > 9 ? time.getSeconds() : "0" + time.getSeconds()}`;
  },
  myAxios: async function myAxios(url) {
    let ajaxLoading = document.getElementById("ajaxLoading");
    ajaxLoading.style.display = "block";
    let data = await axios.get(url);
    ajaxLoading.style.display = "none";
    return data.data;
  },
  getOptionList(data) {
    if (!data) return [];
    let options = [];
    data.map((item, index) => {
      options.push(
        <Option value={item.id} key={index}>
          {item.name}
        </Option>
      );
    });
    return options;
  }
};
