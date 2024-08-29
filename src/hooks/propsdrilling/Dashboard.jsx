import React from 'react'
import Sidebar from './Sidebar'

function Dashboard({user}) {

  return (
    <div>
    Dashboard
    <Sidebar user={user}/>
    </div>
  )
}

export default Dashboard