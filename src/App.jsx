import React from 'react'
import Router from './router'
import {BrowserRouter} from 'react-router-dom'
import './App.scss'


export default function App() {
  return (
    <div className='main'> 
      <div className='skr-main'>
        <BrowserRouter>
            <Router></Router>
            
        </BrowserRouter>
      </div>
      <div className='a'></div>
    </div>
  )
}
