import {useState} from 'react'

export const useAmount = (initialValue = 0) => {
  const [amount, setAmount] = useState(initialValue)
  const decrease = () => {
    setAmount(amount > 0 ? amount - 1 : 0)
  }
  const increase = () => {
    setAmount(amount + 1)
  }
  return {
    amount,
    decrease,
    increase,
  }
}
