import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './index.less';
import MenuList from '../../config/menuConfig'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends Component {
  render() {
    return <div>
      <div className="logo">
        <img src="/assets/logo-ant.svg" alt="" />
        <h1>MyMs</h1>
        <Menu theme="dark">
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="子菜单">
            <Menu.Item>子菜单项</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>;
  }
}
