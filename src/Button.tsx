import React, { FC } from 'react'

const prices = {
  '1': 66,
  '2': 54,
  '3': 58,
}

type Props = {
  itemId: string
}

const Button: FC<Props> = ({ itemId }) => {
  return (
    <button
      className="border-2 border-gray-700 rounded-lg px-2"
      onClick={() => dispatchEvent(new Event('checkout:product-added'))}
    >
      Buy for {prices[itemId]} €
    </button>
  )
}

export default Button
