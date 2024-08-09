import React from 'react'
import FetchData from './Components/FetchData'

const App = () => {
  return (
    <div className='min-h-screen bg-body flex items-center justify-center'>
      <div className="container px-[20px] flex items-center justify-center h-full">
        <FetchData />
      </div>
    </div>
  )
}

export default App;