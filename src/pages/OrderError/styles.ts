import styled from 'styled-components'

export const OrderErrorContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 4.5rem auto 0;
  width: 22rem;

  .title {
    font-size: 1.25rem;
    line-height: 2.5;
    color: ${({ theme }) => theme.primary};
    font-weight: 400;
  }

  .subtitle {
    max-width: 12rem;
    color: ${({ theme }) => theme['gray-300']};
    text-align: center;
  }

  .return-home {
    width: 100%;
    background: ${({ theme }) => theme.primary};
    border-radius: 25px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 1.125rem;
    text-decoration: none;
    color: #ffffff;
    margin-top: 1.5rem;

    &:hover {
      background: ${(props) => props.theme.primaryLight};
      transition: background-color 0.2s;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`
