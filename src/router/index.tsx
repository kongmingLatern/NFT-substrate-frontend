import Detail from '@/pages/Detail'
import Home from '@/pages/Home'
import Personal from '@/pages/Personal'
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
  {
    path: '/my',
    element: <Personal />,
  },
])
