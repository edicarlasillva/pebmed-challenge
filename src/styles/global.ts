import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::placeholder {
    color: ${({ theme }) => theme['gray-300']};
  }

  :focus {
    ${({ theme }) => css`
      outline: 0;
      box-shadow: 0 0 0 2px ${theme['orange-500']};
    `}
  }

  body {
    ${({ theme }) => css`
      background: ${theme.white};
      color: ${theme['gray-900']};
      -webkit-font-smoothing: antialiased;
    `}
  }

  body, input, textarea, button, select {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input, select {
    border: 0;
  }
`
