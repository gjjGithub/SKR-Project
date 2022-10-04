import React from 'react'
import { useRoutes } from 'react-router-dom'


import { BaseLayout } from '../layouts'
// 顶部
import Home from '../page/Home'
import Login from '../page/Login'
import Resigin from '../page/Resigin'
import NotFount from '../page/NotFount'
import ShopCar from '../page/ShopCar'
import Detail from '../page/ShopListdetail'
import Shopdetail from '../page/Shopdetail'
// 二级
import BEST from '../page/Main/PEEB/BEST'
import RVENT from '../page/Main/PEEB/EVENT'
import EXCLUSIVE from '../page/Main/PEEB/EXCLUSIVE'
import POP from '../page/Main/PEEB/POP'
import Children from '../page/Main/ShopList/Children'
import Dress from '../page/Main/ShopList/Dress'
import Parts from '../page/Main/ShopList/Parts'
import Shoes from '../page/Main/ShopList/Shoes'


function Router (){
   let routes = [
        {
            path:'/',
            element:<BaseLayout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                }, 
                {
                    path:`/home`,
                    element:<Home/>
                },
                {
                    path:'/resigin',
                    element:<Resigin/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/shopcar',
                    element:<ShopCar/>
                },
                {
                    path:'/shoes',
                    element:<Shoes/>
                },
                {
                    path:'/dress',
                    element:<Dress/>
                },
                {
                    path:'/parts',
                    element:<Parts/>
                },
                {
                    path:'/children',
                    element:<Children/>
                },
                {
                    path:'/pop',
                    element:<POP/>
                },
                {
                    path:'/exclusive',
                    element:<EXCLUSIVE/>
                },
                {
                    path:'/rvent',
                    element:<RVENT/>
                },
                {
                    path:'/best',
                    element:<BEST/>
                },
                {
                    path:`/detali/:params`,
                    element: <Detail/>
                },
                {
                    path:`/shopdetail/:params`,
                    element: <Shopdetail/>
                }
            ]
        },{
            path:'*',
            element:<NotFount/>
        }
    ]
    return useRoutes(routes)
}





export default Router

