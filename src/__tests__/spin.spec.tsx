import Spin from '@/component/common/Spin'
import { render, screen } from '@testing-library/react'

describe('spin basic function', () => {
  it('render loading... when loading', () => {
    const { asFragment, getByText } = render(
      <Spin loading>123</Spin>
    )

    expect(getByText('loading...')).toBeInTheDocument()
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="flex justify-center items-center h-screen"
        >
          <div
            class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"
          >
            loading...
          </div>
        </div>
      </DocumentFragment>
    `)
  })
  it('render children when loading return false', () => {
    const { asFragment, getByText } = render(
      <Spin loading={false}>123</Spin>
    )

    expect(getByText('123')).toBeInTheDocument()
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        123
      </DocumentFragment>
    `)
  })
})
