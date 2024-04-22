import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {NextUIProvider} from '@nextui-org/react'
import './main.css';

import {ThemeProvider as NextThemesProvider} from "next-themes";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <NextUIProvider >
            <App />
      </NextUIProvider>
  </React.StrictMode>,
)
