import React, { Component } from 'react';
import Headers from './component/header';
import Siders from './component/sider';

import Vaaa from './view/aaa'

import './leo.less';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



class App extends Component {

  render() {
    return (
      <div >
          <Layout>
              <Headers/>
              <Layout>
                  <Siders/>
                  <Layout style={{ padding: '0 24px 24px' }}>
                      <Breadcrumb style={{ margin: '16px 0' }}>
                          <Breadcrumb.Item>Home</Breadcrumb.Item>
                          <Breadcrumb.Item>List</Breadcrumb.Item>
                          <Breadcrumb.Item>App</Breadcrumb.Item>
                      </Breadcrumb>
                      <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                          <Vaaa/>
                      </Content>
                  </Layout>
              </Layout>
          </Layout>
      </div>
    );
  }
}

export default App;
