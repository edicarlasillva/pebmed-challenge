import { Link } from 'react-router-dom'

import { OrderErrorContainer } from './styles'

export function OrderError() {
  return (
    <OrderErrorContainer>
      <h1 className="title">Erro ao processar seu pedido.</h1>
      <p className="subtitle">Volte para página inicial e tente novamente.</p>

      <Link to="/" className="return-home">
        Ir para a home
      </Link>
    </OrderErrorContainer>
  )
}
