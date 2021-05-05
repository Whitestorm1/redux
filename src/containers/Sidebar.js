import React from 'react';
import { layout } from 'antd';
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import ProductComponent from './ProductComponents';


export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const { Header, Sider, Content } = Layout;



  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Layout>
        <Sider trigger={null} style={{ minHeight: "100vh" }} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
            Shoping Detailes
        </Menu.Item>
            <Menu.Item key="2" >
             term & conditions 
        </Menu.Item>
            <Menu.Item key="3" >
             refund Resolutions 
        </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }, { width: "100%" }, { backgroundColor: "white" }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              backgroundColor: "white"
            }}
          ><div className="ui four column grid ">
          <ProductComponent/></div>
            
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
