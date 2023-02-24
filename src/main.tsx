import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
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
