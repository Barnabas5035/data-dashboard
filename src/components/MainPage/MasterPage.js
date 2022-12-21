import React from 'react'
import Navebar from '../Navbar'

function MasterPage({ children }) {
  return (
    <div>
      <Navebar />
      <div>{children}</div>
    </div>
  )
}

export default MasterPage
