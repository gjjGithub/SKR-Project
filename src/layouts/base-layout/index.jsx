import logo from '../../image/logo/log.png'
import './layouts.scss'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Breadcrumb } from 'antd';

//  图标组件
import {
  UserAddOutlined,
  ShoppingCartOutlined,
  UserSwitchOutlined
} from '@ant-design/icons';
// 搜索框组件
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);

//  二级
let tabs = [
  {title:"鞋类",path:"/shoes"},
  {title:"服饰",path:'/dress'},
  {title:'配件',path:'/parts'},
  {title:'儿童专区',path:'/children'},
  {title:'POP',path:'/pop'},
  {title:'EXCLUSIVE',path:'/exclusive'},
  {title:'RVENT',path:'/rvent'},
  {title:'BEST',path:'/best'},
]


const BaseLayout = () => {
  return (
    <div className='skr-nav-shoptop'>
      <div className='skr-router'>
        <div className='skr-router-left'>
          <img src={logo} alt="" />
          <NavLink to={'/home'}>{''}</NavLink>
        </div>

        <div className='skr-router-center'>
          <Space direction="vertical">
            <Search placeholder="input search text"
            style={{ width: 304 }}
            
            onSearch={onSearch} enterButton />
          </Space>
        </div>

        <div className={'skr-router-right'}>
          <Breadcrumb>
            <Breadcrumb.Item >
              <UserAddOutlined />
              <NavLink to={'/resigin'}>{'注册'}</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item >
              <UserSwitchOutlined />
              <NavLink to={'/login'}>{'登录'}</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item >
              <ShoppingCartOutlined />
              <NavLink to={'/shopcar'}>{'购物车'}</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

      </div>

      <div className='skr-router-two'>
        <div className='skr-nav-shoptop-two'>
          {
            tabs.map(item=>{
              return (
                  <NavLink className={'skr-navlink-two'} key={item.title} to={item.path}>{item.title}</NavLink>
              ) 
            })
          }
        </div>
        
      </div>
      <Outlet></Outlet>
    </div>
  )
}


export default BaseLayout