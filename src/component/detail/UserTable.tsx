export default function UserTable() {
  return (
    <table className="table table-zebra w-full">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
          <td>10 CS</td>
        </tr>
        {/* row 2 */}
        <tr className="active font-bold">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
          <td>100 CS</td>
        </tr>
        {/* row 3 */}
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
          <td>30 CS</td>
        </tr>
      </tbody>
    </table>
  )
}
