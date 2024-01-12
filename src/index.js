import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Product from './Pages/Product'
import { Provider } from 'react-redux';
import { store } from './store';
import { CartProvider } from './Providers/CartContext';
import ShoppingCart from './Pages/ShoppingCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Product />
  },
  {
    path: '/shoping-cart',
    element: <ShoppingCart />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
