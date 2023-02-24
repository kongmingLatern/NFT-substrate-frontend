import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import ReactDOM from 'react-dom/client'
import '@/assets/index.css'
import '@/assets/global.css'
import '@/component/paint/i18n'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)
