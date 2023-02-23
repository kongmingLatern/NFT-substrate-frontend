import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/assets/index.css'
import '@/component/paint/i18n'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
