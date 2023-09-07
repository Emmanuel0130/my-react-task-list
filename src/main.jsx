import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render (
  <App />
  
);

ReactDOM.render(
  <ChakraProvider>
    <CSSReset />
  </ChakraProvider>,
  document.getElementById('root')
);


