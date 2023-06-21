import React, { useEffect, useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../services/api'

interface OffersData {
  id: number
  title: string
  description: string
  fullPrice: number
  discountAmmount: number
  discountPercentage: number
  periodLabel: string
  order: string
  installments: number
}

interface CreateOrderInput {
  creditCardNumber: string
  creditCardExpirationDate: string
  creditCardCVV: string
  creditCardHolder: string
  creditCardCPF: string
  couponCode: string | null | undefined
  installments: number
  offerId: number
}

interface OrdersContextType {
  offers: OffersData[]
  order: CreateOrderInput
  error: string
  createOrder: (data: CreateOrderInput) => Promise<void>
}

interface OrdersProviderProps {
  children: React.ReactNode
}

export const OrdersContext = createContext({} as OrdersContextType)

export function OrdersProvider({ children }: OrdersProviderProps) {
  const navigate = useNavigate()

  const [offers, setOffers] = useState<OffersData[]>([])
  const [order, setOrder] = useState<CreateOrderInput>({} as CreateOrderInput)
  const [error, setError] = useState<string>('')

  async function fetchOffers() {
    try {
      const response = await api.get('/offer')
      setOffers(response.data)
    } catch (error) {
      setError(
        'Não foi possível carregar as ofertas. Tente novamente mais tarde.',
      )
    }
  }

  async function createOrder(data: CreateOrderInput) {
    const {
      creditCardNumber,
      creditCardExpirationDate,
      creditCardCVV,
      creditCardHolder,
      creditCardCPF,
      couponCode,
      installments,
      offerId,
    } = data

    try {
      const response = await api.post('/subscription', {
        creditCardNumber,
        creditCardExpirationDate,
        creditCardCVV,
        creditCardHolder,
        creditCardCPF,
        couponCode,
        installments,
        offerId,
      })

      setOrder(response.data)
      navigate('/sucesso')
    } catch (error) {
      navigate('/erro')
    }
  }

  useEffect(() => {
    fetchOffers()
  }, [])

  return (
    <OrdersContext.Provider value={{ offers, order, error, createOrder }}>
      {children}
    </OrdersContext.Provider>
  )
}
