import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

const Basket = () => {
  const [itemCount, setItemCount] = useState(0)

  useEffect(() => {
    addEventListener('checkout:product-added', () =>
      setItemCount((prevCount) => prevCount + 1)
    )
  }, [])

  return (
    <div
      className={clsx(
        'text-base rounded-lg max-w-max px-3'.split(' '),
        itemCount > 0 ? 'bg-green-500' : 'bg-gray-500'
      )}
    >
      Basket: {itemCount} item{itemCount !== 1 ? 's' : ''}
    </div>
  )
}

export default Basket
