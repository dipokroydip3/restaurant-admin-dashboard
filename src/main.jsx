import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home.jsx';
import Products from './Products.jsx';
import CountdownTimer from './CoutDown.jsx';
import Categories from './pages/Categories.jsx';
import Menu1 from './pages/Menu1.jsx';
import Order from './pages/Order.jsx';
import About from './pages/About.jsx';
import Settings from './pages/Settings.jsx';
import Review from './pages/Review.jsx';
import Users from './pages/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home> 
      },
      {
        path:'/products',
        element: <Products></Products>
      },
      {
        path: '/countdown',
        element: <CountdownTimer></CountdownTimer>
      },
      {
        path: '/categories',
        element: <Categories></Categories>
      },
      {
        path: '/menu1',
        element: <Menu1></Menu1>
      },
      {
        path: '/orders',
        element: <Order></Order>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/settings',
        element: <Settings></Settings>
      },
      {
        path: '/review',
        element: <Review></Review>
      },
      {
        path: '/users',
        element: <Users></Users>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
