import SearchInput from '@/component/home/SearchInput'
describe('input', () => {
  it('onSearch', () => {
    const jsx = (
      <SearchInput search={() => console.log('search')} />
    )
    expect(jsx.props).toMatchInlineSnapshot(`
      {
        "search": [Function],
      }
    `)
  })
})
