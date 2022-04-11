import { Component } from 'react'

const prices: { [index: string]: number } = {
  '1': 66,
  '2': 54,
  '3': 58,
}

type Props = {
  itemId: string
}

class Button extends Component<Props> {
  render = () => (
    <button
      className="border-2 border-gray-600 hover:border-black rounded-lg px-2"
      onClick={() => dispatchEvent(new Event('checkout:product-added'))}
    >
      Buy for {prices[this.props.itemId]} €
    </button>
  )
}

export default Button
