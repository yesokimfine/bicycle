import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './index.less';
import MenuList from '../../config/menuConfig'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends Component {
  componentWillMount(){
    const menuTree = this.mapMenuList(MenuList);
    this.setState({menuTree})
  }
  mapMenuList = (array)=>{
    return array.map(item=>{
      if(item.children){
        return(
          <SubMenu title={item.title} key={item.key}>
            {this.mapMenuList(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    let {menuTree} = this.state
    return <div>
      <div className="logo">
        <img src="/assets/bic-logo.jpg" alt="" />
        <h1>单车系统</h1>
        <Menu theme="dark">
          {menuTree}
        </Menu>
      </div>
    </div>;
  }
}
