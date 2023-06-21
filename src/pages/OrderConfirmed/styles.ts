import styled from 'styled-components'

export const OrderConfirmedContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 4.5rem auto 0;
  width: 22rem;

  .icon-success {
    margin-bottom: 1.125rem;
  }

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

  .manage-subscription {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.5;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
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

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.9375rem;
  margin: 3.5rem 0 5.5rem;
  box-shadow: 0px 0.25rem 1.25rem rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  header {
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme['gray-100']};
    border-radius: 15px;
    padding: 1.25rem;

    .order-info {
      h2 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 2;
        text-align: right;
        color: ${({ theme }) => theme.primary};
      }

      span {
        font-size: 0.875rem;
        line-height: 1.8;
        text-align: right;
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  .card-container {
    padding: 1.25rem 1rem 0;
  }

  .personal-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    span {
      font-size: 0.875rem;
      line-height: 1.8;
      color: ${({ theme }) => theme['gray-300']};
    }

    P {
      font-size: 0.875rem;
      line-height: 1.8;
      text-align: right;
      color: ${({ theme }) => theme.primary};
    }
  }
`
