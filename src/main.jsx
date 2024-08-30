import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { UserProvider } from './hooks/context/UserContext.jsx'
import { CartProvider } from './hooks/context2/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UserProvider> */}
      {/* <App /> */}
    {/* </UserProvider> */}

    {/* <CartProvider> */}
       <App />
    {/* </CartProvider> */}

  </React.StrictMode>,
)
