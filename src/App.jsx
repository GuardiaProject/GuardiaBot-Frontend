
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Landing'
import Register from './pages/register'
import Login from './pages/login'
import ChatRoom from './pages/chatroom'

function App() {
  const routes=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },{
      path:"/register",
      element:<Register/>
    },{
      path:"/login",
      element:<Login/>
    },{
      path:"/room",
      element:<ChatRoom/>
    }

  ])

  return (
   
  <>
  <div className='bg-black'>
    <RouterProvider router={routes}/>
  </div>
  </>
  )
}

export default App
