import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { OrdersContext } from '../../contexts/OrdersContext'
import { Checkout } from '.'

jest.mock('../../assets/flags/master.svg', () => 'mocked-master')
jest.mock('../../assets/flags/dinnersclub.svg', () => 'mocked-dinnersclub')
jest.mock(
  '../../assets/flags/americanexpress.svg',
  () => 'mocked-americanexpress',
)
jest.mock('../../assets/flags/visa.svg', () => 'mocked-visa')
jest.mock('../../assets/flags/elo.svg', () => 'mocked-elo')
jest.mock('../../assets/logo-iugu.svg', () => 'mocked-logo-iugu')
jest.mock('../../assets/help-icon.svg', () => 'mocked-help-icon')

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

describe('Checkout', () => {
  it('should render successfully', () => {
    render(
      <BrowserRouter>
        <OrdersContext.Provider value={mockContext}>
          <Checkout />
        </OrdersContext.Provider>
      </BrowserRouter>,
    )

    expect(screen.getByText('Estamos quase lá!')).toBeInTheDocument()
    expect(
      screen.getByText('Insira seus dados de pagamento abaixo:'),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Número do cartão')).toBeInTheDocument()
    expect(screen.getByLabelText('Nome impresso no cartão')).toBeInTheDocument()
    expect(screen.getByLabelText('CPF')).toBeInTheDocument()
    expect(screen.getByLabelText('Validade')).toBeInTheDocument()
    expect(screen.getByLabelText('CVV')).toBeInTheDocument()
    expect(screen.getByLabelText('Número de parcelas')).toBeInTheDocument()
    expect(screen.getByLabelText('Cupom')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Número do cartão'), {
      target: { value: '5555444433332222' },
    })

    fireEvent.change(screen.getByLabelText('Validade'), {
      target: { value: '10/21' },
    })

    fireEvent.change(screen.getByLabelText('CVV'), {
      target: { value: '123' },
    })

    fireEvent.change(screen.getByLabelText('Nome impresso no cartão'), {
      target: { value: 'Cássio Scofield' },
    })

    fireEvent.change(screen.getByLabelText('CPF'), {
      target: { value: '98765432100' },
    })

    fireEvent.change(screen.getByLabelText('Cupom'), {
      target: { value: 'teste' },
    })

    fireEvent.change(screen.getByLabelText('Número de parcelas'), {
      target: { value: '1' },
    })
  })
})
