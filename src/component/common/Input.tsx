interface InputPropsType {
  type?: 'radio' | 'checkbox'
  checked?: boolean
}
export default function Input({
  type = 'radio',
  checked = false,
}: InputPropsType) {
  return (
    <input
      type={type}
      checked={checked}
      className={type === 'checkbox' ? 'checkbox' : 'radio'}
    />
  )
}
