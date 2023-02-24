import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import '@/assets/index.css'
import '@/component/paint/i18n'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)
