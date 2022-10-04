import logo from '../../image/logo/log.png'
import './layouts.scss'
import React, { useState, useEffect } from 'react'
import { getShopList } from '../../api'
import { NavLink, Outlet,useNavigate } from 'react-router-dom'
import {Breadcrumb } from 'antd';
import BackTops from '../../components/BackTop'
import Searchs from '../../components/Search'
//  图标组件
import {
  UserAddOutlined,
  ShoppingCartOutlined,
  UserSwitchOutlined
} from '@ant-design/icons';

//  二级
let tabsleft = [
  { title: "鞋类", path: "/shoes" },
  { title: "服饰", path: '/dress' },
  { title: '配件', path: '/parts' },
  { title: '儿童专区', path: '/children' },
]
let tabsright = [
  { title: 'POP', path: '/pop' },
  { title: 'EXCLUSIVE', path: '/exclusive' },
  { title: 'RVENT', path: '/rvent' },
  { title: 'BEST', path: '/best' },
]
const BaseLayout = () => {
  let [tits, setTits] = useState([])
  let navigate = useNavigate()
  // 二级悬浮框
  const enterOpacity = async (title) => {
    let data = await getShopList()
    let tit = []
    for (var i = 0; i < data.data.length; i++) {
      if (data.data[i].parent_name === title) {
        tit.push(data.data[i].name)
      }
    }
    setTits(tit)
    document.querySelector('.skr-navlink-twbu').style.display = 'block'

  }
  const leaveOpacity = ()=>{
    document.querySelector('.skr-navlink-twbu').style.display = 'none'
  }
  // 点击二级分类跳转详情页
  const shopListDetail = (params)=>{
    navigate(`/detali/${params}`)
  }

  return (
    <div className='skr-nav-shoptop'>
      <div className='skr-router'>
        <div className='skr-router-left'>
          <img src={logo} alt="" />
          <NavLink to={'/home'}>{''}</NavLink>
        </div>

        <div className='skr-router-center'>
            <Searchs/>
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
      {/* 二级导航栏 */}
      <div className='skr-router-two'>
        <div className='skr-nav-shoptop-two' onMouseLeave={()=>leaveOpacity()}>
          <div className='skr-nav-shoptop-two-left'>
            {
              tabsleft.map(item => {
                return (
                  <NavLink
                    className={'skr-navlink-two'}
                    onMouseOver={() => enterOpacity(item.title)}
                    key={item.title}
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                )
              })
            }
          </div>
          <div className='skr-nav-shoptop-two-right' onMouseLeave={()=>leaveOpacity()}>
            {
              tabsright.map(item => {
                return (
                  <NavLink
                    className={'skr-navlink-two'}
                    onMouseLeave={()=>leaveOpacity()}
                    key={item.title}
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                )
              })
            }
          </div>
          {/* 二级分类详情，点击跳转 */}
          <div className='skr-navlink-twbu' onMouseLeave={()=>leaveOpacity()}>
            <div className='skr-navlink-twbu-t'>
              <div className='skr-navlink-twbu-ts'>
                <div className='skr-navlink-twbu-ts-left'>
                  {
                    tits.map(item => {
                      return (
                        <div key={item} onClick={()=>shopListDetail(item)}>{item}</div>
                      )
                    })
                  }
                </div>
                <div className='skr-navlink-twbu-ts-right'>
                </div>
              </div>
            </div>

          </div>
        </div>
        <BackTops/>
      </div>
      
      <Outlet></Outlet>
    </div>
  )
}


export default BaseLayout