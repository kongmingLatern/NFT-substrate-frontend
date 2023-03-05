import Table from '@/component/common/Table'
import { columnsType } from '@/views/admin/Main'
import { render } from '@testing-library/react'

describe('table shoule be rendered', () => {
  it('should render table', () => {
    const data = [
      {
        id: '1',
        key: '1',
        name: 'John Brown',
        age: 32,
      },
      {
        id: '2',
        key: '2',
        name: 'Jim Green',
        age: 42,
      },
    ]

    const columns: Array<columnsType> = [
      {
        id: 'name',
        title: 'Name',
        key: 'name',
        render: () => <div>123</div>,
      },
    ]

    const { asFragment } = render(
      <Table dataSource={data} columns={columns} />
    )
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="chakra-table__container border css-zipzvv"
        >
          <table
            class="chakra-table css-0"
          >
            <thead
              class="css-0"
            >
              <tr
                class="css-0"
              >
                <th
                  class="css-0"
                >
                  Name
                </th>
              </tr>
            </thead>
            <tbody
              class="css-0"
            >
              <tr
                class="css-0"
              >
                <td
                  class="css-0"
                >
                  1
                </td>
                <td
                  class="css-0"
                >
                  <div>
                    123
                  </div>
                </td>
                <td
                  class="css-0"
                >
                  1
                </td>
              </tr>
              <tr
                class="css-0"
              >
                <td
                  class="css-0"
                >
                  2
                </td>
                <td
                  class="css-0"
                >
                  <div>
                    123
                  </div>
                </td>
                <td
                  class="css-0"
                >
                  2
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocumentFragment>
    `)
  })
})
