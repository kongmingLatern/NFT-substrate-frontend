interface ButtonType {
  type: 'primary' | 'secondary'
  value: any
}
export default function Button({ type, value }: ButtonType) {
  return (
    <button className={type ? `'btn btn-${type}` : ''}>
      {value}
    </button>
  )
}
