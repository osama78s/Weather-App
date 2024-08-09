import React from 'react'
import FetchData from './Components/FetchData'

const App = () => {
  return (
    <div className='h-screen bg-body'>
      <div className="container flex items-center justify-center h-full">
        <FetchData />
      </div>
    </div>
  )
}

export default App;