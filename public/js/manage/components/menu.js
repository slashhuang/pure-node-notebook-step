import React ,{ Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { query } from '../util'

export default
class LeftMenu extends React.Component {
  state = {
    current: query.type || 'category',
  }
  handleClick = (e) => {
    window.history.pushState(null,'管理列表',`manage?type=${e.key}`)
    this.setState({
      current: e.key
    },()=>{
      this.props.onClick(e.key)
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="inline"
        style={{ width: 240,height:300 }}
        theme="dark"
        defaultOpenKeys={['sub1']}
      >
      <SubMenu key="sub1"
              title={<span><Icon type="setting" /><span>管理面板</span></span>}>
          <MenuItemGroup key="g1">
            <Menu.Item key="category">
              <Icon type="mail" />文章分类
            </Menu.Item>
            <Menu.Item key="manage">
              <Icon type="tool" />文章管理
            </Menu.Item>
             <Menu.Item key="edit">
              <Icon type="appstore" />写文章
            </Menu.Item>
          </MenuItemGroup>
      </SubMenu>

      </Menu>
    );
  }
}

