import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { OrderError } from '.'

describe('OrderError', () => {
  it('should render successfully error message, subtitle, and link to home', () => {
    render(
      <BrowserRouter>
        <OrderError />
      </BrowserRouter>,
    )

    const errorMessage = screen.getByText('Erro ao processar seu pedido.')
    const subtitle = screen.getByText(
      'Volte para página inicial e tente novamente.',
    )
    const homeLink = screen.getByRole('link', { name: 'Ir para a home' })

    expect(errorMessage).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
