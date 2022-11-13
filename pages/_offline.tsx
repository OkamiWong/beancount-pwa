import React from 'react'
import Index from './index'

function Fallback() {
  return (
    <div>
      <h1>
        Offline!
      </h1>
      <Index />
    </div>
  )
}

export default Fallback
