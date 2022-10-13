import React,{} from 'react'
import { useParams} from 'react-router-dom'
export default function Shopdetail() {
  let params = useParams()
  return (
    <div>
      <div>{params.params}</div>
    </div>
  )
}
