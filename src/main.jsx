import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layout/Root';
import Home from './Pages/Home';
import Register from './Pages/Register';
import LogIn from './Pages/LogIn';
import AuthProvider from './Context/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
  {
    index:true, element:<Home></Home>
  },

  {
    path:'register', element:<Register></Register>
  },

  {
    path:'login', element:<LogIn></LogIn>
  },

    ]
  },








]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
