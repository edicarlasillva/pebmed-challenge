import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Checkout } from './pages/Checkout'
import { OrderConfirmed } from './pages/OrderConfirmed'
import { OrderError } from './pages/OrderError'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Checkout />} />
        <Route path="/sucesso" element={<OrderConfirmed />} />
        <Route path="/erro" element={<OrderError />} />
      </Route>
    </Routes>
  )
}
