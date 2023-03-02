import Spin from '@/component/common/Spin'
import { render } from '@testing-library/react'

describe('spin basic function', () => {
  it('render loading style and children when loading', () => {
    const { asFragment } = render(<Spin loading>123</Spin>)

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center"
        >
          <div
            class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"
          />
        </div>
        123
      </DocumentFragment>
    `)
  })
  it('render child when loading return false', () => {
    const { asFragment } = render(
      <Spin loading={false}>123</Spin>
    )

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        123
      </DocumentFragment>
    `)
  })
  it('render children', () => {
    const { asFragment } = render(
      <Spin loading={false}>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </Spin>
    )

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div>
          123
        </div>
        <div>
          123
        </div>
        <div>
          123
        </div>
      </DocumentFragment>
    `)
  })
})
