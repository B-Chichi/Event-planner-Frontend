import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import SignInPage from './pages/signin'
import HomePage from './pages/home'


const routes = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <HomePage/>
  // },
  {
    path: "/signin",
    element: <SignInPage/>
  },
  {
    path: "/home",
    element: <HomePage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
