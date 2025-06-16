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
import { HelmetProvider } from 'react-helmet-async';

import CategoryPage from './Pages/Category/CategoryPage';
import CategoryProductDetails from './Pages/Category/CategoryProductDetails';
import Cart from './Pages/Cart';


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
    path:'addProduct', element:<AddProduct></AddProduct>
  },
  {
    path:'myProduct', element:<MyProduct></MyProduct>
  },
  {
    path:'allProduct',
    
    loader:()=>fetch('http://localhost:3000/products'),
    element:<AllProduct></AllProduct>
  },
  {
    path:'updatedProduct/:id',
  loader:({params})=>fetch(`http://localhost:3000/products/${params.id}`),
    element:<UpdateProduct></UpdateProduct>
  },

  {
    path:'products/category/:categoryName', element:<CategoryPage></CategoryPage>
  },
  {
    path:'products/:id',
    loader:({params})=>fetch(`http://localhost:3000/products/${params.id}`),
    element:<CategoryProductDetails> </CategoryProductDetails>
  },

  {
    path:'carts',
      element:<Cart></Cart>
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
   <HelmetProvider>
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   </HelmetProvider>
  </StrictMode>,
)
