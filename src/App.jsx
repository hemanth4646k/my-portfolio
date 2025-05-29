import { useState } from 'react'
import './App.css'
import Header from './header'

function App() {
  return (
    <div className='flex h-screen w-full'>
      <Header />
      <div className='bg-blue-500 w-full'>
        hi there
      </div>
    </div>
  )
}

export default App
