import * as zod from 'zod'

export const newOrderFormSchema = zod.object({
  creditCardNumber: zod
    .string()
    .min(16, 'O número do cartão deve ter 16 dígitos')
    .max(16, 'O número do cartão deve ter 16 dígitos'),
  creditCardExpirationDate: zod
    .string()
    .min(5, 'A data de validade deve ter o formato MM/AA')
    .max(5, 'A data de validade deve ter o formato MM/AA'),
  creditCardCVV: zod
    .string()
    .min(3, 'O CVV do cartão deve ter 3 dígitos')
    .max(3, 'O CVV do cartão deve ter 3 dígitos'),
  creditCardHolder: zod
    .string()
    .nonempty('O nome do titular do cartão é obrigatório'),
  creditCardCPF: zod
    .string()
    .min(11, 'O número do CPF deve ter 11 dígitos')
    .max(11, 'O número do CPF deve ter 11 dígitos'),
  couponCode: zod.string().nullable().optional(),
  installments: zod
    .number()
    .min(1, 'O número de parcelas deve ser no mínimo 1')
    .max(12, 'O número de parcelas deve ser no máximo 12'),
  offerId: zod.number(),
})
