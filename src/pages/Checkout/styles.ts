import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  margin: 4.5rem 0 2rem;

  .error-message {
    color: ${({ theme }) => theme['red-700']};
    padding-top: 0.625rem;
  }

  @media (max-width: 768px) {
    font-size: 87.5%;
    grid-template-columns: 1fr;
    gap: 3rem;
    width: 100%;
    padding: 0 0.5rem;
  }
`

export const FormContainer = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2.6;
    letter-spacing: -0.02em;
  }

  .subtitle {
    margin-bottom: 1.875rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .group-inputs {
      display: flex;
      gap: 3.125rem;
    }

    label {
      color: ${({ theme }) => theme['gray-400']};
      font-size: 0.75rem;
      line-height: 1.6;
    }

    input,
    select {
      color: ${({ theme }) => theme['gray-300']};
      border-bottom: 1px solid ${({ theme }) => theme['gray-100']};
      padding-bottom: 0.625rem;
    }

    select {
      color: ${({ theme }) => theme['gray-300']};
      line-height: 2.1;
    }

    .submit-order {
      flex: 1;
      border-radius: 25px;
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
      padding: 1.125rem;
      font-size: 0.875rem;
      line-height: 1.8;
      border: 0;
      margin-top: 0.625rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme.primaryLight};
        transition: background-color 0.2s;
      }
    }
  }
`

export const FlagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.875rem;

  .flags {
    display: flex;
    margin-bottom: 0.75rem;
    gap: 0.75rem;
  }

  .poweredby {
    display: flex;
    font-size: 0.625rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['gray-200']};

    span {
      margin-right: 0.4375rem;
    }
  }
`

export const PlansContainer = styled.div`
  .title {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2.6;
    letter-spacing: -0.02em;
  }

  .email {
    border: 1px solid ${({ theme }) => theme['gray-100']};
    border-radius: 12px;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    line-height: 1.6;
  }

  .help {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    h5 {
      margin-right: 0.75rem;
    }
  }
`

export const PlansList = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 2rem 0 0.5rem;
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  border-radius: 15px;
  padding: 1.25rem;

  .info-plan {
    display: flex;
    align-items: center;

    h2 {
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.8;
    }

    p {
      font-size: 0.75rem;
    }

    span {
      color: ${({ theme }) => theme.secondary};
      font-size: 0.625rem;
    }

    .badge {
      span {
        background: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.white};
        border-radius: 9px;
        padding: 0.25rem 0.5rem;
        margin-left: 0.75rem;
        font-size: 0.625rem;
        line-height: 1.3;
      }
    }
  }
`

export const RadioButton = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background-color: transparent;
  position: relative;
  border: 2px solid ${({ theme }) => theme['gray-100']};
  cursor: pointer;
`

export const Indicator = styled(RadioGroup.Indicator)`
  &::after {
    content: '';
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.primary};
  }
`
