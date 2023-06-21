import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { priceFormatter } from '../../utils/formatter'
import { OrdersContext } from '../../contexts/OrdersContext'

import { newOrderFormSchema } from './validatorSchema'

import master from '../../assets/flags/master.svg'
import dinnersclub from '../../assets/flags/dinnersclub.svg'
import americanexpress from '../../assets/flags/americanexpress.svg'
import visa from '../../assets/flags/visa.svg'
import elo from '../../assets/flags/elo.svg'
import logoIugu from '../../assets/logo-iugu.svg'
import helpIcon from '../../assets/help-icon.svg'

import {
  CheckoutContainer,
  FormContainer,
  PlansContainer,
  Card,
  PlansList,
  FlagsContainer,
  Indicator,
  RadioButton,
} from './styles'

type NewOrderFormInputs = zod.infer<typeof newOrderFormSchema>

export function Checkout() {
  const { offers, error, createOrder } = useContext(OrdersContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<NewOrderFormInputs>({
    resolver: zodResolver(newOrderFormSchema),
    defaultValues: {
      offerId: 1,
    },
  })

  function handleCreateNewOrder(data: NewOrderFormInputs) {
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

    createOrder({
      creditCardNumber,
      creditCardExpirationDate,
      creditCardCVV,
      creditCardHolder,
      creditCardCPF,
      couponCode,
      installments,
      offerId,
    })

    reset()
  }

  return (
    <CheckoutContainer>
      <FormContainer>
        <h2 className="title">Estamos quase lá!</h2>
        <p className="subtitle">Insira seus dados de pagamento abaixo:</p>

        <FlagsContainer>
          <div className="flags">
            <img src={master} alt="Bandeira Mastercard" />
            <img src={dinnersclub} alt="Bandeira Dinners Club" />
            <img src={americanexpress} alt="Bandeira American Express" />
            <img src={visa} alt="Bandeira Visa" />
            <img src={elo} alt="Bandeira Elo" />
          </div>

          <div className="poweredby">
            <span>Pagamentos por</span>
            <img src={logoIugu} alt="Logo da iugu" />
          </div>
        </FlagsContainer>

        <form onSubmit={handleSubmit(handleCreateNewOrder)}>
          <div className="form-group">
            <label htmlFor="card-number">Número do cartão</label>
            <input
              id="card-number"
              type="text"
              placeholder="0000 0000 0000 0000"
              {...register('creditCardNumber')}
            />
            {errors.creditCardNumber && (
              <span className="error-message">
                {errors.creditCardNumber.message}
              </span>
            )}
          </div>

          <div className="group-inputs">
            <div className="form-group">
              <label htmlFor="validity">Validade</label>
              <input
                id="validity"
                type="text"
                placeholder="MM/AA"
                {...register('creditCardExpirationDate')}
              />
              {errors.creditCardExpirationDate && (
                <span className="error-message">
                  {errors.creditCardExpirationDate.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="code">CVV</label>
              <input
                id="code"
                type="number"
                placeholder="000"
                {...register('creditCardCVV')}
              />
              {errors.creditCardCVV && (
                <span className="error-message">
                  {errors.creditCardCVV.message}
                </span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Nome impresso no cartão</label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome"
              {...register('creditCardHolder')}
            />
            {errors.creditCardHolder && (
              <span className="error-message">
                {errors.creditCardHolder.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <input
              id="cpf"
              type="number"
              placeholder="000.000.000-00"
              {...register('creditCardCPF')}
            />
            {errors.creditCardCPF && (
              <span className="error-message">
                {errors.creditCardCPF.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="coupon">Cupom</label>
            <input
              id="coupon"
              type="text"
              placeholder="Insira aqui"
              {...register('couponCode')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="installments-number">Número de parcelas</label>
            <select
              id="installments-number"
              {...register('installments', { valueAsNumber: true })}
            >
              <option value="0">Selecionar</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            {errors.installments && (
              <span className="error-message">
                {errors.installments.message}
              </span>
            )}
          </div>

          <button
            className="submit-order"
            type="submit"
            disabled={isSubmitting}
          >
            Finalizar pagamento
          </button>
        </form>
      </FormContainer>

      <PlansContainer>
        <h2 className="title">Confira o seu plano:</h2>
        <span className="email">fulano@cicrano.com.br</span>

        <Controller
          control={control}
          name="offerId"
          render={({ field }) => {
            return (
              <PlansList onValueChange={field.onChange} value={field.value}>
                {offers.map((offer) => {
                  return (
                    <Card key={offer.id}>
                      <div className="info-plan">
                        <div>
                          <header>
                            <h2>
                              {offer.title} | {offer.description}
                            </h2>
                          </header>
                          <p>
                            De {priceFormatter.format(offer.fullPrice)} | Por{' '}
                            {priceFormatter.format(
                              offer.fullPrice - offer.discountAmmount,
                            )}
                          </p>
                          <span>
                            {offer.installments}x de{' '}
                            {priceFormatter.format(
                              (offer.fullPrice - offer.discountAmmount) /
                                offer.installments,
                            )}
                            /{offer.periodLabel}
                          </span>
                        </div>
                        <div className="badge">
                          <span>-{offer.discountPercentage * 100}%</span>
                        </div>
                      </div>
                      <RadioButton value={offer.order}>
                        <Indicator />
                      </RadioButton>
                    </Card>
                  )
                })}
              </PlansList>
            )
          }}
        />

        {error && <span className="error-message">{error}</span>}

        {errors.offerId && (
          <span className="error-message">{errors.offerId.message}</span>
        )}

        <div className="help">
          <h5>Sobre a cobrança</h5>
          <img src={helpIcon} alt="" />
        </div>
      </PlansContainer>
    </CheckoutContainer>
  )
}
