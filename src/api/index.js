import request from "./request.js";

// 获取商品列表
export function getShopList(){
    return request({
        url:'/Classify',
        method:'get'
    })
}

// 获取所有商品二级名   parent_name = 鞋类
export function getShopListTypeTwo(parent_name,page){
    return request({
        url:'/ShopList',
        method:'get',
        params: {
            parent_name,
            page
        }
    })
}

// 获取到安踏分类的篮球鞋
export function getAntBasketball(word){
    return request({
        url:'/BrandSearch',
        method:'get',
        params:{
            word
        }
    })
}

// 获取轮播图图片
export function getSwiper(){
    return request({
        url:'/Swiper',
        method:'get',
    })
}

// 获取到安踏分类的板鞋