import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {NextUIProvider} from '@nextui-org/react'

import {ThemeProvider as NextThemesProvider} from "next-themes";

import './index.css'
import { Providers } from './Provider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <NextUIProvider >
        <App />
      </NextUIProvider>

  </React.StrictMode>,
)
