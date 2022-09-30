import React from 'react'
import { useRoutes } from 'react-router-dom'

import BaseMain  from '../layouts/base-main/index'

// 二级
import BEST from '../page/Main/PEEB/BEST'
import RVENT from '../page/Main/PEEB/EVENT'
import EXCLUSIVE from '../page/Main/PEEB/EXCLUSIVE'
import POP from '../page/Main/PEEB/POP'
import Children from '../page/Main/ShopList/Children'
import Dress from '../page/Main/ShopList/Dress'
import Parts from '../page/Main/ShopList/Parts'
import Shoes from '../page/Main/ShopList/Shoes'

function Main (){
    let routes = [
        {
            path:'/',
            element:<BaseMain/>,
            children:[
                {
                    path:'/shoes',
                    element:<Shoes/>
                },
                {
                    path:'dress',
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
                    path:'exclusive',
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
            ]
        }
    ]
    return useRoutes(routes)
}

export default Main