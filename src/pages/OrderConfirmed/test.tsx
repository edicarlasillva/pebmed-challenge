import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { OrderConfirmed } from '.'
import { OrdersContext } from '../../contexts/OrdersContext'

jest.mock('../../assets/icon-success.svg', () => 'mocked-success-icon')
jest.mock('../../assets/icon-star-card.svg', () => 'mocked-star-card-icon')

describe('OrderConfirmed', () => {
  const mockContext = {
    order: {
      couponCode: 'teste',
      creditCardCPF: '98765432100',
      creditCardCVV: '123',
      creditCardExpirationDate: '10/21',
      creditCardHolder: 'Cássio Scofield',
      creditCardNumber: '5555444433332222',
      installments: 1,
      offerId: 1,
    },
    offers: [
      {
        id: 1,
        title: 'Anual',
        description: 'Assinatura anual',
        fullPrice: 479.9,
        discountAmmount: 0,
        discountPercentage: 0,
        periodLabel: 'Anual',
        order: '1',
        installments: 1,
      },
    ],
    error: 'Não foi possível carregar as ofertas. Tente novamente mais tarde.',
    createOrder: jest.fn(),
  }

  beforeEach(() => {
    render(
      <BrowserRouter>
        <OrdersContext.Provider value={mockContext}>
          <OrderConfirmed />
        </OrdersContext.Provider>
      </BrowserRouter>,
    )
  })

  it('should render the success message', () => {
    const successMessage = screen.getByText('Parabéns!')
    expect(successMessage).toBeInTheDocument()
  })

  it('should render subscription type, price info, email info, and CPF info', () => {
    const subscriptionType = screen.getByText('Anual | Parcelado')
    const priceInfo = screen.getByText('R$ 479,90 | 10x R$ 47,99')
    const emailInfo = screen.getByText('E-mail')
    const cpfInfo = screen.getByText('CPF')

    expect(subscriptionType).toBeInTheDocument()
    expect(priceInfo).toBeInTheDocument()
    expect(emailInfo).toBeInTheDocument()
    expect(cpfInfo).toBeInTheDocument()
  })

  it('should render manage subscription link and home link', () => {
    const manageSubscriptionLink = screen.getByRole('link', {
      name: 'Gerenciar assinatura',
    })
    const homeLink = screen.getByRole('link', { name: 'Ir para a home' })

    expect(manageSubscriptionLink).toBeInTheDocument()
    expect(manageSubscriptionLink).toHaveAttribute('href', '/')

    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
