export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const cpfFormatter = (cpf: string) => {
  const numericCPF = cpf.replace(/\D/g, '')

  const formattedCPF = numericCPF.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    '$1.$2.$3-$4',
  )

  return formattedCPF
}
