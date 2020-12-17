import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import './App.css';
import './antd.min.css'
// import '../public/font_w5ue8o15udk/iconfont.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import ToDolist from './component/todoList/ToDolist'
const { Header, Content, Footer } = Layout;
export default class App extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">ToDoList</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content" style={{height:'100%'}}>
            <ToDolist />

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </div>
    )
  }
}