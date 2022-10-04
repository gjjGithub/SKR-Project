import React,{useEffect} from 'react'
import {getShopListTypeTwo} from '../../api'

export default function Login() {
  useEffect(()=>{
    (async function(){
      let data = await getShopListTypeTwo('鞋类')

      console.log(data);
    })()

  },[])
  return (
    <div>
        
    </div>
  )
}
