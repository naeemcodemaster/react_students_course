// import React from 'react'
// import UserProfile from './UserProfile'

// function Sidebar({user}) {
//   return (
//     <div>
//     Sidebar
//     <UserProfile user={user}/>
//     </div>
//   )
// }

// export default Sidebar


import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Sidebar() {
  const user = useContext(UserContext);
  return (
    <div>
    Sidebar
    <h2>{user.name}</h2>
    </div>
  )
}

export default Sidebar