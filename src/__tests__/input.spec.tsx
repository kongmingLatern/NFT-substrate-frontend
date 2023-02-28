import SearchInput from '@/component/home/SearchInput'
import { screen, render } from '@testing-library/react'

describe('input', () => {
  it('onSearch', () => {
    const jsx = (
      <SearchInput search={() => console.log('search')} />
    )

    render(jsx)

    expect(screen.queryByText('')).toBe('123')
  })
})
