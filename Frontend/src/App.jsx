import { useState } from 'react'
import './index.css'

import Home from './pages/home/Home'
import RouterDom from './config/router/router'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <>
    <div>

   
  <RouterDom />
  <Toaster/>
      </div>
      
    </>
  )
}

export default App
