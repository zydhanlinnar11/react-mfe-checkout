import React, { Component } from 'react'
import clsx from 'clsx'

type State = { itemCount: number }

export class Basket extends Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = { itemCount: 0 }
  }

  componentDidMount() {
    addEventListener('checkout:product-added', () =>
      this.setState(({ itemCount }) => ({ itemCount: itemCount + 1 }))
    )
  }

  render() {
    return (
      <div
        className={clsx(
          'text-base rounded-lg max-w-max px-3'.split(' '),
          this.state.itemCount > 0 ? 'bg-green-500' : 'bg-gray-500'
        )}
      >
        Basket: {this.state.itemCount} item
        {this.state.itemCount !== 1 ? 's' : ''}
      </div>
    )
  }
}

export default Basket
