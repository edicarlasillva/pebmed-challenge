import { ThemeProvider } from 'styled-components'

import { OrdersProvider } from './contexts/OrdersContext'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrdersProvider>
          <Router />
        </OrdersProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
