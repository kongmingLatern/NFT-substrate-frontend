import Detail from '@/pages/Detail'
import Home from '@/pages/Home'
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
    path: '/detail',
    element: <Detail />,
  },
])
