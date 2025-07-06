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
import NotFound from './NotFound/NotFound';
import AddProduct from './Pages/AddProduct';
import MyProduct from './Pages/MyProduct';
import AllProduct from './Pages/AllProduct';
import UpdateProduct from './Pages/UpdateProduct';


import CategoryPage from './Pages/Category/CategoryPage';
import CategoryProductDetails from './Pages/Category/CategoryProductDetails';
import Cart from './Pages/Cart';
import PrivateRoute from './privateRoute/PrivateRoute';
import Categories from './Pages/Categories';
import AboutUs from './Pages/AboutUs';
import FooterInfo from './Footer/FooterDetails';


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
  {
    path:'aboutUs', element:<AboutUs></AboutUs>
  },
  {

    path:'categories', element:<Categories></Categories>
  },
  { path: 'info/:section', element: <FooterInfo /> },

  {
    path:'addProduct', element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
  },
  {
    path:'myProduct', element:<PrivateRoute><MyProduct></MyProduct></PrivateRoute>
  },
  {
    path:'allProduct',
   
    element:<PrivateRoute><AllProduct></AllProduct></PrivateRoute>
  },
  {
    path:'updatedProduct/:id',
  loader:({params})=>fetch(`https://primego-wholesale-server.vercel.app/products/${params.id}`),
    element:<UpdateProduct></UpdateProduct>
  },

  {
    path:'products/category/:categoryName', element:<CategoryPage></CategoryPage>
  },
  {
    path:'products/:id',
    loader:({params})=>fetch(`https://primego-wholesale-server.vercel.app/products/${params.id}`),
    element:<CategoryProductDetails> </CategoryProductDetails>
  },

  {
    path:'carts',
      element:<PrivateRoute><Cart></Cart></PrivateRoute>
  }


    ]
  },


{
  path:"*",
  element:<>
  <NotFound></NotFound>
  </>
}





]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
  
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   
  </StrictMode>,
)
