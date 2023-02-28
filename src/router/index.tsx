import Admin from '@/pages/Admin'
import Create from '@/pages/Create'
import Detail from '@/pages/Detail'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Logon from '@/pages/Login'
import Personal from '@/pages/Personal'
import Register from '@/pages/Register'
import Transaction from '@/pages/Transaction'
import Main from '@/views/admin/Main'
import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
    ],
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
  {
    path: '/personal',
    element: <Personal />,
  },
  {
    path: '/paint',
    element: <Create />,
  },
  {
    path: '/transaction',
    element: <Transaction />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'user',
        element: <Main />,
      },
      {
        path: 'nft',
        element: <Main />,
      },
      {
        path: 'setting',
        element: <Main />,
      },
      {
        path: 'upgrade',
        element: <Main />,
      },
    ],
  },
])
