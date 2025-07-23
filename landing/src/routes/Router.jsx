import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import About from '../pages/About';
import More from "../pages/More";
import RootLayout from '../layouts/RootLayout';

export const publicRoutes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, // Cela rend le composant <Home /> visible sur "/"
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'features',
        element: <Features />
      },
      {
        path: 'pricing',
        element: <Pricing />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'more',
        element: <More />
      }
    ]
  }
]);
