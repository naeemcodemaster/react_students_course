// Props drilling
// import React from 'react'

// function UserProfile({user}) {
//   return (
//     <div>
//     UserProfile
//     <h2>{user.name}</h2>
//     <h2>{user.age}</h2>
//     <h2>{user.email}</h2>
    
//     </div>
//   )
// }

// export default UserProfile



// use of Context API
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

function UserProfile() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
    UserProfile
    <h2>{user.email}</h2>
    </div>
  )
}

export default UserProfile