import classNames from 'classnames'
import { useEffect } from 'react'

interface ButtonType extends React.AllHTMLAttributes<HTMLButtonElement>{
  type?: 'primary' | 'secondary'
  value?: any
  baseClass?: string
  className?: string
  children?: any
  loading?: boolean
  onClick?: () => void
}
export default function Button({
  type,
  value,
  baseClass = 'btn',
  className = 'btn',
  children,
  loading,
  onClick,
}: ButtonType) {
  useEffect(() => {
    console.log('loading', loading)
  }, [loading])
  return (
    <button
      className={classNames(
        'btn',
        type ? `btn-${type}` : '',
        baseClass !== className ? className : ''
      )}
      onClick={onClick}
    >
      {loading ? 'loading...' : value || children}
    </button>
  )
}
