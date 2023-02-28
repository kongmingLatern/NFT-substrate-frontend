import Button from '@/component/common/Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  it('should render button', () => {
    render(<Button>123</Button>)
    expect(screen.queryByText('123'))
      .toMatchInlineSnapshot(`
        <button
          class=" btn"
        >
          123
        </button>
      `)
  })
})
