import { useState } from 'react'
import './App.css'
import Header from './header'
import Sidebar1 from './Sidebar1'

function App() {
  return (
    <div className='flex h-screen w-full bg-blue-100'>
      <Sidebar1 />
      <div className="w-full bg-blue-100">hi there</div>
      
    </div>
  )
}

export default App
