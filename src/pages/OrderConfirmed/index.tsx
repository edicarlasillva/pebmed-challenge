import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { cpfFormatter } from '../../utils/formatter'
import { OrdersContext } from '../../contexts/OrdersContext'

import { Card, OrderConfirmedContainer } from './styles'

import iconSuccess from '../../assets/icon-success.svg'
import iconStarCard from '../../assets/icon-star-card.svg'

export function OrderConfirmed() {
  const { order } = useContext(OrdersContext)

  return (
    <OrderConfirmedContainer>
      <img src={iconSuccess} className="icon-success" alt="Ícone de sucesso" />

      <h1 className="title">Parabéns!</h1>
      <p className="subtitle">Sua assinatura foi realizada com sucesso.</p>

      <Card>
        <header>
          <img src={iconStarCard} alt="" />
          <div className="order-info">
            <h2>Anual | Parcelado</h2>
            <span>R$ 479,90 | 10x R$ 47,99</span>
          </div>
        </header>
        <div className="card-container">
          <div className="personal-info">
            <span>E-mail</span>
            <p>fulano@cicrano.com.br</p>
          </div>

          <div className="personal-info">
            <span>CPF</span>
            <p>{cpfFormatter(order.creditCardCPF)}</p>
          </div>
        </div>
      </Card>
      <Link to="/" className="manage-subscription">
        Gerenciar assinatura
      </Link>
      <Link to="/" className="return-home">
        Ir para a home
      </Link>
    </OrderConfirmedContainer>
  )
}
