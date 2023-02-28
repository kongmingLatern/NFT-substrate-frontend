import Button from '@/component/common/Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  it('should render button', () => {
    render(<Button>123</Button>)
    expect(screen.queryByText('123'))
      .toMatchInlineSnapshot(`
        <button
          class="btn"
        >
          123
        </button>
      `)
  })
  it('should render className button', () => {
    render(<Button className="w-[100px]">123</Button>)
    expect(screen.queryByText('123'))
      .toMatchInlineSnapshot(`
        <button
          class="btn w-[100px]"
        >
          123
        </button>
      `)
  })
  it('should render loading button', () => {
    let loading = true
    render(
      <Button loading={loading}>
        {loading ? 'loading...' : '123'}
      </Button>
    )
    expect(screen.queryByText('loading...'))
      .toMatchInlineSnapshot(`
        <button
          class="btn"
        >
          loading...
        </button>
      `)
    loading = false
    render(
      <Button loading={loading}>
        {loading ? 'loading...' : '123'}
      </Button>
    )
    expect(screen.queryByText('123'))
      .toMatchInlineSnapshot(`
        <button
          class="btn"
        >
          123
        </button>
      `)
  })
})
