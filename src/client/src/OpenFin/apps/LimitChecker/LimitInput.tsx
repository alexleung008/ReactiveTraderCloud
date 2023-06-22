import styled from "styled-components"

import { CurrencyPair } from "@/services/currencyPairs/types"

import { setLimit, useLimit } from "./state"

const Container = styled.div`
  background-color: ${({ theme }) => theme.core.lightBackground};
  padding: 10px 10px 10px 10px;
  margin-bottom: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.core.backgroundHoverColor};
  }
`

const Symbol = styled.div`
  font-size: 0.8125rem;
  line-height: 1rem;
  margin-bottom: 5px;
`

const Label = styled.label`
  font-size: 0.625rem;
  line-height: 1.2rem;
  opacity: 0.59;
`

const Input = styled.input`
  grid-area: Input;
  background: none;
  text-align: right;
  outline: none;
  border: none;
  font-size: 0.75rem;

  padding: 2px 0;
  color: ${({ theme }) => theme.core.textColor};
  border-bottom: 1.5px solid ${({ theme }) => theme.primary[5]};
  caret-color: ${({ theme }) => theme.primary.base};
  &:focus {
    outline: none !important;
    border-color: ${({ theme }) => theme.accents.primary.base};
  }
`

export const LimitInput = ({
  currencyPair,
}: {
  currencyPair: CurrencyPair
}) => {
  const limit = useLimit(currencyPair.symbol)

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit({ [currencyPair.symbol]: Number(e.target.value) })
  }

  return (
    <Container>
      <Symbol>{currencyPair.base + "/" + currencyPair.terms}</Symbol>
      <Label>{currencyPair.base}</Label>
      <Input value={limit} onChange={handleLimitChange} />
    </Container>
  )
}
