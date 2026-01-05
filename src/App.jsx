import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Business from './Coponents/Business'
import Entertainment from './Coponents/Entertainment'
import General from './Coponents/General'
import Science from './Coponents/Science'
import Health from './Coponents/Health'
import Tech from './Coponents/Tech'
const router = createBrowserRouter([
 , {
    path: '/',
    element: <Home />
  },
  {
    path: '/business',
    element: <Business/>
  },
  {
    path: '/entertainment',
    element: <Entertainment/>
  }
  ,
  {
    path: '/general',
    element: <General/>
  }
  ,
  {
    path: '/science',
    element: <Science/>
  }
  ,
  {
    path: '/health',
    element: <Health/>
  } ,
  {
    path: '/technology',
    element: <Tech/>
  }
 
])

const App = () => {
  <Home/>
  return <RouterProvider router={router} />
}

export default App
